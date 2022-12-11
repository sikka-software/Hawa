import React from "react"
import clsx from "clsx"

type ContainerTypes = {
  maxWidth?: "full" | "small" | "normal"
  children: React.ReactNode
  variant?: "contained" | "outlined"
  centered?: boolean
}
export const HawaContainer: React.FunctionComponent<ContainerTypes> = ({
  maxWidth = "normal",
  variant = "contained",
  centered = false,
  ...props
}) => {
  let defaultStyle = "flex w-full flex-col rounded-xl p-4 dark:bg-gray-600"
  let maxWidthStyles: any = {
    full: "md:max-w-xl",
    small: "md:max-w-sm w-1/3 min-w-min",
    normal: "max-w-sm md:max-w-md",
  }
  let variantStyles = {
    contained: "bg-primary-300",
    outlined: "bg-transparent border-2 border-primary-200 w-fit",
  }

  return (
    <div
      className={clsx(
        defaultStyle,
        maxWidthStyles[maxWidth],
        variantStyles[variant],
        centered ? "flex items-center text-center" : ""
      )}
    >
      {props.children}
    </div>
  )
}
