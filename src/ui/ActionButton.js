import Button from "@mui/material/Button";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, darken } from "@mui/material/styles";

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
      marginTop: props.last ? theme.actionButton[currentTheme].margin * 2 : 0,
      "&:hover": {
        backgroundColor: darken(
          theme.actionButton[currentTheme]?.backgroundColor,
          0.1
        )
      }
    };
  } else {
    actionButtonStyle = {
      backgroundColor: "black",
      color: "white",
      padding: 10,
      marginTop: props.last ? 10 * 2 : 0
    };
  }

  const StyledButton = styled(Button)(({ theme }) => {
    return {
      ...actionButtonStyle
    };
  });
  return <StyledButton {...props}>{props.text}</StyledButton>;
};
