import React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { PositionType } from "@/types/commonTypes";

import { cn } from "../../util";

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "hawa-z-50 hawa-overflow-hidden hawa-rounded-md hawa-border hawa-bg-popover hawa-px-3 hawa-py-1.5 hawa-text-sm hawa-text-popover-foreground hawa-shadow-md hawa-animate-in hawa-fade-in-0 hawa-zoom-in-95 data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=closed]:hawa-zoom-out-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow ref={ref} className={cn(className)} {...props} />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

type TooltipTypes = {
  /** Controls the open state of the tooltip. */
  open?: any;
  /** Specifies the side where the tooltip will appear. */
  side?: PositionType;
  /** Content to be displayed within the tooltip. */
  content?: any;
  /** Elements to which the tooltip is anchored. */
  children?: any;
  /** Sets the default open state of the tooltip. */
  defaultOpen?: any;
  /** Event handler for open state changes. */
  onOpenChange?: any;
  /** Duration of the delay before the tooltip appears. */
  delayDuration?: any;
  triggerProps?: TooltipPrimitive.TooltipTriggerProps;
  contentProps?: TooltipPrimitive.TooltipContentProps;
  providerProps?: TooltipPrimitive.TooltipProviderProps;
};

const Tooltip: React.FunctionComponent<TooltipTypes> = ({
  side,
  open,
  content,
  children,
  defaultOpen,
  onOpenChange,
  triggerProps,
  contentProps,
  providerProps,
  delayDuration = 300,
  ...props
}) => {
  return (
    <TooltipPrimitive.TooltipProvider
      delayDuration={delayDuration}
      {...providerProps}
    >
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        {...props}
      >
        <TooltipPrimitive.Trigger {...triggerProps}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipContent side={side} align="center" {...contentProps}>
          {content}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};

export { Tooltip };
