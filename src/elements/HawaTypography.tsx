import React from "react"

type TypographyTypes = {
  children: any
}
export const HawaTypography: React.FunctionComponent<TypographyTypes> = (
  props
) => {
  return <div {...props}>{props.children}</div>
}
