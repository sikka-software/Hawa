import React, { useContext } from "react";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel, ActionButton } from "../../ui";
import { Box } from "../../layout";
import GoogleButton from "../../ui/GoogleButton";
export const SignInForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <StyledInputLabel label="Email" />
        <StyledTextField type="text" />
        <StyledInputLabel label="Password" />
        <StyledTextField type="text" />
        <ActionButton text={"Sign In"} last />
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
