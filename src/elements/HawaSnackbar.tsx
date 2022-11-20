import React, { FunctionComponent } from "react"

type THawaSnackBar = {
  severity: "info" | "warning" | "error" | "success" | "none"
  title: string
  description: string
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left"
}

export const HawaSnackbar: FunctionComponent<THawaSnackBar> = ({
  title,
  description,
  severity = "info",
}) => {
  let severities = {
    info: "bottom-4 fixed flex items-center p-4 w-full max-w-xs text-blue-700 bg-blue-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
    warning:
      "bottom-4 fixed flex items-center p-4 w-full max-w-xs text-yellow-700 bg-yellow-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
    error:
      "bottom-4 fixed flex items-center p-4 w-full max-w-xs text-red-700 bg-red-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
    success:
      "bottom-4 fixed flex items-center p-4 w-full max-w-xs text-green-700 bg-green-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
    none: "bottom-4 fixed flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
  }
  return (
    <div id="toast-default" role="alert" className={severities[severity]}>
      <div>
        <div className="ml-3 text-sm font-bold">{title}</div>
        <div className="ml-3 text-sm font-normal">{description}</div>
      </div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}