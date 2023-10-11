import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../util";

type AccordionItem = {
  trigger: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ items, className, ...props }, ref) => (
  <AccordionPrimitive.Root type={props.type} collapsible>
    {items.map((item, index) => (
      <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
    ))}
  </AccordionPrimitive.Root>
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="hawa-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "hawa-flex hawa-bg-muted/50 hawa-flex-1 hover:hawa-bg-muted  hawa-items-center hawa-justify-between hawa-p-4 hawa-font-medium hawa-transition-all  [&[data-state=open]>svg]:hawa-rotate-180",
        className
      )}
      {...props}
    >
      {children}
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
        className="hawa-h-4 hawa-w-4 hawa-shrink-0 hawa-transition-transform hawa-duration-200"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      {/* <ChevronDown className="hawa-h-4 hawa-w-4 hawa-shrink-0 hawa-transition-transform hawa-duration-200" /> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "hawa-overflow-hidden  hawa-text-sm hawa-transition-all data-[state=closed]:hawa-animate-accordion-up data-[state=open]:hawa-animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="hawa-bg-background  hawa-border hawa-p-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
