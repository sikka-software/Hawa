import clsx from "clsx"
import React from "react"

type TChipTypes = {
  label: string
  size?: "small" | "normal" | "large"
  icon?: JSX.Element
}
export const HawaChip: React.FunctionComponent<TChipTypes> = ({
  size = "normal",
  label,
  icon,
}) => {
  let defaultStyles =
    "flex flex-row w-fit gap-1 items-center rounded bg-blue-200 px-2.5 py-0.5  font-bold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
  let sizeStyles = {
    small: "h-fit text-xs",
    normal: "h-full leading-4 px-3 py-2 text-xs ",
    large: "",
  }
  return (
    <span className={clsx(defaultStyles, sizeStyles[size])}>
      {icon && icon}
      {label}
    </span>
  )
}
