import React from "react"

type HawaApiBoxTypes = {
  lang?: any
  onClick?: any
  buttonText?: any
}
export const HawaApiBox: React.FunctionComponent<HawaApiBoxTypes> = (
  props
) => {
  let isArabic = props.lang === "ar"
  let logoElement: any = ""
  return <div>test</div>
}
