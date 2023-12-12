import * as React from "react";

import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";

import { DirectionType } from "@_types/commonTypes";

import { cn } from "../../util";

const toastVariants = cva(
  "hawa-group hawa-z-[900] hawa-pointer-events-auto hawa-relative hawa-flex hawa-w-full hawa-items-center hawa-justify-between hawa-overflow-hidden hawa-rounded-md hawa-border hawa-shadow-lg hawa-transition-all data-[swipe=cancel]:hawa-translate-x-0 data-[swipe=end]:hawa-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:hawa-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:hawa-transition-none data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[swipe=end]:hawa-animate-out data-[state=closed]:hawa-fade-out-80  data-[state=open]:hawa-slide-in-from-top-full data-[state=open]:sm:hawa-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "hawa-border hawa-bg-background hawa-text-foreground",
        destructive:
          "hawa-destructive hawa-group hawa-border-destructive hawa-bg-destructive hawa-text-destructive-foreground"
      },
      severity: {
        info: "hawa-info hawa-group hawa-text-info-foreground hawa-bg-info",
        warning:
          "hawa-warning hawa-group hawa-text-warning-foreground hawa-bg-warning",
        error:
          "hawa-error hawa-group hawa-border-error hawa-bg-error hawa-text-white",
        success:
          "hawa-success hawa-group hawa-text-success-foreground hawa-bg-success",
        none: ""
      }
    },

    defaultVariants: { variant: "default" }
  }
);

let sizeStyles = {
  default: "hawa-text-sm", // Update this based on the desired padding for rtl
  sm: "hawa-text-xs"
};
const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "hawa-fixed hawa-top-0 hawa-z-[100] hawa-flex hawa-max-h-screen hawa-w-full hawa-flex-col-reverse hawa-p-4 sm:hawa-bottom-0 sm:hawa-right-0 sm:hawa-top-auto sm:hawa-flex-col md:hawa-max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants> & {
      direction?: DirectionType;
    }
>(({ className, variant, severity = "none", direction, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        toastVariants({ variant, severity }),
        className,
        direction === "rtl"
          ? "data-[state=closed]:hawa-slide-out-to-left-full"
          : "data-[state=closed]:hawa-slide-out-to-right-full"
      )}
      dir={direction}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        "hawa-inline-flex hawa-h-8 hawa-shrink-0 hawa-items-center hawa-justify-center hawa-rounded-md hawa-border hawa-bg-transparent hawa-px-3 hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-colors hover:hawa-bg-secondary hover:hawa-text-secondary-foreground focus:hawa-outline-none focus:hawa-ring-2 focus:hawa-ring-ring focus:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
        "group-[.info]:hawa-border-muted/40 group-[.info]:hover:hawa-border-info/30 group-[.info]:hover:hawa-bg-info group-[.info]:hover:hawa-text-info-foreground group-[.info]:focus:hawa-ring-info",
        "group-[.error]:hawa-border-muted/40 group-[.error]:hover:hawa-border-error/30 group-[.error]:hover:hawa-bg-error group-[.error]:hover:hawa-text-error-foreground group-[.error]:focus:hawa-ring-error",
        "group-[.success]:hawa-border-muted/40 group-[.success]:hover:hawa-border-success/30 group-[.success]:hover:hawa-bg-success group-[.success]:hover:hawa-text-success-foreground group-[.success]:focus:hawa-ring-success",
        "group-[.warning]:hawa-border-muted/40 group-[.warning]:hover:hawa-border-warning/30 group-[.warning]:hover:hawa-bg-warning group-[.warning]:hover:hawa-text-warning-foreground group-[.warning]:focus:hawa-ring-warning",
        "hawa-whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      // "hawa-absolute hawa-start-2 hawa-top-2",
      // "group-hover:hawa-opacity-100",
      "hawa-opacity-100",
      "hawa-rounded-md hawa-p-1 hawa-text-foreground/50 hawa-transition-opacity hover:hawa-text-foreground focus:hawa-opacity-100 focus:hawa-outline-none focus:hawa-ring-2  group-[.destructive]:hawa-text-red-300 group-[.destructive]:hover:hawa-text-red-50 group-[.destructive]:focus:hawa-ring-red-400 group-[.destructive]:focus:hawa-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <svg
      aria-label="Close Icon"
      aria-hidden="true"
      className="hawa-icon"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & {
    size: "default" | "sm";
  }
>(({ className, size = "default", ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "hawa-select-text hawa-text-sm hawa-font-semibold",
      sizeStyles[size],
      className
    )}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & {
    size: "default" | "sm";
  }
>(({ className, size = "default", ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(
      "hawa-select-text hawa-opacity-90",
      sizeStyles[size],
      className
    )}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction
};
