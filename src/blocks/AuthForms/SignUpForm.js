import React from "react";
import {
  HawaTextField,
  HawaLogoButton,
  HawaAlert,
  HawaButton,
  HawaCheckbox,
  HawaSelect
} from "../../elements";
import PropTypes from "prop-types";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { HawaContainer } from "../../layout/HawaContainer";

export const SignUpForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <HawaContainer withDividers>
      <div>
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
            {props.signUpType === "email" ? (
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
            ) : (
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <HawaTextField
                    fullWidth
                    type="text"
                    value={field.value ?? ""}
                    label={props.texts.usernameLabel}
                    helperText={errors.username?.message}
                    placeholder={props.texts.usernamePlaceholder}
                    {...field}
                  />
                )}
                rules={{
                  required: props.texts.usernameRequired
                }}
              />
            )}
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
            <Controller
              control={control}
              name="confirm_password"
              render={({ field }) => (
                <HawaTextField
                  fullWidth
                  type="password"
                  defaultValue={field.value ?? ""}
                  value={field.value ?? ""}
                  label={props.texts.confirmPasswordLabel}
                  placeholder={props.texts.confirmPasswordPlaceholder}
                  helperText={errors.confirm_password?.message}
                  {...field}
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
                    fullWidth
                    type="text"
                    defaultValue={field.value ?? ""}
                    value={field.value ?? ""}
                    label={"Ref Code"}
                    placeholder={props.texts.passwordPlaceholder}
                    helperText={errors.password?.message}
                    {...field}
                  />
                )}
                rules={{ required: props.texts.passwordRequiredText }}
              />
            )}
            {props.showUserSource && (
              <div className="py-2">
                <HawaSelect
                  label="How did you learn about us?"
                  isCreatable={false}
                  isMulti={false ?? false}
                  isSearchable={false}
                  isClearable={false ?? false}
                  options={[
                    { value: "friend", label: "From a friend" },
                    { value: "ad", label: "Advertisement" },
                    { value: "other", label: "Other" }
                  ]}
                  onChange={(e, o) => console.log("chooo", e)}
                  onInputChange={(e, o) => console.log("changing", e)}
                />
              </div>
            )}
            {props.showTermsOption && (
              <div className="py-2">
                <HawaCheckbox
                  label={
                    <span>
                      I accept the{" "}
                      <a className="cursor-pointer text-blue-800">
                        terms and conditions
                      </a>
                    </span>
                  }
                />
              </div>
            )}
            {props.showNewsletterOption && (
              <div className="py-2">
                <HawaCheckbox label="Subscribe to newsletter?" />
              </div>
            )}
            <HawaButton fullWidth type="submit" text={props.texts.signUpText} />{" "}
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
    usernameLabel: PropTypes.string,
    usernamePlaceholder: PropTypes.string,
    usernameRequired: PropTypes.string,
    passwordLabel: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    passwordTooShortText: PropTypes.string,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordPlaceholder: PropTypes.string,
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
  showNewsletterOption: PropTypes.bool,
  showRefCode: PropTypes.bool,
  showTermsOption: PropTypes.bool,
  handleSignUp: PropTypes.func,
  handleRouteToSignIn: PropTypes.func,
  handleGoogleSignUp: PropTypes.func,
  handleGithubSignUp: PropTypes.func,
  handleTwitterSignUp: PropTypes.func
};
