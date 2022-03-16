import React, { useContext } from "react";
import { Box } from "../../layout";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel, ActionButton } from "../../ui";
import GoogleButton from "../../ui/GoogleButton";

export const SignUpForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <StyledInputLabel label="Email" />
        <StyledTextField type="text" />
        <StyledInputLabel label="Password" />
        <StyledTextField type="text" />
        <StyledInputLabel label="Confirm Password" />
        <StyledTextField type="text" />
        <ActionButton text="Sign Up" last />
      </Box>
      {props.viaGoogle && (
        <GoogleButton
          outlined
          buttonText={props.googleButtonLabel}
          handleClick={props.handleGoogleSignIn}
        />
      )}
    </Box>
  );
};
