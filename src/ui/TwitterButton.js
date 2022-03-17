import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import TwitterIcon from "@mui/icons-material/Twitter";

export const TwitterButton = (props) => {
  const theme = useContext(ThemeProvider);
  let buttonStyle = {};

  console.log(Object.keys(theme.actionButton));
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
        backgroundColor: "red"
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
        backgroundColor: "red"
      }
    };
  }
  return (
    <div style={buttonStyle} onClick={props.handleClick}>
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
    </div>
  );
};
