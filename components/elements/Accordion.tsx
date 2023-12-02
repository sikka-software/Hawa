import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../util";

export type AccordionItemProps = {
  trigger: string;
  content: string;
  disabled?: boolean;
};

type AccordionProps = {
  items: AccordionItemProps[];
  itemClassNames?: string;
  triggerclassNames?: string;
  contentclassNames?: string;
  design?: "default" | "separated";
} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(
  (
    {
      items,
      design = "default",
      itemClassNames,
      triggerclassNames,
      contentclassNames,
      className,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Root type={props.type} collapsible>
      <div
        className={cn("hawa-flex hawa-flex-col", {
          "hawa-gap-4": design === "separated",
          "hawa-gap-0": design === "default",
        })}
      >
        {items.map((item, index) => (
          <AccordionItem
            disabled={item.disabled || false}
            className={cn(itemClassNames, "hawa-rounded")}
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger
              disabled={item.disabled || false}
              className={cn(
                "hawa-transition-all",
                design === "separated"
                  ? "hawa-rounded data-[state=open]:hawa-rounded-b-none"
                  : {
                      "hawa-rounded-t": index === 0,
                      "data-[state=closed]:hawa-rounded-b":
                        index === items.length - 1,
                    },
                triggerclassNames
              )}
            >
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent
              aria-disabled={item.disabled || false}
              className={cn(
                "hawa-transition-all  hawa-border",
                design === "separated"
                  ? "hawa-rounded data-[state=open]:hawa-rounded-t-none"
                  : {
                      "data-[state=open]:hawa-rounded-b":
                        index === items.length - 1,
                    },
                contentclassNames
              )}
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </AccordionPrimitive.Root>
  )
);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="hawa-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "hawa-flex hawa-bg-muted/50  hawa-flex-1 hawa-items-center hawa-justify-between hawa-p-4 hawa-font-medium hawa-transition-all [&[data-state=open]>svg]:hawa-rotate-180",
        props.disabled ? "hawa-bg-muted/30 hawa-text-muted-foreground/50" : "hover:hawa-bg-muted",
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
        className="hawa-icon hawa-shrink-0 hawa-transition-transform hawa-duration-200"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

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
    <div className="hawa-bg-background hawa-p-4">{children}</div>
  </AccordionPrimitive.Content>
));

const AccordionRoot = AccordionPrimitive.Root;

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AccordionContent,
};
