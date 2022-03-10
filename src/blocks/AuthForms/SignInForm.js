import React, { useContext } from "react";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel } from "../../ui";
import { Box } from '../../layout'
export const SignInForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400}>

      <StyledInputLabel label="Email" />
      <StyledTextField type="text" />
      <StyledInputLabel label="Password" />
      <StyledTextField type="text" />

      {props.children}

    </Box>
  );
};
