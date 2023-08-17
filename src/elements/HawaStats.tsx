import React, { FC } from "react"
import clsx from "clsx"
import { HawaSpinner } from "./HawaSpinner"
import { BsFilesAlt } from "react-icons/bs"

type StatTypes = {
  label?: string
  color?: string
  number?: string
  helperText?: string
  icon?: any
  variant?:
    | "default"
    | "plain"
    | "contained"
    | "outlined"
    | "brutalist"
    | "dropshadow"
  width?: "full" | "min" | "normal"
  isLoading?: boolean
  handleClick?: () => void
}
export const HawaStats: FC<StatTypes> = ({ variant = "default", ...props }) => {
  let defaultStyle =
    "flex transition-all flex-col gap-1 rounded p-4 text-sm h-fit max-h-fit"
  let statStyles = {
    plain: "",
    default: "border bg-card text-card-foreground shadow-sm",
    contained: "bg-layoutPrimary-500",
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
        statStyles[variant],
        props.handleClick ? "cursor-pointer" : "cursor-default",
        props.handleClick && variant === "dropshadow"
          ? "hover:drop-shadow-lg"
          : ""
      )}
      style={{
        backgroundColor: props.color
          ? props.color
          : variant === "contained"
          ? "var(--layout-primary-500)"
          : "",
      }}
    >
      {props.icon && <div className="mb-2">{props.icon} </div>}
      <div>{props.label}</div>
      {props.isLoading ? (
        <HawaSpinner />
      ) : (
        <div className="text-2xl font-bold">{props.number}</div>
      )}
      {props.helperText ? (
        <div className="text-xs text-muted-foreground">{props.helperText}</div>
      ) : null}
    </div>
  )
}
