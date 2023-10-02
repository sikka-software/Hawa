import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "./Button";
// TODO: make handleClose to detect when the alert is closed from outside this component

type AlertTypes = {
  severity?: "info" | "warning" | "error" | "success";
  /** The title of the alert placed above the text of the alert. Can be used alone */
  title?: any;
  /** The text of the alert placed below the title of the alert. Can be used alone */
  text: any;
  /** The duration for the alert to stay on the screen */
  duration?: number;
  variant?:
    | "normal"
    | "solid"
    | "top-accent"
    | "left-accent"
    | "right-accent"
    | "bottom-accent";
  direction?: "rtl" | "ltr";
  actions?: [
    {
      label: string;
      onClick: any;
      variant:
        | "outline"
        | "link"
        | "default"
        | "destructive"
        | "secondary"
        | "ghost";
    }
  ];
  persistant?: boolean;
  icon?: any;
  className?: any;
};
export const Alert: React.FunctionComponent<AlertTypes> = ({
  variant = "normal",
  direction = "ltr",
  severity = "info",
  duration,
  icon,
  className,
  ...props
}) => {
  const alertRef = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (duration) {
      //To change opacity and hide the component
      const timeoutHide = setTimeout(() => {
        setClosed(true);
      }, duration);
      //To destroy the component after hiding it
      const timeoutDestroy = setTimeout(() => {
        setClosed(true);
        if (alertRef?.current) {
          alertRef?.current.removeChild(alertRef?.current.children[0]);
        }
      }, duration + 1000);

      return () => {
        clearTimeout(timeoutHide);
        clearTimeout(timeoutDestroy);
      };
    }
  }, [duration]);
  let closeButtonStyle = {
    none: "hover:hawa-bg-gray-300",
    info: "hover:hawa-bg-blue-300",
    warning: "hover:hawa-bg-yellow-300",
    error: "hover:hawa-bg-red-300",
    success: "hover:hawa-bg-green-300",
  };
  let styleVariant = {
    // normal: {
    none: "hawa-text-gray-700 hawa-bg-gray-100 dark:hawa-bg-gray-200 dark:hawa-text-gray-800",
    info: "hawa-text-blue-700 hawa-bg-blue-100 dark:hawa-bg-blue-200 dark:hawa-text-blue-800",
    warning:
      "hawa-text-yellow-700 hawa-bg-yellow-100 dark:hawa-bg-yellow-200 dark:hawa-text-yellow-800",
    error:
      "hawa-text-red-700 hawa-bg-red-100 dark:hawa-bg-red-200 dark:hawa-text-red-800",
    success:
      "hawa-text-green-700 hawa-bg-green-100 dark:hawa-bg-green-200 dark:hawa-text-green-800",
  };
  return (
    <div ref={alertRef}>
      <div
        className={clsx(
          "hawa-relative hawa-mb-4 hawa-flex hawa-flex-col hawa-rounded hawa-p-4 hawa-text-sm hawa-transition-all",
          styleVariant[severity],
          closed ? "hawa-opacity-0" : "hawa-opacity-100",
          className
        )}
        role="alert"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-row">
          {icon && (
            <div
              className={
                direction === "rtl"
                  ? "hawa-pl-2 hawa-pt-1"
                  : "hawa-pr-2 hawa-pt-1"
              }
            >
              {icon}
            </div>
          )}
          <div className="hawa-flex hawa-flex-col">
            <span
              className={clsx(
                "font-medium",
                direction === "rtl" ? "hawa-ml-8" : "hawa-mr-8"
              )}
            >
              {props.title}
            </span>
            <span>{props.text}</span>
            {props.actions && (
              <div className="hawa-mt-2 hawa-flex hawa-flex-row hawa-gap-2">
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
              "hawa-absolute  hawa-top-2 hawa-inline-flex hawa-h-9 hawa-w-9 hawa-items-center hawa-justify-center hawa-rounded-inner hawa-p-1.5 hawa-text-gray-400 hawa-transition-all  hover:hawa-text-gray-900",
              closeButtonStyle[severity],
              direction === "rtl" ? "hawa-left-2" : "hawa-right-2"
            )}
            data-dismiss-target="#alert-default"
            aria-label="Close"
            onClick={() => {
              setClosed(true);
              setTimeout(() => {
                if (alertRef?.current) {
                  alertRef?.current.removeChild(alertRef?.current.children[0]);
                }
              }, 200);
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-label="Close Icon"
              aria-hidden="true"
              className="hawa-h-5 hawa-w-5"
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
  );
};
