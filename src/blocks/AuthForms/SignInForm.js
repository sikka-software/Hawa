import React from "react";
import { HawaTextField, HawaTypography, HawaLogoButton } from "../../ui";
import { FormProvider, useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const SignInForm = (props) => {
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleSignIn)}>
          <HawaTextField
            fullWidth
            type="text"
            name="email"
            label={props.texts.emailLabel}
            placeholder={props.texts.emailPlaceholder}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            rules={{
              required: props.texts.emailRequired,
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
              required: props.texts.passwordRequired
            }}
            helperText={errors.password?.message}
          />
          <Typography
            style={{
              cursor: "pointer",
              marginTop: 5,
              width: "max-content",
              fontSize: 15,
              padding: 5
            }}
            onClick={props.handleForgotPassword}
          >
            {props.texts.forgotPasswordText}
          </Typography>
          <Button type="submit" fullWidth variant="last">
            {props.texts.signInText}
          </Button>
        </form>
      </FormProvider>
      <Typography
        variant="subtitle2"
        style={{
          // fontSize: 15,
          marginTop: 5,
          textAlign: "center",
          padding: 5
        }}
      >
        {props.texts.newUserText}{" "}
        <span
          onClick={props.handleRouteToSignUp}
          style={{
            cursor: "pointer",
            color: "blue",
            textAlign: "center"
          }}
        >
          {props.texts.signUpText}
        </span>
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
    </Container>
  );
};
