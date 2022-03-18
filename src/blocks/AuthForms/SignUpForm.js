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

export const SignUpForm = (props) => {
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
        <HawaTextField themeType={props.theme} type="text" inputLabel="Email" />
        <HawaTextField
          themeType={props.theme}
          type="text"
          inputLabel="Password"
        />
        <HawaTextField
          themeType={props.theme}
          type="text"
          inputLabel="Confirm Password"
        />
        <ActionButton
          text="Sign Up"
          last
          themeType={props.theme}
          onClick={props.handleSignUp}
        />
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
