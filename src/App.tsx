import { useState, ChangeEvent } from "react";
import EmailEditor from "./components/EmailEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Simple Toaster component since we may not have the shadcn one
const Toaster = () => (
  <div id="toaster" className="fixed bottom-4 right-4 z-50"></div>
);
// Use basic HTML elements since we may not have the shadcn components in the standalone version
// This allows the code to work without requiring the shadcn components
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const baseClasses = "py-2 px-4 rounded";
  const classes =
    variant === "outline"
      ? `bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 ${baseClasses}`
      : `bg-[#E61DAB] hover:bg-[#d31a9c] text-white ${baseClasses}`;

  return (
    <button {...props} className={props.className || classes}>
      {children}
    </button>
  );
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={
        props.className ||
        "w-full min-h-[200px] p-3 border border-gray-300 rounded font-mono text-sm"
      }
    />
  );
};

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...props }: CardProps) => (
  <div
    {...props}
    className={
      props.className ||
      "mx-auto max-w-4xl my-4 bg-white p-6 rounded-lg shadow-sm"
    }
  >
    {children}
  </div>
);

const CardHeader = ({ children, ...props }: CardHeaderProps) => (
  <div {...props} className={props.className || "mb-3"}>
    {children}
  </div>
);

const CardTitle = ({ children, ...props }: CardTitleProps) => (
  <h2 {...props} className={props.className || "text-xl font-semibold"}>
    {children}
  </h2>
);

const CardContent = ({ children, ...props }: CardContentProps) => (
  <div {...props} className={props.className || ""}>
    {children}
  </div>
);

// Fix TypeScript issue by explicitly importing types
import type { FC } from "react";

/**
 * Simplified App component with HTML template testing capability
 * This version is frontend-only and doesn't require any backend services
 */
function App() {
  const [htmlSample, setHtmlSample] = useState<string | undefined>(undefined);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  // Function to handle loading HTML template
  const handleLoadTemplate = () => {
    if (inputValue.trim()) {
      try {
        console.log("Processing template input, length:", inputValue.length);

        // Try to parse as JSON first (in case it's a JSON object with HTML content)
        try {
          const jsonObj = JSON.parse(inputValue);

          if (jsonObj.body) {
            // If it has a body property, use that (common in API responses)
            console.log("Detected JSON with body property");
            setHtmlSample(jsonObj.body);
            setShowInput(false);
            return;
          } else if (typeof jsonObj === "string") {
            // If it's a JSON string
            console.log("Detected JSON string");
            setHtmlSample(jsonObj);
            setShowInput(false);
            return;
          } else if (jsonObj.html || jsonObj.content) {
            // Try other common JSON formats for HTML content
            console.log("Detected JSON with html/content property");
            setHtmlSample(jsonObj.html || jsonObj.content);
            setShowInput(false);
            return;
          }
        } catch (e) {
          // Not JSON, treat as raw HTML
          console.log("Not JSON, treating as raw HTML");

          // Check if it's valid HTML by seeing if it contains HTML tags
          if (inputValue.includes("<") && inputValue.includes(">")) {
            setHtmlSample(inputValue);
            setShowInput(false);

            // Handle very large templates (more than 100KB)
            if (inputValue.length > 100000) {
              console.warn(
                "Very large HTML template detected:",
                inputValue.length,
                "chars"
              );
              alert(
                "This is a very large template. It may take longer to process."
              );
            }
            return;
          } else {
            // Not valid HTML
            throw new Error("Input does not appear to contain HTML tags");
          }
        }
      } catch (err) {
        console.error("Failed to parse input:", err);
        alert(
          "Could not parse input. Make sure it contains valid HTML with proper tags."
        );
      }
    }
  };

  // Start fresh with empty template
  const resetTemplate = () => {
    setHtmlSample(undefined);
    setShowInput(false);
    setInputValue("");
  };

  // Toggle HTML input form
  const toggleInputForm = () => {
    setShowInput(!showInput);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50">
        {/* Template testing controls */}
        <div className="p-4 bg-white border-b flex justify-center space-x-4">
          <Button
            onClick={toggleInputForm}
            className="bg-[#E61DAB] hover:bg-[#d31a9c] text-white"
          >
            {showInput ? "Hide HTML Input" : "Enter HTML Template"}
          </Button>
          <Button onClick={resetTemplate} variant="outline">
            Reset Template
          </Button>
        </div>

        {/* HTML Input Form */}
        {showInput && (
          <Card className="mx-auto max-w-4xl my-4">
            <CardHeader>
              <CardTitle>Enter HTML Template</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInputValue(e.target.value)
                }
                placeholder="Paste HTML or JSON with HTML content here..."
                className="min-h-[200px] font-mono text-sm"
              />
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={handleLoadTemplate}
                  className="bg-[#E61DAB] hover:bg-[#d31a9c] text-white"
                >
                  Load Template
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Email editor with the template */}
        <div className={showInput ? "hidden" : ""}>
          <EmailEditor initialHtml={htmlSample} />
        </div>
        <Toaster />
      </div>
    </DndProvider>
  );
}

export default App;
