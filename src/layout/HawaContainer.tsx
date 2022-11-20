import React from "react"
import clsx from "clsx"

type ContainerTypes = {
  maxWidth?: "full" | "small" | "normal"
  children: React.ReactNode
}
export const HawaContainer: React.FunctionComponent<ContainerTypes> = ({
  maxWidth = "normal",
  ...props
}) => {
  let defaultStyle =
    "flex w-full max-w-sm flex-col rounded-xl bg-primary-300 p-4 dark:bg-gray-600"
  let maxWidthStyles: any = {
    full: "md:max-w-xl",
    small: "md:max-w-sm",
    normal: "md:max-w-md",
  }
  return (
    <div className={clsx(defaultStyle, maxWidthStyles[maxWidth])}>
      {props.children}
    </div>
  )
}
