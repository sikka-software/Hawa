import { FC } from "react"
import clsx from "clsx"

type SpinnerTypes = {
  size?: "button" | "sm" | "normal" | "lg" | "xl"
}

export const HawaSpinner: FC<SpinnerTypes> = ({ size = "sm", ...props }) => {
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
          "animate-spin rounded-full border-4 border-gray-400 border-t-white text-white"
        )}
      ></div>
    </div>
  )
}
