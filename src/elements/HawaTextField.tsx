import React, { FC, PropsWithRef } from "react"
import { Label } from "./Label"
import { cn } from "../util"

// TODO: make icon based on direction
// TODO: Preferebly use context to pass direction rtl | ltr

type TextFieldTypes = {
  margin?: "none" | "normal" | "large"
  width?: "small" | "normal" | "full"
  /** The label of the input field   */
  label?: any
  /** Disable/Enable multiple line text input field   */
  multiline?: boolean
  /** The small red text under the input field to show validation or a hint.   */
  helpertext?: any
  /** The value of the input field */
  value?: any
  props?: PropsWithRef<"input">
  /** The type of input field. Same as the types of <input/> component   */
  type?: any
  /** The placeholder of the input field  */
  placeholder?: any
  defaultValue?: any
  name?: any
  inputProps?: any
  onChange?: any
  ref?: any
  /** The icon inside the input field */
  icon?: any
  /** Boolean to enable/disable editing the input field and using it as a text field   */
  preview?: boolean
  autoComplete?: any
  maxLength?: any
}

export const HawaTextField: FC<TextFieldTypes> = ({
  margin = "normal",
  width = "full",
  preview = false,
  ...props
}) => {
  let marginStyles = {
    none: "mb-0",
    normal: "mb-3",
    large: "mb-5",
  }
  let widthStyles = {
    small: "w-full max-w-2xs",
    normal: "w-1/2",
    full: "w-full",
  }

  let defaultStyle = "flex max-h-fit relative flex-col justify-center gap-2"
  let defaultInputStyle =
    "block w-full rounded border transition-all bg-background p-2 text-sm text-black dark:text-white focus:border-blue-500 focus:ring-blue-500"
  let previewInputStyle =
    "block w-full rounded bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  // "mb-0 block w-full rounded border border-gray-300 bg-gray-50 p-2  text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",

  return (
    <div className={cn(defaultStyle, marginStyles[margin], widthStyles[width])}>
      {props.label && <Label>{props.label}</Label>}
      <div
        className={cn(
          "absolute top-[22px] h-[0.8px] w-full bg-gray-200 transition-all dark:bg-gray-800",
          preview ? "opacity-100" : "opacity-0"
        )}
      ></div>
      <>
        <div className={cn("relative")}>
          {props.icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {props.icon}
            </div>
          )}
          <input
            {...props}
            className={cn(
              defaultInputStyle,
              props.icon && "pl-10",
              preview && "border-transparent bg-transparent px-0" 
            )}
            disabled={preview}
          />
        </div>

        {props.helpertext ? (
          <p className="mb-0 mt-1 text-xs text-red-600 dark:text-red-500">
            {props.helpertext}
          </p>
        ) : null}
      </>
    </div>
  )
}
