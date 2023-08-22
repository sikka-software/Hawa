import React, { useRef, useState, useEffect } from "react"
import clsx from "clsx"
import { HawaButton } from "./HawaButton"
import { Button } from "./Button"

type AlertTypes = {
  severity: "info" | "warning" | "error" | "success"
  /** The title of the alert placed above the text of the alert. Can be used alone */
  title?: any
  /** The text of the alert placed below the title of the alert. Can be used alone */
  text: any
  /** The duration for the alert to stay on the screen */
  duration?: number
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
      variant:
        | "outline"
        | "link"
        | "default"
        | "destructive"
        | "secondary"
        | "ghost"
    }
  ]
  persistant?: boolean
  icon?: any
}
export const HawaAlert: React.FunctionComponent<AlertTypes> = ({
  variant = "normal",
  direction = "ltr",
  duration,
  icon,
  ...props
}) => {
  const alertRef = useRef(null)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (duration) {
      //To change opacity and hide the component
      const timeoutHide = setTimeout(() => {
        setClosed(true)
      }, duration)
      //To destroy the component after hiding it
      const timeoutDestroy = setTimeout(() => {
        setClosed(true)
        alertRef.current.removeChild(alertRef.current.children[0])
      }, duration + 1000)

      return () => {
        clearTimeout(timeoutHide)
        clearTimeout(timeoutDestroy)
      }
    }
  }, [duration])
  let closeButtonStyle = {
    none: "hover:bg-gray-300",
    info: "hover:bg-blue-300",
    warning: "hover:bg-yellow-300",
    error: "hover:bg-red-300",
    success: "hover:bg-green-300",
  }
  let styleVariant = {
    normal: {
      none: "text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800",
      info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "top-accent": {
      none: "border-t-4 border-gray-300 text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800",
      info: "border-t-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-t-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-t-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-t-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "left-accent": {
      none: "border-l-4 border-gray-300 text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800",
      info: "border-l-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-l-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-l-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-l-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "right-accent": {
      none: "border-r-4 border-gray-300 text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800",
      info: "border-r-4 border-blue-300 text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
      warning:
        "border-r-4 border-yellow-300  text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800",
      error:
        "border-r-4 border-red-300  text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
      success:
        "border-r-4 border-green-300  text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
    },
    "bottom-accent": {
      none: "border-b-4 border-gray-300 text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800",
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
    <div ref={alertRef}>
      <div
        className={clsx(
          "relative mb-4 flex flex-col rounded p-4 text-sm transition-all",
          styleVariant[variant][props.severity],
          closed ? "opacity-0" : "opacity-100"
        )}
        role="alert"
        dir={direction}
      >
        <div className="flex flex-row">
          {icon && (
            <div className={direction === "rtl" ? "pl-2 pt-1" : "pr-2 pt-1"}>
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            <span
              className={clsx(
                "font-medium",
                direction === "rtl" ? "ml-8" : "mr-8"
              )}
            >
              {props.title}
            </span>
            <span>{" " + props.text}</span>
            {props.actions && (
              <div className="mt-2 flex flex-row gap-2">
                {props.actions.map((act, index) => (
                  <Button
                    key={index}
                    variant={act.variant}
                    onClick={act.onClick()}
                  >
                    {act.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        {!props.persistant && (
          <button
            type="button"
            className={clsx(
              "absolute  top-2 inline-flex h-9 w-9 items-center justify-center rounded-inner p-1.5 text-gray-400 transition-all  hover:text-gray-900  dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
              closeButtonStyle[props.severity],
              direction === "rtl" ? "left-2" : "right-2"
            )}
            data-dismiss-target="#alert-default"
            aria-label="Close"
            onClick={() => {
              setClosed(true)
              setTimeout(() => {
                alertRef.current.removeChild(alertRef.current.children[0])
              }, 200)
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-label="Close Icon"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
