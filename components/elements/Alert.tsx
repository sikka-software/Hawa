import React, { useRef, useState, useEffect } from "react";
import { DirectionType, SeverityType } from "../types/commonTypes";
import { Button } from "./Button";
import { cn } from "../util";

// TODO: make handleClose to detect when the alert is closed from outside this component

type AlertTypes = {
  severity?: SeverityType | "hyper" | "oceanic";
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
  direction?: DirectionType;
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
  persistent?: boolean;
  icon?: any;
  className?: any;
};

export const Alert: React.FunctionComponent<AlertTypes> = ({
  variant = "normal",
  direction = "ltr",
  severity = "none",
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
    none: "",
    info: "",
    warning: "",
    error: "",
    success: "",
    hyper: "",
    oceanic: "",
  };
  let styleVariant = {
    none: "hawa-text-gray-700 hawa-bg-gray-100 dark:hawa-bg-gray-900 ",
    info: "hawa-text-info-foreground hawa-bg-info/90",
    warning: "hawa-text-warning-foreground hawa-bg-warning/90",
    error: "hawa-text-destructive-foreground hawa-bg-destructive/90",
    success: "hawa-text-success-foreground hawa-bg-success/90",
    hyper:
      "hawa-text-white hawa-bg-gradient-to-tl hawa-from-pink-700 hawa-via-red-500 hawa-to-yellow-600 ",
    oceanic:
      "hawa-text-white hawa-bg-gradient-to-bl hawa-from-green-500 hawa-via-blue-700 hawa-to-purple-500",
  };

  return (
    <div ref={alertRef}>
      <div
        data-testid="alert"
        aria-label="Alert"
        role="alert"
        dir={direction}
        className={cn(
          "hawa-relative hawa-mb-4 hawa-flex hawa-flex-col hawa-rounded hawa-p-4 hawa-text-sm hawa-transition-all",
          styleVariant[severity],
          closed ? "hawa-opacity-0" : "hawa-opacity-100",
          className
        )}
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
              className={cn(
                "hawa-font-bold",
                direction === "rtl" ? "hawa-ml-8" : "hawa-mr-8"
              )}
            >
              {props.title}
            </span>
            <span
              className={cn(
                direction === "rtl" ? "hawa-ml-8" : "hawa-mr-8",
                props.persistent ? "hawa-w-full" : "hawa-w-[calc(100% - 40px)]"
              )}
            >
              {props.text}
            </span>
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
        {!props.persistent && (
          <button
            type="button"
            data-dismiss-target="#alert-default"
            aria-label="Close"
            className={cn(
              "hawa-absolute  hawa-top-2 hawa-inline-flex hawa-h-9 hawa-w-9 hawa-items-center hawa-justify-center hawa-rounded-inner hawa-p-1.5 hawa-transition-all  hover:hawa-text-gray-900",
              closeButtonStyle[severity],
              direction === "rtl" ? "hawa-left-2" : "hawa-right-2"
            )}
            onClick={() => {
              setClosed(true);
              setTimeout(() => {
                if (alertRef?.current) {
                  alertRef?.current.removeChild(alertRef?.current.children[0]);
                }
              }, 200);
            }}
          >
            <span className="hawa-sr-only">Close</span>
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
