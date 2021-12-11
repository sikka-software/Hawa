import React, { useContext } from "react";
import { ThemeProvider } from "../../components/HawaProvider";
import { StyledTextField, StyledInputLabel } from "../../components";
export const ResetPasswordForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <div
      style={{
        backgroundColor: theme.paperColors,
        padding: theme.paddings,
        borderRadius: theme.borderRadius,
        margin: theme.margins
      }}
    >
      <StyledInputLabel label="Email" />
      <StyledTextField type="text" />
      {props.children}
    </div>
  );
};
