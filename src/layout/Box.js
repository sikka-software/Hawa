import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const Box = (props) => {
  const theme = useContext(ThemeProvider);
  let boxStyle = {};

  console.log(Object.keys(theme.actionButton));
  let currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  if (currentTheme) {
    boxStyle = {
      display: "flex",
      flexDirection: "column",
      ...theme.layout[currentTheme],
      backgroundColor: props.noColor
        ? "none"
        : theme.layout[currentTheme].backgroundColor,
      padding: props.noPadding ? 0 : theme.layout[currentTheme].padding,
      margin: props.noMargin ? 0 : theme.layout[currentTheme].margin,
      maxWidth: props.maxWidth
    };
  } else {
    boxStyle = {
      display: "flex",
      flexDirection: "column",
      color: "white",
      marginTop: props.last ? 10 * 2 : 0,
      backgroundColor: props.noColor ? "none" : "lightGrey",
      padding: props.noPadding ? 0 : 10,
      margin: props.noMargin ? 0 : 10,
      maxWidth: props.maxWidth,
      borderRadius: 0
    };
  }

  return <div style={boxStyle}>{props.children}</div>;
};
