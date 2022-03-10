import InputLabel from "@material-ui/core/InputLabel";
import { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const StyledInputLabel = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <InputLabel
      style={{
        margin: 15,
        marginRight: 0,
        marginLeft: 0,
        color: theme.textColor
      }}
    >
      <div style={{ fontSize: 15 }}>{props.label}</div>
    </InputLabel>
  );
};
