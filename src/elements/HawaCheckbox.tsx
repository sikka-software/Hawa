import React from "react"

type CheckoutTypes = {
  centered?: any
  label?: any
  helperText?: any
  onChange?: any
}

export const HawaCheckbox: React.FunctionComponent<CheckoutTypes> = (props) => {
  return (
    <div
      className={
        props.centered
          ? "flex h-full items-center justify-center"
          : "flex h-full items-start"
      }
    >
      <input
        type="checkbox"
        value=""
        className="mt-0.5 border-gray-300 bg-gray-100 text-primary-600 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        {...props}
      />
      {(props.label || props.helperText) && (
        <div className="items-stat flex flex-col">
          {props.label && (
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {props.label}
            </label>
          )}
          {props.helperText && (
            <p className="mx-2 mt-1 text-xs text-red-600 dark:text-red-500">
              {props.helperText}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
