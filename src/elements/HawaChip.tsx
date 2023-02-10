import clsx from "clsx"
import React from "react"

type TChipTypes = {
  label: string
  size?: "small" | "normal" | "large"
  icon?: JSX.Element
  color?: string
  dot?: boolean
  dotType?: "available" | "unavailable"
}
export const HawaChip: React.FunctionComponent<TChipTypes> = ({
  size = "normal",
  label,
  icon,
  color,
  dot,
  dotType = "available",
}) => {
  let defaultStyles =
    "flex flex-row w-fit gap-1 items-center rounded  px-2.5 py-0.5  font-bold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
  let sizeStyles = {
    small: "h-full leading-4 px-1 py-0 text-[9px] gap-0.5 ",
    normal: "h-fit text-xs",
    large: "",
  }

  let dotStyles = {
    small: "flex h-1 w-1 rounded-full",
    normal: "flex h-2 w-2 rounded-full",
    large: "flex h-3 w-3 rounded-full",
  }
  let dotTypeStyles = {
    available: "bg-green-500",
    unavailable: "bg-red-500",
  }
  return (
    <span
      className={clsx(
        defaultStyles,
        sizeStyles[size],
        color ? `bg-${color}-100 text-${color}-500` : "bg-layoutPrimary-500"
        // `bg-[${color}]`
        // `bg-[#c92424]`
      )}
    >
      {dot && (
        <span className={clsx(dotStyles[size], dotTypeStyles[dotType])}></span>
      )}
      {icon && icon}
      {label}
    </span>
  )
}
