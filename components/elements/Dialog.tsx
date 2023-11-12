import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../util";
import { Loading } from "./Loading";
import { DirectionType } from "../types/commonTypes";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
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
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    persist?: boolean;
  }
>(({ className, children, persist, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      onPointerDownOutside={(e) => {
        if (persist) {
          e.preventDefault();
        }
      }}
      ref={ref}
      className={cn(
        "hawa-fixed hawa-left-[50%] hawa-transition-all hawa-top-[50%] hawa-z-50 hawa-grid hawa-w-full hawa-max-w-lg hawa-translate-x-[-50%] hawa-translate-y-[-50%] hawa-gap-4 hawa-border hawa-bg-background hawa-p-6 hawa-shadow-lg hawa-duration-200 data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[state=closed]:hawa-slide-out-to-left-1/2 data-[state=closed]:hawa-slide-out-to-top-[48%] data-[state=open]:hawa-slide-in-from-left-1/2 data-[state=open]:hawa-slide-in-from-top-[48%] sm:hawa-rounded md:hawa-w-full",
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

const DialogCarouselContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    persist?: boolean;
    onPrev?: () => void;
  }
>(({ className, children, onPrev, persist, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      onPointerDownOutside={(e) => {
        if (persist) {
          e.preventDefault();
        }
      }}
      ref={ref}
      className={cn(
        "hawa-fixed hawa-pt-14 hawa-left-[50%] hawa-transition-all hawa-top-[50%] hawa-z-50 hawa-grid hawa-w-full hawa-max-w-lg hawa-translate-x-[-50%] hawa-translate-y-[-50%] hawa-gap-4 hawa-border hawa-bg-background hawa-p-6 hawa-shadow-lg hawa-duration-200 data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[state=closed]:hawa-slide-out-to-left-1/2 data-[state=closed]:hawa-slide-out-to-top-[48%] data-[state=open]:hawa-slide-in-from-left-1/2 data-[state=open]:hawa-slide-in-from-top-[48%] sm:hawa-rounded md:hawa-w-full",
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          "hawa-w-full hawa-flex hawa-flex-row hawa-absolute hawa-top-0 hawa-p-4",
          onPrev ? "hawa-justify-between" : "hawa-justify-end"
        )}
      >
        {onPrev && (
          <div
            onClick={onPrev}
            className={cn(
              "hawa-rounded hawa-end-0 hawa-opacity-70 hawa-ring-offset-background hawa-transition-opacity hover:hawa-opacity-100 focus:hawa-outline-none focus:hawa-ring-2 focus:hawa-ring-ring focus:hawa-ring-offset-2 disabled:hawa-pointer-events-none data-[state=open]:hawa-bg-accent data-[state=open]:hawa-text-muted-foreground hawa-cursor-pointer",
              props.dir === "rtl" && "hawa-rotate-180"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="hawa-h-6 hawa-w-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        )}
        <DialogPrimitive.Close
          className={cn(
            "hawa-rounded hawa-end-0 hawa-opacity-70 hawa-ring-offset-background hawa-transition-opacity hover:hawa-opacity-100 focus:hawa-outline-none focus:hawa-ring-2 focus:hawa-ring-ring focus:hawa-ring-offset-2 disabled:hawa-pointer-events-none data-[state=open]:hawa-bg-accent data-[state=open]:hawa-text-muted-foreground ",
            props.dir === "rtl" ? " hawa-left-4" : " hawa-right-4"
          )}
        >
          <svg
            aria-label="Close Icon"
            aria-hidden="true"
            className="hawa-h-6 hawa-w-6"
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
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
));

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
interface DialogCarouselProps {
  children: React.ReactNode;
  stepsApi?: any;
  stepsRef?: any;
  direction?: DirectionType;
}
const DialogCarousel: React.FC<DialogCarouselProps> = ({
  stepsApi,
  stepsRef,
  children,
  direction,
}) => {
  React.useEffect(() => {
    if (stepsApi) {
      stepsApi.reInit();
    }
  }, [stepsApi, children]);
  return (
    <div className="hawa-overflow-hidden">
      <div ref={stepsRef} dir={direction}>
        <div
          className="hawa-flex"
          style={{
            transition: "height 0.2s",
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={cn(
                "hawa-justify-center hawa-h-fit hawa-flex hawa-items-center hawa-flex-[0_0_100%]"
              )}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
interface DialogStepsProps {
  currentStep: string;
  // TODO: update this name
  visibleStepRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}
const DialogSteps: React.FC<DialogStepsProps> = ({
  currentStep,
  visibleStepRef,
  children,
}) => {
  const [dialogHeight, setDialogHeight] = React.useState<any>(null);
  React.useEffect(() => {
    if (visibleStepRef.current) {
      setDialogHeight(visibleStepRef.current.offsetHeight);
      console.log("height is ", visibleStepRef.current.offsetHeight);
    }
  }, [currentStep, visibleStepRef]);

  return (
    <div
      className="hawa-relative hawa-overflow-clip"
      style={{
        height: dialogHeight || "fit-content",
        transition: "height 0.2s",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          ref={currentStep === `step-${index + 1}` ? visibleStepRef : null}
          className={cn(
            currentStep === `step-${index + 1}`
              ? "hawa-visible hawa-block"
              : "hawa-invisible hawa-hidden"
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
interface DialogStepProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  stepRef?: any;
}
const DialogStep: React.FC<DialogStepProps> = ({
  id,
  children,
  className,
  stepRef,
}) => {
  return (
    <div
      id={id}
      ref={stepRef}
      className={cn("hawa-w-full  hawa-px-1", className)}
    >
      {children}
    </div>
  );
};
interface DialogBodyProps {
  children: React.ReactNode;
  className?: string;
}
const DialogBody: React.FC<DialogBodyProps> = ({ children, className }) => {
  return <div className={cn("hawa-py-6", className)}>{children}</div>;
};

DialogBody.displayName = "DialogBody";
DialogStep.displayName = "DialogStep";
DialogSteps.displayName = "DialogSteps";
DialogCarousel.displayName = "DialogCarousel";
DialogCarouselContent.displayName = "DialogCarouselContent";
DialogHeader.displayName = "DialogHeader";
DialogFooter.displayName = "DialogFooter";
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogCarousel,
  DialogCarouselContent,
  DialogSteps,
  DialogStep,
  DialogBody,
  DialogDescription,
};
