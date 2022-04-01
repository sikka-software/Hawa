import React from "react";
import { HawaTextField, HawaLogoButton } from "../../elements";
import PropTypes from "prop-types";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/PermIdentityOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const SignUpForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <Container
      maxWidth="xs"
      variant="auth"
      style={{ direction: props.lang === "ar" ? "rtl" : "ltr" }}
    >
      {props.error && (
        <Alert severity="error" variant="inContainer">
          {props.errorTitle && <AlertTitle>{props.errorTitle}</AlertTitle>}
          {props.errorText}
        </Alert>
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
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
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
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
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
                startAdornment={
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                }
                {...field}
              />
            )}
            rules={{ required: props.texts.passwordRequiredText }}
          />

          <Button fullWidth variant="last" type="submit">
            {props.texts.signUpText}
          </Button>
        </form>
      </FormProvider>

      <Typography
        variant="subtitle2"
        style={{
          marginTop: 5,
          textAlign: "center",
          padding: 5
        }}
      >
        {props.texts.existingUserText}{" "}
        <span
          onClick={props.handleRouteToSignIn}
          style={{
            cursor: "pointer",
            color: "blue",
            textAlign: "center"
          }}
        >
          {props.texts.signInText}
        </span>
      </Typography>
      <Divider />
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
    </Container>
  );
};

// fullNameLabel: "Full Name",
// fullNamePlaceholder: "Fulan AlFulani",
// fullNameRequiredText: "Full Name is required",
// emailLabel: "Email",
// emailPlaceholder: "Enter your email",
// emailRequiredText: "Email is required",
// emailInvalidText: "Invalid email address",
// passwordLabel: "Password",
// passwordPlaceholder: "Minimum 8 characters",
// passwordRequiredText: "Password is required",
// passwordTooShortText: "Password too short",
// forgotPasswordText: "Forgot password?",
// newUserText: "New user?",
// signUpText: "Sign up",
// signInText: "Sign in",
// existingUserText: "Existing User?",
// googleButtonLabel: "Sign in with Google",
// githubButtonLabel: "Sign in with Github",
// twitterButtonLabel: "Sign in with Twitter"

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
