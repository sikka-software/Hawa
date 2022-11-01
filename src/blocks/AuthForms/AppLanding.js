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

export const AppLanding = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <HawaContainer>
      <HawaButton fullWidth text={"Sign In"} />
      <HawaButton fullWidth text={"Sign Up"} />
      <HawaButton fullWidth text={"عربي"} />
    </HawaContainer>
  );
};
AppLanding.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
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
