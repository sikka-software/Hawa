import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@util/index";

import { PositionType } from "@_types/commonTypes";

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    container?: HTMLElement | null;
  }
>(({ className, align = "center", sideOffset = 4, container, ...props }, ref) => (
  <PopoverPrimitive.Portal container={container}>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "dark:dark-shadow hawa-z-50 hawa-rounded hawa-border hawa-bg-popover hawa-text-popover-foreground hawa-shadow-md hawa-outline-none data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

interface PopoverProps {
  side?: PositionType;
  align?: "start" | "center" | "end";
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
  disableTrigger?: any;
  width?: "trigger" | "default";
  open?: boolean;
  contentProps?: PopoverPrimitive.PopoverContentProps;
  triggerProps?: PopoverPrimitive.PopoverTriggerProps;
}

type HawaPopoverTypes = PopoverProps & React.ComponentProps<typeof PopoverPrimitive.Root>;

const Popover: React.FC<HawaPopoverTypes> = ({
  trigger,
  children,
  className,
  align = "center",
  side,
  sideOffset = 4,
  open,
  width = "default",
  disableTrigger,
  contentProps,
  triggerProps,
  ...props
}) => {
  let widthStyles = {
    trigger: "var(--radix-popover-trigger-width)",
    default: "auto",
  };

  return (
    <PopoverPrimitive.Root open={open} {...props}>
      <PopoverPrimitive.Trigger className="hawa-w-full" disabled={disableTrigger} {...triggerProps}>
        {trigger}
      </PopoverPrimitive.Trigger>
      <PopoverContent
        side={side}
        className={className}
        align={align}
        sideOffset={sideOffset}
        style={{
          width: widthStyles[width],
          maxWidth: "var(--radix-popover-content-available-width)",
          maxHeight: "var(--radix-popover-content-available-height)",
        }}
        {...contentProps}
      >
        {children}
      </PopoverContent>
    </PopoverPrimitive.Root>
  );
};

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverPortal = PopoverPrimitive.Portal;
const PopoverRoot = PopoverPrimitive.Root;

export { Popover, PopoverPortal, PopoverRoot, PopoverContent, PopoverTrigger };
