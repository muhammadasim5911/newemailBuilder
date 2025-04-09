import { nanoid } from 'nanoid';
import { ComponentDefinition, ComponentType, EmailTemplate } from '@/types';
import { DEFAULT_TEMPLATE_SETTINGS, getComponentDefinitionByType } from './components';

/**
 * Parse an HTML string and convert it to our EmailTemplate structure
 * @param html The HTML string to parse
 * @returns An EmailTemplate object populated with components
 */
export const parseHtmlToTemplate = (html: string): EmailTemplate => {
  // Clean up the HTML if it's from JSON (remove escaping)
  const cleanHtml = html.replace(/\\n/g, '\n').replace(/\\"/g, '"');
  
  // Special handling for extremely complex templates
  if (cleanHtml.length > 50000 || cleanHtml.includes('BECHMARKONE') || cleanHtml.includes('BMEMBF')) {
    console.log('Detected complex template - using simplified approach');
    return handleComplexTemplate(cleanHtml);
  }
  
  // Create a temporary DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, 'text/html');
  
  // Extract template settings
  const body = doc.body;
  if (!body) {
    console.error('Could not parse HTML: No body element found');
    return createEmptyTemplate('Failed Import');
  }
  
  const settings = {
    ...DEFAULT_TEMPLATE_SETTINGS,
    backgroundColor: extractStyleProperty(body, 'background-color') || DEFAULT_TEMPLATE_SETTINGS.backgroundColor,
    fontFamily: extractStyleProperty(body, 'font-family') || DEFAULT_TEMPLATE_SETTINGS.fontFamily,
  };
  
  // Find the main content container
  let mainContainer: Element | null = null;
  
  // Strategy 1: Look for tables with name or class attributes (common in email templates)
  const namedTables = body.querySelectorAll('table[name], table[class]');
  if (namedTables.length > 0) {
    for (const table of namedTables) {
      const name = table.getAttribute('name') || '';
      const className = table.getAttribute('class') || '';
      
      // Look for common email template naming patterns
      if (name.includes('Main') || name.includes('Content') || 
          className.includes('main') || className.includes('content') ||
          name.includes('email') || className.includes('email')) {
        mainContainer = table;
        break;
      }
    }
  }
  
  // Strategy 2: Look for tables (common in email templates)
  if (!mainContainer) {
    const tables = body.querySelectorAll('table');
    if (tables.length > 0) {
      // Find the outermost content table that likely contains the main content
      // Many email templates have nested tables for layout
      for (const table of tables) {
        // Check if this table has enough content, seems like a main container
        const hasContent = table.textContent && table.textContent.trim().length > 50;
        const hasImages = table.querySelectorAll('img').length > 0;
        
        // Try to determine if it's a main table vs layout table
        const isMainTable = hasContent || hasImages;
        
        if (isMainTable && (!mainContainer || table.querySelectorAll('table').length > 0)) {
          mainContainer = table;
        }
      }
    }
  }
  
  // Strategy 3: Look for content divs with significant content
  if (!mainContainer) {
    const divs = body.querySelectorAll('div[class*="content"], div[id*="content"], div[class*="container"], div[id*="container"]');
    for (const div of divs) {
      if (div.textContent && div.textContent.trim().length > 100) {
        mainContainer = div;
        break;
      }
    }
  }
  
  // Strategy 4: Fall back to body if we couldn't identify a main container
  if (!mainContainer) {
    mainContainer = body;
  }
  
  // Extract width from the main container if available
  if (mainContainer && mainContainer.hasAttribute('width')) {
    const width = mainContainer.getAttribute('width');
    if (width && !isNaN(parseInt(width))) {
      settings.width = parseInt(width);
    }
  } else if (mainContainer) {
    // Try to get width from style
    const styleWidth = extractStyleProperty(mainContainer, 'width');
    if (styleWidth && styleWidth.includes('px')) {
      const numericWidth = parseInt(styleWidth.replace('px', ''));
      if (!isNaN(numericWidth)) {
        settings.width = numericWidth;
      }
    }
  }
  
  // Create a new template
  const template: EmailTemplate = {
    id: nanoid(),
    name: doc.title || 'Imported Template',
    components: [],
    settings,
  };
  
  // Parse template content
  try {
    parseContainer(mainContainer, template.components);
    
    // If we couldn't extract any components, try parsing the whole body
    if (template.components.length === 0) {
      parseContainer(body, template.components);
    }
    
    // If still no components, use a fallback approach
    if (template.components.length === 0) {
      console.warn('Failed to extract components from template - using fallback');
      template.components.push({
        id: nanoid(),
        type: 'text',
        content: cleanHtml,
        props: {
          tagName: 'div',
          style: { padding: '10px' }
        }
      });
    }
  } catch (error) {
    console.error('Error parsing template content:', error);
    // Use fallback approach if parsing fails
    template.components = [{
      id: nanoid(),
      type: 'text',
      content: cleanHtml,
      props: {
        tagName: 'div',
        style: { padding: '10px' }
      }
    }];
  }
  
  return template;
};

/**
 * Handle extremely complex templates with special treatment
 */
function handleComplexTemplate(html: string): EmailTemplate {
  // Create a simplified template with just the raw HTML
  const template: EmailTemplate = {
    id: nanoid(),
    name: 'Complex Email Template',
    components: [{
      id: nanoid(),
      type: 'text',
      content: sanitizeComplexHtml(html),
      props: {
        tagName: 'div',
        style: {
          padding: '10px',
          width: '100%'
        }
      }
    }],
    settings: {
      ...DEFAULT_TEMPLATE_SETTINGS,
      width: 600 // Standard email width
    }
  };
  
  return template;
}

/**
 * Sanitize complex HTML to make it safe for the editor
 */
function sanitizeComplexHtml(html: string): string {
  // Remove potentially problematic scripts
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Fix common email template issues
  sanitized = sanitized.replace(/<!--\[if.*?<!\[endif\]-->/gs, ''); // Remove conditional comments
  
  return sanitized;
}

/**
 * Recursively parse a container element and extract components
 */
const parseContainer = (container: Element | null, components: ComponentDefinition[]): void => {
  if (!container) return;
  
  // Get immediate children that could be components
  const children = Array.from(container.children).filter(el => 
    !['style', 'script', 'meta', 'link', 'head'].includes(el.tagName.toLowerCase())
  );
  
  // If this is a table, handle it specially (common in email templates)
  if (container.tagName.toLowerCase() === 'table') {
    // Look for rows
    const rows = container.querySelectorAll(':scope > tbody > tr, :scope > tr');
    if (rows.length > 0) {
      // Handle each row
      rows.forEach(row => {
        const cells = row.querySelectorAll('td, th');
        if (cells.length === 1) {
          // Single cell row - parse it directly
          const component = parseElementToComponent(cells[0]);
          if (component) components.push(component);
        } else if (cells.length > 1) {
          // Multi-column row - create a columns component
          const columnsComponent = createColumnsComponent(cells);
          if (columnsComponent) components.push(columnsComponent);
        }
      });
      return; // We've handled the table contents
    }
  }
  
  // Process regular elements
  if (children.length === 0) {
    // This element has no children, treat it as a leaf component
    const component = parseElementToComponent(container);
    if (component) components.push(component);
  } else {
    // Check if this element should be treated as a section or other container
    const hasStructuralImportance = isStructuralElement(container);
    
    if (hasStructuralImportance) {
      // Create a section component with nested children
      const sectionComponent = createSectionComponent(container, children);
      if (sectionComponent) components.push(sectionComponent);
    } else {
      // Process each child individually
      children.forEach(child => {
        const component = parseElementToComponent(child);
        if (component) components.push(component);
      });
    }
  }
};

/**
 * Check if an element appears to be a structural container
 */
const isStructuralElement = (element: Element): boolean => {
  const tagName = element.tagName.toLowerCase();
  const className = element.className?.toLowerCase() || '';
  const id = element.id?.toLowerCase() || '';
  
  // Common structural elements
  return (
    tagName === 'div' && (
      className.includes('section') || 
      className.includes('container') || 
      className.includes('wrapper') ||
      id.includes('section') || 
      id.includes('container')
    ) ||
    tagName === 'section' ||
    // Email templates often use nested tables for layout
    (tagName === 'table' && element.querySelectorAll('table').length > 0)
  );
};

/**
 * Create a columns component from table cells
 */
const createColumnsComponent = (cells: NodeListOf<Element>): ComponentDefinition | null => {
  const children: ComponentDefinition[] = [];
  
  cells.forEach(cell => {
    const component = parseElementToComponent(cell);
    if (component) children.push(component);
  });
  
  if (children.length === 0) return null;
  
  return {
    id: nanoid(),
    type: 'columns',
    content: '',
    props: {
      tagName: 'div',
      style: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      },
      children
    }
  };
};

/**
 * Create a section component with child elements
 */
const createSectionComponent = (container: Element, children: Element[]): ComponentDefinition | null => {
  const componentChildren: ComponentDefinition[] = [];
  
  children.forEach(child => {
    const component = parseElementToComponent(child);
    if (component) componentChildren.push(component);
  });
  
  if (componentChildren.length === 0) {
    // Try parsing the element itself if no valid children
    return parseElementToComponent(container);
  }
  
  // Extract style properties
  const style = extractElementStyles(container);
  
  return {
    id: nanoid(),
    type: 'section',
    content: '',
    props: {
      tagName: 'div',
      style,
      children: componentChildren
    }
  };
};

/**
 * Parse a DOM element to a component definition
 */
const parseElementToComponent = (element: Element): ComponentDefinition | null => {
  // Skip empty or insignificant elements
  if (!element || !element.tagName) return null;
  
  const content = element.innerHTML || '';
  const textContent = element.textContent || '';
  
  // Skip empty elements with no useful content
  if (!content.trim() && !textContent.trim()) return null;
  
  // Determine component type based on tag name and attributes
  const tagName = element.tagName.toLowerCase();
  let type: ComponentType = detectComponentType(element);
  
  // Extract style properties
  const style = extractElementStyles(element);
  
  // Create basic component
  const component: ComponentDefinition = {
    id: nanoid(),
    type,
    content,
    props: {
      tagName,
      style,
    }
  };
  
  // Apply additional enhancements based on component type
  enhanceComponentByType(component, element, type);
  
  return component;
};

/**
 * Detect the appropriate component type for an element
 */
const detectComponentType = (element: Element): ComponentType => {
  if (!element) return 'text';
  
  const tagName = element.tagName.toLowerCase();
  const className = element.className?.toLowerCase() || '';
  const id = element.id?.toLowerCase() || '';
  const hasImages = !!element.querySelector('img');
  const hasSocialIcons = !!element.querySelector('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"]');
  const elementTextContent = element.textContent || '';
  
  // Headings
  if (/^h[1-6]$/.test(tagName)) {
    return 'heading';
  }
  
  // Images
  if (tagName === 'img' || hasImages) {
    const img = tagName === 'img' ? element : element.querySelector('img');
    // Check if this is a small icon in a link (might be social)
    if (img) {
      const width = img.getAttribute('width');
      const height = img.getAttribute('height');
      const isSmall = (width && parseInt(width) < 50) || (height && parseInt(height) < 50);
      const isInLink = !!img.closest('a');
      
      if (isSmall && isInLink && hasSocialIcons) {
        return 'social';
      }
    }
    return 'image';
  }
  
  // Buttons
  if (tagName === 'a' || 
      (className.includes('button') || id.includes('button')) ||
      (element.querySelector('a') && !hasImages)) {
    return 'button';
  }
  
  // Dividers
  if (tagName === 'hr' || className.includes('divider') || id.includes('divider')) {
    return 'divider';
  }
  
  // Spacers
  if ((tagName === 'div' && elementTextContent.trim() === '') || 
      className.includes('spacer') || id.includes('spacer')) {
    return 'spacer';
  }
  
  // Videos
  if (tagName === 'iframe' || element.querySelector('iframe') ||
      className.includes('video') || id.includes('video')) {
    return 'video';
  }
  
  // Social links
  if (hasSocialIcons) {
    return 'social';
  }
  
  // Multi-column layouts
  if (tagName === 'table' && element.querySelectorAll('td').length > 1) {
    return 'columns';
  }
  
  // Sections/containers
  if ((tagName === 'div' || tagName === 'section') && 
      (className.includes('section') || id.includes('section') ||
       className.includes('container') || id.includes('container'))) {
    return 'section';
  }
  
  // Default to text for paragraphs and divs with text
  if (tagName === 'p' || tagName === 'div' || tagName === 'span') {
    return 'text';
  }
  
  // Tables are common in emails for layout, default to section
  if (tagName === 'table' || tagName === 'tr' || tagName === 'td') {
    return 'section';
  }
  
  return 'text'; // Default fallback
};

/**
 * Extract the styles from an element
 */
const extractElementStyles = (element: Element): Record<string, string | number> => {
  const style: Record<string, string | number> = {};
  if (!element) return style;
  
  // Process inline style
  const inlineStyle = element.getAttribute('style');
  if (inlineStyle) {
    // Parse inline style
    inlineStyle.split(';').forEach(rule => {
      const parts = rule.split(':');
      if (parts.length === 2) {
        const property = parts[0].trim();
        const value = parts[1].trim();
        if (property && value) {
          // Convert kebab-case to camelCase for our component system
          const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          style[camelProperty] = value;
        }
      }
    });
  }
  
  // Add computed styles for certain important properties if not already set
  try {
    const computedStyle = window.getComputedStyle(element);
    const importantProps = [
      'color', 'background-color', 'font-size', 'font-weight', 
      'text-align', 'margin', 'padding', 'border', 'width', 'height'
    ];
    
    importantProps.forEach(prop => {
      const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      if (!style[camelProp]) {
        const value = computedStyle.getPropertyValue(prop);
        if (value && value !== '' && value !== 'normal' && value !== 'auto') {
          style[camelProp] = value;
        }
      }
    });
  } catch (err) {
    // Ignore errors in computed style - they can happen in some browsers
    console.warn('Error getting computed style:', err);
  }
  
  return style;
};

/**
 * Enhance a component with type-specific properties
 */
const enhanceComponentByType = (component: ComponentDefinition, element: Element, type: ComponentType): void => {
  // Ensure style object exists
  if (!component.props.style) {
    component.props.style = {};
  }

  switch (type) {
    case 'image':
      const img = element.tagName.toLowerCase() === 'img' ? element : element.querySelector('img');
      if (img) {
        component.props.attributes = {
          src: img.getAttribute('src') || '',
          alt: img.getAttribute('alt') || '',
          width: img.getAttribute('width') || '',
          height: img.getAttribute('height') || ''
        };
        component.content = '';
      }
      break;
    
    case 'button':
      const link = element.tagName.toLowerCase() === 'a' ? element : element.querySelector('a');
      if (link) {
        component.props.attributes = {
          href: link.getAttribute('href') || '#',
          target: link.getAttribute('target') || '_blank'
        };
        component.content = link.textContent || 'Click Here';
        
        // Extract button styles
        const buttonStyle = extractElementStyles(link);
        if (Object.keys(buttonStyle).length > 0) {
          component.props.style = {
            ...component.props.style,
            ...buttonStyle
          };
        }
      }
      break;
    
    case 'video':
      const iframe = element.tagName.toLowerCase() === 'iframe' ? element : element.querySelector('iframe');
      if (iframe) {
        component.props.attributes = {
          videoUrl: iframe.getAttribute('src') || '',
          width: iframe.getAttribute('width') || '100%',
          height: iframe.getAttribute('height') || 'auto'
        };
        component.content = '';
      }
      break;
    
    case 'social':
      // Extract social links
      const socialLinks = element.querySelectorAll('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"], a[href*="youtube"]');
      if (socialLinks.length > 0) {
        const socialData: {platform: string, url: string}[] = [];
        socialLinks.forEach(link => {
          const url = link.getAttribute('href') || '';
          let platform = 'other';
          
          if (url.includes('facebook')) platform = 'facebook';
          else if (url.includes('twitter')) platform = 'twitter';
          else if (url.includes('instagram')) platform = 'instagram';
          else if (url.includes('linkedin')) platform = 'linkedin';
          else if (url.includes('youtube')) platform = 'youtube';
          
          socialData.push({ platform, url });
        });
        
        component.props.socialLinks = socialData;
      }
      break;
    
    case 'spacer':
      // Try to determine height for spacer
      const heightValue = component.props.style.height || 
                  extractStyleProperty(element, 'height') || 
                  extractStyleProperty(element, 'padding-top') ||
                  '20px'; // Default
      
      component.props.style.height = heightValue;
      component.content = '';
      break;
    
    case 'divider':
      component.props.style = {
        ...component.props.style,
        borderTop: component.props.style.borderTop || '1px solid #ccc',
        margin: component.props.style.margin || '20px 0'
      };
      component.content = '';
      break;
    
    case 'heading':
      // Ensure heading has some styling
      if (!component.props.style.fontSize) {
        // Default sizes based on heading level
        const headingSizes: Record<string, string> = {
          h1: '32px',
          h2: '28px',
          h3: '24px',
          h4: '20px',
          h5: '18px',
          h6: '16px'
        };
        const tagName = component.props.tagName as string || 'h2';
        component.props.style.fontSize = headingSizes[tagName] || '24px';
      }
      
      if (!component.props.style.fontWeight) {
        component.props.style.fontWeight = 'bold';
      }
      break;
    
    case 'text':
      // Convert common inline tags to styled spans
      component.content = sanitizeTextContent(component.content);
      break;
  }
};

/**
 * Sanitize text content to preserve formatting but simplify structure
 */
const sanitizeTextContent = (content: string): string => {
  // This is a simplified approach - in a real implementation you might use a proper HTML sanitizer
  if (!content) return '';
  
  // Replace complex formatting with simpler versions that our editor can handle
  return content
    .replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight: bold;">$1</span>')
    .replace(/<b>(.*?)<\/b>/g, '<span style="font-weight: bold;">$1</span>')
    .replace(/<em>(.*?)<\/em>/g, '<span style="font-style: italic;">$1</span>')
    .replace(/<i>(.*?)<\/i>/g, '<span style="font-style: italic;">$1</span>')
    .replace(/<u>(.*?)<\/u>/g, '<span style="text-decoration: underline;">$1</span>')
    .replace(/<s>(.*?)<\/s>/g, '<span style="text-decoration: line-through;">$1</span>')
    .replace(/<del>(.*?)<\/del>/g, '<span style="text-decoration: line-through;">$1</span>')
    .replace(/<mark>(.*?)<\/mark>/g, '<span style="background-color: yellow;">$1</span>');
};

/**
 * Extract a CSS property from an element's style
 */
const extractStyleProperty = (element: Element, property: string): string | null => {
  if (!element) return null;
  
  // Check inline style
  const inlineStyle = element.getAttribute('style');
  if (inlineStyle) {
    const regex = new RegExp(`${property}:\\s*([^;]+)`, 'i');
    const match = inlineStyle.match(regex);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  
  // Check computed style
  try {
    if (window.getComputedStyle) {
      const computedStyle = window.getComputedStyle(element);
      const value = computedStyle.getPropertyValue(property);
      if (value && value !== '' && value !== 'normal' && value !== 'auto') {
        return value;
      }
    }
  } catch (err) {
    console.warn('Error getting computed style:', err);
  }
  
  return null;
};

/**
 * Create an empty template when parsing fails
 */
const createEmptyTemplate = (name: string): EmailTemplate => {
  return {
    id: nanoid(),
    name,
    components: [
      {
        id: nanoid(),
        type: 'text',
        content: 'Failed to parse the HTML template. Please check the HTML code and try again.',
        props: {
          tagName: 'p',
          style: {
            color: 'red',
            padding: '20px',
            textAlign: 'center'
          }
        }
      }
    ],
    settings: DEFAULT_TEMPLATE_SETTINGS
  };
};