import * as React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@util/index";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    unstyled?: boolean;
  }
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={
      !props.unstyled
        ? cn(
            "hawa-overflow-hidden hawa-text-sm hawa-transition-all data-[state=closed]:hawa-animate-accordion-up data-[state=open]:hawa-animate-accordion-down",
            className
          )
        : className
    }
    {...props}
  >
    <div className="hawa-bg-background hawa-p-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionContent };
