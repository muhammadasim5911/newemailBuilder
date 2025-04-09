import { nanoid } from 'nanoid';
import { ComponentDefinition, ComponentType, EmailTemplate } from '@/types';
import { DEFAULT_TEMPLATE_SETTINGS } from './components';

/**
 * Parse an HTML string and convert it to our EmailTemplate structure
 * @param html The HTML string to parse
 * @returns An EmailTemplate object populated with components
 */
export const parseHtmlToTemplate = (html: string): EmailTemplate => {
  // Create a temporary DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Extract template settings
  const body = doc.body;
  const settings = {
    ...DEFAULT_TEMPLATE_SETTINGS,
    backgroundColor: extractStyleProperty(body, 'background-color') || DEFAULT_TEMPLATE_SETTINGS.backgroundColor,
    fontFamily: extractStyleProperty(body, 'font-family') || DEFAULT_TEMPLATE_SETTINGS.fontFamily,
  };
  
  // Find the main content table - most email templates use tables for layout
  let mainTable = body.querySelector('table');
  while (mainTable && mainTable.querySelector('table')) {
    // Try to find the innermost content table
    const innerTable = mainTable.querySelector('table');
    if (innerTable && innerTable.querySelector('table')) {
      mainTable = innerTable;
    } else {
      break;
    }
  }
  
  // Extract width from the main table if available
  if (mainTable) {
    const width = mainTable.getAttribute('width');
    if (width && !isNaN(parseInt(width))) {
      settings.width = parseInt(width);
    }
  }
  
  // Create a new template
  const template: EmailTemplate = {
    id: nanoid(),
    name: doc.title || 'Imported Template',
    components: [],
    settings,
  };
  
  // Parse main content - for simplicity, we'll convert top-level elements to components
  const content = mainTable || body;
  content.querySelectorAll(':scope > tr, :scope > *:not(style, script, meta, link)').forEach(element => {
    const component = parseElementToComponent(element);
    if (component) {
      template.components.push(component);
    }
  });
  
  return template;
};

/**
 * Parse a DOM element to a component definition
 */
const parseElementToComponent = (element: Element): ComponentDefinition | null => {
  // Determine component type based on tag name and attributes
  const tagName = element.tagName.toLowerCase();
  let type: ComponentType = 'text'; // Default type
  
  // Determine component type based on element characteristics
  if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || 
      tagName === 'h4' || tagName === 'h5' || tagName === 'h6') {
    type = 'heading';
  } else if (tagName === 'p' || tagName === 'div' && !element.querySelector('img, table')) {
    type = 'text';
  } else if (tagName === 'img' || element.querySelector('img')) {
    type = 'image';
  } else if (tagName === 'a' || element.querySelector('a')) {
    type = 'button';
  } else if (tagName === 'hr') {
    type = 'divider';
  } else if (tagName === 'table' && element.querySelector('td > a > img')) {
    type = 'social';
  } else if (tagName === 'div' && element.textContent?.trim() === '&nbsp;') {
    type = 'spacer';
  } else if (tagName === 'iframe' || element.querySelector('iframe')) {
    type = 'video';
  } else if (tagName === 'table' || tagName === 'tr' || tagName === 'td') {
    // Tables are common in email HTML, we'll treat them as sections
    type = 'section';
  }
  
  // Extract style properties
  const style: Record<string, string | number> = {};
  const elementStyle = window.getComputedStyle(element);
  const inlineStyle = element.getAttribute('style');
  
  if (inlineStyle) {
    // Parse inline style
    inlineStyle.split(';').forEach(rule => {
      const [property, value] = rule.split(':').map(s => s.trim());
      if (property && value) {
        // Convert kebab-case to camelCase for our component system
        const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        style[camelProperty] = value;
      }
    });
  } else {
    // Extract some common styles from computed style
    ['color', 'background-color', 'font-size', 'font-weight', 'text-align', 'margin', 'padding'].forEach(prop => {
      const value = elementStyle.getPropertyValue(prop);
      if (value && value !== '') {
        const camelProperty = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        style[camelProperty] = value;
      }
    });
  }
  
  // Create component
  const component: ComponentDefinition = {
    id: nanoid(),
    type,
    content: element.innerHTML || '',
    props: {
      tagName,
      style,
    }
  };
  
  // Extract attributes for specific component types
  if (type === 'image') {
    const img = element.tagName === 'IMG' ? element : element.querySelector('img');
    if (img) {
      component.props.attributes = {
        src: img.getAttribute('src') || '',
        alt: img.getAttribute('alt') || ''
      };
      component.content = '';
    }
  } else if (type === 'button') {
    const link = element.tagName === 'A' ? element : element.querySelector('a');
    if (link) {
      component.props.attributes = {
        href: link.getAttribute('href') || '#'
      };
      component.content = link.textContent || 'Click Here';
    }
  } else if (type === 'video') {
    const iframe = element.tagName === 'IFRAME' ? element : element.querySelector('iframe');
    if (iframe) {
      component.props.attributes = {
        videoUrl: iframe.getAttribute('src') || ''
      };
      component.content = '';
    }
  }
  
  return component;
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
  if (window.getComputedStyle) {
    const computedStyle = window.getComputedStyle(element);
    const value = computedStyle.getPropertyValue(property);
    if (value && value !== '') {
      return value;
    }
  }
  
  return null;
}