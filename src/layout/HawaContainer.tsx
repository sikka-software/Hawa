import React from "react"
import clsx from "clsx"

type ContainerTypes = {
  maxWidth?: "full" | "small" | "normal"
  children: React.ReactNode
  variant?: "contained" | "outlined" | "neobrutalism"
  centered?: boolean
}
export const HawaContainer: React.FunctionComponent<ContainerTypes> = ({
  maxWidth = "normal",
  variant = "contained",
  centered = false,
  ...props
}) => {
  let defaultStyle = "flex w-full flex-col rounded p-4"
  let maxWidthStyles: any = {
    full: "md:max-w-xl",
    small: "md:max-w-sm w-1/3 min-w-min",
    normal: "max-w-sm md:max-w-md",
  }
  let variantStyles = {
    contained: "bg-layoutPrimary-default dark:bg-layoutPrimary-dark",
    outlined: "bg-transparent border-2 border-black w-fit",
    neobrutalism: "shadow-neobrutalism  border-4 border-black  bg-white",
  }

  return (
    <div
      className={clsx(
        defaultStyle,
        // "shadow-3xl",
        maxWidthStyles[maxWidth],
        variantStyles[variant],
        centered ? "flex items-center text-center" : ""
      )}
    >
      {props.children}
    </div>
  )
}
