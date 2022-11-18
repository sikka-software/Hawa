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
                        { value: "other", label: "Other" }
                      ]}
                      onChange={(e, o) => console.log("chooo", e)}
                      onInputChange={(e, o) => console.log("changing", e)}
                      {...field}
                    />
                  )}
                />
              </div>
            )}
            {props.showTermsOption && (
              <div className="py-2">
                <Controller
                  control={control}
                  name="terms_accepted"
                  render={({ field }) => (
                    <HawaCheckbox
                      helperText={errors.terms_accepted?.message}
                      onChange={() => console.log("te")}
                      label={
                        <span>
                          {props.texts.iAcceptText}{" "}
                          <a className="cursor-pointer text-blue-800">
                            {props.texts.termsText}
                          </a>
                        </span>
                      }
                      {...field}
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
                      label={props.texts.subscribeToNewsletter}
                      {...field}
                    />
                  )}
                />
              </div>
            )}
            <HawaButton color="primary"  width="full" type="submit">
              {props.texts.signUpText}
            </HawaButton>
          </form>
        </FormProvider>
        <div className="p-3 text-center text-sm font-semibold">
          {props.texts.existingUserText}{" "}
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
    termsText: PropTypes.string,
    iAcceptText: PropTypes.string,
    termsRequiredText: PropTypes.string,
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
