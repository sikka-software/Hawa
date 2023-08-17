import React, { FC, ButtonHTMLAttributes, useState } from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"
import { HawaTooltip } from "./HawaTooltip"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined"
  feedback?: string
  tooltipDirection?: "rtl" | "ltr"
  color?: "default" | "primary" | "secondary" | "light" | "dark"
  width?: "full" | "normal" | "half"
  size?: "xs" | "small" | "medium" | "large" | "noPadding" | "full"
  margins?: "none" | "1" | "2" | "3" | "4"
  tooltip?: string
  tooltipSize?: "normal" | "small" | "large"
  tooltipPosition?:
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
  startIcon?: any
  endIcon?: any
  isLoading?: boolean
  badge?: any
  edgeCorner?: any
}

const disabledSyles = "cursor-default pointer-events-none"
const disabledVariantSyles = {
  contained: "text-gray-300 bg-gray-100",
  outlined: "text-gray-300 border-gray-300",
}
const baseStyles =
  "cursor-pointer h-[2.36rem] justify-center items-center text-center font-medium transition-all"
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
  half: "w-full text-center flex items-center justify-center h-full",
  normal:
    "w-fit dark:bg-buttonPrimary-dark dark:hover:bg-buttonPrimary-700 dark:hover:brightness-90 dark:focus:ring-buttonPrimary-500",
}
const containerWidthStyles = {
  full: "w-full flex justify-center text-center inline-flex items-center",
  half: "w-1/2",
  normal: "w-fit",
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
      "bg-buttonSecondary-500 hover:text-white hover:bg-buttonSecondary-700",
    gray: "text-neutral-900 bg-gray-200 hover:bg-gray-300",
    dark: "text-neutral-900 bg-gray-200 hover:bg-gray-300",
  },
  outlined: {
    default: "text-gray-600 border-gray-600 hover:bg-gray-200",
    primary: "text-black hover:bg-gray-50",
    secondary:
      "text-secondary-800 border-secondary-800 hover:bg-buttonSecondary-700 hover:text-white",
    gray: "border-gray-300 hover:bg-gray-200  ",
    dark: "border-gray-900 hover:bg-gray-700  ",
  },
}

export const HawaButton: FC<ButtonProps> = ({
  className,
  variant = "contained",
  color = "default",
  size = "medium",
  width = "normal",
  disabled = false,
  isLoading = false,
  tooltip,
  tooltipSize = "normal",
  tooltipPosition = "top-left",
  tooltipDirection = "ltr",
  margins = "2",
  children,
  badge,
  edgeCorner = false,
  feedback,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [buttonText, setButtonText] = useState(children)

  const handleClick = () => {
    if (feedback) {
      if (!isClicked) {
        props.onClick
        setButtonText(feedback)
        setIsClicked(true)
        console.log("hawa button clicked")
        // Reset the button text after 2 seconds (adjust the time as needed).
        setTimeout(() => {
          setButtonText(children)
          setIsClicked(false)
        }, 2000)
      }
    } else {
      props.onClick(null)
      console.log("hawa button clicked")
    }
  }

  return (
    <div
      className={clsx(
        "relative",
        margins !== "none" ? `my-${margins}` : "m-0",
        containerWidthStyles[width]
      )}
    >
      {tooltip ? (
        <HawaTooltip
          direction={tooltipDirection}
          position={tooltipPosition}
          size={tooltipSize}
          content={tooltip}
        >
          <button
            className={
              disabled
                ? clsx(
                    className,
                    baseStyles,
                    edgeCorner ? "rounded-inner" : "rounded",

                    variantStyles[variant],
                    sizeStyles[size],
                    widthStyles[width],
                    disabledSyles,
                    disabledVariantSyles[variant]
                  )
                : clsx(
                    className,
                    baseStyles,
                    edgeCorner ? "rounded-inner" : "rounded",

                    variantStyles[variant],
                    sizeStyles[size],
                    colorStyles[variant][color],
                    widthStyles[width]
                  )
            }
            disabled={disabled}
            onClick={props.onClick}
            // onClick={handleClick}
          >
            {!isLoading ? children : <HawaSpinner size="button" />}
          </button>
        </HawaTooltip>
      ) : (
        <button
          className={
            disabled
              ? clsx(
                  className,
                  baseStyles,
                  edgeCorner ? "rounded-inner" : "rounded",

                  variantStyles[variant],
                  sizeStyles[size],
                  widthStyles[width],
                  disabledSyles,
                  disabledVariantSyles[variant]
                )
              : clsx(
                  className,
                  "overflow-x-clip",
                  baseStyles,
                  edgeCorner ? "rounded-inner" : "rounded",
                  variantStyles[variant],
                  sizeStyles[size],
                  colorStyles[variant][color],
                  widthStyles[width]
                )
          }
          disabled={disabled}
          // onClick={props.onClick}
          onClick={handleClick}
        >
          {!isLoading ? (
            <div
              className={clsx(
                " s flex flex-col-reverse items-start justify-center gap-4 transition-all",
                isClicked && feedback
                  ? " -translate-y-8 pb-1 pt-1"
                  : "translate-y-0"
              )}
            >
              {isClicked && feedback ? (
                <div className="w-full  text-center">{buttonText}</div>
              ) : null}
              <div className="flex w-full flex-row items-center select-none justify-center gap-2 whitespace-nowrap">
                {props.startIcon && props.startIcon}
                {children}
                {props.endIcon && props.endIcon}
              </div>
            </div>
          ) : (
            <HawaSpinner size="button" />
          )}
        </button>
      )}
      {badge && (
        <div
          className={clsx(
            typeof badge === "boolean"
              ? "h-5 w-5"
              : typeof badge === "string"
              ? "h-5 w-7"
              : "h-6 w-6",
            "absolute -right-2 select-none -top-2 inline-flex  items-center justify-center rounded-full border-2 border-white bg-red-500 text-[9px] font-bold text-white dark:border-gray-900"
          )}
        >
          {typeof badge === "number" && badge > 100 ? "+99" : badge}
        </div>
      )}
    </div>
  )
}
