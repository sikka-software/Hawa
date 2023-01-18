import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type NotFoundTypes = {
  variant?: "outlined" | "contained" | "neobrutalism"
}

export const NotFound: React.FunctionComponent<NotFoundTypes> = ({
  variant,
}) => {
  return (
    <HawaContainer variant={variant}>
      <div className="flex flex-col items-center dark:text-white">
        <div className="text-center text-6xl font-bold ">404</div>
        <div className="m-2 text-center text-xl font-bold ">Page Not Found</div>
        <div className="text-center ">
          If you're lost please contact us help@sikka.io{" "}
        </div>
        <HawaButton color="primary" width="full">
          Home
        </HawaButton>
      </div>
    </HawaContainer>
  )
}
