import React from "react"
import clsx from "clsx"
import { HawaButton } from "./HawaButton"

type AlertTypes = {
  severity: "info" | "warning" | "error" | "success"
  /** The title of the alert placed above the text of the alert. Can be used alone */
  title?: any
  /** The text of the alert placed below the title of the alert. Can be used alone */
  text: any
  // hideIcon?: any //TODO: an X button to delete the alert
  variant?:
    | "normal"
    | "solid"
    | "top-accent"
    | "left-accent"
    | "right-accent"
    | "bottom-accent"
  direction?: "rtl" | "ltr"
  actions?: [
    {
      label: string
      onClick: any
      variant: "contained" | "outlined"
    }
  ]
}
export const HawaAlert: React.FunctionComponent<AlertTypes> = ({
  variant = "normal",
  direction = "ltr",
  ...props
}) => {
  let styleVariant = {
    normal: {
      info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "top-accent": {
      info: "border-t-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-t-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-t-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-t-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "left-accent": {
      info: "border-l-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-l-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-l-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-l-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "right-accent": {
      info: "border-r-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-r-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-r-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-r-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "bottom-accent": {
      info: "border-b-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-b-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-b-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-b-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
  }
  return (
    <div
      className={clsx(
        "mb-4 flex flex-col rounded p-4 text-sm",
        styleVariant[variant][props.severity]
      )}
      role="alert"
      dir={direction}
    >
      <span className="font-medium">{props.title}</span>
      <span>{" " + props.text}</span>
      {props.actions && (
        <div className="mt-2 flex flex-row gap-2">
          {props.actions.map((act, index) => (
            <HawaButton
              key={index}
              variant={act.variant}
              onClick={act.onClick()}
              margins="none"
            >
              {act.label}
            </HawaButton>
          ))}
        </div>
      )}
    </div>
  )
}
