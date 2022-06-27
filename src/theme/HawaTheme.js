import { createTheme } from "@mui/material";
import { darken, lighten } from "@mui/material";

export const CreateHawaTheme = (
  allBorderRadius,
  primaryActionColor,
  primaryLayoutColor,
  primaryActionTextColor,
  mainFont,
  breakpointsValues
) =>
  createTheme({
    typography: { fontFamily: ["IBMPlex", "Roboto"].join(",") },
    palette: {
      primary: {
        main: primaryActionColor
      }
    },
    breakpoints : {
      values: breakpointsValues ?? null
    },
    components: {
      MuiStack: {
        variants: [
          {
            props: { variant: "card" },
            style: {
              backgroundColor: primaryLayoutColor,
              padding: 15,
              // paddingLeft: 5,
              // paddingRight: 5,
              borderRadius: allBorderRadius
            }
          }
        ]
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: allBorderRadius
          }
        }
      },
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
            "&:focus": { outline: `1px solid ${primaryActionColor}` },
          },
          input: {
            margin: 0,
            border: "none",
            padding: 10,
            ":focus": { border: "none" },
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
          }, 
          {
            props : {variant : "pin"},
            style:{
              height: 60,
              width : 50,
              textAlign:"center",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                { display: "none" },
              "& input[type=number]": { MozAppearance: "textfield" }
            },
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
            props: { variant: "drop-area" },
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: lighten(primaryLayoutColor, 0.3),
              // fontSize: "2rem",
              // padding: "0px !important",
              // marginBottom: 10,
              border: "1px dashed",
              borderRadius: allBorderRadius,

              ":-moz-drag-over": {
                backgroundColor: "green"
              }
            }
          },
          {
            props: { variant: "page-controls" },
            style: {
              background: "none",
              fontSize: "2rem",
              padding: "0px !important",
              marginBottom: 10,
              borderRadius: allBorderRadius
            }
          },
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
              position: "relative",
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
              paddingRight: "0px !important",
              paddingLeft: "0px !important"
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
            props: { variant: "layout" },
            style: {
              backgroundColor: primaryLayoutColor,
              "&:hover": {
                backgroundColor: darken(primaryLayoutColor, 0.3),
                color: "white"
              }
            }
          },
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
            margin: 5,
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
              padding: 0,
              background: "none"
            }
          }
        ]
      },

      MuiTextField : {
        styleOverrides:{
          root: {
            backgroundColor: "white",
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: allBorderRadius,
            "&:hover": { outline: `1px solid ${primaryActionColor}` },
            "&:focus": { outline: `1px solid ${primaryActionColor}` },
          },
        },
        variants: [
          {
            props : {variant : "pinInput"},
            style:{
              height: 60,
              width : 50,
              textAlign:"center",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                { display: "none" },
              "& input[type=number]": { MozAppearance: "textfield" }
            },
          }
        ]
      }

    }
  });

export const UpdateHawaTheme = (
  theme,
  allBorderRadius,
  primaryActionColor,
  primaryLayoutColor,
  primaryActionTextColor,
  mainFont
) => {
  theme.allBorderRadius = allBorderRadius;
  theme.primaryActionColor = primaryActionColor;
  theme.primaryLayoutColor = primaryLayoutColor;
  theme.primaryActionTextColor = primaryActionTextColor;
  theme.mainFont = mainFont;
  theme.palette.primary.main = primaryActionColor;
  theme.components.MuiStack.variants[0].style.borderRadius = allBorderRadius;
  theme.components.MuiStack.variants[0].style.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiChip.styleOverrides.root.borderRadius = allBorderRadius;
  theme.components.MuiAccordion.styleOverrides.root.borderRadius = `${allBorderRadius}px !important`;
  theme.components.MuiTableContainer.styleOverrides.root.borderRadius =
    allBorderRadius;
  theme.components.MuiTable.styleOverrides.root.borderRadius = allBorderRadius;
  theme.components.MuiTypography.variants[0].style.fontFamily = mainFont;
  theme.components.MuiSelect.styleOverrides.root.borderRadius = allBorderRadius;
  theme.components.MuiSelect.styleOverrides.root[
    "&:hover"
  ].outline = `1px solid ${primaryActionColor}`;
  theme.components.MuiSelect.styleOverrides.root[
    "&:focus"
  ].outline = `1px solid ${primaryActionColor}`;
  theme.components.MuiInput.styleOverrides.root[
    "&:hover"
  ].outline = `1px solid ${primaryActionColor}`;
  theme.components.MuiInput.styleOverrides.root[
    "&:focus"
  ].outline = `1px solid ${primaryActionColor}`;
  theme.components.MuiDialog.styleOverrides.paper.borderRadius =
    allBorderRadius;
  theme.components.MuiDialog.styleOverrides.paper.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiContainer.styleOverrides.root.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiContainer.styleOverrides.root.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[0].style.backgroundColor = lighten(
    primaryLayoutColor,
    0.3
  );
  theme.components.MuiContainer.variants[0].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[1].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[2].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[4].style.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiContainer.variants[5].style.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiContainer.variants[7].style.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiContainer.variants[8].style.backgroundColor = lighten(
    primaryLayoutColor,
    0.4
  );
  theme.components.MuiContainer.variants[8].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[9].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[9].style.border = `1px solid ${primaryLayoutColor}`;
  theme.components.MuiContainer.variants[9].style.backgroundColor = lighten(
    primaryLayoutColor,
    0.4
  );
  theme.components.MuiContainer.variants[10].style.backgroundColor = lighten(
    primaryActionColor,
    0.4
  );
  theme.components.MuiContainer.variants[10].style.border = `1px solid ${primaryActionColor}`;
  theme.components.MuiContainer.variants[10].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[11].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[11].style.border = `1px solid ${primaryLayoutColor}`;
  (theme.components.MuiContainer.variants[12].style.border = `1px solid ${primaryLayoutColor}`),
    (theme.components.MuiContainer.variants[12].style.borderRadius =
      allBorderRadius);
  theme.components.MuiContainer.variants[13].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[13].style.border = `1px solid ${primaryLayoutColor}`;
  theme.components.MuiContainer.variants[14].style.borderRadius =
    allBorderRadius;
  theme.components.MuiContainer.variants[15].style.border = `1px solid ${primaryLayoutColor}`;
  theme.components.MuiContainer.variants[16].style.border = `1px solid ${primaryLayoutColor}`;
  theme.components.MuiContainer.variants[16].style.borderRadius =
    allBorderRadius;
  theme.components.MuiSnackbar.styleOverrides.root.borderRadius =
    allBorderRadius;
  theme.components.MuiButton.styleOverrides.root.borderRadius = allBorderRadius;
  theme.components.MuiButton.styleOverrides.contained.backgroundColor =
    primaryActionColor;
  theme.components.MuiButton.variants[0].style.backgroundColor =
    primaryLayoutColor;
  theme.components.MuiButton.variants[0].style["&:hover"].backgroundColor =
    darken(primaryLayoutColor, 0.3);
  theme.components.MuiButton.variants[1].style = ({ theme }) => ({
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
  });
  theme.components.MuiButton.variants[2].style = ({ palette }) => ({
    ...{
      backgroundColor: palette.error.main,
      color: primaryActionTextColor,
      borderRadius: allBorderRadius,
      "&:hover": {
        backgroundColor: darken(palette.error.main, 0.5),
        color: "white"
      }
    }
  });
  backgroundColor: primaryActionColor,
    (theme.components.MuiButton.variants[3].style.backgroundColor =
      primaryActionColor);
  theme.components.MuiButton.variants[3].style.color = primaryActionTextColor;
  theme.components.MuiButton.variants[3].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[3].style["&:hover"].backgroundColor =
    darken(primaryActionColor, 0.5);
  theme.components.MuiButton.variants[4].style.border = `1px solid ${darken(
    primaryActionColor,
    0.1
  )}`;
  theme.components.MuiButton.variants[4].style.fontFamily = mainFont;
  theme.components.MuiButton.variants[4].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[5].style.backgroundColor =
    primaryActionColor;
  theme.components.MuiButton.variants[5].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[5].style["&:hover"].backgroundColor =
    darken(primaryActionColor, 0.5);
  theme.components.MuiButton.variants[6].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[7].style.backgroundColor =
    primaryActionColor;
  theme.components.MuiButton.variants[7].style.color = primaryActionTextColor;
  theme.components.MuiButton.variants[7].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[7].style["&:hover"].backgroundColor =
    darken(primaryActionColor, 0.4);
  theme.components.MuiButton.variants[8].style.backgroundColor =
    primaryActionColor;
  theme.components.MuiButton.variants[8].style.color = primaryActionTextColor;
  theme.components.MuiButton.variants[8].style.borderRadius = allBorderRadius;
  theme.components.MuiButton.variants[8].style["&:hover"].backgroundColor =
    darken(primaryActionColor, 0.4);
  theme.components.MuiSwitch.styleOverrides.track.borderRadius =
    allBorderRadius;
  theme.components.MuiSwitch.styleOverrides.thumb.borderRadius =
    allBorderRadius;
  theme.components.MuiAlert.styleOverrides.root.borderRadius = allBorderRadius;
  theme.components.MuiAlert.variants[0].style.borderRadius = allBorderRadius;
  theme.components.MuiListItemButton.styleOverrides.root.borderRadius =
    allBorderRadius;
  theme.components.MuiListItemButton.styleOverrides.root[
    "&:hover"
  ].backgroundColor = primaryActionColor;
  theme.components.MuiListItemButton.variants[0].style.backgroundColor =
    primaryActionColor;
  return theme;
};

