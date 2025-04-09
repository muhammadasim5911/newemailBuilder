# Advanced Usage Guide

This guide covers advanced usage scenarios for the Public Circles Email Builder.

## Handling Template State Externally

You can manage the template state externally by using the `onChange` callback:

```jsx
import React, { useState } from 'react';
import { EmailEditor, EmailTemplate } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

const EmailBuilderWithExternalState = () => {
  const [template, setTemplate] = useState(null);
  
  const handleTemplateChange = (updatedTemplate) => {
    setTemplate(updatedTemplate);
    console.log('Template updated:', updatedTemplate);
    
    // You can now save this template to your backend, localStorage, etc.
  };
  
  return (
    <div style={{ height: '800px' }}>
      <EmailEditor 
        onChange={handleTemplateChange}
      />
      
      {/* You can use the template state for other purposes */}
      {template && (
        <div>
          <h3>Template Details</h3>
          <p>Template Name: {template.name}</p>
          <p>Component Count: {template.components.length}</p>
        </div>
      )}
    </div>
  );
};

export default EmailBuilderWithExternalState;
```

## Working with Complex Templates

When importing complex HTML templates:

1. Set `useEnhancedParser` to `true` (it's true by default)
2. The enhanced parser will try to convert complex structures into editable components
3. For very complex templates, the editor may fall back to treating sections as single blocks

```jsx
import React from 'react';
import { EmailEditor } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

const ComplexTemplateEditor = () => {
  // A complex HTML template example
  const complexHtml = `
    <!-- Your complex HTML template here -->
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="background-color: #f7f7f7; padding: 40px 0;">
          <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
            <tr>
              <td style="padding: 20px;">
                <h1 style="color: #E61DAB;">Your Newsletter</h1>
                <p>This is a complex template with tables and nested structures.</p>
              </td>
            </tr>
            <!-- More rows and nested tables -->
          </table>
        </td>
      </tr>
    </table>
  `;

  return (
    <div style={{ height: '800px' }}>
      <EmailEditor 
        initialHtml={complexHtml}
        useEnhancedParser={true} // This is true by default
      />
    </div>
  );
};

export default ComplexTemplateEditor;
```

## Using Template Presets

You can create and use template presets:

```jsx
import React from 'react';
import { EmailEditor, generateTemplateHtml } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

// Define some template presets
const templates = {
  welcome: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #E61DAB;">Welcome to Public Circles!</h1>
      <p>We're excited to have you join our community.</p>
      <a href="https://example.com/welcome" style="background-color: #8E33FF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block;">Get Started</a>
    </div>
  `,
  newsletter: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #E61DAB;">This Month's Newsletter</h1>
      <p>Check out our latest updates and news.</p>
      <div style="background-color: #f7f7f7; padding: 15px; margin: 15px 0;">
        <h2 style="color: #8E33FF;">Featured Article</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  `,
};

const TemplatePresets = () => {
  const [currentTemplate, setCurrentTemplate] = React.useState('welcome');
  
  const handleTemplateSelect = (template) => {
    setCurrentTemplate(template);
  };
  
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => handleTemplateSelect('welcome')}
          style={{ 
            marginRight: '10px', 
            backgroundColor: currentTemplate === 'welcome' ? '#E61DAB' : '#f0f0f0',
            color: currentTemplate === 'welcome' ? 'white' : 'black',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Welcome Template
        </button>
        <button 
          onClick={() => handleTemplateSelect('newsletter')}
          style={{ 
            backgroundColor: currentTemplate === 'newsletter' ? '#E61DAB' : '#f0f0f0',
            color: currentTemplate === 'newsletter' ? 'white' : 'black',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Newsletter Template
        </button>
      </div>
      
      <div style={{ height: '800px' }}>
        <EmailEditor 
          initialHtml={templates[currentTemplate]}
          key={currentTemplate} // Important: reset the editor when template changes
        />
      </div>
    </div>
  );
};

export default TemplatePresets;
```

## Customizing Style and Appearance

You can customize the appearance of the editor by overriding the CSS variables:

```css
/* In your application's CSS */
:root {
  --editor-primary-color: #E61DAB;
  --editor-secondary-color: #8E33FF;
  --editor-border-color: #e0e0e0;
  --editor-background-color: #ffffff;
  --editor-panel-background: #f8f8f8;
  --editor-text-color: #333333;
  --editor-border-radius: 4px;
}
```

## Advanced Component Configuration

For advanced users, you can customize the component configuration:

```jsx
import React from 'react';
import { EmailEditor } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

// Note: This is an advanced feature that requires understanding the internal structure
// Not recommended unless you have specific needs
const CustomizedEditor = () => {
  // Override component defaults
  const customComponentSettings = {
    heading: {
      defaultProps: {
        style: {
          fontFamily: 'Georgia, serif',
          color: '#E61DAB',
          fontSize: '24px',
          marginBottom: '15px'
        }
      }
    },
    button: {
      defaultProps: {
        style: {
          backgroundColor: '#8E33FF',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '30px',
          border: 'none',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block'
        },
        attributes: {
          href: 'https://publiccircles.com'
        }
      }
    }
  };

  return (
    <div style={{ height: '800px' }}>
      <EmailEditor 
        componentSettings={customComponentSettings}
      />
    </div>
  );
};

export default CustomizedEditor;
```

## Need More Help?

If you need additional assistance or have questions, please:

1. Check the [GitHub repository](https://github.com/yourorg/public-circles-email-builder) for the latest updates
2. Submit an issue if you encounter a bug
3. Refer to our API documentation for detailed information on all available options