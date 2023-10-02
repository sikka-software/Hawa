import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../util";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "hawa-fixed hawa-inset-0 hawa-z-50 hawa-bg-background/80 hawa-backdrop-blur-sm data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    persist?: boolean;
  }
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      onPointerDownOutside={(e) => {
        if (props.persist) {
          e.preventDefault();
        }
      }}
      ref={ref}
      className={cn(
        "hawa-fixed hawa-left-[50%] hawa-top-[50%] hawa-z-50 hawa-grid hawa-w-full hawa-max-w-lg hawa-translate-x-[-50%] hawa-translate-y-[-50%] hawa-gap-4 hawa-border hawa-bg-background hawa-p-6 hawa-shadow-lg hawa-duration-200 data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[state=closed]:hawa-slide-out-to-left-1/2 data-[state=closed]:hawa-slide-out-to-top-[48%] data-[state=open]:hawa-slide-in-from-left-1/2 data-[state=open]:hawa-slide-in-from-top-[48%] sm:hawa-rounded md:hawa-w-full",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "hawa-absolute hawa-top-4 hawa-rounded hawa-opacity-70 hawa-ring-offset-background hawa-transition-opacity hover:hawa-opacity-100 focus:hawa-outline-none focus:hawa-ring-2 focus:hawa-ring-ring focus:hawa-ring-offset-2 disabled:hawa-pointer-events-none data-[state=open]:hawa-bg-accent data-[state=open]:hawa-text-muted-foreground",
          props.dir === "rtl" ? " hawa-left-4" : " hawa-right-4"
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
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "hawa-flex hawa-flex-col hawa-space-y-1.5 hawa-text-center sm:hawa-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "hawa-text-start hawa-text-lg hawa-font-semibold hawa-leading-none hawa-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "hawa-text-start hawa-text-sm hawa-text-muted-foreground",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "hawa-flex hawa-flex-col-reverse sm:hawa-flex-row sm:hawa-justify-end sm:hawa-gap-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
