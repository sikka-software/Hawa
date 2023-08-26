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
import { DirectionProvider } from "@radix-ui/react-direction"

export function Toaster(props) {
  const { toasts } = useToast()

  return (
    <DirectionProvider dir={"rtl"}>
      <ToastProvider
        swipeDirection={props.direction === "rtl" ? "left" : "right"}
      >
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <Toast direction={props.direction} key={id} {...props}>
              <div className="grid gap-1">
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
    </DirectionProvider>
  )
}
