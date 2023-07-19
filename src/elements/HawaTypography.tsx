import { FC } from "react"

type TypographyTypes = {
  children: any
  align?: any
}
export const HawaTypography: FC<TypographyTypes> = (props) => {
  return <div>{props.children}</div>
}
