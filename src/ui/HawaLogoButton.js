import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, darken } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const HawaLogoButton = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  let buttonStyle = {};
  let currentTheme = Object.keys(hawaTheme.logoButton).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  if (currentTheme) {
    buttonStyle = {
      ...hawaTheme.logoButton[currentTheme],
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
