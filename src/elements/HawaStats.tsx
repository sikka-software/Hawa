import React, { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import { Skeleton } from "./Skeleton"

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
        {props.isLoading ? (
          <Skeleton className="h-8 w-3/4" />
        ) : (
          <div className="text-2xl font-bold">{props.number}</div>
        )}
        {props.isLoading ? (
          <Skeleton className="mt-2 h-4 w-1/2" />
        ) : (
          props.helperText && (
            <p className="text-xs text-muted-foreground">{props.helperText}</p>
          )
        )}
      </CardContent>
    </Card>
  )
}
