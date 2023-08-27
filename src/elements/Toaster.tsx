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
  console.log("toaster direction", props.direction)
  return (
    <ToastProvider
      swipeDirection={props.direction === "rtl" ? "left" : "right"}
    >
      {toasts.map(function ({ id, title, description, action, ...toastProps }) {
        return (
          <Toast direction={props.direction} key={id} {...toastProps}>
            <div
              className={cn(
                "grid gap-1",
                props.direction === "rtl" ? "text-right" : "text-left"
              )}
            >
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
      <ToastViewport
        className={cn("gap-2", props.direction === "rtl" && "fixed left-0")}
      />
    </ToastProvider>
  )
}
