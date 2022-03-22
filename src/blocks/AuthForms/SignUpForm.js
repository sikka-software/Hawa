import React from "react";
import { HawaTextField, HawaLogoButton } from "../../elements";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/PermIdentityOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const SignUpForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Container maxWidth="xs" variant="auth">
      {props.error && (
        <Alert severity="error">
          {props.errorTitle && <AlertTitle>{props.errorTitle}</AlertTitle>}
          {props.errorText}
        </Alert>
      )}
      {/* {props.error && (
          <HawaAlert text="This is a sign in alert" severity="error" />
        )} */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleSignUp)}>
          <HawaTextField
            fullWidth
            type="text"
            label={props.texts.fullNameLabel}
            name="fullName"
            placeholder={props.texts.fullNamePlaceholder}
            inputLabel={props.texts.fullNameLabel}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            helperText={errors.fullName?.message}
          />

          <HawaTextField
            fullWidth
            type="text"
            label={props.texts.emailLabel}
            placeholder={props.texts.emailPlaceholder}
            name="email"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText
              }
            }}
            helperText={errors.email?.message}
          />
          <HawaTextField
            fullWidth
            name="password"
            placeholder={props.texts.passwordPlaceholder}
            type="password"
            label={props.texts.passwordLabel}
            startAdornment={
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            }
            rules={{
              required: props.texts.passwordRequiredText,
              minLength: {
                value: 8,
                message: props.texts.passwordTooShortText
              }
            }}
            helperText={errors.password?.message}
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
        Existing user?{" "}
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

SignUpForm.propTypes = {
  theme: PropTypes.oneOf(["secondary", "primary"])
  // buttonLabel: PropTypes.string,
  // danger: PropTypes.bool,
  // disabled: PropTypes.bool,
  // showText: PropTypes.bool
};
