import * as React from "react";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../packages/components/util";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "hawa-fixed hawa-inset-0 hawa-z-50 hawa-bg-background/80 hawa-backdrop-blur-sm data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));

const sheetVariants = cva(
  "hawa-fixed hawa-z-50 hawa-gap-4 hawa-bg-background hawa-p-2 hawa-shadow-lg hawa-transition hawa-ease-in-out data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-duration-300 data-[state=open]:hawa-duration-300",
  {
    variants: {
      side: {
        top: "hawa-inset-x-0 hawa-top-0 hawa-border-b data-[state=closed]:hawa-slide-out-to-top data-[state=open]:hawa-slide-in-from-top",
        bottom:
          "hawa-inset-x-0 hawa-bottom-0 hawa-border-t data-[state=closed]:hawa-slide-out-to-bottom data-[state=open]:hawa-slide-in-from-bottom",
        left: "hawa-inset-y-0 hawa-left-0 hawa-h-full hawa-w-3/4 hawa-border-r data-[state=closed]:hawa-slide-out-to-left data-[state=open]:hawa-slide-in-from-left sm:hawa-max-w-sm",
        right:
          "hawa-inset-y-0 hawa-right-0 hawa-h-full hawa-w-3/4  hawa-border-l data-[state=closed]:hawa-slide-out-to-right data-[state=open]:hawa-slide-in-from-right sm:hawa-max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  hideCloseButton?: boolean;
  persist?: boolean;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = "right", className, children, persist, hideCloseButton, ...props },
    ref
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        onPointerDownOutside={(e) => {
          if (persist) {
            e.preventDefault();
          }
        }}
        {...props}
      >
        {children}
        {!hideCloseButton && (
          <SheetPrimitive.Close
            className={cn(
              "hawa-absolute hawa-rounded-sm hawa-opacity-70 hawa-ring-offset-background hawa-transition-opacity hover:hawa-opacity-100 focus:hawa-outline-none focus:hawa-ring-2 focus:hawa-ring-ring focus:hawa-ring-offset-2 disabled:hawa-pointer-events-none data-[state=open]:hawa-bg-secondary",
              {
                "hawa-right-4 hawa-top-4": side === "left" || side === "bottom",
                "hawa-left-4 hawa-top-4": side === "right",
                "hawa-bottom-4 hawa-right-4": side === "top"
              }
            )}
          >
            <svg
              aria-label="Close Icon"
              aria-hidden="true"
              className="hawa-h-5 hawa-w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="hawa-sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "hawa-flex hawa-flex-col hawa-space-y-2 hawa-text-center sm:hawa-text-left",
      className
    )}
    {...props}
  />
);

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "hawa-flex hawa-flex-col-reverse sm:hawa-flex-row sm:hawa-justify-end sm:hawa-space-x-2",
      className
    )}
    {...props}
  />
);

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "hawa-text-lg hawa-font-semibold hawa-text-foreground",
      className
    )}
    {...props}
  />
));

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("hawa-text-sm hawa-text-muted-foreground", className)}
    {...props}
  />
));

SheetDescription.displayName = SheetPrimitive.Description.displayName;
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
SheetContent.displayName = SheetPrimitive.Content.displayName;
SheetHeader.displayName = "SheetHeader";
SheetFooter.displayName = "SheetFooter";
SheetTitle.displayName = SheetPrimitive.Title.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
};
