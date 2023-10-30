import * as React from "react";
import { cn } from "../util";
import { Tooltip } from "./Tooltip";
import { PositionType } from "../types/commonTypes";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  hint?: React.ReactNode;
  hintSide?: PositionType;
  required?: boolean;
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, hint, hintSide, required, children, ...props }, ref) => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-items-center">
      <label
        ref={ref}
        className={cn(
          "hawa-text-sm hawa-font-medium hawa-leading-none peer-disabled:hawa-cursor-not-allowed peer-disabled:hawa-opacity-70",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="hawa-text-red-500 hawa-mx-0.5">*</span>}
      </label>
      {hint && (
        <Tooltip content={hint} side={hintSide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hawa-w-[14px] hawa-h-[14px] hawa-cursor-help"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        </Tooltip>
      )}
    </div>
  )
);

Label.displayName = "Label";

export { Label };
