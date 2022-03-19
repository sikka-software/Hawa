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
import { TextField } from "@mui/material";

export const SignInForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    getValues,
    register,
    watch,
    reset,
    setValue
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
              placeholder="Email"
              themeType={props.theme}
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
              placeholder="Password"
              themeType={props.theme}
              type="password"
              inputLabel="Password"
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
          outlined
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
      {props.viaGithub && (
        <GithubButton
          outlined
          themeType={props.theme}
          buttonText={props.githubButtonLabel}
          handleClick={props.handleGithubSignIn}
        />
      )}
      {props.viaTwitter && (
        <TwitterButton
          outlined
          themeType={props.theme}
          buttonText={props.twitterButtonLabel}
          handleClick={props.handleTwitterSignIn}
        />
      )}
    </Box>
  );
};
