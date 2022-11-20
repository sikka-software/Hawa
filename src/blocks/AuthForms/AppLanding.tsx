import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout/HawaContainer"

type AppLandingTypes = {
  handleSignIn: any
  handleSignUp: any
  handleLanguage: any
  texts: {
    signIn: string
    signUp: string
    lang: string
  }
}
export const AppLanding: React.FunctionComponent<AppLandingTypes> = (props) => {
  return (
    <HawaContainer>
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
