import React, { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import clsx from "clsx"

import {
  HawaTextField,
  HawaAlert,
  HawaPhoneInput,
  InterfaceSettings,
} from "../../elements"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"
import { Icons } from "../../elements/Icons"

export const SignInForm: FC<SignInFormTypes> = (props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm()

  return (
    <div className="flex flex-col gap-4">
      <Card dir={props.direction}>
        <CardContent headless>
          <form onSubmit={handleSubmit((e) => props.handleSignIn(e))}>
            {/* an attempt to animate the alert showing  */}
            {/* <div
            className={clsx(
              "h-0 overflow-clip bg-blue-500 transition-all",
              props.showError ? "h-auto" : ""
            )}
          >
            <HawaAlert
              title={props.errorTitle}
              text={props.errorText}
              severity="error"
            />
          </div> */}
            {props.showError && (
              <HawaAlert
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
              />
            )}
            {props.signInType === "email" ? (
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="text"
                    autoComplete="email"
                    label={props.texts.emailLabel}
                    helpertext={errors.email?.message}
                    placeholder={props.texts.emailPlaceholder}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
                rules={{
                  required: props.texts.emailRequiredText,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: props.texts.emailInvalidText,
                  },
                }}
              />
            ) : props.signInType === "username" ? (
              <Controller
                control={control}
                name="username"
                render={({ field }) => {
                  return (
                    <HawaTextField
                      width="full"
                      type="text"
                      autoComplete="username"
                      label={props.texts.usernameLabel}
                      helpertext={errors.username?.message}
                      placeholder={props.texts.usernamePlaceholder}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )
                }}
                rules={{
                  required: props.texts.usernameRequired,
                }}
              />
            ) : (
              <Controller
                control={control}
                name="phone"
                render={({ field }) => <HawaPhoneInput label="Phone number" />}
                rules={{ required: props.texts.phoneRequiredText }}
              />
            )}
            {props.signInType !== "phone" && (
              <>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <HawaTextField
                      width="full"
                      autoComplete="current-password"
                      type="password"
                      label={props.texts.passwordLabel}
                      placeholder={props.texts.passwordPlaceholder}
                      helpertext={errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{
                    required: props.texts.passwordRequiredText,
                    minLength: 5,
                  }}
                />
                {!props.withoutResetPassword && (
                  <div
                    onClick={props.handleForgotPassword}
                    className="mb-3 w-fit cursor-pointer text-xs dark:text-gray-300"
                  >
                    {props.texts.forgotPasswordText}
                  </div>
                )}
              </>
            )}

            <Button className="w-full" isLoading={props.isLoading}>
              {props.texts.signInText}
            </Button>
            {!props.withoutSignUp && (
              <div className="p-3 text-center text-sm font-semibold dark:text-gray-300">
                {props.texts.newUserText}{" "}
                <span
                  onClick={props.handleRouteToSignUp}
                  className="clickable-link"
                >
                  {props.texts.createAccount}
                </span>
              </div>
            )}
          </form>
        </CardContent>

        {/* 3rd Party Sign Auth Buttons */}
        {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
          <CardFooter className="grid grid-cols-1 gap-2 ">
            {props.viaGoogle && (
              <Button variant="outline" onClick={props.handleGoogleSignIn}>
                <Icons.google
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signInViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button variant="outline" onClick={props.handleGithubSignIn}>
                <Icons.gitHub
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signInViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button variant="outline" onClick={props.handleTwitterSignIn}>
                <Icons.twitter
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signInViaTwitterLabel}
              </Button>
            )}
          </CardFooter>
        ) : null}
      </Card>
      <InterfaceSettings
        currentColorMode={props.currentColorMode}
        currentLanguage={props.currentLanguage}
        handleColorMode={props.handleColorMode}
        handleLanguage={props.handleLanguage}
      />
    </div>
  )
}

type SignInFormTypes = {
  handleLanguage?: () => void
  currentLanguage?: any
  handleColorMode?: () => void
  currentColorMode?: any
  direction?: "rtl" | "ltr"
  showError?: any
  errorTitle?: string
  errorText?: string
  signInType?: "email" | "username" | "phone"
  texts?: {
    emailLabel?: string
    emailPlaceholder?: string
    emailRequiredText?: string
    emailInvalidText?: string
    usernameLabel?: string
    usernamePlaceholder?: string
    usernameRequired?: string
    phoneRequiredText?: string
    passwordLabel?: string
    passwordPlaceholder?: string
    passwordRequiredText?: string
    forgotPasswordText?: string
    newUserText?: string
    createAccount?: string
    signInText?: string
    signInViaGoogleLabel?: string
    signInViaGithubLabel?: string
    signInViaTwitterLabel?: string
  }
  withoutResetPassword?: boolean
  withoutSignUp?: boolean
  /**
   *show spinner if true
   */
  isLoading?: any
  viaGoogle?: boolean
  viaGithub?: boolean
  viaTwitter?: boolean
  /**
   * Handle the sign in .
   */
  handleSignIn?: (e: any) => void
  /**
   * Handle routing to sign up page
   */
  handleRouteToSignUp?: () => void
  handleForgotPassword?: () => void
  handleGoogleSignIn?: () => void
  handleGithubSignIn?: () => void
  handleTwitterSignIn?: () => void
}
