import { createContext } from "react";

//make the text color of the action buttons different from the text color of the layout
export const defaultTheme = {
  borderRadius: 10,
  primaryColor: "blue",
  secondaryColor: "grey",
  primaryActionColor: '#f72585', //Colors of the buttons 
  secondaryActionColor: '#4cc9f0', //Colors of the buttons 
  layoutColor: '#d3d4d9', //Colors of boxes and cards
  textColor: 'black', //Colors of text everywhere
  inputColor: 'white', //Color of input fields
  lightBackground: 'red',//
  darkBackground: 'orange',
  margins: 10, paddings: 10

};
//change the heirarchy to something like the one below
let testTheme = {
  layout: {
    primary: {
      backgroundColor: 'red'
    },
    secondary: {
      backgroundColor: 'blue'
    }
  }
}

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
