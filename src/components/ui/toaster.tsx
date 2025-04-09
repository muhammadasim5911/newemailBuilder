import React from 'react';
import { useToast } from '@/hooks/use-toast';

interface ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  type?: 'default' | 'success' | 'error' | 'warning';
}

const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  action,
  type = 'default',
}) => {
  const { dismiss } = useToast();

  const typeClasses = {
    default: 'bg-white text-gray-900',
    success: 'bg-green-100 text-green-900',
    error: 'bg-red-100 text-red-900',
    warning: 'bg-yellow-100 text-yellow-900',
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-lg flex items-start gap-3 ${typeClasses[type]}`}
      role="alert"
    >
      <div className="flex-1">
        {title && <div className="font-medium">{title}</div>}
        {description && <div className="text-sm mt-1">{description}</div>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
      <button
        onClick={() => dismiss(id)}
        className="ml-auto flex-shrink-0 text-gray-500 hover:text-gray-900"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
};

export const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80">
      {toasts.map((toast: any) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};