import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@util/index";

import { RadiusType } from "@_types/commonTypes";

type CheckBoxTypes = {
  id: string;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  helperText?: any;
  size?: "xs" | "sm" | "default" | "md" | "lg" | "xl";
  radius?: RadiusType;
};

type CheckboxProps = CheckBoxTypes &
  React.ComponentProps<typeof CheckboxElement>;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  sublabel,
  helperText,
  disabled,
  size = "default",
  radius = "inherit",
  ...props
}) => {
  let labelLineHeightStyles = {
    xs: sublabel || helperText ? 0.5 : 0.1,
    sm: 0.6,
    default: 1,
    md: 0.8,
    lg: 0.9,
    xl: 1,
  };
  return (
    <div
      className={cn(
        "hawa-flex hawa-gap-2",
        size === "default" ? "hawa-items-top" : "hawa-items-center",
      )}
    >
      <CheckboxElement
        {...props}
        size={size}
        radius={radius}
        disabled={disabled}
        id={id}
      />
      {(label || helperText) && (
        <div className={"hawa-grid hawa-gap-1.5"}>
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "hawa-w-fit hawa-select-none hawa-pt-0.5 hawa-text-sm hawa-font-medium",
                disabled
                  ? "hawa-cursor-not-allowed hawa-text-muted-foreground hawa-opacity-70"
                  : "hawa-cursor-pointer",
              )}
              style={{
                // lineHeight: labelLineHeightStyles[size]

                lineHeight: 1,
              }}
            >
              {label}
            </label>
          )}
          {sublabel && (
            <label
              htmlFor={id}
              className={cn(
                "hawa-w-fit hawa-select-none hawa-text-sm hawa-text-muted-foreground",
                disabled
                  ? "hawa-cursor-not-allowed hawa-text-muted-foreground hawa-opacity-70"
                  : "hawa-cursor-pointer",
              )}
            >
              {sublabel}
            </label>
          )}
          {helperText && !disabled && (
            <label
              htmlFor={id}
              className={cn(
                "hawa-w-fit hawa-select-none hawa-text-xs hawa-text-helper-color",
                disabled && "hawa-cursor-not-allowed hawa-opacity-70",
              )}
            >
              {helperText}
            </label>
          )}
        </div>
      )}
    </div>
  );
};

const CheckboxElement = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    size?: "xs" | "sm" | "default" | "md" | "lg" | "xl";
    radius?: RadiusType;
  }
>(({ radius = "inherit", size = "default", className, ...props }, ref) => {
  let checkboxRadius = {
    none: "hawa-rounded-none",
    inherit: "hawa-rounded-sm",
    full: "hawa-rounded-full",
  };
  let checkboxSizes = {
    xs: "hawa-w-3 hawa-h-3",
    sm: "hawa-w-6 hawa-h-6",
    default: "hawa-icon",
    md: "hawa-w-8 hawa-h-8",
    lg: "hawa-w-10 hawa-h-10",
    xl: "hawa-w-12 hawa-h-12",
  };
  let checkboxIndicatorSizes = {
    xs: "0.5em",
    default: "0.60em",
    sm: "0.75em",
    md: "0.875em",
    lg: "1em",
    xl: "1.25em",
  };
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "hawa-peer hawa-shrink-0 hawa-border hawa-border-primary hawa-ring-offset-background focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50 data-[state=checked]:hawa-bg-primary data-[state=checked]:hawa-text-primary-foreground",
        checkboxSizes[size],
        checkboxRadius[radius],
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "hawa-flex hawa-items-center hawa-justify-center hawa-text-current",
        )}
      >
        <svg
          aria-label="Check Mark"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height={checkboxIndicatorSizes[size]}
          width={checkboxIndicatorSizes[size]}
          // height="0.60em"
          // width="0.60em"
        >
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>{" "}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
CheckboxElement.displayName = CheckboxPrimitive.Root.displayName;
