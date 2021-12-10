import React, { useContext } from "react";
import { ThemeProvider } from "../HawaProvider";

export const StyledAlert = (props) => {
  const theme = useContext(ThemeProvider);

  let alertStyle = {
    backgroundColor: "green",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: theme.borderRadius
  };
  switch (props.type) {
    case "warning":
      alertStyle.backgroundColor = "yellow";
      return <div style={alertStyle}>{props.text}</div>;
      break;
    case "danger":
      alertStyle.backgroundColor = "red";
      return <div style={alertStyle}>{props.text}</div>;
      break;
    case "notification":
      alertStyle.backgroundColor = "blue";
      return <div style={alertStyle}>{props.text}</div>;
      break;
    default:
      return <div style={alertStyle}>{props.text}</div>;
  }
};
