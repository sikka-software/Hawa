import * as React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@util/index";

import { Chip, ChipTypes } from "../chip";
import { AccordionContent } from "./AccordionContent";
import { AccordionTrigger } from "./AccordionTrigger";

export type AccordionItemProps = {
  trigger: string;
  content: React.ReactNode;
  disabled?: boolean;
  chip?: ChipTypes;
};

type AccordionProps = {
  items: AccordionItemProps[];
  itemClassNames?: string;
  triggerclassNames?: string;
  contentclassNames?: string;
  className?: string;
  design?: "default" | "separated";
  type: "single" | "multiple";
  collapsible?: boolean;
};
// & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

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
          "hawa-gap-0": design === "default"
        })}
      >
        {items.map((item, index) => (
          <AccordionPrimitive.Item
            disabled={item.disabled || false}
            className={cn(itemClassNames, "hawa-rounded")}
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger
              disabled={item.disabled || false}
              className={cn(
                "hawa-transition-all hawa-text-start",
                design === "separated"
                  ? "hawa-rounded data-[state=open]:hawa-rounded-b-none"
                  : {
                      "hawa-rounded-t": index === 0,
                      "data-[state=closed]:hawa-rounded-b":
                        index === items.length - 1
                    },
                triggerclassNames
              )}
            >
              <span
                className={cn(
                  "hawa-flex hawa-flex-row",
                  item.chip && "hawa-gap-2"
                )}
              >
                {item.trigger} {item.chip && <Chip {...item.chip} />}
              </span>
            </AccordionTrigger>
            <AccordionContent
              aria-disabled={item.disabled || false}
              className={cn(
                "hawa-border hawa-transition-all",
                design === "separated"
                  ? "hawa-rounded data-[state=open]:hawa-rounded-t-none"
                  : {
                      "data-[state=open]:hawa-rounded-b":
                        index === items.length - 1
                    },
                contentclassNames
              )}
            >
              {item.content}
            </AccordionContent>
          </AccordionPrimitive.Item>
        ))}
      </div>
    </AccordionPrimitive.Root>
  )
);

Accordion.displayName = "Accordion";

export { Accordion };
