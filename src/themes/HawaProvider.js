import { createContext } from "react";

//make the text color of the action buttons different from the text color of the layout
let allPrimaryBG = "#f90900";
let allPrimaryAction = "#B20D30";
export const defaultTheme = {
  allPrimaryBG: "#f90900",
  allPrimaryAction: "#138A36",
  allBorderRadius: 10,
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
  typography: {
    fontFamily: ["IBMPlex"].join(","),
    primary: { color: "black" },
    secondary: { color: "white" }
  },
  logoButton: {
    primary: {
      borderRadius: 10,
      backgroundColor: allPrimaryAction,
      // margin: 10,
      marginTop: 10,
      padding: 30,
      paddingTop: 0,
      paddingBottom: 0,
      border: "1px solid #ced4da",
      height: 50,
      "&:focus": {
        borderColor: allPrimaryAction
      }
    },
    secondary: {
      borderRadius: 10,
      backgroundColor: "#f90900",
      marginTop: 10,
      padding: 30,
      paddingTop: 0,
      paddingBottom: 0,
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
      // backgroundColor: "#f90900",
      backgroundColor: allPrimaryAction,
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
      borderRadius: 10,
      "&:focus": {
        borderColor: "red",
        borderWidth: 1,
        border: "1px solid black"
      },
      "&:hover": {
        borderColor: "red",
        borderWidth: 1,
        border: "1px solid black"
      }
    },
    secondary: {
      backgroundColor: "white",

      borderRadius: 10
    }
  },
  alerts: {
    primary: {
      marginBottom: 10,
      padding: 10,
      borderRadius: 10
    },
    secondary: {
      marginBottom: 10,
      padding: 10,
      borderRadius: 10
    }
  },
  settingsRow: {
    primary: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
      margin: 0,
      padding: 10,
      borderRadius: 10
    },
    secondary: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "blue",
      margin: 0,
      padding: 5,
      borderRadius: 10
    }
  },
  radioSelector: {
    primary: {
      padding: 10,
      borderRadius: 10
    },
    secondary: {
      padding: 10,
      borderRadius: 10
    }
  }
};

export const ThemeProvider = createContext(defaultTheme);

export const HawaProvider = ({ theme, ...props }) => {
  console.log("theme is ", theme);
  if (props.size === "large") {
    theme = {
      ...theme,
      paddings: 20,
      margins: 20
    };
  }
  return (
    <ThemeProvider.Provider
      value={{ hawaTheme: defaultTheme, themeName: props.themeName }}
    >
      {props.children}
    </ThemeProvider.Provider>
  );
};
