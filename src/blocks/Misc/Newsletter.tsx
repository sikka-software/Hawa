import React from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"
import { FaCheck } from "react-icons/fa"
type TNewsletter = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts: {
    wantToStayUpdated: string
    subscribeToNewsletter: string
  }
}

// TODO: make it a form and handle email submission

export const Newsletter: React.FunctionComponent<TNewsletter> = ({
  variant = "contained",
  texts,
}) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="p-4 pt-0">
        <h1 className="font-bold">{texts.wantToStayUpdated}</h1>
        <span>{texts.subscribeToNewsletter}</span>
      </div>
      <div className="flex flex-row gap-2">
        <HawaTextField
          width="full"
          type="email"
          placeholder={"example@sikka.io"}
          margin="none"
        />
        <HawaButton size="full" margins="none">
          Submit
        </HawaButton>
      </div>
    </HawaContainer>
  )
}
