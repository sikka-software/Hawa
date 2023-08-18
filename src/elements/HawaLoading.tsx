import React, { FC } from "react"
import clsx from "clsx"

type LoadingTypes = {
  size?: "button" | "sm" | "normal" | "lg" | "xl"
  design?: "spinner" | "dots-bounce" | "dots-pulse" | "pulse" | "spinner-dots"
  color?: any
}

export const HawaLoading: FC<LoadingTypes> = ({
  design = "spinner",
  size = "sm",
  color,
  ...props
}) => {
  let sizeStyles = {
    button: "h-4 w-4",
    sm: "h-6 w-6",
    normal: "h-8 w-8",
    lg: "h-14 w-14",
    xl: "h-24 w-24",
  }

  let animationStyles = {
    pulse: "animate-in fade-in duration-1000",
    bounce: "animate-bounce",
  }
  switch (design.split("-")[0]) {
    case "dots":
      return (
        <div className="flex flex-row space-x-2 ">
          <div
            className={clsx(
              "animate-bounce rounded-full delay-100 repeat-infinite",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],
              color ? color : "bg-buttonPrimary-500"
            )}
          ></div>
          <div
            className={clsx(
              "animate-bounce rounded-full delay-200 repeat-infinite",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],

              color ? color : "bg-buttonPrimary-500"
            )}
          ></div>
          <div
            className={clsx(
              "animate-bounce rounded-full delay-300 repeat-infinite",
              size === "button" ? "h-2 w-2" : sizeStyles[size],
              animationStyles[design.split("-")[1]],

              color ? color : "bg-buttonPrimary-500"
            )}
          ></div>
        </div>
      )

    default:
      return (
        <div className="flex flex-row gap-x-3">
          <div aria-label="Loading..." role="status">
            <svg
              className={clsx(sizeStyles[size], "animate-spin")}
              viewBox="3 3 18 18"
            >
              <path
                className="fill-gray-200"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                // className="fill-buttonPrimary-500 "
                className={color ? color : "fill-buttonPrimary-500"}
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          </div>
        </div>
      )
  }
}
