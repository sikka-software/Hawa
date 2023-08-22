import React, { FC } from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { HawaContainer } from "../../layout"
import { Input } from "../../elements/Input"
import { Button } from "../../elements/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../elements/Card"

type TLeadGenerator = {
  variant?: "outlined" | "contained" | "neobrutalism"
  texts: {
    title: string
    subtitle: string
    submit: string
  }
  handleNewsletterSub: (e: string) => void
}

export const LeadGenerator: FC<TLeadGenerator> = ({
  variant = "contained",
  texts,
  handleNewsletterSub,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{texts?.title}</CardTitle>
        <CardDescription>{texts?.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-row gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            handleNewsletterSub(e.target[0].value)
          }}
        >
          <Input type="email" name="email" placeholder="example@sikka.io" />
          <Button>{texts?.submit ?? "Submit"}</Button>
        </form>
      </CardContent>
    </Card>
  )
}
