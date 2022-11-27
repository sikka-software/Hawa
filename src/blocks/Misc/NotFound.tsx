import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type NotFoundTypes = {}

export const NotFound: React.FunctionComponent<NotFoundTypes> = (props) => {
  return (
    <HawaContainer variant="outlined">
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
        className="flex flex-col items-center"
      >
        <div className="text-center text-6xl font-bold">404</div>
        <div className="m-2 text-center text-xl font-bold">Page Not Found</div>
        <div className="text-center">
          If you're lost please contact us help@sikka.io{" "}
        </div>
        {/* <div className="flex flex-col content-center items-stretch bg-red-200"> */}
        <HawaButton color="primary" width="full">
          Home
        </HawaButton>
        {/* </div> */}
      </div>
    </HawaContainer>
  )
}
