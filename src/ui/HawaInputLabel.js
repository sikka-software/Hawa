import InputLabel from "@mui/material/InputLabel";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const HawaInputLabel = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  let labelStyle = {};

  let currentTheme = Object.keys(hawaTheme.actionButton).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  if (currentTheme) {
    labelStyle = {
      margin: 15,
      marginRight: 5,
      marginLeft: 5,
      color: hawaTheme?.layout[currentTheme].color
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
