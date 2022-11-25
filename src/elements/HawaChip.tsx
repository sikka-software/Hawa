import clsx from "clsx"
import React from "react"

type TChipTypes = {
  label: string
  size: "small" | "normal" | "large"
}
export const HawaChip: React.FunctionComponent<TChipTypes> = ({
  size = "normal",
  label,
}) => {
  // small: "text-xs px-2.5 py-1.5",
  // medium: "text-sm leading-4 px-3 py-2",
  // large: "text-sm px-4 py-2",
  let defaultStyles =
    "rounded-lg bg-blue-200 px-2.5 py-0.5  font-bold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
  let sizeStyles = {
    small: "h-fit text-xs",
    normal: "h-full leading-4 px-3 py-2 text-xs ",
    large: "",
  }
  return <span className={clsx(defaultStyles, sizeStyles[size])}>{label}</span>
}
