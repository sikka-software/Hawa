import React, { FC } from "react"
import { HawaRadio } from "../../elements"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"
import { Icons } from "../../elements/Icons"

type AppLandingTypes = {
  texts?: {
    newUserText?: string
    createAccount?: string
    continueWithGoogle?: string
    continueWithTwitter?: string
    continueWithApple?: string
    continueWithMicrosoft?: string
    continueWithGithub?: string
    continueWithEmail?: string
    continueWithPhone?: string
  }
  viaGoogle?: boolean
  viaTwitter?: boolean
  viaGithub?: boolean
  viaMicrosoft?: boolean
  viaEmail?: boolean
  viaPhone?: boolean
  viaApple?: boolean

  withoutSignUp?: boolean
  size: "small" | "normal" | "full"
  direction: "rtl" | "ltr"
  handleSignIn: () => void
  handleSignUp: () => void
  handleLanguage: () => void
  handleColorMode: () => void
  handleRouteToSignUp?: () => void
  handleGoogle?: () => void
  handleTwitter?: () => void
  handleApple?: () => void
  handleMicrosoft?: () => void
  handleGithub?: () => void
  handleEmail?: () => void
  handlePhone?: () => void
}

export const AppLanding: FC<AppLandingTypes> = (props) => {
  return (
    <div dir={props.direction}>
      <Card>
        <CardContent headless className="flex flex-col gap-6">
          {props.viaGoogle && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleGoogle}
            >
              <Icons.google className="h-4 w-4" />
              {props.texts?.continueWithGoogle ?? "Continue With Google"}
            </Button>
          )}
          {props.viaGithub && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleGithub}
            >
              <Icons.gitHub className="h-4 w-4" />
              {props.texts?.continueWithGithub ?? "Continue With Github"}
            </Button>
          )}
          {props.viaTwitter && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleTwitter}
            >
              <Icons.twitter className="h-4 w-4" />
              {props.texts?.continueWithTwitter ?? "Continue With Twitter"}
            </Button>
          )}
          {props.viaApple && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleApple}
            >
              <Icons.apple className="h-4 w-4" />
              {props.texts?.continueWithApple ?? "Continue With Apple"}
            </Button>
          )}
          {props.viaMicrosoft && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleMicrosoft}
            >
              <Icons.microsoft className="h-4 w-4" />
              {props.texts?.continueWithMicrosoft ?? "Continue With Microsoft"}
            </Button>
          )}
          {props.viaEmail && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handleEmail}
            >
              <Icons.mail className="h-4 w-4" />
              {props.texts?.continueWithEmail ?? "Continue With Email"}
            </Button>
          )}
          {props.viaPhone && (
            <Button
              className="flex flex-row items-center gap-2"
              variant="outline"
              onClick={props.handlePhone}
            >
              <Icons.phone className="h-4 w-4" />
              {props.texts?.continueWithPhone ?? "Continue With Phone"}
            </Button>
          )}

          {!props.withoutSignUp && (
            <div className="p-3 text-center text-sm font-normal dark:text-gray-300">
              {props.texts.newUserText}
              <span
                onClick={props.handleRouteToSignUp}
                className="clickable-link"
              >
                {props.texts.createAccount}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="mt-6 flex flex-row justify-between">
        <HawaRadio
          onChangeTab={props.handleLanguage}
          design="tabs"
          options={[
            { value: "ar", label: "عربي" },
            { value: "en", label: "English" },
          ]}
        />
        <HawaRadio
          onChangeTab={props.handleColorMode}
          design="tabs"
          options={[
            {
              value: "light",
              label: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90"
                >
                  <path
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ),
            },
            {
              value: "dark",
              label: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[1.2rem] w-[1.2rem]  transition-all dark:rotate-0 dark:scale-100"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}
