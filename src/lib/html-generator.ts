import { ComponentDefinition, EmailTemplate } from "@/types";

export const generateComponentHtml = (component: ComponentDefinition): string => {
  let html = "";
  
  switch (component.type) {
    case "heading":
      const headingTag = component.props.tagName || "h2";
      const headingStyle = generateStyleString(component.props.style || {});
      html = `<${headingTag} style="${headingStyle}">${component.content}</${headingTag}>`;
      break;
      
    case "text":
      const textTag = component.props.tagName || "p";
      const textStyle = generateStyleString(component.props.style || {});
      html = `<${textTag} style="${textStyle}">${component.content}</${textTag}>`;
      break;
      
    case "image":
      const imgStyle = generateStyleString(component.props.style || {});
      const imgSrc = component.props.attributes?.src || "";
      const imgAlt = component.props.attributes?.alt || "";
      html = `<img src="${imgSrc}" alt="${imgAlt}" style="${imgStyle}" />`;
      break;
      
    case "button":
      const btnTag = component.props.tagName || "a";
      const btnStyle = generateStyleString(component.props.style || {});
      const href = component.props.attributes?.href || "#";
      html = `<${btnTag} href="${href}" style="${btnStyle}">${component.content}</${btnTag}>`;
      break;
      
    case "divider":
      const dividerStyle = generateStyleString(component.props.style || {});
      html = `<hr style="${dividerStyle}" />`;
      break;
      
    case "spacer":
      const spacerStyle = generateStyleString(component.props.style || {});
      html = `<div style="${spacerStyle}">&nbsp;</div>`;
      break;
      
    case "social":
      const socialStyle = generateStyleString(component.props.style || {});
      html = `<div style="${socialStyle}">`;
      
      if (component.props.socialLinks && Array.isArray(component.props.socialLinks)) {
        for (const social of component.props.socialLinks) {
          html += `
            <a href="${social.url}" style="display: inline-block; width: 40px; height: 40px; border-radius: 50%; background-color: ${social.color}; color: white; text-align: center; line-height: 40px; margin: 0 8px; text-decoration: none;" target="_blank">
              <i class="${social.icon}"></i>
            </a>
          `;
        }
      }
      
      html += `</div>`;
      break;
      
    case "section":
      const sectionStyle = generateStyleString(component.props.style || {});
      html = `<div style="${sectionStyle}">`;
      
      if (component.props.children && Array.isArray(component.props.children)) {
        for (const child of component.props.children) {
          html += generateComponentHtml(child);
        }
      }
      
      html += `</div>`;
      break;
      
    case "columns":
      const columnsStyle = generateStyleString(component.props.style || {});
      html = `<div style="${columnsStyle}">`;
      
      if (component.props.children && Array.isArray(component.props.children)) {
        for (const child of component.props.children) {
          const childStyle = generateStyleString({
            ...(child.props.style || {}),
            width: "100%",
          });
          html += `<div style="${childStyle}">`;
          
          if (child.props.children && Array.isArray(child.props.children)) {
            for (const grandchild of child.props.children) {
              html += generateComponentHtml(grandchild);
            }
          }
          
          html += `</div>`;
        }
      }
      
      html += `</div>`;
      break;
      
    case "video":
      const videoStyle = generateStyleString(component.props.style || {});
      const videoUrl = component.props.attributes?.videoUrl || "";
      html = `
        <div style="${videoStyle}">
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <p style="text-align: center; color: #666; padding-top: 20px;">
              Video placeholder (not supported in all email clients)
            </p>
            <p style="text-align: center; padding-top: 10px;">
              <a href="${videoUrl}" style="color: #3182ce; text-decoration: underline;" target="_blank">
                Watch Video
              </a>
            </p>
          </div>
        </div>
      `;
      break;
      
    default:
      html = `<!-- Unsupported component type: ${component.type} -->`;
  }
  
  return html;
};

export const generateStyleString = (styles: Record<string, string | number>): string => {
  return Object.entries(styles)
    .map(([key, value]) => {
      const cssProperty = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${cssProperty}: ${value}`;
    })
    .join("; ");
};

export const generateTemplateHtml = (template: EmailTemplate): string => {
  const { components, settings } = template;
  
  let componentsHtml = "";
  for (const component of components) {
    componentsHtml += generateComponentHtml(component);
  }
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body style="margin: 0; padding: 0; background-color: ${settings.backgroundColor}; font-family: ${settings.fontFamily};">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td align="center" valign="top">
        <table cellpadding="0" cellspacing="0" border="0" width="${settings.width}" style="max-width: ${settings.width}px; margin: 0 auto;">
          <tr>
            <td>
              ${componentsHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};