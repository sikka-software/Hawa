import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { StyledInputLabel } from "../InputLabel";
import PropTypes from "prop-types";
import { ThemeProvider } from "../HawaProvider";

export const StyledTextField = (props) => {
  const theme = useContext(ThemeProvider);

  return (
    <div>
      {props.inputLabel ? <StyledInputLabel label={props.inputLabel} /> : null}
      <TextField
        fullWidth={true}
        style={{
          color: "white",
          backgroundColor: theme.inputColor,
          borderRadius: props.bdRadius || 10,
          borderBottom: "none",
          padding: props.padding || 5,
          border: "none",
          width: "100%"
        }}
        helperText={props.helperText}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        inputProps={
          props.type === "number"
            ? {
                inputMode: "numeric",
                min: "0",
                max: "9999999",
                step: "0.01"
              }
            : {}
        }
        InputProps={{
          disableUnderline: true,
          onWheelCapture: (e) => e.target.blur()
        }}
        value={props.value ? props.value : null}
      />
    </div>
  );
};

StyledTextField.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  helperText: PropTypes.string
};

// StyledTextField.defaultProps = {
//   type: "text"
// };
