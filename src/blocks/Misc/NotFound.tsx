import { FC } from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type NotFoundTypes = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts?: {
    pageNotFound?: string
    ifLost?: string
    home?: string
  }
}

export const NotFound: FC<NotFoundTypes> = ({
  variant = "contained",
  texts,
}) => {
  return (
    <HawaContainer variant={variant}>
      <div className="flex flex-col items-center dark:text-white">
        <div className="text-center text-6xl font-bold ">404</div>
        <div className="m-2 text-center text-xl font-bold ">
          {texts?.pageNotFound ?? "Page Not Found"}
        </div>
        <div className="text-center ">
          {texts?.ifLost ?? "If you're lost please contact us help@sikka.io"}
        </div>
        <HawaButton color="primary" width="full">
          {texts?.home ?? "Home"}
        </HawaButton>
      </div>
    </HawaContainer>
  )
}
