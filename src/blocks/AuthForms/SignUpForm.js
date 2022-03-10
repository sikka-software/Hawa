import React, { useContext } from "react";
import { Box } from "../../layout";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel } from "../../ui";

export const SignUpForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400}>

      <StyledInputLabel label="Email" />
      <StyledTextField type="text" />
      <StyledInputLabel label="Password" />
      <StyledTextField type="text" />
      <StyledInputLabel label="Confirm Password" />
      <StyledTextField type="text" />
      {props.children}
    </Box>
  );
};
