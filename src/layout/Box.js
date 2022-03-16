import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const Box = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',

        backgroundColor: props.noColor ? "none" : theme.layoutColor,
        color: theme.textColor,
        padding: props.noPadding ? 0 : theme.paddings,
        margin: props.noMargin ? 0 : theme.margins,
        borderRadius: theme.borderRadius,
        maxWidth: props.maxWidth
      }}
    >
      {props.children}
    </div>
  );
};
