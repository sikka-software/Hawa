import React, { useContext } from "react";
import { Box } from "../../layout";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel } from "../../ui";
export const ResetPasswordForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400} >
      <StyledInputLabel label="Email" />
      <StyledTextField type="text" />
      {props.children}
    </Box>
  );
};
