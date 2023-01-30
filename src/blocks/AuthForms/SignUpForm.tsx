import React from "react"
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton,
  HawaCheckbox,
  HawaSelect,
} from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout/HawaContainer"

type SignUpFormTypes = {
  language?: string
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
    googleButtonLabel: string
    githubButtonLabel: string
    twitterButtonLabel: string
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

export const SignUpForm: React.FunctionComponent<SignUpFormTypes> = (props) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <HawaContainer direction={props.language === "ar" ? "rtl" : "ltr"}>
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
              {props.signUpFields.map((fld) => {
                if (fld === "fullname") {
                  return (
                    <Controller
                      control={control}
                      name="fullName"
                      render={({ field }) => (
                        <HawaTextField
                          width="full"
                          type="text"
                          label={props.texts.fullNameLabel}
                          placeholder={props.texts.fullNamePlaceholder}
                          helperText={errors.fullName?.message}
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
                          label={props.texts.emailLabel}
                          helperText={errors.email?.message}
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
                          label={props.texts.usernameLabel}
                          helperText={errors.username?.message}
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
                  // defaultValue={field.value ?? ""}
                  label={props.texts.passwordLabel}
                  placeholder={props.texts.passwordPlaceholder}
                  helperText={errors.password?.message}
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
                  // defaultValue={field.value ?? ""}
                  label={props.texts.confirmPasswordLabel}
                  placeholder={props.texts.confirmPasswordPlaceholder}
                  helperText={errors.confirm_password?.message}
                  onChange={field.onChange}
                  value={field.value ?? ""}
                />
              )}
              rules={{ required: props.texts.passwordRequiredText }}
            />
            {props.showRefCode && (
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="text"
                    defaultValue={field.value ?? ""}
                    label={"Ref Code"}
                    placeholder={props.texts.passwordPlaceholder}
                    helperText={errors.password?.message}
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
              <div>
                <Controller
                  control={control}
                  name="terms_accepted"
                  render={({ field }) => (
                    <HawaCheckbox
                      id="terms_accepted"
                      helperText={errors.terms_accepted?.message}
                      onChange={(e) => {
                        console.log("changing ", e)
                        field.onChange(e)
                      }}
                      label={
                        <span>
                          {props.texts.iAcceptText}{" "}
                          <a
                            onClick={props.handleRouteToTOS}
                            className="cursor-pointer text-blue-800"
                          >
                            {props.texts.termsText}
                          </a>
                        </span>
                      }
                    />
                  )}
                  rules={{ required: props.texts.termsRequiredText }}
                />
              </div>
            )}
            {props.showNewsletterOption && (
              <div className="py-2">
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
              </div>
            )}
            <HawaButton
              isLoading={props.isLoading}
              color="primary"
              width="full"
              type="submit"
            >
              {props.texts.signUpText}
            </HawaButton>
          </form>
        </FormProvider>
        <div className="flex flex-row items-center justify-center gap-1 p-3  text-center text-sm font-semibold">
          <span>{props.texts.existingUserText}</span>
          <span
            onClick={props.handleRouteToSignIn}
            className="cursor-pointer text-blue-600"
          >
            {props.texts.signInText}
          </span>
        </div>
      </div>
      {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {props.viaGoogle && (
            <HawaLogoButton
              logo="google"
              buttonText={props.texts.googleButtonLabel}
              onClick={props.handleGoogleSignUp}
            />
          )}
          {props.viaGithub && (
            <HawaLogoButton
              logo="github"
              buttonText={props.texts.githubButtonLabel}
              onClick={props.handleGithubSignUp}
            />
          )}
          {props.viaTwitter && (
            <HawaLogoButton
              logo="twitter"
              buttonText={props.texts.twitterButtonLabel}
              onClick={props.handleTwitterSignUp}
            />
          )}
        </div>
      ) : null}
    </HawaContainer>
  )
}
