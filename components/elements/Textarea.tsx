import * as React from "react";
import { cn } from "../util";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <textarea
          className={cn(
            "hawa-flex hawa-min-h-[80px] hawa-w-full hawa-rounded-md hawa-border hawa-border-input hawa-bg-background hawa-px-3 hawa-py-2 hawa-text-sm hawa-ring-offset-background placeholder:hawa-text-muted-foreground focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <p
          className={cn(
            "hawa-my-0 hawa-text-xs hawa-text-helper-color hawa-transition-all hawa-text-start",
            props.helperText
              ? "hawa-opacity-100 hawa-h-4"
              : "hawa-opacity-0 hawa-h-0"
          )}
        >
          {props.helperText}
        </p>{" "}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
