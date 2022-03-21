import React from "react";
import {
  HawaTextField,
  ActionButton,
  HawaAlert,
  HawaTypography,
  HawaLogoButton
} from "../../ui";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";

import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";

export const SignInForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        {props.error && (
          <HawaAlert text="This is a sign in alert" severity="error" />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleSignIn)}>
            <HawaTextField
              type="text"
              name="email"
              inputLabel={props.texts.emailLabel}
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
              name="password"
              placeholder={props.texts.passwordPlaceholder}
              type="password"
              inputLabel={props.texts.passwordLabel}
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
            <HawaTypography
              style={{
                cursor: "pointer",
                marginTop: 5,
                width: "max-content",
                padding: 5
              }}
              onClick={props.handleForgotPassword}
            >
              {props.texts.forgotPasswordText}
            </HawaTypography>
            <ActionButton
              type="submit"
              fullWidth
              last={"true"}
              text={props.texts.signInText}
            />
          </form>
        </FormProvider>
      </Box>
      <HawaTypography
        style={{
          marginTop: 5,
          // width: "max-content",
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
      </HawaTypography>
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
    </Box>
  );
};
