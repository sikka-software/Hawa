import { FC } from "react"
import clsx from "clsx"

type SwitchTypes = {
  text?: any
  size?: "small" | "normal" | "large"
}

export const HawaSwitch: FC<SwitchTypes> = ({ size = "normal", ...props }) => {
  let sizeStyles = {
    small: "",
    normal:
      "peer-checked:after:translate-x-full h-6 w-11 after:top-[2px] after:left-[2px] after:h-5 after:w-5 ",
    large:
      "peer-checked:after:translate-x-[2.445rem]  h-10 w-20 after:top-[2px] after:left-[2px] after:h-9 after:w-9",
  }
  return (
    <label
      htmlFor="default-toggle"
      className="relative inline-flex cursor-pointer items-center"
    >
      <input
        type="checkbox"
        value=""
        id="default-toggle"
        className="peer sr-only"
      />
      <div
        className={clsx(
          sizeStyles[size],
          "peer rounded-full bg-gray-200 after:absolute  after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-buttonPrimary-500  peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-buttonPrimary-700"
        )}
      ></div>
      {props.text && (
        <span className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.text}
        </span>
      )}
    </label>
  )
}
