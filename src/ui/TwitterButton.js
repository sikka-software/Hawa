import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { styled, alpha, darken } from "@mui/material/styles";

export const TwitterButton = (props) => {
  const theme = useContext(ThemeProvider);
  let buttonStyle = {};

  let currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  if (currentTheme) {
    buttonStyle = {
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.layout[currentTheme].margin,
      border: props.outlined ? "2px solid black" : "none",
      borderRadius: theme.layout[currentTheme].borderRadius,
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  } else {
    buttonStyle = {
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.margins,
      border: props.outlined ? "2px solid black" : "none",
      borderRadius: 0,
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  }
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      // "label + &": {
      //   marginTop: theme.spacing(3)
      // },

      borderRadius: 4,
      position: "relative",
      border: "1px solid #ced4da",
      fontSize: 16,
      // width: "auto",
      height: 50,
      // padding: "10px 12px",
      ...buttonStyle,
      "&:focus": {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      }
    };
  });
  return (
    <StyledButton onClick={props.handleClick}>
      <TwitterIcon />
      <div style={{ width: 10 }} />
      <p
        style={{
          color: "black",
          fontSize: 14,
          textAlign: "center",
          letterSpacing: 0.4,
          fontFamily: "Roboto",
          fontWeight: 500
        }}
      >
        {props.buttonText}
      </p>
    </StyledButton>
  );
};
