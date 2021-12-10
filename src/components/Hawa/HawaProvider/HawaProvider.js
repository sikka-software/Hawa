import { createContext } from "react";

const defaultValue = {
  borderRadius: 10,
  primaryColor: "blue",
  secondaryColor: "grey",
  margins: 10,
  paddings: 5
};

export const ThemeProvider = createContext(defaultValue);

export const HawaProvider = ({ theme, ...props }) => {
  return (
    <ThemeProvider.Provider value={theme || defaultValue}>
      {props.children}
    </ThemeProvider.Provider>
  );
};
