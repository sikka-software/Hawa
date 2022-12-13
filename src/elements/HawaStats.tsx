import React from "react"
import clsx from "clsx"

type StatTypes = {
  label?: string
  number?: string
  helperText?: string
  variant?: "plain" | "contained" | "outlined"
}
export const HawaStats: React.FunctionComponent<StatTypes> = (props) => {
  let defaultStyle = "flex flex-col gap-1 rounded-lg p-4 text-sm"
  let statStyles = {
    plain: "",
    contained: "bg-primary-200 w-fit",
    // outlined: "border-2 border-primary-200 w-fit",
    outlined: "ring-2 w-fit",
  }
  return (
    <div className={clsx(defaultStyle, statStyles[props.variant])}>
      <div>{props.label}</div>
      <div className="text-2xl font-bold">{props.number}</div>
      <div className="text-xs">{props.helperText}</div>
    </div>
  )
}
