// components/ui/toast.tsx
import React from 'react'; // Importação do React
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'react-feather'; // Ícone para o botão de fechar

// Tipos para as props do Toast
interface ToastProps extends ToastPrimitive.ToastProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

// Componente principal do Toast
export const Toast = ({ title, description, action, ...props }: ToastProps) => {
  return (
    <ToastPrimitive.Root
      className="bg-white rounded-lg shadow-lg p-4 relative border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      {...props}
    >
      <div className="grid gap-1">
        {title && (
          <ToastPrimitive.Title className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      {action && <div className="mt-2">{action}</div>}
      <ToastClose />
    </ToastPrimitive.Root>
  );
};

// Componente para o botão de fechar
export const ToastClose = () => (
  <ToastPrimitive.Close className="absolute top-2 right-2 rounded-md p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:text-gray-50">
    <X size={16} />
  </ToastPrimitive.Close>
);

// Exportando os componentes e tipos necessários
export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = ToastPrimitive.Viewport;
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;

// Tipos adicionais para uso externo
export type ToastActionElement = React.ReactNode;
export type ToastRootProps = ToastPrimitive.ToastProps;