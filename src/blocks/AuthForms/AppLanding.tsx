import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout/HawaContainer"

type AppLandingTypes = {
  handleSignIn: () => void
  handleSignUp: () => void
  handleLanguage: () => void
  texts: {
    signIn: string
    signUp: string
    lang: string
  }
  size: "small" | "normal" | "full"
}
export const AppLanding: React.FunctionComponent<AppLandingTypes> = (props) => {
  return (
    <HawaContainer maxWidth={props.size}>
      {props.handleSignIn && (
        <HawaButton color="primary" width="full" onClick={props.handleSignIn}>
          {props.texts.signIn}
        </HawaButton>
      )}
      {props.handleSignUp && (
        <HawaButton color="primary" width="full" onClick={props.handleSignUp}>
          {props.texts.signUp}
        </HawaButton>
      )}
      <HawaButton color="primary" width="full" onClick={props.handleLanguage}>
        {props.texts.lang}
      </HawaButton>
    </HawaContainer>
  )
}
