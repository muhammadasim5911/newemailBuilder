import { ComponentItem, ComponentType, EmailTemplate } from "@/types";
import { nanoid } from "nanoid";

export const COMPONENT_ITEMS: ComponentItem[] = [
  {
    type: "section",
    icon: "fa-columns",
    label: "Section",
    category: "layout",
    defaultProps: {
      style: {
        backgroundColor: "#f9fafb",
        padding: "16px",
        marginBottom: "16px",
      },
      children: [],
    },
  },
  {
    type: "spacer",
    icon: "fa-arrows-alt-v",
    label: "Spacer",
    category: "layout",
    defaultProps: {
      style: {
        height: "40px",
      },
    },
  },
  {
    type: "divider",
    icon: "fa-minus",
    label: "Divider",
    category: "layout",
    defaultProps: {
      style: {
        borderTop: "1px solid #e5e7eb",
        marginTop: "8px",
        marginBottom: "8px",
      },
    },
  },
  {
    type: "columns",
    icon: "fa-table-columns",
    label: "Columns",
    category: "layout",
    defaultProps: {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "16px",
      },
      columnCount: 2,
      children: [],
    },
  },
  {
    type: "heading",
    icon: "fa-heading",
    label: "Heading",
    category: "content",
    defaultProps: {
      tagName: "h2",
      content: "Welcome to our Newsletter",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333333",
        marginTop: "0",
        marginBottom: "16px",
      },
    },
  },
  {
    type: "text",
    icon: "fa-align-left",
    label: "Text",
    category: "content",
    defaultProps: {
      tagName: "p",
      content: "This is a paragraph of text. You can edit this content to add your own message.",
      style: {
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#4b5563",
        marginTop: "0",
        marginBottom: "16px",
      },
    },
  },
  {
    type: "image",
    icon: "fa-image",
    label: "Image",
    category: "content",
    defaultProps: {
      tagName: "img",
      attributes: {
        src: "https://placehold.co/600x200/e2e8f0/a0aec0?text=Image",
        alt: "Image description",
      },
      style: {
        maxWidth: "100%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
  {
    type: "button",
    icon: "fa-square",
    label: "Button",
    category: "content",
    defaultProps: {
      tagName: "a",
      content: "Click Me",
      attributes: {
        href: "#",
      },
      style: {
        display: "inline-block",
        padding: "12px 24px",
        backgroundColor: "#3182ce",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "600",
        borderRadius: "4px",
        textAlign: "center",
      },
    },
  },
  {
    type: "social",
    icon: "fa-share-nodes",
    label: "Social",
    category: "advanced",
    defaultProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        marginTop: "16px",
        marginBottom: "16px",
      },
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: "fab fa-facebook-f",
          color: "#3b5998",
        },
        {
          platform: "twitter",
          url: "#",
          icon: "fab fa-twitter",
          color: "#1da1f2",
        },
        {
          platform: "instagram",
          url: "#",
          icon: "fab fa-instagram",
          color: "#e1306c",
        },
        {
          platform: "linkedin",
          url: "#",
          icon: "fab fa-linkedin-in",
          color: "#0077b5",
        },
      ],
    },
  },
  {
    type: "video",
    icon: "fa-play",
    label: "Video",
    category: "advanced",
    defaultProps: {
      tagName: "div",
      attributes: {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      style: {
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        backgroundColor: "#f3f4f6",
        borderRadius: "4px",
        overflow: "hidden",
      },
    },
  },
];

export const getComponentDefinitionByType = (type: ComponentType) => {
  const componentItem = COMPONENT_ITEMS.find((item) => item.type === type);
  
  if (!componentItem) {
    throw new Error(`Component type ${type} not found`);
  }
  
  return {
    id: nanoid(),
    type: componentItem.type,
    content: componentItem.defaultProps.content || "",
    props: { ...componentItem.defaultProps },
  };
};

export const DEFAULT_TEMPLATE_SETTINGS = {
  width: 600,
  fontFamily: "Helvetica, Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  showMobilePreview: false,
  showDesktopPreview: true,
};

export const getEmptyTemplate = (name = "Untitled Template"): EmailTemplate => ({
  id: nanoid(),
  name,
  components: [],
  settings: DEFAULT_TEMPLATE_SETTINGS,
});