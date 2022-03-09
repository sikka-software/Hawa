import React, { useContext } from "react";
import { ThemeProvider } from "../components/HawaProvider";

export const Box = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <div
      style={{
        backgroundColor: theme.layoutColor,
        color: theme.textColors,
        padding: theme.paddings,
        margin: theme.margins,
        borderRadius: theme.borderRadius
      }}
    >
      {props.children}
    </div>
  );
};
