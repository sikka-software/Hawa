import * as React from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined"
  color?: "default" | "primary" | "secondary"
  width?: "full" | "normal" | "half"
  size?: "small" | "medium" | "large" | "noPadding"
  margins?: "none" | "1" | "2" | "3" | "4"
  tooltip?: string
  isLoading?: boolean
}

const baseStyles = "font-medium rounded-lg"

const sizeStyles = {
  small: "text-xs px-2.5 py-1.5",
  medium: "text-sm leading-4 px-3 py-2",
  large: "text-sm px-4 py-2",
  noPadding: "p-0",
}

const widthStyles = {
  full: "w-full flex justify-center px-5 py-2.5 text-center inline-flex items-center",
  normal:
    "w-fit dark:bg-buttonPrimary-dark dark:hover:bg-buttonPrimary-dark dark:hover:brightness-90 dark:focus:ring-primary-800",
  half: "w-1/2",
}
const variantStyles = {
  contained: "border border-transparent",
  outlined: "bg-transparent border",
}

const colorStyles = {
  contained: {
    default: "text-neutral-900 hover:bg-gray-300 bg-buttonPrimary-default text-white",
    primary:
      "text-white bg-buttonPrimary-default hover:bg-buttonPrimary-darker transition-all",
    secondary:
      "text-neutral-900 bg-buttonPrimary-default hover:text-white hover:bg-secondary-700",
  },
  outlined: {
    default: "text-gray-600 border-gray-600 hover:bg-gray-200",
    primary: "text-black hover:bg-gray-50",
    secondary: "text-secondary-800 border-secondary-800 hover:bg-secondary-100",
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
  margins = "2",
  tooltip,
  children,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div
      className={clsx(
        "relative",
        margins !== "none" ? `my-${margins}` : "my-0"
      )}
    >
      {/* <div className="bg-buttonPrimary-default h-32">test</div> */}
      <button
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        className={
          disabled
            ? clsx(
                // "brightne",
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
        type={props.type}
        {...props}
      >
        {!isLoading ? (
          children
        ) : (
          // <div className="flex flex-row gap-x-3">
          //   <div className="h-5 w-5 animate-spin rounded-full  border-2 border-gray-400 border-t-white text-white"></div>
          // </div>
          <HawaSpinner />
        )}
      </button>
      {tooltip && (
        <div
          className={
            isHovered
              ? "absolute top-10 left-0 z-10 inline-block w-fit min-w-max max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              : "absolute top-10 left-0 z-10 inline-block w-fit min-w-max max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          }
        >
          {tooltip}
        </div>
      )}
    </div>
  )
}
