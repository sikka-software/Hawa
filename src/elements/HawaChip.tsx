import { FC } from "react"
import clsx from "clsx"

type TChipTypes = {
  /** The text inside the chip */
  label: string
  /** The small icon before the chip label  */
  icon?: JSX.Element
  /** The color of the chip, must be a tailwind color */
  color?: string
  /** The size of the chip */
  size?: "small" | "normal" | "large"
  /** Enable/Disable the dot before the label of the chip */
  dot?: boolean
  /** Red/Green dot next to the label of the chip indicating online/offline or available/unavailable */
  dotType?: "available" | "unavailable"
}

export const HawaChip: FC<TChipTypes> = ({
  label,
  size = "normal",
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
