import React, { useContext } from "react";
import { ThemeProvider } from "../HawaProvider";

export const Box = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <div
      style={{
        backgroundColor: theme.paperColors,
        padding: theme.paddings,
        borderRadius: theme.borderRadius,
        margin: theme.margins
      }}
    >
      {props.children}
    </div>
  );
};
