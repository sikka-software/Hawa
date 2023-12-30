import * as React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../../packages/components/util";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    unstyled?: boolean;
    hideArrow?: boolean;
  }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="hawa-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={
        !props.unstyled
          ? cn(
              "hawa-flex hawa-flex-1 hawa-items-center hawa-justify-between hawa-bg-muted/50 hawa-p-4 hawa-font-medium hawa-transition-all [&[data-state=open]>svg]:hawa-rotate-180",
              props.disabled
                ? "hawa-bg-muted/30 hawa-text-muted-foreground/50"
                : "hover:hawa-bg-muted",
              className
            )
          : className
      }
      {...props}
    >
      {children}
      {!props.hideArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hawa-icon hawa-shrink-0 hawa-transition-transform hawa-duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export { AccordionTrigger };
