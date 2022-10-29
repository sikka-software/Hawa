import React from "react";
import { HawaTextField, HawaAlert, HawaButton } from "../../elements";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout";

export const CodeConfirmation = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <HawaContainer>
      {" "}
      {props.showError && (
        <HawaAlert
          title={props.errorTitle}
          text={props.errorText}
          severity="error"
        />
      )}
      <form onSubmit={handleSubmit(props.handleSignIn)}>
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              type="number"
              value={field.value ?? ""}
              label={props.texts.codeLabel}
              helperText={errors.email?.message}
              placeholder={props.texts.codePlaceholder}
              {...field}
            />
          )}
          rules={{
            required: props.texts.codeRequiredText
          }}
        />

        <HawaButton type="submit" fullWidth text={props.texts.confirmText} />
      </form>
    </HawaContainer>
  );
};
CodeConfirmation.propTypes = {
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
    confirmText: PropTypes.string,
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
  handleTwitterSignIn: PropTypes.func
};
