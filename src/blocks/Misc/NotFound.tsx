import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type NotFoundTypes = {}

export const NotFound: React.FunctionComponent<NotFoundTypes> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="text-6xl font-bold">404</div>
      <div className="m-2 text-xl font-bold">Page Not Found</div>
      <HawaContainer>
        <div className="text-center">
          If you're lost please contact us help@sikka.io{" "}
        </div>
        <HawaButton color="primary" width="full">
          Home
        </HawaButton>
      </HawaContainer>
    </div>
  )
}
// NotFound.propTypes = {
//   /**
//    *  An object of all the texts in the blocks
//    */
//   texts: PropTypes.shape({
//     emailLabel: PropTypes.string,
//   }),
// }
