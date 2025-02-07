"use client"

import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import {
  useToast as useToastBase,
  toast as toastBase,
} from "@/components/ui/use-toast-base"

export type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
}

export function useToast() {
  const { toast, ...rest } = useToastBase()

  return {
    toast: (props: Omit<ToasterToast, "id">) => {
      toast({ ...props })
    },
    ...rest,
  }
}

export { toastBase as toast }