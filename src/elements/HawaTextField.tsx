import React from "react"
import clsx from "clsx"

type TextFieldTypes = {
  margin: "none" | "normal" | "large"
  width: "small" | "normal" | "full"
  label: any
  multiline: any
  helperText: any
  value: any
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
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Your message..."
        />
      ) : (
        <input
          {...props}
          className="mb-0 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
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
