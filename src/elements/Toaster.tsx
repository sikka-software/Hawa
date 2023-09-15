import React from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast"
import { useToast } from "../hooks/useToast"
import { cn } from "../util"

export function Toaster(props) {
  const { toasts } = useToast()
  let isRTL = props.direction === "rtl"
  return (
    <ToastProvider swipeDirection={isRTL ? "left" : "right"}>
      {toasts.map(function ({ id, title, description, action, ...toastProps }) {
        return (
          <Toast direction={props.direction} key={id} {...toastProps}>
            <div className={"grid gap-1 text-start"}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className={cn("gap-2", isRTL && "fixed left-0")} />
    </ToastProvider>
  )
}
