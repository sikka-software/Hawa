import React, { ReactElement } from "react"

type TCheckBoxTypes = {
  centered?: boolean
  label?: any
  helperText?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const HawaCheckbox: React.FunctionComponent<TCheckBoxTypes> = (
  props
) => {
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
        onChange={(e) => props.onChange(e)}
        className="mt-0.5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        // {...props}
        aria-label={props.label}
      />
      {(props.label || props.helperText) && (
        <div className=" flex flex-col">
          {props.label && (
            <label className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
