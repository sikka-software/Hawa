import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, alpha } from "@mui/material/styles";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const HawaAlert = (props) => {
  const theme = useContext(ThemeProvider);
  const currentTheme = Object.keys(theme.alerts).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  let alertStyle = {};

  if (currentTheme) {
    alertStyle = {
      ...theme.alerts[currentTheme]
    };
  } else {
    alertStyle = {
      marginBottom: 10
    };
  }

  const StyledAlert = styled(Alert)(({ theme }) => {
    return {
      ...alertStyle
    };
  });

  return (
    <StyledAlert themeType={props.themeType} {...props}>
      {props.title && <AlertTitle>{props.title}</AlertTitle>}
      {props.text}
    </StyledAlert>
  );
};
