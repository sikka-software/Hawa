import React from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"

type TNewsletter = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts: {
    wantToStayUpdated: string
    subscribeToNewsletter: string
  }
  handleNewsletterSub: (e: string) => void
}

export const Newsletter: React.FunctionComponent<TNewsletter> = ({
  variant = "contained",
  texts,
  handleNewsletterSub,
}) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="p-4 pt-0">
        <h1 className="font-bold">{texts.wantToStayUpdated}</h1>
        <span>{texts.subscribeToNewsletter}</span>
      </div>
      <form
        className="flex flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          handleNewsletterSub(e.target[0].value)
        }}
      >
        <HawaTextField
          width="full"
          type="email"
          name="email"
          placeholder={"example@sikka.io"}
          margin="none"
        />
        <HawaButton size="full" margins="none">
          Submit
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
