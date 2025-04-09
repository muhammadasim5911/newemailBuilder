import React, { useState } from 'react';
import { COMPONENT_ITEMS } from '@/lib/components';
import DraggableComponent from './DraggableComponent';

const ComponentPanel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter components based on search term
  const filteredComponents = COMPONENT_ITEMS.filter(component => 
    component.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group components by category
  const layoutComponents = filteredComponents.filter(component => component.category === 'layout');
  const contentComponents = filteredComponents.filter(component => component.category === 'content');
  const advancedComponents = filteredComponents.filter(component => component.category === 'advanced');
  
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E61DAB] focus:border-transparent"
        />
      </div>
      
      {layoutComponents.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Layout</h3>
          <div className="grid grid-cols-2 gap-2">
            {layoutComponents.map((component) => (
              <DraggableComponent key={component.type} component={component} />
            ))}
          </div>
        </div>
      )}
      
      {contentComponents.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Content</h3>
          <div className="grid grid-cols-2 gap-2">
            {contentComponents.map((component) => (
              <DraggableComponent key={component.type} component={component} />
            ))}
          </div>
        </div>
      )}
      
      {advancedComponents.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Advanced</h3>
          <div className="grid grid-cols-2 gap-2">
            {advancedComponents.map((component) => (
              <DraggableComponent key={component.type} component={component} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentPanel;