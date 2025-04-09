import { create } from 'zustand';
import { ComponentDefinition, ComponentType, EmailTemplate, TemplateSettings } from '@/types';
import { DEFAULT_TEMPLATE_SETTINGS, getComponentDefinitionByType, getEmptyTemplate } from '@/lib/components';
import { nanoid } from 'nanoid';

interface EditorState {
  template: EmailTemplate;
  selectedComponentId: string | null;
  isPropertiesPanelOpen: boolean;
  isComponentPanelOpen: boolean;
  isSettingsPanelOpen: boolean;
  isOutputModalOpen: boolean;
  
  // Actions
  initializeTemplate: () => void;
  addComponent: (componentType: ComponentType) => void;
  removeComponent: (componentId: string) => void;
  updateComponent: (componentId: string, updates: Partial<ComponentDefinition>) => void;
  updateComponentProps: (componentId: string, props: Partial<ComponentDefinition['props']>) => void;
  updateComponentContent: (componentId: string, content: string) => void;
  selectComponent: (componentId: string | null) => void;
  openComponentPanel: () => void;
  openPropertiesPanel: () => void;
  openSettingsPanel: () => void;
  updateTemplateSettings: (settings: Partial<TemplateSettings>) => void;
  setOutputModalOpen: (isOpen: boolean) => void;
}

const useEditorStore = create<EditorState>((set) => ({
  template: getEmptyTemplate(),
  selectedComponentId: null,
  isPropertiesPanelOpen: false,
  isComponentPanelOpen: true,
  isSettingsPanelOpen: false,
  isOutputModalOpen: false,
  
  initializeTemplate: () => {
    set({ template: getEmptyTemplate() });
  },
  
  addComponent: (componentType) => {
    set((state) => {
      const newComponent = getComponentDefinitionByType(componentType);
      return {
        template: {
          ...state.template,
          components: [...state.template.components, newComponent],
        },
        selectedComponentId: newComponent.id,
        isPropertiesPanelOpen: true,
        isComponentPanelOpen: false,
      };
    });
  },
  
  removeComponent: (componentId) => {
    set((state) => {
      const updatedComponents = state.template.components.filter(
        component => component.id !== componentId
      );
      
      return {
        template: {
          ...state.template,
          components: updatedComponents,
        },
        selectedComponentId: null,
        isPropertiesPanelOpen: false,
        isComponentPanelOpen: true,
      };
    });
  },
  
  updateComponent: (componentId, updates) => {
    set((state) => {
      const updatedComponents = state.template.components.map(component => 
        component.id === componentId 
          ? { ...component, ...updates }
          : component
      );
      
      return {
        template: {
          ...state.template,
          components: updatedComponents,
        },
      };
    });
  },
  
  updateComponentProps: (componentId, props) => {
    set((state) => {
      const updatedComponents = state.template.components.map(component => 
        component.id === componentId 
          ? { 
              ...component, 
              props: { 
                ...component.props, 
                ...props 
              } 
            }
          : component
      );
      
      return {
        template: {
          ...state.template,
          components: updatedComponents,
        },
      };
    });
  },
  
  updateComponentContent: (componentId, content) => {
    set((state) => {
      const updatedComponents = state.template.components.map(component => 
        component.id === componentId 
          ? { ...component, content }
          : component
      );
      
      return {
        template: {
          ...state.template,
          components: updatedComponents,
        },
      };
    });
  },
  
  selectComponent: (componentId) => {
    set({
      selectedComponentId: componentId,
      isPropertiesPanelOpen: componentId !== null,
      isComponentPanelOpen: componentId === null,
      isSettingsPanelOpen: false,
    });
  },
  
  openComponentPanel: () => {
    set({
      isComponentPanelOpen: true,
      isPropertiesPanelOpen: false,
      isSettingsPanelOpen: false,
    });
  },
  
  openPropertiesPanel: () => {
    set({
      isPropertiesPanelOpen: true,
      isComponentPanelOpen: false,
      isSettingsPanelOpen: false,
    });
  },
  
  openSettingsPanel: () => {
    set({
      isSettingsPanelOpen: true,
      isPropertiesPanelOpen: false,
      isComponentPanelOpen: false,
      selectedComponentId: null,
    });
  },
  
  updateTemplateSettings: (settings) => {
    set((state) => ({
      template: {
        ...state.template,
        settings: {
          ...state.template.settings,
          ...settings,
        },
      },
    }));
  },
  
  setOutputModalOpen: (isOpen) => {
    set({ isOutputModalOpen: isOpen });
  },
}));

export default useEditorStore;