import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../util";

type TCheckBoxTypes = {
  id: string;
  label?: any;
  sublabel?: any;
  helperText?: any;
};

type HawaCheckboxProps = TCheckBoxTypes &
  React.ComponentProps<typeof CheckboxElement>;

export const Checkbox: React.FC<HawaCheckboxProps> = ({
  id,
  label,
  sublabel,
  helperText,
  ...checkboxProps
}) => {
  return (
    <div className="hawa-items-top  hawa-flex hawa-gap-2 ">
      <CheckboxElement id={id} {...checkboxProps} />
      {(label || helperText) && (
        <div className={"hawa-grid hawa-gap-1.5 hawa-leading-none"}>
          {label && (
            <label
              role="checkbox"
              htmlFor={id}
              className={cn(
                "hawa-cursor-pointer hawa-select-none hawa-text-sm hawa-font-medium hawa-leading-none hawa-pt-0.5",
                checkboxProps.disabled &&
                  "hawa-cursor-not-allowed hawa-text-muted-foreground hawa-opacity-70 "
              )}
            >
              {label}
            </label>
          )}
          {sublabel && (
            <label
              role="checkbox"
              htmlFor={id}
              className={cn(
                "hawa-cursor-pointer hawa-select-none hawa-text-sm hawa-text-muted-foreground",
                checkboxProps.disabled &&
                  "hawa-cursor-not-allowed hawa-text-muted-foreground hawa-opacity-70"
              )}
            >
              {sublabel}
            </label>
          )}
          {helperText && !checkboxProps.disabled && (
            <label
              role="checkbox"
              htmlFor={id}
              className={cn(
                "hawa-select-none hawa-text-xs  hawa-text-red-500",
                checkboxProps.disabled &&
                  "hawa-cursor-not-allowed hawa-opacity-70"
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
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "hawa-peer hawa-h-4 hawa-w-4 hawa-shrink-0 hawa-rounded-sm hawa-border hawa-border-primary hawa-ring-offset-background focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50 data-[state=checked]:hawa-bg-primary data-[state=checked]:hawa-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "hawa-flex hawa-items-center hawa-justify-center hawa-text-current"
      )}
    >
      <svg
        aria-label="Check Mark"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="0.60em"
        width="0.60em"
      >
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
      </svg>{" "}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxElement.displayName = CheckboxPrimitive.Root.displayName;
