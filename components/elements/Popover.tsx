import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../util";

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "hawa-z-50 hawa-rounded hawa-border hawa-bg-popover hawa-p-4 hawa-text-popover-foreground hawa-shadow-md hawa-outline-none data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0 data-[state=closed]:hawa-zoom-out-95 data-[state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2 dark:hawa-shadow-dark",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

interface PopoverProps {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
  disableTrigger?: any;
  open?: boolean;
}

type HawaPopoverTypes = PopoverProps &
  React.ComponentProps<typeof PopoverPrimitive.Root>;

const Popover: React.FC<HawaPopoverTypes> = ({
  trigger,
  children,
  className,
  align = "center",
  side,
  sideOffset = 4,
  open,
  disableTrigger,
  ...props
}) => (
  <PopoverPrimitive.Root open={open} {...props}>
    <PopoverPrimitive.Trigger disabled={disableTrigger}>
      {trigger}
    </PopoverPrimitive.Trigger>
    <PopoverContent
      side={side}
      className={className}
      align={align}
      sideOffset={sideOffset}
    >
      {children}
    </PopoverContent>
  </PopoverPrimitive.Root>
);

export { Popover, PopoverContent };
