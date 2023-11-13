import React, { FC, forwardRef } from "react";
import { Label, LabelProps } from "./Label";
import { cn } from "../util";
import { Skeleton } from "./Skeleton";
import { PositionType } from "../types/commonTypes";

type TextFieldTypes = React.InputHTMLAttributes<HTMLInputElement> & {
  isLoading?: boolean;
  containerClassName?: string;
  margin?: "none" | "normal" | "large";
  width?: "small" | "normal" | "full" | "auto";
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;

  /** Disable/Enable multiple line text input field   */
  multiline?: boolean;
  /** The small red text under the input field to show validation.   */
  helperText?: any;
  forceHideHelperText?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** The icon inside the input field */
  icon?: any;
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean;
  //   maxLength?: any;
  iconInside?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
};
export const Input = forwardRef<HTMLInputElement, TextFieldTypes>(
  (
    {
      margin = "none",
      width = "full",
      preview = false,
      forceHideHelperText = false,
      labelProps,
      ...props
    },
    ref
  ) => {
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
      "hawa-flex hawa-max-h-fit hawa-h-fit hawa-relative hawa-flex-col hawa-justify-center hawa-gap-0";
    let defaultInputStyle =
      "hawa-block hawa-w-full hawa-rounded hawa-border hawa-transition-all hawa-bg-background hawa-p-3 hawa-text-sm ";

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
        {props.label && <Label {...labelProps}>{props.label}</Label>}
        {props.isLoading ? (
          <div className="hawa-pb-2">
            <Skeleton className="hawa-h-[40px] hawa-w-full" />
          </div>
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
                {props.startIcon && (
                  <div className="hawa-absolute hawa-start-3 hawa-top-1/2 hawa--translate-y-1/2">
                    {props.startIcon}
                  </div>
                )}
                {props.endIcon && (
                  <div className="hawa-absolute hawa-end-3 hawa-top-1/2 hawa--translate-y-1/2">
                    {props.endIcon}
                  </div>
                )}
                <input
                  required
                  dir={props.dir}
                  type={props.type}
                  value={props.value}
                  onChange={props.onChange}
                  autoComplete={props.autoComplete}
                  defaultValue={props.defaultValue}
                  placeholder={props.placeholder}
                  disabled={preview}
                  style={{ height: 40 }}
                  className={cn(
                    defaultInputStyle,
                    " dark:hawa-text-white focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0",
                    props.endIcon && "hawa-pe-9",
                    props.startIcon && "hawa-ps-9",
                    preview &&
                      "hawa-border-transparent hawa-bg-transparent hawa-px-0",
                    props.inputProps?.className
                  )}
                />
              </div>

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
            </>
          </>
        )}
        
      </div>
    );
  }
);
