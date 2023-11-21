import * as React from "react";
import { cn } from "../util";
import { Label, LabelProps } from "./Label";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;
  forceHideHelperText?: boolean;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  showCount?: boolean;
  countPosition?: "top" | "bottom";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      labelProps,
      showCount,
      forceHideHelperText,
      textareaProps,
      countPosition = "bottom",
      ...props
    },
    ref
  ) => {
    return (
      <div className="hawa-relative hawa-flex hawa-w-full hawa-flex-col hawa-gap-2 hawa-h-full">
        {props.label && <Label {...labelProps}>{props.label}</Label>}
        <textarea
          className={cn(
            "hawa-min-h-[40px] hawa-flex hawa-w-full hawa-rounded-md hawa-border hawa-border-input hawa-bg-background hawa-px-3 hawa-py-2 hawa-text-sm hawa-ring-offset-background placeholder:hawa-text-muted-foreground focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50",
            className
          )}
          ref={ref}
          {...textareaProps}
        />
        <div className="hawa-flex hawa-flex-row hawa-justify-between">
          {/* Regular helper text */}
          {!forceHideHelperText && (
            <p
              className={cn(
                "hawa-my-0 hawa-text-xs hawa-text-helper-color hawa-transition-all hawa-text-start",
                props.helperText
                  ? "hawa-opacity-100 hawa-h-4"
                  : "hawa-opacity-0 hawa-h-0"
              )}
            >
              {props.helperText}
            </p>
          )}

          {/* Character Counter */}
          {showCount && (
            <div
              className={cn(
                " hawa-text-xs hawa-transition-all hawa-text-start ",
                {
                  "hawa-end-0 hawa-bottom-[80px] hawa-absolute hawa-translate-y-1/2":
                    countPosition === "top",
                }
              )}
            >
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
