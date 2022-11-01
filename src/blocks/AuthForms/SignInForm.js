import React from "react";
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton
} from "../../elements";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout/HawaContainer";

export const SignInForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <HawaContainer withDividers>
      <form onSubmit={handleSubmit(props.handleSignIn)}>
        {props.showError && (
          <HawaAlert
            title={props.errorTitle}
            text={props.errorText}
            severity="error"
          />
        )}
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
        <div
          className="text-xs cursor-pointer w-fit mb-3"
          onClick={props.handleForgotPassword}
        >
          {props.texts.forgotPasswordText}
        </div>
        <HawaButton fullWidth type="submit" text={props.texts.signInText} />{" "}
        {!props.withoutSignUp && (
          <div className="font-semibold p-3 text-center text-sm">
            {props.texts.newUserText}{" "}
            <span
              onClick={props.handleRouteToSignUp}
              className="text-blue-600 cursor-pointer"
            >
              {props.texts.signUpText}
            </span>
          </div>
        )}
      </form>
      {/* <Divider /> */}
      {/* <div className="divide-y divide-gray-900"></div> */}
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
  );
};
SignInForm.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    passwordLabel: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    newUserText: PropTypes.string,
    signUpText: PropTypes.string,
    signInText: PropTypes.string,
    googleButtonLabel: PropTypes.string,
    githubButtonLabel: PropTypes.string,
    twitterButtonLabel: PropTypes.string
  }),
  viaGoogle: PropTypes.bool,
  viaGithub: PropTypes.bool,
  viaTwitter: PropTypes.bool,
  handleSignIn: PropTypes.func,
  handleRouteToSignUp: PropTypes.func,
  handleGoogleSignIn: PropTypes.func,
  handleGithubSignIn: PropTypes.func,
  handleTwitterSignIn: PropTypes.func,
  handleForgotPassword: PropTypes.func,
  
  withoutSignUp: PropTypes.bool
};
