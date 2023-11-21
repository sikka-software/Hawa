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
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, labelProps, forceHideHelperText, ...props }, ref) => {
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2 hawa-h-full">
        {props.label && <Label {...labelProps}>{props.label}</Label>}
        <textarea
          className={cn(
            "hawa-flex hawa-w-full hawa-rounded-md hawa-border hawa-border-input hawa-bg-background hawa-px-3 hawa-py-2 hawa-text-sm hawa-ring-offset-background placeholder:hawa-text-muted-foreground focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
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
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
