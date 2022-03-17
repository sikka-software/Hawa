import React from "react";
import {
  HawaTextField,
  ActionButton,
  GoogleButton,
  TwitterButton,
  GithubButton
} from "../../ui";
import { Box } from "../../layout";

export const SignInForm = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <HawaTextField themeType={props.theme} type="text" inputLabel="Email" />

        <HawaTextField
          themeType={props.theme}
          type="text"
          inputLabel="Password"
        />
        <ActionButton
          last
          text={"Sign In"}
          themeType={props.theme}
          onClick={props.handleSignIn}
        />
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
