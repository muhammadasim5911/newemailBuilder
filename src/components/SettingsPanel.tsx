import React from 'react';
import useEditorStore from '@/hooks/use-editor-store';

const SettingsPanel: React.FC = () => {
  const template = useEditorStore((state) => state.template);
  const updateTemplateSettings = useEditorStore((state) => state.updateTemplateSettings);
  
  const fontFamilies = [
    'Arial, sans-serif',
    'Helvetica, Arial, sans-serif',
    'Georgia, serif',
    'Tahoma, Verdana, sans-serif',
    'Trebuchet MS, sans-serif',
    'Times New Roman, serif',
    'Verdana, sans-serif',
    'Courier New, monospace',
  ];
  
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-[#E61DAB] mb-4">Template Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Template Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={template.name}
                onChange={(e) => {
                  // Update the template name in the store
                  const updatedTemplate = { ...template, name: e.target.value };
                  useEditorStore.setState({ template: updatedTemplate });
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Width (px)</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="320"
                  max="800"
                  step="10"
                  value={template.settings.width}
                  onChange={(e) => updateTemplateSettings({ width: parseInt(e.target.value) })}
                  className="w-full mr-2"
                />
                <span className="text-sm font-mono w-14 text-center">
                  {template.settings.width}px
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Mobile</span>
                <span>Desktop</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Font Family</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={template.settings.fontFamily}
                onChange={(e) => updateTemplateSettings({ fontFamily: e.target.value })}
              >
                {fontFamilies.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Background Color</label>
              <input
                type="color"
                value={template.settings.backgroundColor}
                onChange={(e) => updateTemplateSettings({ backgroundColor: e.target.value })}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium mb-2">Preview Options</h4>
              
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="desktopPreview"
                  checked={template.settings.showDesktopPreview}
                  onChange={(e) => updateTemplateSettings({ showDesktopPreview: e.target.checked })}
                  className="mr-2 h-4 w-4 text-[#E61DAB] focus:ring-[#E61DAB] rounded"
                />
                <label htmlFor="desktopPreview" className="text-sm">Show Desktop Preview</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="mobilePreview"
                  checked={template.settings.showMobilePreview}
                  onChange={(e) => updateTemplateSettings({ showMobilePreview: e.target.checked })}
                  className="mr-2 h-4 w-4 text-[#E61DAB] focus:ring-[#E61DAB] rounded"
                />
                <label htmlFor="mobilePreview" className="text-sm">Show Mobile Preview</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;