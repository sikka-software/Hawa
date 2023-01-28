import React from "react"
import clsx from "clsx"

import { FaSearch } from "react-icons/fa"
type TextFieldTypes = {
  margin?: "none" | "normal" | "large"
  width?: "small" | "normal" | "full"
  label?: any
  multiline?: any
  helperText?: any
  value?: any
  props?: React.PropsWithRef<"input">
  type?: any
  placeholder?: any
  defaultValue?: any
  name?: any
  inputProps?: any
  onChange?: any
  ref?: any
}

export const HawaTextField: React.FunctionComponent<TextFieldTypes> = ({
  margin = "normal",
  width = "full",
  ...props
}) => {
  let marginStyles = {
    none: "mb-0",
    normal: "mb-3",
    large: "mb-5",
  }
  let widthStyles = {
    small: "",
    normal: "",
    full: "w-full",
  }

  let defaultStyle = "flex h-fit max-h-fit flex-col justify-center"
  return (
    <div
      // ref={props.ref}
      className={clsx(defaultStyle, marginStyles[margin], widthStyles[width])}
    >
      {props.label && (
        <label
          htmlFor="first_name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {props.label}
        </label>
      )}
      {props.multiline ? (
        <textarea
          id="message"
          rows={4}
          className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={props.onChange}
          type={props.type}
          aria-label={props.label}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          value={props.value}
          {...props}
        />
      ) : props.type === "search" ? (
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <FaSearch color="gray" />
          </div>
          <input
            {...props}
            className="mb-0 block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
      ) : (
        <div>
          <input
            onChange={props.onChange}
            type={props.type}
            aria-label={props.label}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            value={props.value}
            className="mb-0 block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
      )}

      {props.helperText && (
        <p className="mb-1 mt-1 text-xs text-red-600 dark:text-red-500">
          {/* <span className="font-medium">Oh, snapp!</span> */}
          {props.helperText}
        </p>
      )}
    </div>
  )
}
