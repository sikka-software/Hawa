import { ThemeProvider, createTheme, Components } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import { darken, lighten } from "@mui/material";

let allBorderRadius = 10;
let primaryActionColor = "#153B50";
let primaryLayoutColor = "#ECEBE4";
let primaryActionTextColor = "#ffffff";
let mainFont = "Roboto";
const defaultTheme = createTheme({
  allBorderRadius: allBorderRadius,
  primaryActionColor: "#153B50",
  primaryLayoutColor: "#ECEBE4",
  primaryActionTextColor: "#ffffff",
  typography: { fontFamily: ["IBMPlex", "Roboto"].join(",") },
  palette: {
    primary: {
      main: primaryActionColor
    }
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          marginRight: 15,
          marginLeft: 15,
          minWidth: 50
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: `${allBorderRadius}px !important`,
          marginBottom: 10,
          position: "unset",
          "&.Mui-expanded": {
            marginBottom: 10,
            marginTop: 10
          }
        }
      }
    },

    MuiDivider: {
      styleOverrides: { root: { margin: 20 } }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
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
          style: { borderLeft: "1px solid #dddddd" }
        },
        {
          props: { variant: "borderedRight" },
          style: { borderRight: "1px solid #dddddd" }
        }
      ]
    },
    MuiTable: {
      styleOverrides: { root: { borderRadius: allBorderRadius } }
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
          props: { variant: "validation" },
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
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: allBorderRadius,
          "&:hover": { outline: `1px solid ${primaryActionColor}` },
          "&:focus": { outline: `1px solid ${primaryActionColor}` }
        },
        input: {
          margin: 0,
          border: "none",
          padding: 10,
          ":focus": { border: "none" }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: allBorderRadius,
          "&:hover": { outline: `1px solid ${primaryActionColor}` },
          "&:focus": { outline: `1px solid ${primaryActionColor}` }
        },
        input: {
          margin: 0,
          border: "none",
          padding: 10,
          ":focus": { border: "none" }
        }
      },
      variants: [
        {
          props: { variant: "unscrollable" },
          style: {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              { display: "none" },
            "& input[type=number]": { MozAppearance: "textfield" }
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
            height: 50,
            marginRight: 0,
            backgroundColor: "white",
            padding: 5,
            paddingLeft: "5px !important",
            paddingRight: "5px !important"
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
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: allBorderRadius,
            backgroundColor: lighten(primaryLayoutColor, 0.4),
            height: 70,
            marginTop: 10,
            paddingLeft: "20px !important",
            paddingRight: "10px !important"
          }
        },
        {
          props: { variant: "plan-card" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            border: `1px solid ${primaryLayoutColor}`,
            backgroundColor: lighten(primaryLayoutColor, 0.4),
            margin: 10,
            width: 250,
            maxWidth: 200,
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
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
            backgroundColor: lighten(primaryActionColor, 0.4),
            margin: 10,
            width: 250,
            maxWidth: 200,
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
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
          props: { variant: "card-container" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            border: `1px solid ${primaryLayoutColor}`,
            margin: 0,
            padding: "0px !important"
          }
        },
        {
          props: { variant: "card-header" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            border: `1px solid ${primaryLayoutColor}`,
            backgroundColor: "white",
            margin: 0,
            padding: "0px !important",
            paddingLeft: "20px !important",
            paddingRight: "20px !important"
          }
        },
        {
          props: { variant: "card-content" },
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: allBorderRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            border: `1px solid ${primaryLayoutColor}`,
            margin: 0,
            padding: "0px !important",
            paddingLeft: "20px !important",
            paddingRight: "20px !important"
          }
        },
        {
          props: { variant: "card-actions" },
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            border: `1px solid ${primaryLayoutColor}`,
            margin: 0
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
          }
        }
      ]
    },
    MuiSnackbar: {
      styleOverrides: {
        root: { borderWidth: 10, borderRadius: allBorderRadius }
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
          props: { variant: "color-picker" },
          style: ({ theme }) => ({
            ...{
              height: 40,
              marginRight: 5,
              marginLeft: 5,
              backgroundColor: theme.palette.error.main,
              color: primaryActionTextColor,
              borderRadius: allBorderRadius,
              "&:hover": {
                backgroundColor: darken(theme.palette.error.main, 0.5),
                color: "white"
              }
            }
          })
        },
        {
          props: { variant: "danger" },
          style: ({ theme }) => ({
            ...{
              backgroundColor: theme.palette.error.main,
              color: primaryActionTextColor,
              borderRadius: allBorderRadius,
              "&:hover": {
                backgroundColor: darken(theme.palette.error.main, 0.5),
                color: "white"
              }
            }
          })
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
            background: "none",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "adaptive-dark" },
          style: {
            backgroundColor: primaryActionColor,
            height: 40,
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
            justifyContent: "space-between",
            alignItems: "center",
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
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        track: {
          backgroundColor: "grey",
          height: 20,
          borderRadius: allBorderRadius
        },
        thumb: { borderRadius: allBorderRadius }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: allBorderRadius, marginBottom: 10 },

        standardError: ({ theme }) => ({
          ...{
            backgroundColor: lighten(theme.palette.error.main, 0.8),
            outline: `1px solid ${darken(theme.palette.error.main, 0.1)}`
          }
        }),
        standardInfo: ({ theme }) => ({
          ...{
            backgroundColor: lighten(theme.palette.info.main, 0.8),
            outline: `1px solid ${darken(theme.palette.info.main, 0.1)}`
          }
        }),
        standardWarning: ({ theme }) => ({
          ...{
            backgroundColor: lighten(theme.palette.warning.main, 0.8),
            outline: `1px solid ${darken(theme.palette.warning.main, 0.1)}`
          }
        }),
        standardSuccess: ({ theme }) => ({
          ...{
            backgroundColor: lighten(theme.palette.success.main, 0.8),
            outline: `1px solid ${darken(theme.palette.success.main, 0.1)}`
          }
        })
      },
      variants: [
        {
          props: { variant: "inContainer" },
          style: { color: "black", borderRadius: allBorderRadius }
        }
        // {
        //   props: { variant: "offline" },
        //   style: ({ theme }) => ({
        //     ...{
        //       backgroundColor: lighten(theme.palette.error.main, 0.8),
        //       color: "black",
        //       borderRadius: allBorderRadius,
        //       outline: `1px solid ${theme.palette.error.main}`
        //     }
        //   })
        // }
      ]
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          margin: 15,
          borderRadius: allBorderRadius,
          "&:hover": { backgroundColor: primaryActionColor, color: "white" }
        }
      },
      variants: [
        {
          props: { variant: "clicked" },
          style: { backgroundColor: primaryActionColor, color: "white" }
        }
      ]
    },
    MuiToolbar: {
      variants: [
        {
          props: { variant: "appbar" },
          style: {
            color: "black",
            height: 60,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0
          }
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: { root: { boxShadow: "none", color: "black" } },
      variants: [
        {
          props: { variant: "appbar" },
          style: {
            color: "black",
            margin: 0,
            background: "none",
            color: primaryActionColor
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
        "Introduction",
        "Getting Started",
        "Blocks",
        [
          "Blocks Introduction",
          "Auth",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Account",
          ["User Profile", "User Settings"],
          "Payment",
          ["Payment Selection", "User Settings"]
        ],
        "Layout",
        ["Layout Introduction", "AppBar", "AppLayout", "Container", "Dialog"],
        "Elements",
        [
          "Elements Introduction",
          "Buttons",
          ["Sign In", "Sign Up", "Reset Password", "New Pasword"],
          "Cards",
          ["User Profile", "User Settings"],
          "Notifications",
          "Selections",
          "SettingsRow",
          "Alert",
          "Table",
          "PopMenu",
          "Snackbar",
          "TextFields"
        ]
      ]
    }
  }
};
