import React from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"

type StatTypes = {
  label?: string
  number?: string
  helperText?: string
  variant?: "plain" | "contained" | "outlined"
  width?: "full" | "min" | "normal"
  isLoading?: boolean
  handleClick?: () => void
}
export const HawaStats: React.FunctionComponent<StatTypes> = (props) => {
  let defaultStyle = "flex flex-col gap-1 rounded p-4 text-sm h-fit max-h-fit"
  let statStyles = {
    plain: "",
    contained: "bg-layoutPrimary-500 w-fit",
    outlined: "ring-2 w-fit",
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
