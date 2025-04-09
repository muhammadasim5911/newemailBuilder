import React from 'react';
import useEditorStore from '@/hooks/use-editor-store';

const Header: React.FC = () => {
  const {
    isComponentPanelOpen,
    isPropertiesPanelOpen,
    isSettingsPanelOpen,
    openComponentPanel,
    openPropertiesPanel,
    openSettingsPanel,
    setOutputModalOpen,
  } = useEditorStore();
  
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              <span className="text-primary font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E61DAB] to-[#8E33FF]">Public Circles</span>
              <span className="ml-2 text-lg">Email Builder</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-1">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isComponentPanelOpen
                    ? 'bg-[#EFD6FF] text-[#8E33FF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={openComponentPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-th-large text-xs"></i>
                  Components
                </span>
              </button>
              
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isPropertiesPanelOpen
                    ? 'bg-[#EFD6FF] text-[#8E33FF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={openPropertiesPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-sliders-h text-xs"></i>
                  Properties
                </span>
              </button>
              
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isSettingsPanelOpen
                    ? 'bg-[#EFD6FF] text-[#8E33FF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={openSettingsPanel}
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-cog text-xs"></i>
                  Settings
                </span>
              </button>
            </nav>
            
            <div>
              <button 
                className="px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white rounded-md hover:from-[#F1136C] hover:to-[#5119B7] transition-all shadow-sm hover:shadow"
                onClick={() => setOutputModalOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save HTML
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;