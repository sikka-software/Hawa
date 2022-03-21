import React from "react";
import {
  HawaTextField,
  ActionButton,
  TwitterButton,
  GithubButton,
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
              inputLabel="Email"
              placeholder="Enter your email"
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
            <HawaTypography
              style={{
                cursor: "pointer",
                marginTop: 5,
                width: "max-content",
                padding: 5
              }}
              onClick={() => console.log("res")}
            >
              Forgot password?
            </HawaTypography>
            <ActionButton
              type="submit"
              fullWidth
              last={"true"}
              text={"Sign In"}
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
        New user?{" "}
        <span
          onClick={() => console.log("res")}
          style={{
            cursor: "pointer",
            color: "blue",
            textAlign: "center"
          }}
        >
          Sign up
        </span>
      </HawaTypography>
      {props.viaGoogle && (
        <HawaLogoButton
          logo="google"
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
      {props.viaGithub && (
        <HawaLogoButton
          logo="github"
          buttonText={props.githubButtonLabel}
          handleClick={props.handleGithubSignIn}
        />
      )}
      {props.viaTwitter && (
        <HawaLogoButton
          logo="twitter"
          buttonText={props.twitterButtonLabel}
          handleClick={props.handleTwitterSignIn}
        />
      )}
    </Box>
  );
};
