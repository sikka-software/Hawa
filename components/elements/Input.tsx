import React, { FC } from "react";
import { Label } from "./Label";
import { cn } from "../util";
import { Skeleton } from "./Skeleton";
import { PositionType } from "../types/commonTypes";

// TODO: make icon based on direction

// type TextFieldTypes = {
//   isLoading?: boolean;
//   containerClassName?: string;
//   margin?: "none" | "normal" | "large";
//   width?: "small" | "normal" | "full" | "auto";
//   /** The label of the input field   */
//   label?: any;
//   /** Disable/Enable multiple line text input field   */
//   multiline?: boolean;
//   /** The small red text under the input field to show validation or a hint.   */
//   helperText?: any;
//   /** The value of the input field */
//   value?: any;
//   props?: PropsWithRef<"input">;
//   /** The type of input field. Same as the types of the HTML input element */
//   type?: any;
//   /** The placeholder of the input field  */
//   placeholder?: any;
//   defaultValue?: any;
//   name?: any;
//   inputProps?: any;
//   onChange?: any;
//   ref?: any;
//   /** Boolean to enable/disable editing the input field and using it as a text field   */
//   preview?: boolean;
//   iconInside?: React.ReactNode;
// };

type TextFieldTypes = React.InputHTMLAttributes<HTMLInputElement> & {
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
  hint?: string;
  forceHideHelperText?: boolean;
  hintSide?: PositionType;
  //   /** The value of the input field */
  //   value?: any;
  //   name?: any;
  inputProps?: any;
  /** The icon inside the input field */
  icon?: any;
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean;
  //   maxLength?: any;
  iconInside?: React.ReactNode;
  /** If true, it will show a red asterisk next to the label*/
  isRequired?: boolean;
};
export const Input: FC<TextFieldTypes> = ({
  margin = "none",
  width = "full",
  preview = false,
  forceHideHelperText = false,
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
      {props.label && (
        <Label
          htmlFor={props.id}
          hint={props.hint}
          hintSide={props.hintSide}
          required={props.isRequired}
        >
          {props.label}
        </Label>
      )}
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
              {props.icon && (
                <div className="hawa-absolute hawa-left-3 hawa-top-1/2 hawa--translate-y-1/2">
                  {props.icon}
                </div>
              )}
              <input
                required
                className={cn(
                  defaultInputStyle,
                  " dark:hawa-text-white",
                  props.icon && "hawa-pl-10",
                  "focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-0",
                  preview &&
                    "hawa-border-transparent hawa-bg-transparent hawa-px-0",
                  props.inputProps?.className
                )}
                dir={props.dir}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                disabled={preview}
                style={{ height: 40 }}
              />
            </div>
            {props.iconInside && (
              <div className="hawa-absolute hawa-right-1 hawa-top-[41px] hawa-mx-1  hawa--translate-y-1/2">
                {props.iconInside}
              </div>
            )}

            {!forceHideHelperText && (
              <p
                className={cn(
                  "hawa-my-0 hawa-text-xs hawa-text-helper-color hawa-transition-all",
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
};
