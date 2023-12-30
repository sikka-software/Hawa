import * as React from "react";

import { PositionType } from "@/packages/components/types/commonTypes";

import { cn } from "../../util";
import { Tooltip } from "../tooltip";

export type LabelProps = {
  hint?: React.ReactNode;
  hintSide?: PositionType;
  htmlFor?: string;
  required?: boolean;
};

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps
>(({ className, hint, hintSide, required, children, ...props }, ref) => (
  <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-1 hawa-transition-all">
    <label
      ref={ref}
      className={cn(
        "hawa-text-sm hawa-font-medium hawa-leading-none peer-disabled:hawa-cursor-not-allowed peer-disabled:hawa-opacity-70",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="hawa-mx-0.5 hawa-text-red-500">*</span>}
    </label>
    {hint && (
      <Tooltip
        content={hint}
        side={hintSide}
        triggerProps={{
          tabIndex: -1,
          onClick: (event) => event.preventDefault()
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hawa-h-[14px] hawa-w-[14px] hawa-cursor-help"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
      </Tooltip>
    )}
  </div>
));

Label.displayName = "Label";

export { Label };
