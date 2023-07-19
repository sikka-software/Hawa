import { FC } from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"

type TNewsletter = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts: {
    wantToStayUpdated: string
    subscribeToNewsletter: string
    submit: string
  }
  handleNewsletterSub: (e: string) => void
}

export const Newsletter: FC<TNewsletter> = ({
  variant = "contained",
  texts,
  handleNewsletterSub,
}) => {
  return (
    <HawaContainer variant={variant} centered={true}>
      <div className="p-4 pt-0">
        <h1 className="font-bold">
          {texts?.wantToStayUpdated ?? "Want to stay updated?"}
        </h1>
        <span>
          {texts?.subscribeToNewsletter ?? "Subscribe to our newsletter"}
        </span>
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
        <HawaButton  margins="none">
          {texts?.submit ?? "Submit"}
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
