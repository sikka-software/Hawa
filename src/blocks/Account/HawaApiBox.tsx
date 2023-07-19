import { FC } from "react"

type HawaApiBoxTypes = {
  lang?: any
  onClick?: any
  buttonText?: any
}
export const HawaApiBox: FC<HawaApiBoxTypes> = (props) => {
  let isArabic = props.lang === "ar"
  let logoElement: any = ""
  return <div>test</div>
}
