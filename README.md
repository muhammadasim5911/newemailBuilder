# Public Circles Email Builder

A modern, drag-and-drop email template builder designed for React applications. Create beautiful, responsive email templates without any backend dependencies.

[![npm version](https://badge.fury.io/js/public-circles-email-builder.svg)](https://badge.fury.io/js/public-circles-email-builder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🧩 Drag-and-drop component interface
- 📝 Rich text editing capabilities
- 📱 Responsive design preview (desktop/mobile)
- 📤 Export to clean HTML for email clients
- 🔄 Import existing HTML templates for editing
- 🧰 Support for complex email template structures
- 🎨 Customizable styling and theming

## Installation

```bash
npm install public-circles-email-builder
# or
yarn add public-circles-email-builder
```

## Basic Usage

```jsx
import React from 'react';
import { EmailEditor } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

const MyEmailBuilder = () => {
  const handleExport = (html) => {
    console.log('Exported HTML:', html);
    // You can now send this HTML via your email service
  };

  return (
    <div style={{ height: '800px' }}>
      <EmailEditor onExport={handleExport} />
    </div>
  );
};

export default MyEmailBuilder;
```

## Component Properties

| Prop | Type | Description |
|------|------|-------------|
| `initialHtml` | `string` | (Optional) Initial HTML template to load in the editor |
| `onExport` | `(html: string) => void` | Callback function triggered when the user exports the template |
| `onChange` | `(template: EmailTemplate) => void` | (Optional) Callback function triggered on template changes |
| `useEnhancedParser` | `boolean` | (Optional) Use advanced HTML parsing for complex templates (default: true) |

## Importing Existing HTML

The editor supports importing existing HTML templates, including complex ones:

```jsx
import React from 'react';
import { EmailEditor } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

const MyEmailBuilder = () => {
  // Your existing HTML template
  const existingHtmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #E61DAB;">Welcome to our Newsletter</h1>
      <p>This is some example content that you can edit.</p>
      <a href="https://example.com" style="background-color: #8E33FF; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block;">Learn More</a>
    </div>
  `;

  return (
    <div style={{ height: '800px' }}>
      <EmailEditor initialHtml={existingHtmlTemplate} />
    </div>
  );
};

export default MyEmailBuilder;
```

## SendGrid Integration

For a complete guide on integrating with SendGrid, see [the SendGrid integration guide](docs/sendgrid-integration.md) or check the examples folder.

## Available Components

- **Layout Components**: Sections, Columns, Spacers
- **Content Components**: Headings, Text, Images, Buttons, Dividers
- **Advanced Components**: Social Media Links, Video Embeds

## Advanced Usage

See the [advanced usage guide](docs/advanced-usage.md) for information on:

- Customizing the component palette
- Handling template state externally
- Using template presets
- Working with complex templates

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.