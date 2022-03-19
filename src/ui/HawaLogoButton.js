import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, darken } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const HawaLogoButton = (props) => {
  const theme = useContext(ThemeProvider);
  let buttonStyle = {};
  let currentTheme = Object.keys(theme.logoButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  if (currentTheme) {
    buttonStyle = {
      ...theme.logoButton[currentTheme],
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  } else {
    // Default theme
    buttonStyle = {
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      height: 50,
      border: "1px solid #ced4da",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  }
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      ...buttonStyle
    };
  });
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
