import React, { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { HawaInputLabel } from "./HawaInputLabel";

export const HawaTextField = (props) => {
  const theme = useContext(ThemeProvider);
  const currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  let textFieldStyle = {};

  if (currentTheme) {
    textFieldStyle = {
      ...theme.inputFields[currentTheme],
      margin: props.last ? 0 : theme.inputFields[currentTheme].margin,
      marginTop: props.last ? theme.inputFields[currentTheme].margin * 2 : 0
    };
  } else {
    textFieldStyle = {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start"
    };
  }

  const StyledTextField = styled(InputBase)(({ theme }) => {
    return {
      // "label + &": {
      //   marginTop: theme.spacing(3)
      // },
      "& .MuiInputBase-input": {
        backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
        transition: theme.transitions.create([
          "border-color",
          "background-color",
          "box-shadow"
        ]),

        "&:focus": {
          // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          // borderColor: theme.palette.primary.main
          // borderColor: theme.actionButton[currentTheme]?.backgroundColor
        },
        borderRadius: 4,
        position: "relative",
        border: "1px solid #ced4da",
        fontSize: 16,
        // width: "auto",
        padding: "10px 12px",
        ...textFieldStyle
      }
    };
  });

  return (
    <>
      {props.inputLabel ? (
        <HawaInputLabel themeType={props.themeType} label={props.inputLabel} />
      ) : null}

      <StyledTextField fullWidth {...props} />
    </>
  );
};

HawaTextField.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  helperText: PropTypes.string
};
