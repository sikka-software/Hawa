import clsx from "clsx"
import React, { FC, useEffect, useRef, useState } from "react"
import { HawaButton } from "./HawaButton"

type THawaSnackBar = {
  severity: "info" | "warning" | "error" | "success" | "none"
  title: string
  description: string
  handleClose?: () => void
  duration?: number
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left"
  actions?: [
    {
      label: string
      onClick: any
      variant: "contained" | "outlined"
    }
  ]
}

export const HawaSnackbar: FC<THawaSnackBar> = ({
  title,
  description,
  severity = "info",
  position = "bottom-left",
  actions,
  handleClose,
  duration,
}) => {
  let defaultStyle =
    "fixed flex flex-row items-top p-1 w-full max-w-xs rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
  let severities = {
    info: "text-blue-700 bg-blue-100",
    warning: "text-yellow-700 bg-yellow-100",
    error: "text-red-700 bg-red-100",
    success: "text-green-700 bg-green-100",
    none: "text-gray-500 bg-white ",
  }
  let positions = {
    "top-left": "top-4",
    "top-right": "top-4 right-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  }

  const [closed, setClosed] = useState(false)
  const toastRef = useRef(null)
  useEffect(() => {
    if (duration) {
      //To change opacity and hide the component
      const timeoutHide = setTimeout(() => {
        setClosed(true)
      }, duration)
      //To destroy the component after hiding it
      const timeoutDestroy = setTimeout(() => {
        setClosed(true)
        toastRef.current.removeChild(toastRef.current.children[0])
      }, duration + 1000)

      return () => {
        clearTimeout(timeoutHide)
        clearTimeout(timeoutDestroy)
      }
    }
  }, [duration])

  return (
    <div ref={toastRef}>
      <div
        id="toast-default"
        role="alert"
        className={clsx(
          defaultStyle,
          severities[severity],
          positions[position],
          "p-2 transition-all",
          closed ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="p-3">
          <div className="text-sm font-bold">{title}</div>
          <div className="text-sm font-normal">{description}</div>
          {actions && (
            <div className="mt-2 flex flex-row gap-2">
              {actions.map((act) => (
                <HawaButton
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
        <button
          type="button"
          className="inline-flex h-8 w-8 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={() => setClosed(true)}
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
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
