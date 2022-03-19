import React from "react";
import {
  HawaTextField,
  ActionButton,
  GoogleButton,
  TwitterButton,
  GithubButton,
  HawaAlert
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
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        {props.error && (
          <HawaAlert
            themeType={props.theme}
            text="This is a sign in alert"
            severity="error"
          />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleSignIn)}>
            <HawaTextField
              type="text"
              name="email"
              inputLabel="Email"
              placeholder="Enter your email"
              themeType={props.theme}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address"
                }
              }}
              helperText={errors.email?.message}
            />

            <HawaTextField
              name="password"
              placeholder="Enter password"
              themeType={props.theme}
              type="password"
              inputLabel="Password"
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
            <ActionButton
              type="submit"
              fullWidth
              last={"true"}
              text={"Sign In"}
              themeType={props.theme}
            />
          </form>
        </FormProvider>
      </Box>
      {props.viaGoogle && (
        <GoogleButton
          themeType={props.theme}
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
      {props.viaGithub && (
        <GithubButton
          themeType={props.theme}
          buttonText={props.githubButtonLabel}
          handleClick={props.handleGithubSignIn}
        />
      )}
      {props.viaTwitter && (
        <TwitterButton
          themeType={props.theme}
          buttonText={props.twitterButtonLabel}
          handleClick={props.handleTwitterSignIn}
        />
      )}
    </Box>
  );
};
