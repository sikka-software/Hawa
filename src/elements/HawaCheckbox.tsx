import React from "react"

type CheckoutTypes = {
  centered: any
  label: any
  helperText: any
}

export const HawaCheckbox: React.FunctionComponent<CheckoutTypes> = (props) => {
  return (
    <div
      className={props.centered ? "flex h-full items-center" : "flex h-full"}
    >
      <input
        type="checkbox"
        value=""
        className="h-5 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
