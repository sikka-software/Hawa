import React from "react"
import clsx from "clsx"
type ContainerTypes = {
  maxWidth: "full" | "small" | "normal"
  children: any
}
export const HawaContainer: React.FunctionComponent<ContainerTypes> = (
  props
) => {
  let defaultStyle =
    "flex w-full max-w-sm flex-col rounded-xl bg-primary-300 p-4 dark:bg-gray-600"
  let maxWidthStyles = {
    full: "md:max-w-xl",
    small: "md:max-w-sm",
    normal: "md:max-w-md",
  }
  return (
    <div className={clsx(defaultStyle, maxWidthStyles[props.maxWidth])}>
      {props.children}
    </div>
  )
}
