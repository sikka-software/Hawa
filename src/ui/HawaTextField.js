import React, { useContext } from "react";
// import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { HawaInputLabel } from "./HawaInputLabel";
// import InputLabel from "@mui/material/InputLabel";

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

  const BootstrapInput = styled(InputBase)(({ theme }) => {
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
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main
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
    // <FormControl variant="standard">
    <>
      {props.inputLabel ? (
        <HawaInputLabel themeType={props.themeType} label={props.inputLabel} />
      ) : null}
      {/* <InputLabel shrink htmlFor="bootstrap-input">
        {props.inputLabel}
      </InputLabel> */}
      {/* <div>ss</div> */}
      <BootstrapInput fullWidth aria-label="dws" />
    </>
  );
  // return (
  //   <div>
  //     {props.inputLabel ? (
  //       <HawaInputLabel themeType={props.themeType} label={props.inputLabel} />
  //     ) : null}
  //     <TextField
  //       fullWidth
  //       style={textFieldStyle}
  //       helperText={props.helperText}
  //       type={props.type ? props.type : "text"}
  //       placeholder={props.placeholder}
  //       inputProps={
  //         props.type === "number"
  //           ? {
  //               inputMode: "numeric",
  //               min: "0",
  //               max: "9999999",
  //               step: "0.01"
  //             }
  //           : {}
  //       }
  //       InputProps={{
  //         style: {
  //           ...textFieldStyle
  //           // // height: 50
  //           // padding: 0
  //         },

  //         disableUnderline: true,
  //         onWheelCapture: (e) => e.target.blur()
  //       }}
  //       value={props.value ? props.value : null}
  //     />
  //   </div>
  // );
};

HawaTextField.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  helperText: PropTypes.string
};

// StyledTextField.defaultProps = {
//   type: "text"
// };
