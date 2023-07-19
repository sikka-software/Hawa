import { FC } from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"
import { FaCheck } from "react-icons/fa"

type TEmptyState = {
  variant?: "outlined" | "contained" | "neobrutalism"
  onActionClick: () => void
  texts: {
    youreCaughtUp?: string
    actionText?: string
  }
}

export const EmptyState: FC<TEmptyState> = ({
  variant = "contained",
  texts,
  onActionClick,
}) => {
  return (
    <HawaContainer variant={variant} centered={true} maxWidth="small">
      <div className="flex flex-col items-center justify-center text-center dark:text-white">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-3xl bg-buttonPrimary-300 text-6xl font-bold">
          <FaCheck size={20} color="white" />
        </div>
        <div className="m-2 text-xl font-bold">
          {texts?.youreCaughtUp ?? "You're all caught up"}
        </div>
      </div>
      <HawaButton color="primary" width="half" onClick={() => onActionClick()}>
        {texts?.actionText ?? "Go Home"}
      </HawaButton>
    </HawaContainer>
  )
}
