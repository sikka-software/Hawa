import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { Calendar, CalendarProps } from "../calendar";
import { PopoverRoot, PopoverContent, PopoverTrigger } from "../popover";

type DatePickerProps = CalendarProps & {
  trigger: React.ReactNode;
  popoverTriggerProps?: PopoverPrimitive.PopoverTriggerProps;
  popoverContentProps?: PopoverPrimitive.PopoverContentProps;
  /**
   * Make sure this is true when DatePickerButton has forceHideHelperText set to true
   */
  required?: boolean;
};
export const DatePicker: React.FC<DatePickerProps> = ({
  trigger,
  popoverTriggerProps,
  popoverContentProps,
  required,
  ...props
}) => {
  return (
    <PopoverRoot>
      <PopoverTrigger {...popoverTriggerProps}>{trigger}</PopoverTrigger>
      <PopoverContent
        align={props.dir === "rtl" ? "end" : "start"}
        sideOffset={required ? -16 : -4}
        {...popoverContentProps}
      >
        <Calendar {...props} />
      </PopoverContent>
    </PopoverRoot>
  );
};
