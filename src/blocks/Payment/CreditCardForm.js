import React from "react";
import {
  HawaTextField,
  ActionButton,
  GoogleButton,
  TwitterButton,
  GithubButton
} from "../../ui";
import { Box } from "../../layout";

export const CreditCardForm = (props) => {
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
    </Box>
  );
};
