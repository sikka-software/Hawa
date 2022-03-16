import React, { useContext } from "react";
import { Box } from "../../layout";
import { ThemeProvider } from "../../themes/HawaProvider";
import { StyledTextField, StyledInputLabel, ActionButton } from "../../ui";
export const NewPasswordForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box maxWidth={400}>
      <StyledInputLabel label="Password" />
      <StyledTextField type="password" />
      <StyledInputLabel label="Confirm Password" />
      <StyledTextField type="password" />
      <ActionButton last text="Reset Password" />
    </Box>
  );
};
