import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

let severities = {
  info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
  warning:
    "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
  error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
  success: "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
}
type AlertTypes = {
  severity: keyof typeof severities
  title: any
  text: any
  hideIcon: any
}
export const HawaAlert: React.FunctionComponent<AlertTypes> = (props) => {
  return (
    <div
      className={clsx(
        "mb-4 flex flex-col rounded-lg p-4 text-sm",
        severities[props.severity]
      )}
      role="alert"
    >
      <span className="font-medium">{props.title}</span>
      <span>{" " + props.text}</span>
    </div>
  )
}
