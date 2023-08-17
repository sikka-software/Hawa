import React, { FC } from "react"
import { HawaContainer } from "../../layout"

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
        <svg
    stroke="currentColor"
    fill="white"
    stroke-width="0"
    viewBox="0 0 448 512"
    height="0.35em"
    width="0.35em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
  </svg>        </div>
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
