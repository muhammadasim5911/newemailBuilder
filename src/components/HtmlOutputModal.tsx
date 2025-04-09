import React, { useRef } from 'react';
import useEditorStore from '@/hooks/use-editor-store';
import { generateTemplateHtml } from '@/lib/html-generator';
import { useToast } from '@/hooks/use-toast';

const HtmlOutputModal: React.FC = () => {
  const { toast } = useToast();
  const isOpen = useEditorStore((state) => state.isOutputModalOpen);
  const setIsOpen = useEditorStore((state) => state.setOutputModalOpen);
  const template = useEditorStore((state) => state.template);
  
  const htmlContent = generateTemplateHtml(template);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (preRef.current) {
      navigator.clipboard.writeText(htmlContent)
        .then(() => {
          toast({
            title: "Copied to clipboard",
            description: "HTML has been copied to your clipboard",
          });
        })
        .catch(err => {
          toast({
            type: "error",
            title: "Copy failed",
            description: "Failed to copy HTML to clipboard",
          });
          console.error('Failed to copy text: ', err);
        });
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#E61DAB]">Public Circles - Generated HTML</h2>
          <button 
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="p-4 overflow-auto flex-1">
          <pre 
            ref={preRef}
            className="bg-[#EFD6FF] bg-opacity-20 p-4 rounded-md overflow-x-auto text-sm font-mono border border-[#C684FF]"
          >
            {htmlContent}
          </pre>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button 
            onClick={handleCopy} 
            className="px-4 py-2 bg-gradient-to-r from-[#E61DAB] to-[#8E33FF] text-white rounded-md hover:from-[#F1136C] hover:to-[#5119B7] transition-all flex items-center gap-2"
          >
            <i className="fas fa-copy"></i>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default HtmlOutputModal;