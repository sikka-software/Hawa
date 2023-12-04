import React from "react";

import { DirectionType } from "@_types/commonTypes";

import { useToast } from "../hooks/useToast";
import { cn } from "../util";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "./Toast";

type ToasterProps = {
  direction?: DirectionType;
};

export function Toaster(props: ToasterProps) {
  const { toasts } = useToast();
  let isRTL = props.direction === "rtl";
  return (
    <ToastProvider swipeDirection={isRTL ? "left" : "right"}>
      {toasts.map(function ({ id, title, description, action, ...toastProps }) {
        return (
          <Toast direction={props.direction} key={id} {...toastProps}>
            <div className={"hawa-grid hawa-gap-1 hawa-text-start"}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport
        className={cn("hawa-gap-2", isRTL && "hawa-fixed hawa-left-0")}
      />
    </ToastProvider>
  );
}
