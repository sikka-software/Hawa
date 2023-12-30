import * as React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../../../packages/components/util";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-relative hawa-h-4 hawa-w-full hawa-overflow-hidden hawa-rounded hawa-bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="hawa-h-full hawa-w-full hawa-flex-1 hawa-bg-primary hawa-transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
