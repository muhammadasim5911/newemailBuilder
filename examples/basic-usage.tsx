import React, { useState } from 'react';
import { EmailEditor } from 'public-circles-email-builder';

// Import the styles
import 'public-circles-email-builder/dist/style.css';

const BasicUsageExample = () => {
  const [exportedHtml, setExportedHtml] = useState<string | null>(null);
  
  // Simple template for demonstration
  const initialHtml = `
    <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      <h1 style="color: #E61DAB;">Getting Started with Email Builder</h1>
      <p>This is a simple example of the Public Circles Email Builder. You can:</p>
      <ul>
        <li>Drag and drop components from the right panel</li>
        <li>Edit properties in the left panel</li>
        <li>Export your template as HTML</li>
      </ul>
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <p>Try editing this block or add new components!</p>
      </div>
      <a href="https://example.com" style="background-color: #8E33FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Learn More</a>
    </div>
  `;

  // Handle the exported HTML
  const handleExport = (html: string) => {
    setExportedHtml(html);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Email Template Builder</h1>
        <p className="text-gray-600">
          Create beautiful email templates with our drag-and-drop editor
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden" style={{ height: '700px' }}>
            <EmailEditor 
              initialHtml={initialHtml}
              onExport={handleExport}
            />
          </div>
        </div>
        
        <div>
          <div className="border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Exported HTML</h2>
            
            {exportedHtml ? (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded overflow-auto max-h-[300px] text-sm font-mono">
                  <pre>{exportedHtml}</pre>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(exportedHtml);
                    alert('HTML copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Copy to Clipboard
                </button>
              </div>
            ) : (
              <p className="text-gray-500 italic">
                Click "Export HTML" in the editor to see the generated code here.
              </p>
            )}
          </div>
          
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-3">How to Use</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Drag components from the right panel to the canvas</li>
              <li>Click on any component to edit its properties</li>
              <li>Use the settings panel to adjust template-wide options</li>
              <li>Preview how your email will look on mobile and desktop</li>
              <li>When finished, click "Export HTML" to get your template code</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicUsageExample;