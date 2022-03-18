import { createContext } from "react";

//make the text color of the action buttons different from the text color of the layout
export const defaultTheme = {
  borderRadius: 10,
  primaryColor: "blue",
  secondaryColor: "grey",
  // primaryActionColor: '#f72585', //Colors of the buttons
  primaryActionColor: "grey", //Colors of the buttons
  secondaryActionColor: "#4cc9f0", //Colors of the buttons
  layoutColor: "#d3d4d9", //Colors of boxes and cards
  textColor: "black", //Colors of text everywhere
  inputColor: "white", //Color of input fields
  lightBackground: "#FBF5F3", //
  darkBackground: "#0F0E0E",
  testcolor: "green",
  margins: 10,
  paddings: 10,
  allBorderRadius: 10,
  typography: {
    primary: { color: "black" },
    secondary: { color: "white" }
  },
  logoButton: {
    primary: {
      borderRadius: 10,
      backgroundColor: "#f90900",

      padding: 10,
      border: "1px solid #ced4da",
      height: 50,
      "&:focus": {
        borderColor: "green"
      }
    },
    secondary: {
      borderRadius: 10,
      backgroundColor: "#f90900",
      padding: 10,
      border: "1px solid #ced4da",
      height: 50,
      "&:focus": {
        borderColor: "green"
      }
    }
  },
  actionButton: {
    primary: {
      borderRadius: 10,
      backgroundColor: "#f90900",
      color: "white",
      margin: 10,
      padding: 10,
      border: "1px solid #ced4da",
      fontSize: 16,
      height: 50,
      "&:focus": {
        borderColor: "red"
      }
    },
    secondary: {
      borderRadius: 10,
      margin: 10,
      padding: 10,
      backgroundColor: "#FF8811",
      color: "black"
    }
  },
  layout: {
    primary: {
      backgroundColor: "#d3d4d9",
      color: "black",
      margin: 10,
      padding: 10,
      borderRadius: 10
    },
    secondary: {
      backgroundColor: "#001E3C",
      // backgroundColor: "red",
      color: "white",
      margin: 10,
      padding: 10,
      borderRadius: 10
    }
  },
  inputFields: {
    primary: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      borderRadius: 10,
      "&:focus": {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        // borderColor: theme.palette.primary.main
        borderColor: "#f90900"
      }
    },
    secondary: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      borderRadius: 10
    }
  },
  alerts: {
    primary: {
      //  marginTop: 10,
      marginBottom: 10,
      padding: 10,
      borderRadius: 10
    },
    secondary: {
      marginBottom: 10,
      padding: 10,
      borderRadius: 10
    }
  }
};

export const ThemeProvider = createContext(defaultTheme);

export const HawaProvider = ({ theme, ...props }) => {
  if (props.size === "large") {
    theme = {
      ...theme,
      paddings: 20,
      margins: 20
    };
  }
  return (
    <ThemeProvider.Provider value={theme || defaultTheme}>
      {props.children}
    </ThemeProvider.Provider>
  );
};
