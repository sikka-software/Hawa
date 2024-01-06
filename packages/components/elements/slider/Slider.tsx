import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@util/index";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-w-full hawa-touch-none hawa-select-none hawa-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="hawa-relative hawa-h-2 hawa-w-full hawa-grow hawa-overflow-hidden hawa-rounded-full hawa-border hawa-bg-background">
      <SliderPrimitive.Range className="hawa-absolute hawa-h-full hawa-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="hawa-block hawa-h-5 hawa-w-5 hawa-rounded-full hawa-border-2 hawa-border-primary hawa-bg-background hawa-ring-offset-background hawa-transition-colors focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
