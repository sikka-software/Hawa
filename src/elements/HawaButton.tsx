import React, { useEffect } from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"
import { HawaTooltip } from "./HawaTooltip"
import useHover from "../hooks/useHover"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined"
  buttonID?: any
  color?: "default" | "primary" | "secondary"
  width?: "full" | "normal" | "half"
  size?: "xs" | "small" | "medium" | "large" | "noPadding" | "full"
  margins?: "none" | "1" | "2" | "3" | "4"
  tooltip?: string
  tooltipSize?: "normal" | "small" | "large"
  tooltipPosition?: "right" | "left" | "bottom" | "top"
  isLoading?: boolean
}

const baseStyles = "cursor-pointer font-medium rounded  transition-all"

const sizeStyles = {
  xs: "px-1 py-1",
  small: "text-xs px-2.5 py-1.5",
  medium: "text-sm leading-4 px-3 py-2",
  large: "text-sm px-4 py-2",
  noPadding: "p-0",
  full: "h-full max-h-full p-2",
}

const widthStyles = {
  full: "w-full flex justify-center px-5 py-2.5 text-center inline-flex items-center",
  normal:
    "w-fit dark:bg-buttonPrimary-dark dark:hover:bg-buttonPrimary-700 dark:hover:brightness-90 dark:focus:ring-buttonPrimary-500",
  half: "w-1/2",
}
const variantStyles = {
  contained: "border-transparent",
  outlined: "bg-transparent border",
}

const colorStyles = {
  contained: {
    default:
      "text-neutral-900 bg-buttonPrimary-500 hover:bg-buttonPrimary-700 bg-buttonPrimary-500 text-white",
    primary:
      "text-white bg-buttonPrimary-500 hover:bg-buttonPrimary-700 transition-all",
    secondary:
      "text-neutral-900 bg-buttonSecondary-default hover:text-white hover:bg-buttonSecondary-700",
  },
  outlined: {
    default: "text-gray-600 border-gray-600 hover:bg-gray-200",
    primary: "text-black hover:bg-gray-50",
    secondary:
      "text-secondary-800 border-secondary-800 hover:bg-buttonSecondary-700 hover:text-white",
  },
}

const disabledSyles = "cursor-default pointer-events-none"
const disabledVariantSyles = {
  contained: "text-gray-300 bg-gray-100",
  outlined: "text-gray-300 border-gray-300",
}

export function HawaButton({
  className,
  variant = "contained",
  color = "default",
  size = "medium",
  width = "normal",
  disabled = false,
  isLoading = false,
  tooltipSize = "normal",
  tooltipPosition = "top",
  margins = "2",
  tooltip,
  children,
  buttonID,
  ...props
}: ButtonProps) {
  return (
    <div
      className={clsx("relative", margins !== "none" ? `my-${margins}` : "m-0")}
    >
      <button
        id={buttonID}
        // type={props.type}
        className={
          disabled
            ? clsx(
                className,
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                widthStyles[width],
                disabledSyles,
                disabledVariantSyles[variant]
              )
            : clsx(
                className,
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                colorStyles[variant][color],
                widthStyles[width]
              )
        }
        disabled={disabled}
        onClick={props.onClick}
        // {...props}
      >
        {!isLoading ? children : <HawaSpinner size="button" />}
      </button>
      {tooltip && (
        <HawaTooltip
          position={tooltipPosition}
          size={tooltipSize}
          buttonID={buttonID}
          content={tooltip}
        />
      )}
    </div>
  )
}
