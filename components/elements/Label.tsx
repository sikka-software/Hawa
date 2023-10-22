import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../util";
import { Tooltip } from "./Tooltip";

const labelVariants = cva(
  "hawa-text-sm hawa-font-medium hawa-leading-none peer-disabled:hawa-cursor-not-allowed peer-disabled:hawa-opacity-70"
);

// Define a new type that includes the hint prop
type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & {
    hint?: React.ReactNode; // Define hint prop as optional, you can make it required by removing the '?'
  };

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps // Use the new LabelProps type here
>(({ className, hint, ...props }, ref) => (
  <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-items-center  ">
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
    {hint && (
      <Tooltip content={hint} side="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          className="hawa-w-[14px] hawa-h-[14px] hawa-cursor-help"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      </Tooltip>
    )}
  </div>
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
