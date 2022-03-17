import Button from "@mui/material/Button";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const ActionButton = (props) => {
  const theme = useContext(ThemeProvider);
  const currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  let actionButtonStyle = {};

  if (currentTheme) {
    actionButtonStyle = {
      ...theme.actionButton[currentTheme],
      margin: props.last ? 0 : theme.actionButton[currentTheme].margin,
      marginTop: props.last ? theme.actionButton[currentTheme].margin * 2 : 0
    };
  } else {
    actionButtonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: 10,
      marginTop: props.last ? 10 * 2 : 0
    };
  }
  return (
    <Button style={actionButtonStyle} {...props}>
      {props.text}
    </Button>
  );
};
