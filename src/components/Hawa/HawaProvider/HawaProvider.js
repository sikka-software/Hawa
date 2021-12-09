import { createContext } from "react";

const defaultValue = {
  borderRadius: "10px",
  primaryColor: "blue",
  secondaryColor: "grey",
  margins: "10px",
  paddings: "5px"
};

export const ThemeProvider = createContext(defaultValue);

export const HawaProvider = ({ theme, ...props }) => {
  return (
    <ThemeProvider.Provider value={theme || defaultValue}>
      {props.children}
    </ThemeProvider.Provider>
  );
};
