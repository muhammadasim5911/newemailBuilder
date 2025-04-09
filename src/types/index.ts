export interface ComponentDefinition {
  id: string;
  type: ComponentType;
  content: string;
  props: ComponentProps;
}

export type ComponentType =
  | "heading"
  | "text"
  | "image"
  | "button"
  | "divider"
  | "spacer"
  | "social"
  | "section"
  | "columns"
  | "video";

export interface ComponentProps {
  tagName?: string;
  className?: string;
  style?: Record<string, string | number>;
  children?: ComponentDefinition[];
  attributes?: Record<string, string>;
  [key: string]: any;
}

export interface EmailTemplate {
  id: string;
  name: string;
  components: ComponentDefinition[];
  settings: TemplateSettings;
}

export interface TemplateSettings {
  width: number;
  fontFamily: string;
  backgroundColor: string;
  showMobilePreview: boolean;
  showDesktopPreview: boolean;
}

export interface ComponentItem {
  type: ComponentType;
  icon: string;
  label: string;
  category: "layout" | "content" | "advanced";
  defaultProps: ComponentProps;
}