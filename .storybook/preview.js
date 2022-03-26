import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { darken, lighten } from "@mui/material";

let allBorderRadius = 10;
let primaryActionColor = "#153B50";
let primaryLayoutColor = "#ECEBE4";
let primaryDangerColor = "#E94F37";
let primaryActionTextColor = "#ffffff";
let mainFont = "Roboto";
const defaultTheme = createTheme({
  allBorderRadius: allBorderRadius,
  primaryActionColor: "#153B50",
  primaryLayoutColor: "#ECEBE4",
  primaryDangerColor: "#E94F37",
  primaryActionTextColor: "#ffffff",
  typography: { fontFamily: ["IBMPlex", "Roboto"].join(",") },
  palette: {
    primary: {
      main: primaryActionColor
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: 20
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          // width: "max-content",
          width: "100%",
          borderRadius: allBorderRadius,
          margin: 0
        }
      }
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: "borderedLeft" },
          style: {
            borderLeft: "1px solid #dddddd"
          }
        },
        {
          props: { variant: "borderedRight" },
          style: {
            borderRight: "1px solid #dddddd"
          }
        }
      ]
    },
    MuiTable: {
      styleOverrides: {
        root: {
          // backgroundColor: "green",
          // width: "max-content",
          // width: "100%",
          //  border: "1px solid black",
          borderRadius: allBorderRadius
          // margin: 0
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: 10,
          marginTop: 10,
          fontSize: 15
        }
      }
    },
    MuiFormControl: {
      variants: [
        {
          props: { variant: "hawa" },
          style: { width: "100%" }
        }
      ]
    },
    MuiTypography: {
      styleOverrides: {},
      variants: [
        {
          props: {
            variant: "validation"
          },
          style: {
            textAlign: "start",
            whiteSpace: "nowrap",
            fontFamily: mainFont,
            color: "red",
            fontSize: 13,
            marginTop: 0
          }
        }
      ]
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          padding: "0px !important",
          // backgroundColor: "red",
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: allBorderRadius,
          // border: "2px solid blue"
          "&:hover": {
            outline: `1px solid ${primaryActionColor}`
            // backgroundColor: "red"
          },
          "&:focus": {
            outline: `1px solid ${primaryActionColor}`
            // backgroundColor: "red"
          }
        },
        input: {
          // backgroundColor: "yellow",
          margin: 0,
          border: "none",
          padding: 10,

          ":focus": {
            border: "none"
            // backgroundColor: "red"
            // backgroundColor: "blue"
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          // backgroundColor: "red",
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: allBorderRadius,
          // border: "2px solid blue"
          "&:hover": {
            outline: `1px solid ${primaryActionColor}`
            // backgroundColor: "red"
          },
          "&:focus": {
            outline: `1px solid ${primaryActionColor}`
            // backgroundColor: "red"
          }
        },
        input: {
          // backgroundColor: "yellow",
          margin: 0,
          border: "none",
          padding: 10,

          ":focus": {
            border: "none"
            // backgroundColor: "red"
            // backgroundColor: "blue"
          }
        }
      },
      variants: [
        {
          props: { variant: "unscrollable" },
          style: {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none"
              },
            "& input[type=number]": {
              MozAppearance: "textfield"
            }
          }
        }
      ]
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: allBorderRadius,
          backgroundColor: primaryLayoutColor,
          minWidth: 300
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: primaryLayoutColor,
          borderRadius: allBorderRadius,
          paddingLeft: 20,
          paddingRight: 20,
          padding: 20
        }
      },
      variants: [
        {
          props: { variant: "auth" },
          style: {
            backgroundColor: primaryLayoutColor,
            fontSize: "2rem",
            padding: 20,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "plain" },
          style: { background: "none" }
        },

        {
          props: { variant: "panelTabs" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            justifyContent: "space-between",
            backgroundColor: primaryLayoutColor,
            alignItems: "center",
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            padding: 10
          }
        },
        {
          props: { variant: "pricingTabs" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            justifyContent: "space-between",
            backgroundColor: primaryLayoutColor,
            alignItems: "center",
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
            padding: 10
          }
        },
        {
          props: { variant: "inSettings" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            // justifyContent: "space-between",
            height: 50,
            marginRight: 0,
            backgroundColor: "white",
            padding: 5,
            // alignItems: "center",
            paddingLeft: "5px !important",
            paddingRight: "5px !important"
            // padding: 10
          }
        },
        {
          props: { variant: "inPricing" },
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "fit-content",
            margin: 0,
            height: 50,
            marginRight: 0,
            marginLeft: 0,
            backgroundColor: primaryLayoutColor,
            padding: 5,
            paddingLeft: "5px !important",
            paddingRight: "5px !important"
          }
        },
        {
          props: { variant: "settingsRow" },
          style: {
            display: "flex",
            flexDirection: "row",
            borderRadius: allBorderRadius,
            // width: "fit-content",
            backgroundColor: lighten(primaryLayoutColor, 0.4),
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
            marginTop: 10,
            paddingLeft: "20px !important",
            paddingRight: "10px !important"
            // padding: 10
          }
        },
        {
          props: { variant: "plan-card" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            border: `1px solid ${primaryLayoutColor}`,
            // width: "fit-content",
            backgroundColor: lighten(primaryLayoutColor, 0.4),
            // justifyContent: "space-between",
            // alignItems: "flex-start",
            margin: 10,
            // height: 70,
            width: 250,
            maxWidth: 200,
            // marginTop: 10,
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
            // padding: 10
            padding: 0
          }
        },
        {
          props: { variant: "selected-plan-card" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            border: `1px solid ${primaryActionColor}`,
            // width: "fit-content",
            backgroundColor: lighten(primaryActionColor, 0.4),
            // justifyContent: "space-between",
            // alignItems: "flex-start",
            margin: 10,
            // height: 70,
            width: 250,
            maxWidth: 200,
            // marginTop: 10,
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
            // padding: 10
            padding: 0
          }
        },
        {
          props: { variant: "plan-header" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            border: `1px solid ${primaryLayoutColor}`,
            backgroundColor: "white",
            margin: 0,
            padding: 20
          }
        },
        {
          props: { variant: "selected-plan-header" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            border: `1px solid ${primaryLayoutColor}`,
            backgroundColor: "white",
            margin: 0,
            padding: 20
          }
        },
        {
          props: { variant: "pricing" },
          style: {
            display: "flex",
            flexDirection: "row",
            maxWidth: "max-content",
            width: "fit-content",
            padding: 0,
            paddingLeft: "0px !important",
            paddingRight: "0px !important"
            // borderRadius: allBorderRadius,
            // borderBottomLeftRadius: 0,
            // borderBottomRightRadius: 0,
            // border: `1px solid ${primaryLayoutColor}`,
            // backgroundColor: "white"
            // margin: 0,
            // padding: 20
          }
        },
        {
          props: { variant: "appbar" },
          style: {
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "none !important",
            background: "none !important",
            padding: "0px !important",
            paddingRight: "20px !important",
            paddingLeft: "20px !important"
            // borderRadius: allBorderRadius,
            // paddingLeft: 20,
            // paddingRight: 20,
            // padding: 20
          }
        }
      ]
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          borderWidth: 10,
          borderRadius: allBorderRadius
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          borderRadius: allBorderRadius,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" }
        },
        contained: { backgroundColor: primaryActionColor }
      },
      variants: [
        {
          props: { variant: "danger" },
          style: {
            backgroundColor: primaryDangerColor,
            color: primaryActionTextColor,
            // padding: 10,
            // marginTop: 20,
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryDangerColor, 0.5),
              color: "white"
            }
          }
        },
        {
          props: { variant: "last" },
          style: {
            backgroundColor: primaryActionColor,
            color: primaryActionTextColor,
            marginTop: 20,
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.5),
              color: "white"
            }
          }
        },
        {
          props: { variant: "withLogo" },
          style: {
            textTransform: "none",
            border: `1px solid ${darken(primaryActionColor, 0.1)}`,
            fontSize: "2rem",
            backgroundColor: "white",
            marginTop: 10,
            padding: 10,
            height: 50,
            fontFamily: mainFont,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "selected" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            backgroundColor: primaryActionColor,
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 15,
            margin: 0,
            color: "white",
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.5),
              color: "white"
            }
          }
        },
        {
          props: { variant: "unselected" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            // backgroundColor: primaryActionColor,
            background: "none",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 15,
            margin: 0,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "adaptive-dark" },
          style: {
            backgroundColor: primaryActionColor,
            height: 40,
            // width: 40,
            color: primaryActionTextColor,
            margin: 0,
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.4)
            }
          }
        },
        {
          props: { variant: "adaptive-light" },
          style: {
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            backgroundColor: primaryActionColor,
            height: 50,
            color: primaryActionTextColor,
            // background: "none",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: 15,
            margin: 0,
            borderRadius: allBorderRadius,
            "&:hover": {
              backgroundColor: darken(primaryActionColor, 0.4)
            }
          }
        }
      ]
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          // backgroundColor: "green",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center"
        },
        track: {
          backgroundColor: "grey",
          height: 20,
          borderRadius: allBorderRadius
        },
        thumb: {
          borderRadius: allBorderRadius
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: allBorderRadius
        }
      },
      variants: [
        {
          props: { variant: "offline" },
          style: {
            backgroundColor: lighten(primaryDangerColor, 0.8),
            // color: primaryActionTextColor,
            color: "black",
            borderRadius: allBorderRadius,
            outline: `1px solid ${primaryDangerColor}`
          }
        }
      ]
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          margin: 15,
          borderRadius: allBorderRadius,
          "&:hover": {
            backgroundColor: primaryActionColor,
            color: "white"
          }
        }
      },
      variants: [
        {
          props: { variant: "clicked" },
          style: {
            backgroundColor: primaryActionColor,
            color: "white"
          }
        }
      ]
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
          // color: "white",
          // height: 60
        }
      },
      variants: [
        {
          props: { variant: "appbar" },
          style: {
            color: "black",
            height: 60,
            backgroundColor: "white",
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0

            // background: "none",
            // color: primaryActionTextColor,
            // padding: 10,
            // marginTop: 20,
            // borderRadius: allBorderRadius
            // "&:hover": {
            //   backgroundColor: darken(primaryActionColor, 0.5),
            //   color: "white"
            // }
          }
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          // background: "none",
          color: "black"
        }
      },
      variants: [
        {
          props: { variant: "appbar" },
          style: {
            color: "black",
            margin: 0,
            // height: 60,
            background: "none",
            color: primaryActionColor
            // padding: 10,
            // marginTop: 20,
            // borderRadius: allBorderRadius
            // "&:hover": {
            //   backgroundColor: darken(primaryActionColor, 0.5),
            //   color: "white"
            // }
          }
        }
      ]
    }
  }
});

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        "Blocks",
        [
          "Auth",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Account",
          ["User Profile", "User Settings"],
          "Payment",
          ["Payment Selection", "User Settings"]
        ]
      ]
    }
  }
};
