import { FC } from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"
import { FaCheck } from "react-icons/fa"

type TEmptyState = {
  variant?: "outlined" | "contained" | "neobrutalism"
}

export const EmptyState: FC<TEmptyState> = ({ variant = "contained" }) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="flex flex-col items-center justify-center text-center dark:text-white">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-3xl bg-buttonPrimary-300 text-6xl font-bold">
          <FaCheck size={20} color="white" />
        </div>
        <div className="m-2 text-xl font-bold">You're all caught up</div>
        <div>If you're lost, please contact us help@sikka.io </div>
      </div>
      <HawaButton color="primary" width="full">
        Action
      </HawaButton>
    </HawaContainer>
  )
}
