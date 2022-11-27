import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"
import { FaCheck } from "react-icons/fa"
type TEmptyState = {}

export const EmptyState: React.FunctionComponent<TEmptyState> = (props) => {
  return (
    <HawaContainer variant="outlined" centered={true}>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-3xl bg-primary-400 text-6xl font-bold">
        <FaCheck size={30} />
      </div>
      <div className="m-2 text-center text-xl font-bold">
        You're all caught up
      </div>
      <div className="text-center">
        If you're lost please contact us help@sikka.io{" "}
      </div>
      <HawaButton color="primary" width="full">
        Action
      </HawaButton>
    </HawaContainer>
  )
}
