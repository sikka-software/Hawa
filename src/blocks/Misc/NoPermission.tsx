import React, { FC } from "react"
import { HawaContainer } from "../../layout"
import { FaLock } from "react-icons/fa"

type TNoPermission = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts?: {
    title: string
    subtitle: string
  }
}

export const NoPermission: FC<TNoPermission> = ({
  variant = "contained",
  texts,
}) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="flex flex-col items-center justify-center text-center dark:text-white">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-3xl bg-buttonPrimary-300 text-6xl font-bold">
          <FaLock size={20} color="white" />
        </div>
        <div className="m-2 text-xl font-bold">
          {texts?.title ?? "You don't have permission"}
        </div>
        <div>
          {texts?.subtitle ??
            "If you think this is a problem please contact your administrator or our customer support"}
        </div>
      </div>
    </HawaContainer>
  )
}
