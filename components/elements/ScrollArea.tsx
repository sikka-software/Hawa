import * as React from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { OrientationType } from "@_types/commonTypes";

import { cn } from "../util";

type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  orientation?: OrientationType;
};

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("hawa-relative hawa-overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="hawa-h-full hawa-w-full hawa-rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation={orientation} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "hawa-flex hawa-touch-none hawa-select-none hawa-transition-colors",
      orientation === "vertical" &&
        "hawa-h-full hawa-w-2.5 hawa-border-l hawa-border-l-transparent hawa-p-[1px]",
      orientation === "horizontal" &&
        "hawa-h-2.5 hawa-border-t hawa-border-t-transparent hawa-p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        "hawa-relative hawa-rounded-full hawa-bg-border",
        orientation === "vertical" && "hawa-flex-1"
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
