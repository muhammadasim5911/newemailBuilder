import React from 'react';
import ContentEditable from 'react-contenteditable';
import useEditorStore from '@/hooks/use-editor-store';
import { ComponentDefinition } from '@/types';

interface DroppableComponentProps {
  component: ComponentDefinition;
  isSelected: boolean;
}

const DroppableComponent: React.FC<DroppableComponentProps> = ({ component, isSelected }) => {
  const selectComponent = useEditorStore(state => state.selectComponent);
  const updateComponentContent = useEditorStore(state => state.updateComponentContent);
  const removeComponent = useEditorStore(state => state.removeComponent);
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectComponent(component.id);
  };
  
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeComponent(component.id);
  };
  
  const handleContentChange = (e: any) => {
    updateComponentContent(component.id, e.target.value);
  };
  
  // Generate a preview based on component type
  const renderComponentPreview = () => {
    switch (component.type) {
      case 'heading':
        return (
          <ContentEditable
            html={component.content}
            onChange={handleContentChange}
            tagName={component.props.tagName || 'h2'}
            style={component.props.style}
            className="outline-none w-full"
          />
        );
        
      case 'text':
        return (
          <ContentEditable
            html={component.content}
            onChange={handleContentChange}
            tagName={component.props.tagName || 'p'}
            style={component.props.style}
            className="outline-none w-full"
          />
        );
        
      case 'image':
        return (
          <img
            src={component.props.attributes?.src || ''}
            alt={component.props.attributes?.alt || ''}
            style={component.props.style}
          />
        );
        
      case 'button':
        return (
          <div style={{ textAlign: 'center' }}>
            <ContentEditable
              html={component.content}
              onChange={handleContentChange}
              tagName="div"
              style={component.props.style}
              className="outline-none inline-block"
            />
          </div>
        );
        
      case 'divider':
        return <hr style={component.props.style} />;
        
      case 'spacer':
        return <div style={component.props.style}>&nbsp;</div>;
        
      case 'social':
        return (
          <div style={component.props.style} className="flex justify-center">
            {component.props.socialLinks?.map((social: any, index: number) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: social.color,
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '40px',
                  margin: '0 8px'
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        );
        
      case 'video':
        return (
          <div style={component.props.style}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden'
            }}>
              <p style={{ textAlign: 'center', color: '#666', paddingTop: '20px' }}>
                Video placeholder (URL: {component.props.attributes?.videoUrl})
              </p>
            </div>
          </div>
        );
        
      case 'section':
      case 'columns':
        // These components will be rendered separately
        return null;
        
      default:
        return <div>Unknown component: {component.type}</div>;
    }
  };
  
  return (
    <div
      className={`template-component ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {renderComponentPreview()}
      
      <div className="component-actions">
        <button className="action-button" onClick={handleRemove} title="Delete">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default DroppableComponent;