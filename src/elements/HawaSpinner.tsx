import clsx from "clsx"
import React from "react"
// TODO: Add different sizes
type SpinnerTypes = {
  size?: "button" | "sm" | "normal" | "lg" | "xl"
}

export const HawaSpinner: React.FunctionComponent<SpinnerTypes> = ({
  size = "sm",
  ...props
}) => {
  let sizeStyles = {
    button: "h-4 w-4",
    sm: "h-6 w-6",
    normal: "h-8 w-8",
    lg: "h-14 w-14",
    xl: "h-24 w-24",
  }
  return (
    <div className="flex flex-row gap-x-3">
      <div
        className={clsx(
          sizeStyles[size],
          "animate-spin rounded-full  border-2 border-gray-400 border-t-white text-white"
        )}
      ></div>
    </div>
  )
}
