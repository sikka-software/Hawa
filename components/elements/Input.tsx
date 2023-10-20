import React, { FC, PropsWithRef } from "react";
import { Label } from "./Label";
import { cn } from "../util";
import { Skeleton } from "./Skeleton";

// TODO: make icon based on direction
// TODO: Preferebly use context to pass direction rtl | ltr

type TextFieldTypes = {
  isLoading?: boolean;
  containerClassName?: string;
  margin?: "none" | "normal" | "large";
  width?: "small" | "normal" | "full" | "auto";
  /** The label of the input field   */
  label?: any;
  /** Disable/Enable multiple line text input field   */
  multiline?: boolean;
  /** The small red text under the input field to show validation or a hint.   */
  helperText?: any;
  /** The value of the input field */
  value?: any;
  props?: PropsWithRef<"input">;
  /** The type of input field. Same as the types of the HTML input element */
  type?: any;
  /** The placeholder of the input field  */
  placeholder?: any;
  defaultValue?: any;
  name?: any;
  inputProps?: any;
  onChange?: any;
  ref?: any;
  /** The icon inside the input field */
  icon?: any;
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean;
  autoComplete?: any;
  maxLength?: any;
  className?: any;
  iconInside?: React.ReactNode;
};

export const Input: FC<TextFieldTypes> = ({
  margin = "none",
  width = "full",
  preview = false,
  ...props
}) => {
  let marginStyles = {
    none: "hawa-mb-0",
    normal: "hawa-mb-3",
    large: "hawa-mb-5",
  };
  let widthStyles = {
    small: "hawa-w-full hawa-max-w-2xs",
    normal: "hawa-w-1/2",
    full: "hawa-w-full",
    auto: "",
  };

  let defaultStyle =
    "hawa-flex hawa-max-h-fit hawa-relative hawa-flex-col hawa-justify-center hawa-gap-0";
  let defaultInputStyle =
    "hawa-block hawa-w-full hawa-rounded hawa-border hawa-transition-all hawa-bg-background hawa-p-2 hawa-text-sm ";

  return (
    <div
      className={cn(
        defaultStyle,
        marginStyles[margin],
        widthStyles[width],
        props.containerClassName,
        "hawa-w-full hawa-gap-2"
      )}
    >
      {props.label && <Label>{props.label}</Label>}
      {props.isLoading ? (
        <Skeleton className="hawa-h-[40px] hawa-w-full" />
      ) : (
        <>
          <div
            className={cn(
              "hawa-absolute hawa-top-[22px] hawa-h-[0.8px] hawa-w-full hawa-bg-gray-200 hawa-transition-all dark:hawa-bg-gray-800",
              preview ? "hawa-opacity-100" : "hawa-opacity-0"
            )}
          ></div>
          <>
            <div className={cn("hawa-relative")}>
              {props.icon && (
                <div className="hawa-absolute hawa-left-3 hawa-top-1/2 hawa--translate-y-1/2">
                  {props.icon}
                </div>
              )}
              <input
                className={cn(
                  defaultInputStyle,
                  " dark:hawa-text-white",
                  props.icon && "hawa-pl-10",
                  "focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0",
                  preview &&
                    "hawa-border-transparent hawa-bg-transparent hawa-px-0",
                  props.inputProps?.className
                )}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}
                defaultValue={props.defaultValue}
                type={props.type}
                placeholder={props.placeholder}
                disabled={preview}
                style={{ height: 40 }}

              />
            </div>
            {props.iconInside && (
              <div className="hawa-absolute hawa-right-1 hawa-top-[41px]  hawa--translate-y-1/2">
                {props.iconInside}
              </div>
            )}
            {props.helperText && (
              <p className="hawa-mb-0 hawa-mt-0 hawa-text-xs hawa-text-red-600 dark:hawa-text-red-500">
                {props.helperText}
              </p>
            )}
          </>
        </>
      )}
    </div>
  );
};
