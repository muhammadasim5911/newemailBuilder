import React from 'react';
import useEditorStore from '@/hooks/use-editor-store';

const PropertiesPanel: React.FC = () => {
  const template = useEditorStore((state) => state.template);
  const selectedComponentId = useEditorStore((state) => state.selectedComponentId);
  const updateComponentProps = useEditorStore((state) => state.updateComponentProps);
  const updateComponentContent = useEditorStore((state) => state.updateComponentContent);
  const removeComponent = useEditorStore((state) => state.removeComponent);

  if (!selectedComponentId) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <p className="text-gray-500 text-center py-8">Select a component to edit its properties</p>
      </div>
    );
  }

  const selectedComponent = template.components.find(c => c.id === selectedComponentId);
  
  if (!selectedComponent) {
    return (
      <div className="flex-1 overflow-auto p-4">
        <p className="text-gray-500 text-center py-8">Component not found</p>
      </div>
    );
  }

  const updateStyle = (styleKey: string, value: string | number) => {
    updateComponentProps(selectedComponentId, {
      style: {
        ...selectedComponent.props.style,
        [styleKey]: value,
      },
    });
  };

  const renderPropertiesForType = () => {
    switch (selectedComponent.type) {
      case 'heading':
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                rows={4}
                value={selectedComponent.content}
                onChange={(e) => updateComponentContent(selectedComponentId, e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tag</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.tagName || ''}
                onChange={(e) => updateComponentProps(selectedComponentId, { tagName: e.target.value })}
              >
                {selectedComponent.type === 'heading' ? (
                  <>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="h4">Heading 4</option>
                    <option value="h5">Heading 5</option>
                    <option value="h6">Heading 6</option>
                  </>
                ) : (
                  <>
                    <option value="p">Paragraph</option>
                    <option value="div">Div</option>
                    <option value="span">Span</option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Font Size</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="10"
                  max="48"
                  value={parseInt(selectedComponent.props.style?.fontSize as string || '16')}
                  onChange={(e) => updateStyle('fontSize', `${e.target.value}px`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-12 text-center">
                  {parseInt(selectedComponent.props.style?.fontSize as string || '16')}px
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                type="color"
                value={selectedComponent.props.style?.color as string || '#000000'}
                onChange={(e) => updateStyle('color', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Text Align</label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.textAlign === 'left' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('textAlign', 'left')}
                >
                  <i className="fas fa-align-left"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.textAlign === 'center' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('textAlign', 'center')}
                >
                  <i className="fas fa-align-center"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.textAlign === 'right' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('textAlign', 'right')}
                >
                  <i className="fas fa-align-right"></i>
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.attributes?.src || ''}
                onChange={(e) => updateComponentProps(selectedComponentId, { 
                  attributes: { 
                    ...selectedComponent.props.attributes, 
                    src: e.target.value 
                  } 
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Alt Text</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.attributes?.alt || ''}
                onChange={(e) => updateComponentProps(selectedComponentId, { 
                  attributes: { 
                    ...selectedComponent.props.attributes, 
                    alt: e.target.value 
                  } 
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Width</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={parseInt(selectedComponent.props.style?.width as string || '100')}
                  onChange={(e) => updateStyle('width', `${e.target.value}%`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-12 text-center">
                  {parseInt(selectedComponent.props.style?.width as string || '100')}%
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Alignment</label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.marginLeft === '0' && selectedComponent.props.style?.marginRight === 'auto' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateComponentProps(selectedComponentId, { 
                    style: { 
                      ...selectedComponent.props.style, 
                      marginLeft: '0', 
                      marginRight: 'auto' 
                    } 
                  })}
                >
                  <i className="fas fa-align-left"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.marginLeft === 'auto' && selectedComponent.props.style?.marginRight === 'auto' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateComponentProps(selectedComponentId, { 
                    style: { 
                      ...selectedComponent.props.style, 
                      marginLeft: 'auto', 
                      marginRight: 'auto' 
                    } 
                  })}
                >
                  <i className="fas fa-align-center"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.marginLeft === 'auto' && selectedComponent.props.style?.marginRight === '0' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateComponentProps(selectedComponentId, { 
                    style: { 
                      ...selectedComponent.props.style, 
                      marginLeft: 'auto', 
                      marginRight: '0' 
                    } 
                  })}
                >
                  <i className="fas fa-align-right"></i>
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Button Text</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.content}
                onChange={(e) => updateComponentContent(selectedComponentId, e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Link URL</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.attributes?.href || '#'}
                onChange={(e) => updateComponentProps(selectedComponentId, { 
                  attributes: { 
                    ...selectedComponent.props.attributes, 
                    href: e.target.value 
                  } 
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Background Color</label>
              <input
                type="color"
                value={selectedComponent.props.style?.backgroundColor as string || '#3182ce'}
                onChange={(e) => updateStyle('backgroundColor', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Text Color</label>
              <input
                type="color"
                value={selectedComponent.props.style?.color as string || '#ffffff'}
                onChange={(e) => updateStyle('color', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Padding</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs mb-1">Horizontal</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="4"
                      max="48"
                      value={parseInt(selectedComponent.props.style?.paddingLeft as string || '24')}
                      onChange={(e) => {
                        const value = `${e.target.value}px`;
                        updateComponentProps(selectedComponentId, { 
                          style: { 
                            ...selectedComponent.props.style, 
                            paddingLeft: value, 
                            paddingRight: value 
                          } 
                        });
                      }}
                      className="w-full mr-2"
                    />
                    <span className="text-xs w-8 text-center">
                      {parseInt(selectedComponent.props.style?.paddingLeft as string || '24')}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1">Vertical</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="2"
                      max="32"
                      value={parseInt(selectedComponent.props.style?.paddingTop as string || '12')}
                      onChange={(e) => {
                        const value = `${e.target.value}px`;
                        updateComponentProps(selectedComponentId, { 
                          style: { 
                            ...selectedComponent.props.style, 
                            paddingTop: value, 
                            paddingBottom: value 
                          } 
                        });
                      }}
                      className="w-full mr-2"
                    />
                    <span className="text-xs w-8 text-center">
                      {parseInt(selectedComponent.props.style?.paddingTop as string || '12')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Border Radius</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={parseInt(selectedComponent.props.style?.borderRadius as string || '4')}
                  onChange={(e) => updateStyle('borderRadius', `${e.target.value}px`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-8 text-center">
                  {parseInt(selectedComponent.props.style?.borderRadius as string || '4')}
                </span>
              </div>
            </div>
          </div>
        );
        
      case 'divider':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                type="color"
                value={selectedComponent.props.style?.borderTopColor as string || '#e5e7eb'}
                onChange={(e) => updateStyle('borderTopColor', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Thickness</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={parseInt(selectedComponent.props.style?.borderTopWidth as string || '1')}
                  onChange={(e) => updateStyle('borderTopWidth', `${e.target.value}px`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-8 text-center">
                  {parseInt(selectedComponent.props.style?.borderTopWidth as string || '1')}px
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Style</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.style?.borderTopStyle as string || 'solid'}
                onChange={(e) => updateStyle('borderTopStyle', e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Spacing</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs mb-1">Top</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="48"
                      value={parseInt(selectedComponent.props.style?.marginTop as string || '8')}
                      onChange={(e) => updateStyle('marginTop', `${e.target.value}px`)}
                      className="w-full mr-2"
                    />
                    <span className="text-xs w-8 text-center">
                      {parseInt(selectedComponent.props.style?.marginTop as string || '8')}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1">Bottom</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="48"
                      value={parseInt(selectedComponent.props.style?.marginBottom as string || '8')}
                      onChange={(e) => updateStyle('marginBottom', `${e.target.value}px`)}
                      className="w-full mr-2"
                    />
                    <span className="text-xs w-8 text-center">
                      {parseInt(selectedComponent.props.style?.marginBottom as string || '8')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'spacer':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Height</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="4"
                  max="120"
                  value={parseInt(selectedComponent.props.style?.height as string || '40')}
                  onChange={(e) => updateStyle('height', `${e.target.value}px`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-12 text-center">
                  {parseInt(selectedComponent.props.style?.height as string || '40')}px
                </span>
              </div>
            </div>
          </div>
        );
        
      case 'social':
        if (!selectedComponent.props.socialLinks) {
          return <p className="text-gray-500">No social links defined</p>;
        }
        
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Alignment</label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.justifyContent === 'flex-start' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('justifyContent', 'flex-start')}
                >
                  <i className="fas fa-align-left"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.justifyContent === 'center' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('justifyContent', 'center')}
                >
                  <i className="fas fa-align-center"></i>
                </button>
                <button
                  className={`flex-1 py-2 ${selectedComponent.props.style?.justifyContent === 'flex-end' ? 'bg-[#EFD6FF]' : 'bg-white'}`}
                  onClick={() => updateStyle('justifyContent', 'flex-end')}
                >
                  <i className="fas fa-align-right"></i>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Icon Size</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={40}
                  onChange={(e) => {
                    // This would update all social icons size but we'd need a more complex approach
                    // for now it's just a placeholder
                  }}
                  className="w-full mr-2"
                />
                <span className="text-xs w-12 text-center">40px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Spacing</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={parseInt(selectedComponent.props.style?.gap as string || '16')}
                  onChange={(e) => updateStyle('gap', `${e.target.value}px`)}
                  className="w-full mr-2"
                />
                <span className="text-xs w-12 text-center">
                  {parseInt(selectedComponent.props.style?.gap as string || '16')}px
                </span>
              </div>
            </div>
          </div>
        );
        
      case 'video':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Video URL</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
                value={selectedComponent.props.attributes?.videoUrl || ''}
                onChange={(e) => updateComponentProps(selectedComponentId, { 
                  attributes: { 
                    ...selectedComponent.props.attributes, 
                    videoUrl: e.target.value 
                  } 
                })}
              />
              <p className="text-xs text-gray-500 mt-1">
                Note: Videos are not supported in all email clients. A fallback link will be shown.
              </p>
            </div>
          </div>
        );
        
      default:
        return (
          <p className="text-gray-500">
            Properties for {selectedComponent.type} components are not available yet.
          </p>
        );
    }
  };

  return (
    <div className="flex-1 overflow-auto p-4">
      {renderPropertiesForType()}
      
      <div className="pt-2 border-t border-gray-200 mt-4">
        <button 
          className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => removeComponent(selectedComponentId)}
        >
          <i className="fas fa-trash mr-2"></i> Delete Component
        </button>
      </div>
    </div>
  );
};

export default PropertiesPanel;