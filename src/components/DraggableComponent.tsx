import React from 'react';
import { useDrag } from 'react-dnd';
import { ComponentItem } from '@/types';

interface DraggableComponentProps {
  component: ComponentItem;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { componentType: component.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag}
      className={`border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md hover:border-[#DB7BD0] transition cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="p-3">
        <div className="flex items-center">
          <i className={`fas ${component.icon} text-[#E61DAB] mr-2`}></i>
          <span className="text-sm font-medium">{component.label}</span>
        </div>
        <div className="bg-gray-50 h-8 mt-2 rounded border border-gray-200 flex items-center justify-center">
          {component.type === 'heading' && (
            <div className="w-3/4 h-4 bg-[#DB7BB0] bg-opacity-40 rounded"></div>
          )}
          {component.type === 'text' && (
            <div className="flex flex-col items-center justify-center px-2 w-full">
              <div className="w-full h-1 bg-[#DB7BB0] bg-opacity-40 rounded mb-1"></div>
              <div className="w-full h-1 bg-[#DB7BB0] bg-opacity-40 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-[#DB7BB0] bg-opacity-40 rounded"></div>
            </div>
          )}
          {component.type === 'image' && (
            <i className="fas fa-mountain text-[#8E33FF]"></i>
          )}
          {component.type === 'button' && (
            <div className="px-3 py-1 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] rounded text-white text-xs">Button</div>
          )}
          {component.type === 'divider' && (
            <div className="w-3/4 h-[2px] bg-[#DB7BB0] bg-opacity-40"></div>
          )}
          {component.type === 'spacer' && (
            <div className="flex flex-col items-center justify-center w-3/4">
              <div className="w-full h-[2px] bg-[#DB7BB0] bg-opacity-40 mb-2"></div>
              <div className="w-full h-[2px] bg-[#DB7BB0] bg-opacity-40"></div>
            </div>
          )}
          {component.type === 'social' && (
            <div className="flex gap-1">
              <i className="fab fa-facebook-f text-[#8E33FF] text-xs"></i>
              <i className="fab fa-twitter text-[#8E33FF] text-xs"></i>
              <i className="fab fa-instagram text-[#8E33FF] text-xs"></i>
            </div>
          )}
          {component.type === 'section' && (
            <div className="border border-dashed border-[#8E33FF] w-3/4 h-6 rounded"></div>
          )}
          {component.type === 'columns' && (
            <div className="flex gap-1 w-3/4">
              <div className="border border-dashed border-[#8E33FF] w-1/2 h-6 rounded"></div>
              <div className="border border-dashed border-[#8E33FF] w-1/2 h-6 rounded"></div>
            </div>
          )}
          {component.type === 'video' && (
            <i className="fas fa-play text-[#8E33FF]"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default DraggableComponent;