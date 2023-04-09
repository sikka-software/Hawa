import React from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"

type TLeadGenerator = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts: {
    title: string
    subtitle: string
    submit: string
  }
  handleNewsletterSub: (e: string) => void
}

export const LeadGenerator: React.FunctionComponent<TLeadGenerator> = ({
  variant = "contained",
  texts,
  handleNewsletterSub,
}) => {
  return (
    <HawaContainer variant={variant}>
      <div className="p-0 mb-4 pt-0">
        <h1 className="font-bold">{texts?.title}</h1>
        <span>{texts?.subtitle}</span>
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
          {texts?.submit ?? "Submit"}
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
