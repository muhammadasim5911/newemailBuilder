// Main component export
export { default as EmailEditor } from "./components/EmailEditor";
export { default as App } from "./App";

// Component exports
export { default as ComponentPanel } from "./components/ComponentPanel";
export { default as DroppableComponent } from "./components/DroppableComponent";
export { default as EmailCanvas } from "./components/EmailCanvas";
export { default as HtmlOutputModal } from "./components/HtmlOutputModal";
export { default as PropertiesPanel } from "./components/PropertiesPanel";
export { default as SettingsPanel } from "./components/SettingsPanel";

// Utils exports
export { parseHtmlToTemplate } from "./lib/enhanced-html-parser";
export {
  generateTemplateHtml,
  generateComponentHtml,
  generateStyleString,
} from "./lib/html-generator";
export { default as useEditorStore } from "./hooks/use-editor-store";
export {
  COMPONENT_ITEMS,
  getComponentDefinitionByType,
  DEFAULT_TEMPLATE_SETTINGS,
  getEmptyTemplate,
} from "./lib/components";

// Type exports
export type {
  EmailTemplate,
  ComponentDefinition,
  ComponentType,
  ComponentProps,
  ComponentItem,
  TemplateSettings,
} from "./types";

/**
 * Public Circles Email Builder
 * A drag-and-drop email template editor that can be integrated into any React application
 *
 * Features:
 * - Drag and drop component interface
 * - Rich text editing
 * - Import existing HTML templates
 * - Export to HTML
 * - Responsive design preview
 * - Support for complex email templates
 */
