import { FC } from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"

type StatTypes = {
  label?: string
  color?: string
  number?: string
  helperText?: string
  variant?: "plain" | "contained" | "outlined" | "brutalist" | "dropshadow"
  width?: "full" | "min" | "normal"
  isLoading?: boolean
  handleClick?: () => void
}
export const HawaStats: FC<StatTypes> = (props) => {
  let defaultStyle = "flex flex-col gap-1 rounded p-4 text-sm h-fit max-h-fit"
  let statStyles = {
    plain: "",
    contained: "bg-layoutPrimary-500",
    // contained: props.color ? `bg-[${props.color}]` : "bg-layoutPrimary-500",
    outlined: "ring-2 w-fit",
    neobrutalism: "shadow-neobrutalism  border-4 border-black  bg-white",
    dropshadow: "bg-white drop-shadow-md",
  }
  let widthStyles = {
    full: "w-full",
    min: "w-fit",
    normal: "w-full max-w-[200px]",
  }
  return (
    <div
      onClick={props.handleClick}
      className={clsx(
        defaultStyle,
        widthStyles[props.width],
        statStyles[props.variant]
      )}
      style={{
        backgroundColor: props.color
          ? props.color
          : props.variant === "contained"
          ? "var(--layout-primary-500)"
          : "",
      }}
    >
      <div>{props.label}</div>
      {props.isLoading ? (
        <HawaSpinner />
      ) : (
        <div className="text-2xl font-bold">{props.number}</div>
      )}{" "}
      {props.helperText && <div className="text-xs">{props.helperText}</div>}{" "}
    </div>
  )
}
