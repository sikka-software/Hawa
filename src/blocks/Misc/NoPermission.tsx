import { FC } from "react"
import { HawaContainer } from "../../layout"
import { FaLock } from "react-icons/fa"

type TNoPermission = {
  variant?: "outlined" | "contained" | "neobrutalism"
}

export const NoPermission: FC<TNoPermission> = ({ variant = "contained" }) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="flex flex-col items-center justify-center text-center dark:text-white">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-3xl bg-buttonPrimary-300 text-6xl font-bold">
          <FaLock size={20} color="white" />
        </div>
        <div className="m-2 text-xl font-bold">You don't have permission</div>
        <div>
          If you think this is a problem please contact your administrator or
          our customer support
        </div>
      </div>
      {/* <HawaButton color="primary" width="full">
        Action
      </HawaButton> */}
    </HawaContainer>
  )
}
