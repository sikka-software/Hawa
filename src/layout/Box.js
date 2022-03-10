import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const Box = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',

        backgroundColor: theme.layoutColor,
        color: theme.textColor,
        padding: theme.paddings,
        margin: theme.margins,
        borderRadius: theme.borderRadius,
        maxWidth: props.maxWidth
      }}
    >
      {props.children}
    </div>
  );
};
