import * as React from "react";

import { cn } from "@util/index";

import { Skeleton } from "@elements/skeleton";

import { Label, LabelProps } from "../label";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
  isLoading?: boolean;
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;
  forceHideHelperText?: boolean;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  showCount?: boolean;
  countPosition?: "top" | "bottom";
  classNames?: {
    textarea?: string;
  };
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      classNames,
      labelProps,
      showCount,
      forceHideHelperText,
      textareaProps,
      countPosition = "bottom",
      isLoading,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "textarea-main hawa-relative hawa-flex hawa-h-full hawa-w-full hawa-flex-col",
          !forceHideHelperText && "hawa-gap-2",
          className
        )}
      >
        <div className="hawa-flex hawa-flex-row hawa-justify-between">
          {props.label && <Label {...labelProps}>{props.label}</Label>}
          {showCount && countPosition === "top" && (
            <div
              className={
                "hawa-text-start hawa-text-xs hawa-transition-all hawa-leading-none"
              }
            >
              {textareaProps?.value ? String(textareaProps?.value).length : 0}/
              {textareaProps?.maxLength}
            </div>
          )}
        </div>
        {isLoading ? (
          <Skeleton style={{ height: 40 }} />
        ) : (
          <textarea
          {...textareaProps}
            className={cn(
              "hawa-flex hawa-min-h-[40px] hawa-h-[40px]  hawa-w-full hawa-rounded-md hawa-border hawa-border-input hawa-bg-background hawa-px-3 hawa-py-2 hawa-text-sm hawa-ring-offset-background placeholder:hawa-text-gray-400 placeholder:hawa-text-muted-foreground focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50",
              classNames?.textarea
            )}
            ref={ref}
          />
        )}
        <div className="hawa-flex hawa-flex-row hawa-justify-between">
          {/* Regular helper text */}
          {!forceHideHelperText && (
            <p
              className={cn(
                "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
                props.helperText
                  ? "hawa-h-4 hawa-opacity-100"
                  : "hawa-h-0 hawa-opacity-0"
              )}
            >
              {props.helperText}
            </p>
          )}

          {/* Character Counter */}
          {showCount && countPosition === "bottom" && (
            <div className={"hawa-text-start hawa-text-xs hawa-transition-all"}>
              {textareaProps?.value ? String(textareaProps?.value).length : 0}/
              {textareaProps?.maxLength}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
