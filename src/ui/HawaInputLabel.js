import InputLabel from "@mui/material/InputLabel";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const HawaInputLabel = (props) => {
  const theme = useContext(ThemeProvider);
  let labelStyle = {};

  console.log(Object.keys(theme.actionButton));
  let currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  if (currentTheme) {
    labelStyle = {
      margin: 15,
      marginRight: 5,
      marginLeft: 5,
      color: theme.layout[currentTheme].color
    };
  } else {
    labelStyle = {
      margin: 15,
      marginRight: 0,
      marginLeft: 0,
      color: "black"
    };
  }
  return (
    <InputLabel style={labelStyle}>
      <div style={{ fontSize: 15 }}>{props.label}</div>
    </InputLabel>
  );
};
