import React from "react";

import { cn } from "@util/index";

import { DirectionType } from "@_types/commonTypes";

import { useToast } from "../../hooks/useToast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "../toast";

type ToasterProps = {
  direction?: DirectionType;
};

export function Toaster(props: ToasterProps) {
  const { toasts } = useToast();
  let isRTL = props.direction === "rtl";
  return (
    <div>
      <div>I AM INSIDE MAIN TOASTER</div>
      <ToastProvider swipeDirection={isRTL ? "left" : "right"}>
        <div>I AM INSIDE TOASTPROVIDER</div>
        {toasts.map(function ({
          id,
          title,
          description,
          size = "default",
          action,
          ...toastProps
        }) {
          return (
            <Toast direction={props.direction} key={id} {...toastProps}>
              <div>I AM INSIDE TOAST</div>
              <div
                className={cn(
                  "hawa-flex hawa-w-full hawa-flex-row hawa-gap-2",
                  action && "hawa-justify-between"
                )}
              >
                <div className="hawa-flex hawa-h-full hawa-flex-col hawa-p-2 hawa-pe-0">
                  <ToastClose />
                </div>
                <div className="hawa-mx-0 hawa-h-auto hawa-max-h-full hawa-w-px hawa-bg-primary-foreground/10"></div>
                <div
                  className={cn(
                    "hawa-flex hawa-w-full hawa-flex-row hawa-justify-between hawa-gap-2",
                    {
                      "hawa-p-4": size === "default",
                      "hawa-p-2": size === "sm"
                    }
                  )}
                >
                  <div className={"hawa-grid hawa-gap-1 hawa-text-start"}>
                    {title && <ToastTitle size={size}>{title}</ToastTitle>}
                    {description && (
                      <ToastDescription size={size}>
                        {description}
                      </ToastDescription>
                    )}
                  </div>
                  {action && (
                    <div className="hawa-flex  hawa-flex-col hawa-justify-center">
                      {action}
                    </div>
                  )}
                </div>
              </div>
            </Toast>
          );
        })}
        <ToastViewport
          className={cn("hawa-gap-2", isRTL && "hawa-fixed hawa-left-0")}
        />
      </ToastProvider>
    </div>
  );
}
