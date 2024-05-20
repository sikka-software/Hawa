import React, { FC } from "react";

import { cn } from "@util/index";

import { Button, ButtonProps } from "../button";
import { LabelProps } from "../label";

type DatePickerButtonProps = {
  label?: string;
  value?: string | React.ReactNode;
  multiple?: boolean;
  labelProps?: LabelProps;
  /** The small red text under the input field to show validation.   */
  helperText?: any;
  showHelperText?: boolean;
  buttonClassNames?: string;
  buttonProps?: ButtonProps;
};
export const DatePickerButton: FC<DatePickerButtonProps> = ({
  label,
  value,
  multiple,
  buttonClassNames,
  buttonProps,
  ...props
}) => {
  return (
    <Button
      label={label}
      labelProps={props.labelProps}
      helperText={props.helperText}
      showHelperText={props.showHelperText}
      variant={"outline"}
      title={value as string}
      className={cn(
        "!hawa-w-full hawa-flex hawa-flex-row",
        multiple && "hawa-flex-row",
        buttonClassNames,
      )}
      type="button"
      {...buttonProps}
    >
      <span
        className={cn(
          "hawa-flex hawa-flex-row hawa-gap-1 hawa-text-start hawa-me-2 hawa-truncate",
          multiple ? "hawa-flex-wrap" : "hawa-overflow-hidden",
        )}
      >
        {value}
      </span>
      <div className="hawa-ml-auto hawa-opacity-50">
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
          className="hawa-h-4 hawa-w-4"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      </div>
    </Button>
  );
};
