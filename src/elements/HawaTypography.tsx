import React from "react"

type TypographyTypes = {
  children: any
  align?: any
}
export const HawaTypography: React.FunctionComponent<TypographyTypes> = (
  props
) => {
  return <div>{props.children}</div>
}
