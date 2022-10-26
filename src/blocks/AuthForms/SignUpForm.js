import React from "react";
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton
} from "../../elements";
import PropTypes from "prop-types";
import { Controller, FormProvider, useForm } from "react-hook-form";

export const SignUpForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
      {props.showError && (
        <HawaAlert
          title={props.errorTitle}
          text={props.errorText}
          severity="error"
        />
      )}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleSignUp)}>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="text"
                value={field.value ?? ""}
                label={props.texts.fullNameLabel}
                placeholder={props.texts.fullNamePlaceholder}
                helperText={errors.fullName?.message}
                {...field}
              />
            )}
            rules={{
              required: props.texts.fullNameRequiredText
            }}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="text"
                value={field.value ?? ""}
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
                placeholder={props.texts.emailPlaceholder}
                {...field}
              />
            )}
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText
              }
            }}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="password"
                defaultValue={field.value ?? ""}
                value={field.value ?? ""}
                label={props.texts.passwordLabel}
                placeholder={props.texts.passwordPlaceholder}
                helperText={errors.password?.message}
                {...field}
              />
            )}
            rules={{ required: props.texts.passwordRequiredText }}
          />

          <HawaButton fullWidth type="submit">
            {props.texts.signUpText}
          </HawaButton>
        </form>
      </FormProvider>

      <div className="font-semibold p-3 text-center text-sm">
        {props.texts.existingUserText}{" "}
        <span
          onClick={props.handleRouteToSignIn}
          className="text-blue-600 cursor-pointer"
        >
          {props.texts.signInText}
        </span>
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
    </div>
  );
};

SignUpForm.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    fullNameLabel: PropTypes.string,
    fullNamePlaceholder: PropTypes.string,
    fullNameRequiredText: PropTypes.string,
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    passwordLabel: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    passwordTooShortText: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    newUserText: PropTypes.string,
    signUpText: PropTypes.string,
    signInText: PropTypes.string,
    existingUserText: PropTypes.string,
    googleButtonLabel: PropTypes.string,
    githubButtonLabel: PropTypes.string,
    twitterButtonLabel: PropTypes.string
  }),
  viaGoogle: PropTypes.bool,
  viaGithub: PropTypes.bool,
  viaTwitter: PropTypes.bool,
  handleSignUp: PropTypes.func,
  handleRouteToSignIn: PropTypes.func,
  handleGoogleSignUp: PropTypes.func,
  handleGithubSignUp: PropTypes.func,
  handleTwitterSignUp: PropTypes.func
};
