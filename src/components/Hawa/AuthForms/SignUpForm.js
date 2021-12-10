import React, { useContext } from "react";
import { ThemeProvider } from "../HawaProvider";
import { StyledInputLabel } from "../InputLabel";
import { StyledTextField } from "../TextField";

export const SignUpForm = (props) => {
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
      <StyledInputLabel label="Password" />
      <StyledTextField type="text" />
      <StyledInputLabel label="Confirm Password" />
      <StyledTextField type="text" />
      {props.children}
    </div>
  );
};
