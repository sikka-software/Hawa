import React from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"

type StatTypes = {
  label?: string
  number?: string
  helperText?: string
  variant?: "plain" | "contained" | "outlined"
  isLoading?: boolean
  handleClick?: () => void
}
export const HawaStats: React.FunctionComponent<StatTypes> = (props) => {
  let defaultStyle = "flex flex-col gap-1 rounded-lg p-4 text-sm max-h-fit"
  let statStyles = {
    plain: "",
    contained: "bg-primary-200 w-fit",
    // outlined: "border-2 border-primary-200 w-fit",
    outlined: "ring-2 w-fit",
  }
  return (
    <div
      onClick={props.handleClick}
      className={clsx(defaultStyle, statStyles[props.variant])}
    >
      <div>{props.label}</div>
      {props.isLoading ? (
        <HawaSpinner />
      ) : (
        <div className="text-2xl font-bold">{props.number}</div>
      )}{" "}
      <div className="text-xs">{props.helperText}</div>
    </div>
  )
}
