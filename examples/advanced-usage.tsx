import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  EmailEditor,
  EmailTemplate,
  ComponentType,
  generateTemplateHtml
} from 'public-circles-email-builder';

// Import the styles
import 'public-circles-email-builder/dist/style.css';

// Sample template presets
const templatePresets = {
  welcome: `
    <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      <h1 style="color: #E61DAB;">Welcome to Public Circles!</h1>
      <p>Thank you for joining our community. We're excited to have you on board!</p>
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="color: #8E33FF; margin-top: 0;">Getting Started</h2>
        <p>Here are a few things you can do right away:</p>
        <ul>
          <li>Complete your profile</li>
          <li>Connect with other members</li>
          <li>Explore our upcoming events</li>
        </ul>
      </div>
      <a href="https://example.com/welcome" style="background-color: #8E33FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Get Started</a>
    </div>
  `,
  newsletter: `
    <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      <h1 style="color: #E61DAB;">Monthly Newsletter - April 2023</h1>
      <p>Here's what's happening this month in the Public Circles community.</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="color: #8E33FF; margin-top: 0;">Featured Article</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
        <a href="https://example.com/article" style="color: #E61DAB; text-decoration: none;">Read more →</a>
      </div>
      
      <h2 style="color: #8E33FF;">Upcoming Events</h2>
      <ul>
        <li>Virtual Meetup - April 15th</li>
        <li>Workshop: Email Marketing - April 22nd</li>
        <li>Community Happy Hour - April 29th</li>
      </ul>
      
      <div style="border-top: 1px solid #eaeaea; margin-top: 30px; padding-top: 20px; text-align: center; color: #666;">
        <p>You're receiving this email because you're a member of Public Circles.</p>
        <p><a href="https://example.com/unsubscribe" style="color: #666; text-decoration: underline;">Unsubscribe</a></p>
      </div>
    </div>
  `,
  promotion: `
    <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      <h1 style="color: #E61DAB; text-align: center;">Special Offer Just For You!</h1>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 24px; font-weight: bold; background: linear-gradient(45deg, #E61DAB, #8E33FF); color: white; padding: 10px 20px; border-radius: 4px;">50% OFF</span>
      </div>
      <p style="text-align: center; font-size: 18px;">Use code <strong>CIRCLES50</strong> at checkout</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 4px; text-align: center;">
        <h2 style="color: #8E33FF; margin-top: 0;">Limited Time Offer</h2>
        <p>This exclusive promotion ends on April 30th. Don't miss out on this amazing deal!</p>
        <a href="https://example.com/offer" style="background-color: #E61DAB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 10px; font-weight: bold;">CLAIM YOUR DISCOUNT</a>
      </div>
      
      <div style="border-top: 1px solid #eaeaea; margin-top: 30px; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
        <p>Terms and conditions apply. Offer valid until April 30th, 2023.</p>
        <p>You're receiving this email because you're a subscriber to Public Circles promotions.</p>
      </div>
    </div>
  `
};

const AdvancedUsageExample = () => {
  // State for the current template and generated HTML
  const [currentTemplate, setCurrentTemplate] = useState<string>('welcome');
  const [templateState, setTemplateState] = useState<EmailTemplate | null>(null);
  const [exportedHtml, setExportedHtml] = useState<string | null>(null);
  const [savedTemplates, setSavedTemplates] = useState<{[key: string]: string}>({});
  const [showTemplateJson, setShowTemplateJson] = useState<boolean>(false);
  
  // Auto-save timer
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  // Handle template changes
  const handleTemplateChange = useCallback((template: EmailTemplate) => {
    setTemplateState(template);
    setLastSaved(new Date());
    
    // In a real app, you might want to debounce this or trigger on specific events
    const html = generateTemplateHtml(template);
    
    // Save to local storage or your backend
    localStorage.setItem('savedTemplate', html);
  }, []);
  
  // Handle HTML export
  const handleExport = useCallback((html: string) => {
    setExportedHtml(html);
    
    // Add to saved templates
    setSavedTemplates(prev => ({
      ...prev,
      [`Template ${Object.keys(prev).length + 1}`]: html
    }));
    
    // Show success message
    toast.success('Template exported successfully!');
  }, []);
  
  // Load template from preset
  const loadTemplate = useCallback((templateKey: string) => {
    setCurrentTemplate(templateKey);
  }, []);
  
  // Effect to simulate auto-save
  useEffect(() => {
    if (lastSaved) {
      const timer = setTimeout(() => {
        toast.success('Template auto-saved!');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [lastSaved]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Advanced Email Builder</h1>
        <p className="text-gray-600 mb-4">
          Demonstrating advanced features of the Public Circles Email Builder
        </p>
        
        {/* Template selector */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button 
            onClick={() => loadTemplate('welcome')}
            className={`px-4 py-2 rounded transition ${
              currentTemplate === 'welcome' 
                ? 'bg-pink-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Welcome Template
          </button>
          <button 
            onClick={() => loadTemplate('newsletter')}
            className={`px-4 py-2 rounded transition ${
              currentTemplate === 'newsletter' 
                ? 'bg-pink-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Newsletter Template
          </button>
          <button 
            onClick={() => loadTemplate('promotion')}
            className={`px-4 py-2 rounded transition ${
              currentTemplate === 'promotion' 
                ? 'bg-pink-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Promotion Template
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email editor */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden" style={{ height: '700px' }}>
            <EmailEditor 
              initialHtml={templatePresets[currentTemplate as keyof typeof templatePresets]}
              onExport={handleExport}
              onChange={handleTemplateChange}
              key={currentTemplate} // Important: reset the editor when template changes
            />
          </div>
        </div>
        
        {/* Advanced options panel */}
        <div className="space-y-6">
          {/* Export panel */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Template Management</h2>
            
            {lastSaved && (
              <div className="mb-4 text-sm text-gray-500">
                Last saved: {lastSaved.toLocaleTimeString()}
              </div>
            )}
            
            {/* Toggle JSON view */}
            <button
              onClick={() => setShowTemplateJson(!showTemplateJson)}
              className="mb-4 text-sm text-purple-600 hover:text-purple-800"
            >
              {showTemplateJson ? 'Hide' : 'Show'} Template JSON
            </button>
            
            {/* JSON structure */}
            {showTemplateJson && templateState && (
              <div className="bg-gray-100 p-3 rounded mb-4 overflow-auto max-h-[200px] text-xs font-mono">
                <pre>{JSON.stringify(templateState, null, 2)}</pre>
              </div>
            )}
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  if (exportedHtml) {
                    navigator.clipboard.writeText(exportedHtml);
                    toast.success('HTML copied to clipboard!');
                  } else {
                    toast.error('No HTML has been exported yet');
                  }
                }}
                className={`px-4 py-2 rounded transition ${
                  exportedHtml ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!exportedHtml}
              >
                Copy HTML to Clipboard
              </button>
              
              <button 
                onClick={() => {
                  // In a real app, this would save to a database
                  toast.success('Template saved to library!');
                }}
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
              >
                Save to Template Library
              </button>
            </div>
          </div>
          
          {/* Saved templates */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Saved Templates</h2>
            
            {Object.keys(savedTemplates).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(savedTemplates).map(([name, html], index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>{name}</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(html);
                          toast.success('Copied to clipboard!');
                        }}
                        className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        Copy
                      </button>
                      <button 
                        onClick={() => {
                          // Create a download link
                          const blob = new Blob([html], { type: 'text/html' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `${name.replace(/\s+/g, '-').toLowerCase()}.html`;
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);
                          URL.revokeObjectURL(url);
                        }}
                        className="text-xs px-2 py-1 bg-purple-600 text-white hover:bg-purple-700 rounded"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                Export some templates to see them here.
              </p>
            )}
          </div>
          
          {/* Advanced features documentation */}
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-3">Advanced Features</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li>Template presets with one-click loading</li>
              <li>Auto-save functionality</li>
              <li>Template library management</li>
              <li>JSON structure visualization</li>
              <li>Export and download capabilities</li>
              <li>Copy to clipboard functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedUsageExample;