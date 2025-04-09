import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./Header";
import ComponentPanel from "./ComponentPanel";
import PropertiesPanel from "./PropertiesPanel";
import SettingsPanel from "./SettingsPanel";
import EmailCanvas from "./EmailCanvas";
import HtmlOutputModal from "./HtmlOutputModal";
import useEditorStore from "@/hooks/use-editor-store";
import { parseHtmlToTemplate } from "@/lib/enhanced-html-parser";
import { generateTemplateHtml } from "@/lib/html-generator";
import { EmailTemplate } from "@/types";

interface EmailEditorProps {
  initialHtml?: string;
  useEnhancedParser?: boolean;
  onExport?: (html: string) => void;
  onTemplateChange?: (template: EmailTemplate) => void;
}

const EmailEditor: React.FC<EmailEditorProps> = ({
  initialHtml,
  useEnhancedParser = true,
  onExport,
  onTemplateChange,
}) => {
  const [isLoading, setIsLoading] = useState(!!initialHtml);
  const {
    isComponentPanelOpen,
    isPropertiesPanelOpen,
    isSettingsPanelOpen,
    openComponentPanel,
    openPropertiesPanel,
    openSettingsPanel,
  } = useEditorStore();

  useEffect(() => {
    if (initialHtml) {
      setIsLoading(true);

      try {
        // Add detailed logging to help diagnose parsing issues
        console.log("Parsing HTML template, length:", initialHtml.length);

        // Check if the HTML is too large (might cause performance issues)
        if (initialHtml.length > 100000) {
          console.warn(
            "Very large HTML template detected:",
            initialHtml.length,
            "characters"
          );
        }

        // Parse the initial HTML and set it as the template
        const parsedTemplate = parseHtmlToTemplate(initialHtml);

        console.log(
          "Successfully parsed template with components:",
          parsedTemplate.components.length
        );

        // Setup a brief delay to ensure DOM is ready for manipulation
        setTimeout(() => {
          useEditorStore.setState({ template: parsedTemplate });
          setIsLoading(false);

          // Callback for template change
          if (onTemplateChange) {
            onTemplateChange(parsedTemplate);
          }
        }, 100);
      } catch (error) {
        console.error("Failed to parse HTML:", error);

        // Try a simplified fallback approach for complex templates
        console.log("Attempting fallback parsing approach...");
        try {
          // Create a basic template with the HTML content as a single text component
          const fallbackTemplate: EmailTemplate = {
            id: nanoid(),
            name: "Imported Template",
            components: [
              {
                id: nanoid(),
                type: "text",
                content: initialHtml,
                props: {
                  tagName: "div",
                  style: { padding: "10px" },
                },
              },
            ],
            settings: useEditorStore.getState().template.settings,
          };

          useEditorStore.setState({ template: fallbackTemplate });
          setIsLoading(false);

          // Callback for template change
          if (onTemplateChange) {
            onTemplateChange(fallbackTemplate);
          }

          // Show feedback to the user
          console.log(
            "Used fallback parsing - template imported as single content block"
          );
          alert(
            "The template was imported as a single content block due to its complexity. You can now edit it as needed."
          );
        } catch (fallbackError) {
          console.error("Even fallback parsing failed:", fallbackError);
          // Fall back to an empty template as last resort
          const emptyTemplate = useEditorStore.getState().template;
          useEditorStore.getState().initializeTemplate();
          setIsLoading(false);

          // Callback for template change
          if (onTemplateChange) {
            onTemplateChange(emptyTemplate);
          }

          alert(
            "Could not parse the template. Please check the HTML format and try again."
          );
        }
      }
    } else {
      // Initialize with an empty template
      useEditorStore.getState().initializeTemplate();
      const emptyTemplate = useEditorStore.getState().template;
      setIsLoading(false);

      // Callback for template change
      if (onTemplateChange) {
        onTemplateChange(emptyTemplate);
      }
    }
  }, [initialHtml, onTemplateChange]);

  // Setup effect to subscribe to template changes to trigger callbacks
  useEffect(() => {
    if (!onExport && !onTemplateChange) return;

    // Add a subscription to the store changes
    const unsubscribe = useEditorStore.subscribe((state, prevState) => {
      // If template changed and callbacks provided
      if (state.template !== prevState.template) {
        // Template change callback
        if (onTemplateChange) {
          onTemplateChange(state.template);
        }
      }

      // Export HTML on modal open/close
      if (
        state.isOutputModalOpen !== prevState.isOutputModalOpen &&
        !state.isOutputModalOpen &&
        onExport
      ) {
        // This means the modal was just closed - probably after exporting
        const html = generateTemplateHtml(state.template);
        onExport(html);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onExport, onTemplateChange]);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <EmailCanvas />

        <div className="w-full lg:w-1/3 border-l border-gray-200 flex flex-col bg-white">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  isComponentPanelOpen
                    ? "text-[#E61DAB] border-b-2 border-[#E61DAB]"
                    : "text-gray-600 hover:text-[#8E33FF]"
                }`}
                onClick={openComponentPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-th-large text-xs"></i>
                  Components
                </span>
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  isPropertiesPanelOpen
                    ? "text-[#E61DAB] border-b-2 border-[#E61DAB]"
                    : "text-gray-600 hover:text-[#8E33FF]"
                }`}
                onClick={openPropertiesPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-sliders-h text-xs"></i>
                  Properties
                </span>
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  isSettingsPanelOpen
                    ? "text-[#E61DAB] border-b-2 border-[#E61DAB]"
                    : "text-gray-600 hover:text-[#8E33FF]"
                }`}
                onClick={openSettingsPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-cog text-xs"></i>
                  Settings
                </span>
              </button>
            </nav>
          </div>

          {isComponentPanelOpen && <ComponentPanel />}
          {isPropertiesPanelOpen && <PropertiesPanel />}
          {isSettingsPanelOpen && <SettingsPanel />}
        </div>
      </div>

      <HtmlOutputModal />
    </div>
  );
};

export default EmailEditor;
