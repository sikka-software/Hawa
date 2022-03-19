import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, darken } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const HawaButton = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  let buttonStyle = {};
  let currentTheme = Object.keys(hawaTheme.actionButton).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  if (currentTheme) {
    buttonStyle = {
      ...hawaTheme.actionButton[currentTheme],
      //   marginTop: theme.actionButton[currentTheme].margin,
      border: props.outlined ? "2px solid black" : "none",
      //   borderRadius: theme.actionButton[currentTheme].borderRadius,
      backgroundColor: "white",
      //   height: 50,
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
      marginTop: hawaTheme.actionButton[currentTheme]?.margin,
      border: props.outlined ? "2px solid black" : "none",
      borderRadius: 0,
      //backgroundColor: "white",
      backgroundColor: "red",
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
