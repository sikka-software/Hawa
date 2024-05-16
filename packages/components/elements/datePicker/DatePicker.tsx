import * as React from "react";
import {
  SelectRangeEventHandler,
  SelectSingleEventHandler,
} from "react-day-picker";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { Calendar, CalendarProps } from "../calendar";
import { PopoverRoot, PopoverContent, PopoverTrigger } from "../popover";

type DatePickerProps = CalendarProps & {
  trigger: React.ReactNode;
  popoverTriggerProps?: PopoverPrimitive.PopoverTriggerProps;
};
export const DatePicker: React.FC<DatePickerProps> = ({
  trigger,
  popoverTriggerProps,
  ...props
}) => {
  return (
    <PopoverRoot>
      <PopoverTrigger {...popoverTriggerProps}>{trigger}</PopoverTrigger>
      <PopoverContent>
        <Calendar {...props} />
      </PopoverContent>
    </PopoverRoot>
  );
};
