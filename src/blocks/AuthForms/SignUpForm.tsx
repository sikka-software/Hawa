import React, { FC } from "react"
import {
  HawaTextField,
  InterfaceSettings,
  HawaAlert,
  HawaCheckbox,
  HawaSelect,
} from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"
import { Icons } from "../../elements/Icons"
import clsx from "clsx"

type SignUpFormTypes = {
  handleLanguage?: () => void
  currentLanguage?: any
  handleColorMode?: () => void
  currentColorMode?: any
  direction?: "rtl" | "ltr"
  texts: {
    fullNameLabel: string
    fullNamePlaceholder: string
    fullNameRequiredText: string
    emailLabel: string
    emailPlaceholder: string
    emailRequiredText: string
    emailInvalidText: string
    usernameLabel: string
    usernamePlaceholder: string
    usernameRequired: string
    passwordLabel: string
    passwordPlaceholder: string
    passwordRequiredText: string
    passwordTooShortText: string
    confirmPasswordLabel: string
    confirmPasswordPlaceholder: string
    subscribeToNewsletter: string
    forgotPasswordText: string
    termsText: string
    iAcceptText: string
    termsRequiredText: string
    newUserText: string
    signUpText: string
    signInText: string
    existingUserText: string
    signUpViaGoogleLabel: string
    signUpViaGithubLabel: string
    signUpViaTwitterLabel: string
    refCode: string
  }
  showUserSource: any
  viaGoogle: boolean
  viaGithub: boolean
  viaTwitter: boolean
  showNewsletterOption: boolean
  showRefCode: boolean
  showTermsOption: boolean
  handleSignUp: (e: any) => void
  handleRouteToSignIn: () => void
  handleGoogleSignUp: () => void
  handleGithubSignUp: () => void
  handleTwitterSignUp: () => void
  handleRouteToTOS: () => void
  showError: any
  errorTitle: any
  errorText: any
  signUpFields: any[]
  isLoading?: boolean
}

export const SignUpForm: FC<SignUpFormTypes> = (props) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <div className="flex flex-col gap-4">
      <Card dir={props.direction}>
        <CardContent headless>
          <div>
            {props.showError && (
              <HawaAlert
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
              />
            )}
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit((e) => props.handleSignUp(e))}>
                <div>
                  {props.signUpFields.map((fld, i) => {
                    if (fld === "fullname") {
                      return (
                        <Controller
                          key={i}
                          control={control}
                          name="fullName"
                          render={({ field }) => (
                            <HawaTextField
                              width="full"
                              type="text"
                              label={props.texts.fullNameLabel}
                              placeholder={props.texts.fullNamePlaceholder}
                              helpertext={errors.fullName?.message}
                              onChange={field.onChange}
                              value={field.value ?? ""}
                            />
                          )}
                          rules={{
                            required: props.texts.fullNameRequiredText,
                          }}
                        />
                      )
                    }
                    if (fld === "email") {
                      return (
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
                              onChange={field.onChange}
                              value={field.value ?? ""}
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
                      )
                    }
                    if (fld === "username") {
                      return (
                        <Controller
                          control={control}
                          name="username"
                          render={({ field }) => (
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
                          )}
                          rules={{
                            required: props.texts.usernameRequired,
                          }}
                        />
                      )
                    }
                  })}
                </div>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <HawaTextField
                      width="full"
                      type="password"
                      autoComplete="new-password"
                      // defaultValue={field.value ?? ""}
                      label={props.texts.passwordLabel}
                      placeholder={props.texts.passwordPlaceholder}
                      helpertext={errors.password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{ required: props.texts.passwordRequiredText }}
                />
                <Controller
                  control={control}
                  name="confirm_password"
                  render={({ field }) => (
                    <HawaTextField
                      width="full"
                      type="password"
                      autoComplete="new-password"
                      // defaultValue={field.value ?? ""}
                      label={props.texts.confirmPasswordLabel}
                      placeholder={props.texts.confirmPasswordPlaceholder}
                      helpertext={errors.confirm_password?.message}
                      onChange={field.onChange}
                      value={field.value ?? ""}
                    />
                  )}
                  rules={{ required: props.texts.passwordRequiredText }}
                />
                {props.showRefCode && (
                  <Controller
                    control={control}
                    name="refCode"
                    render={({ field }) => (
                      <HawaTextField
                        width="full"
                        type="text"
                        defaultValue={field.value ?? ""}
                        label={props.texts.refCode}
                        placeholder={props.texts.passwordPlaceholder}
                        helpertext={errors.password?.message}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                )}
                {props.showUserSource && (
                  <div>
                    <Controller
                      control={control}
                      name="reference"
                      render={({ field }) => (
                        <HawaSelect
                          label="How did you learn about us?"
                          isCreatable={false}
                          isMulti={false ?? false}
                          isSearchable={false}
                          isClearable={false ?? false}
                          options={[
                            { value: "friend", label: "From a friend" },
                            { value: "ad", label: "Advertisement" },
                            { value: "other", label: "Other" },
                          ]}
                          onChange={(e: any) => {
                            field.onChange(e.value)
                          }}
                        />
                      )}
                    />
                  </div>
                )}
                {props.showTermsOption && (
                  <Controller
                    control={control}
                    name="terms_accepted"
                    render={({ field }) => (
                      <HawaCheckbox
                        id="terms_accepted"
                        helperText={errors.terms_accepted?.message}
                        onChange={(e) => field.onChange(e)}
                        label={
                          <span>
                            {props.texts.iAcceptText}{" "}
                            <a
                              onClick={props.handleRouteToTOS}
                              className="clickable-link"
                            >
                              {props.texts.termsText}
                            </a>
                          </span>
                        }
                      />
                    )}
                    rules={{ required: props.texts.termsRequiredText }}
                  />
                )}
                {props.showNewsletterOption && (
                  <Controller
                    control={control}
                    name="newsletter_accepted"
                    render={({ field }) => (
                      <HawaCheckbox
                        id="newsletter_accepted"
                        label={props.texts.subscribeToNewsletter}
                        onChange={field.onChange}
                      />
                    )}
                  />
                )}

                <Button className="w-full" isLoading={props.isLoading}>
                  {props.texts.signUpText}
                </Button>
              </form>
            </FormProvider>
            <div className="flex flex-row items-center justify-center gap-1 p-3 text-center  text-sm font-semibold dark:text-white">
              <span>{props.texts.existingUserText}</span>
              <span
                onClick={props.handleRouteToSignIn}
                className="clickable-link"
              >
                {props.texts.signInText}
              </span>
            </div>
          </div>
        </CardContent>

        {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
          <CardFooter className="grid grid-cols-1 gap-2 ">
            {props.viaGoogle && (
              <Button variant="outline" onClick={props.handleGoogleSignUp}>
                <Icons.google
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signUpViaGoogleLabel}
              </Button>
            )}
            {props.viaGithub && (
              <Button variant="outline" onClick={props.handleGithubSignUp}>
                <Icons.gitHub
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signUpViaGithubLabel}
              </Button>
            )}
            {props.viaTwitter && (
              <Button variant="outline" onClick={props.handleTwitterSignUp}>
                <Icons.twitter
                  className={clsx(
                    "h-4 w-4",
                    props.direction === "rtl" ? "ml-2" : "mr-2"
                  )}
                />
                {props.texts.signUpViaTwitterLabel}
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
