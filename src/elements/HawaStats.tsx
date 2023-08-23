import React, { FC } from "react"
import clsx from "clsx"
import { HawaLoading } from "./HawaLoading"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"

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
  return (
    <Card onClick={props.handleClick} clickable={Boolean(props.handleClick)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{props.label}</CardTitle>
        {props.icon && props.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{props.number}</div>
        {props.helperText && (
          <p className="text-xs text-muted-foreground">{props.helperText}</p>
        )}
      </CardContent>
    </Card>

    // <Card>

    //   <CardContent
    //     // headless
    //     className={clsx(
    //       // defaultStyle,
    //       // widthStyles[props.width],
    //       statStyles[variant],
    //       props.handleClick ? "cursor-pointer" : "cursor-default",
    //       props.handleClick && variant === "dropshadow"
    //         ? "hover:drop-shadow-lg"
    //         : ""
    //     )}
    //     onClick={props.handleClick}
    //   >
    //     {props.icon && <div className="mb-2">{props.icon} </div>}
    //     {/* <div>{props.label}</div> */}
    //     {props.isLoading ? (
    //       <HawaLoading />
    //     ) : (
    //       <div className="text-2xl font-bold">{props.number}</div>
    //     )}
    //     {props.helperText ? (
    //       <div className="text-xs text-muted-foreground">
    //         {props.helperText}
    //       </div>
    //     ) : null}
    //   </CardContent>
    // </Card>
  )
}
