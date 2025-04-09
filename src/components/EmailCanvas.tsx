import React from 'react';
import { useDrop } from 'react-dnd';
import useEditorStore from '@/hooks/use-editor-store';
import DroppableComponent from './DroppableComponent';
import { ComponentType } from '@/types';

const EmailCanvas: React.FC = () => {
  const template = useEditorStore((state) => state.template);
  const selectedComponentId = useEditorStore((state) => state.selectedComponentId);
  const addComponent = useEditorStore((state) => state.addComponent);
  const selectComponent = useEditorStore((state) => state.selectComponent);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item: { componentType: ComponentType }) => {
      addComponent(item.componentType);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  const handleCanvasClick = () => {
    selectComponent(null);
  };

  return (
    <div className="w-full lg:w-2/3 bg-gray-50 overflow-auto p-4" onClick={handleCanvasClick}>
      <div 
        ref={drop}
        className={`bg-white mx-auto max-w-3xl shadow-sm rounded-md border border-gray-200 min-h-[600px] relative ${
          isOver ? 'bg-[#EFD6FF] border-[#8E33FF]' : ''
        }`}
        style={{ width: `${template.settings.width}px`, maxWidth: '100%' }}
      >
        <div className="p-6 flex flex-col gap-2">
          {template.components.length === 0 ? (
            <div className="text-center py-10 text-gray-600 border-2 border-dashed border-[#DB7BD0] rounded-md">
              <i className="fas fa-arrow-right text-[#E61DAB] text-3xl mb-2"></i>
              <p className="text-lg">Drag components from the right panel</p>
              <p className="text-sm">or</p>
              <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white hover:from-[#F1136C] hover:to-[#5119B7] rounded transition">
                <i className="fas fa-upload mr-2"></i> Import Template
              </button>
            </div>
          ) : (
            template.components.map((component) => (
              <DroppableComponent
                key={component.id}
                component={component}
                isSelected={component.id === selectedComponentId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCanvas;