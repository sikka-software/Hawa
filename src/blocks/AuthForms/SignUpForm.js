import React from "react";
import { Box } from "../../layout";
import {
  HawaTextField,
  ActionButton,
  GoogleButton,
  GithubButton,
  TwitterButton,
  HawaAlert
} from "../../ui";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";

export const SignUpForm = (props) => {
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
          <form onSubmit={handleSubmit(props.handleSignUp)}>
            <HawaTextField
              themeType={props.theme}
              type="text"
              inputLabel="Email"
              placeholder="Email"
              name="email"
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
            <HawaTextField
              name="confirmPassword"
              placeholder="Password"
              themeType={props.theme}
              type="password"
              inputLabel="Confirm Password"
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.confirmPassword?.message}
            />
            <ActionButton
              fullWidth
              type="submit"
              text="Sign Up"
              last
              themeType={props.theme}
            />
          </form>
        </FormProvider>
      </Box>
      {props.viaGoogle && (
        <GoogleButton
          outlined
          themeType={props.theme}
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
      {props.viaGithub && (
        <GithubButton
          outlined
          themeType={props.theme}
          buttonText={props.githubButtonLabel}
          handleClick={props.handleGithubSignUp}
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

SignUpForm.propTypes = {
  theme: PropTypes.oneOf(["secondary", "primary"])
  // buttonLabel: PropTypes.string,
  // danger: PropTypes.bool,
  // disabled: PropTypes.bool,
  // showText: PropTypes.bool
};
