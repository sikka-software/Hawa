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

import PersonIcon from "@mui/icons-material/PermIdentityOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/MailOutline";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";

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
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        {props.error && (
          <HawaAlert text="This is a sign in alert" severity="error" />
        )}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handleSignUp)}>
            <HawaTextField
              name="fullName"
              placeholder="Fulan AlFulani"
              type="text"
              inputLabel="Full Name"
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
              rules={{
                required: "Full name rquired"
              }}
              helperText={errors.fullName?.message}
            />

            <HawaTextField
              type="text"
              inputLabel="Email"
              placeholder="Enter your email"
              name="email"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              rules={{
                required: "Email required",
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
              placeholder="Minimum 8 characters"
              type="password"
              inputLabel="Password"
              startAdornment={
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              }
              rules={{
                required: "Password rquired",
                minLength: {
                  value: 8,
                  message: "Password too short"
                }
              }}
              helperText={errors.password?.message}
            />

            <ActionButton fullWidth type="submit" text="Sign Up" last />
          </form>
        </FormProvider>
      </Box>
      {props.viaGoogle && (
        <GoogleButton
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
      {props.viaGithub && (
        <GithubButton
          buttonText={props.githubButtonLabel}
          handleClick={props.handleGithubSignUp}
        />
      )}
      {props.viaTwitter && (
        <TwitterButton
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
