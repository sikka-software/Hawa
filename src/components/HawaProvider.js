import { createContext } from "react";

export const defaultTheme = {
  borderRadius: 10,
  primaryColor: "blue",
  secondaryColor: "grey",
  lightBackground: 'red',
  darkBackground: 'orange',
  layoutColor: '#f9b7b7',
  margins: 10, paddings: 10
};

export const ThemeProvider = createContext(defaultTheme);

export const HawaProvider = ({ theme, ...props }) => {
  if (props.size === 'large') {
    theme = {
      ...theme,
      paddings: 20,
      margins: 20
    }
  }
  return (
    <ThemeProvider.Provider value={theme || defaultTheme}>
      {props.children}
    </ThemeProvider.Provider>
  );
};
