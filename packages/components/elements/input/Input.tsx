import React, { forwardRef, useState } from "react";

import { cn } from "@util/index";

import { HelperText } from "../helperText";
import { Label, LabelProps } from "../label/Label";
import { Skeleton } from "../skeleton/Skeleton";

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isLoading?: boolean;
  isLoadingError?: boolean;
  containerClassName?: string;
  margin?: "none" | "normal" | "large";
  width?: "small" | "normal" | "full" | "auto";
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;
  hideSeparator?: boolean;
  /** The small red text under the input field to show validation.   */
  helperText?: any;
  prefixText?: any;
  forceHideHelperText?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** The icon inside the input field */
  icon?: any;
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean;
  //   maxLength?: any;
  iconInside?: React.ReactNode;
  endIcon?: React.ReactNode;
  endIconProps?: { className?: string };
  startIcon?: React.ReactNode;
  placeholder?: React.ReactNode;
  /** Show the count of characters left in the input field. Works along with maxLength prop.   */
  showCount?: boolean;
  countPosition?: "top" | "bottom" | "center";
  popup?: boolean;
  popupContent?: React.ReactNode;
  outsidePrefix?: any;
  loadingErrorMesssage?: string;
};
export const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      margin = "none",
      width = "full",
      preview = false,
      forceHideHelperText = false,
      labelProps,
      placeholder,
      showCount,
      inputProps,
      countPosition = "bottom",
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(props.value || "");

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
      "hawa-block hawa-w-full hawa-rounded hawa-border hawa-transition-all hawa-bg-background hawa-p-3 hawa-text-sm placeholder:hawa-text-muted-foreground";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;
      setValue(newValue);

      if (props.prefixText) {
        // If newValue is shorter than prefixText, set newValue to prefixText
        if (newValue.length < props.prefixText.length) {
          newValue = props.prefixText;
        } else {
          // Check if newValue starts with a substring of prefixText
          const isSubstring = props.prefixText.startsWith(newValue);

          if (!isSubstring && !newValue.startsWith(props.prefixText)) {
            newValue = `${props.prefixText}${newValue}`;
          }
        }
      }

      if (props.onChange) {
        if (props.type === "number" && props.maxLength) {
          let v = newValue.replace(/[^0-9]/g, "").slice(0, props.maxLength);
          const newEvent = { ...e, target: { ...e.target, value: v } };
          setValue(v);
          props.onChange(newEvent as React.ChangeEvent<HTMLInputElement>);
        } else {
          const newEvent = { ...e, target: { ...e.target, value: newValue } };
          setValue(newValue);
          props.onChange(newEvent as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (props.type === "number" && ["e", "E", "+", "-", "."].includes(e.key)) {
        e.preventDefault();
      }
      props.onKeyDown && props.onKeyDown(e);
    };

    return (
      <div
        className={cn(
          defaultStyle,
          marginStyles[margin],
          widthStyles[width],
          props.containerClassName,
          "hawa-w-full hawa-gap-2",
        )}
      >
        {props.label && <Label {...labelProps}>{props.label}</Label>}
        <div className="hawa-flex hawa-flex-row hawa-w-full hawa-items-center">
          {props.outsidePrefix && (
            <span className={cn("hawa-me-2 hawa-opacity-90", !forceHideHelperText && "hawa-mb-2")}>
              {props.outsidePrefix}
            </span>
          )}
          {props.isLoading ? (
            <div className="hawa-pb-2 hawa-w-full">
              <Skeleton as="input" />
            </div>
          ) : props.isLoadingError ? (
            <div className="hawa-pb-2 hawa-w-full">
              <Skeleton
                animation="none"
                className="hawa-h-[40px] hawa-w-full !hawa-bg-destructive/[0.3]"
                content={
                  <div className="hawa-flex hawa-flex-row hawa-gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hawa-text-destructive"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                    <span>
                      <span className="hawa-text-destructive">
                        {props.loadingErrorMesssage || "Error loading data"}
                      </span>
                    </span>
                  </div>
                }
              />
            </div>
          ) : (
            <>
              {!props.hideSeparator && (
                <div
                  className={cn(
                    "hawa-absolute hawa-top-[22px] hawa-h-[0.8px] hawa-w-full hawa-bg-gray-200 hawa-transition-all dark:hawa-bg-gray-800",
                    preview ? "hawa-opacity-100" : "hawa-opacity-0",
                  )}
                ></div>
              )}
              <div className="hawa-flex hawa-flex-col hawa-w-full hawa-gap-2">
                <div className={"hawa-relative"}>
                  {props.startIcon && (
                    <div className="hawa-absolute hawa-start-3 hawa-top-1/2 hawa--translate-y-1/2">
                      {props.startIcon}
                    </div>
                  )}
                  {props.endIcon && (
                    <div
                      className={cn(
                        "hawa-absolute hawa-end-3 hawa-top-1/2 hawa--translate-y-1/2",
                        props.endIconProps?.className,
                      )}
                    >
                      {props.endIcon}
                    </div>
                  )}
                  <input
                    required
                    dir={props.dir}
                    type={props.type}
                    value={props.value || value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    autoComplete={props.autoComplete}
                    defaultValue={props.defaultValue}
                    placeholder={placeholder}
                    disabled={props.disabled || preview}
                    style={{ height: 40 }}
                    maxLength={props.maxLength}
                    {...inputProps}
                    className={cn(
                      defaultInputStyle,
                      "focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0 dark:hawa-text-white",
                      {
                        "hawa-pe-9": props.endIcon,
                        "hawa-ps-9": props.startIcon,
                        "hawa-pe-[60px]": countPosition === "center",
                      },
                      preview && "hawa-border-transparent hawa-bg-transparent hawa-px-0",
                      inputProps?.className,
                    )}
                  />
                </div>

                {/* Regular helper text */}
                {!forceHideHelperText && <HelperText helperText={props.helperText} />}
                {/* Popover helper text */}
                {!props.disabled && forceHideHelperText && (
                  <div
                    className={cn(
                      "hawa-absolute hawa-end-0 hawa-top-[47px] hawa-z-20 hawa-translate-y-1/2 hawa-rounded hawa-bg-background hawa-text-start hawa-text-xs hawa-text-helper-color hawa-drop-shadow-md hawa-transition-all",
                      props.helperText ? "hawa-border hawa-p-1" : "hawa-border-none hawa-p-0",
                    )}
                  >
                    {props.helperText}
                  </div>
                )}
                {/* Character Counter */}
                {showCount && (
                  <div
                    className={cn(
                      "hawa-absolute hawa-translate-y-1/2 hawa-text-start hawa-text-xs hawa-transition-all",
                      {
                        "hawa-end-0 hawa-top-[62px]": countPosition === "bottom",
                        "hawa-bottom-[62px] hawa-end-0": countPosition === "top",
                        "hawa-end-2": countPosition === "center",
                      },
                    )}
                  >
                    {props.value ? String(props.value).length : 0}/{props.maxLength}
                  </div>
                )}

                {/* Popover helper text */}
                {/* {props.popup && (
                <div
                  className={cn(
                    "hawa-absolute hawa-top-[47px] hawa-min-h-fit hawa-w-full hawa-text-xs hawa-text-helper-color hawa-transition-all hawa-text-start hawa-rounded hawa-end-0  hawa-z-20 hawa-drop-shadow-md hawa-bg-background hawa-translate-y-1/2",
                    props.helperText
                      ? "hawa-border hawa-p-1"
                      : "hawa-border-none hawa-p-0"
                  )}
                >
                  {props.popupContent}
                </div>
              )} */}
              </div>
            </>
          )}
        </div>
      </div>
    );
  },
);
