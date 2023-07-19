import { FC } from "react"
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton,
  HawaPhoneInput,
} from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

export const SignInForm: FC<SignInFormTypes> = (props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm()

  return (
    <HawaContainer direction={props.direction}>
      <form onSubmit={handleSubmit((e) => props.handleSignIn(e))}>
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
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
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
                  label={props.texts.usernameLabel}
                  helperText={errors.username?.message}
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
                  type="password"
                  label={props.texts.passwordLabel}
                  placeholder={props.texts.passwordPlaceholder}
                  helperText={errors.password?.message}
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

        <HawaButton
          isLoading={props.isLoading}
          variant="contained"
          color="primary"
          size="medium"
          width="full"
        >
          {props.texts.signInText}
        </HawaButton>
        {!props.withoutSignUp && (
          <div className="p-3 text-center text-sm font-semibold dark:text-gray-300">
            {props.texts.newUserText}{" "}
            <span
              onClick={props.handleRouteToSignUp}
              className="cursor-pointer text-blue-600 dark:text-blue-400"
            >
              {props.texts.signUpText}
            </span>
          </div>
        )}
      </form>

      {/* 3rd Party Sign Auth Buttons */}
      {props.viaGithub || props.viaGoogle || props.viaTwitter ? (
        <div className="flex flex-col ">
          {props.viaGoogle && (
            <HawaLogoButton
              logo="google"
              buttonText={props.texts.googleButtonLabel}
              onClick={props.handleGoogleSignIn}
            />
          )}
          {props.viaGithub && (
            <HawaLogoButton
              logo="github"
              buttonText={props.texts.githubButtonLabel}
              onClick={props.handleGithubSignIn}
            />
          )}
          {props.viaTwitter && (
            <HawaLogoButton
              logo="twitter"
              buttonText={props.texts.twitterButtonLabel}
              onClick={props.handleTwitterSignIn}
            />
          )}
        </div>
      ) : null}
    </HawaContainer>
  )
}

type SignInFormTypes = {
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
    signUpText?: string
    signInText?: string
    googleButtonLabel?: string
    githubButtonLabel?: string
    twitterButtonLabel?: string
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
