import React, { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { HawaInputLabel } from "./HawaInputLabel";
import { Controller, useFormContext } from "react-hook-form";

import { InputAdornment, TextField } from "@mui/material";
import { MailOutline } from "@mui/icons-material";

export const HawaTextField = (props) => {
  const { control, register } = useFormContext();

  const HawaTheme = useContext(ThemeProvider);
  const currentTheme = Object.keys(HawaTheme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  let textFieldStyle = {};

  if (currentTheme) {
    textFieldStyle = {
      ...HawaTheme.inputFields[currentTheme],
      margin: props.last ? 0 : HawaTheme.inputFields[currentTheme].margin,
      marginTop: props.last ? HawaTheme.inputFields[currentTheme].margin * 2 : 0
    };
  } else {
    textFieldStyle = {
      backgroundColor: "white"
    };
  }

  const StyledTextField = styled(InputBase)(({ theme }) => {
    return {
      // "label + &": {
      //   marginTop: theme.spacing(3)
      // },
      "& .MuiInputBase-input": {
        // backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
        transition: theme.transitions.create([
          "border-color",
          "background-color",
          "box-shadow"
        ])

        // backgroundColor: "red"
      },

      // position: "relative",
      border: "1px solid #ced4da",
      fontSize: 16,
      // width: "auto",
      padding: "10px 12px",
      marginBottom: props.helperText ? 5 : 0,
      paddingLeft: 10,
      paddingRight: 10,
      ...textFieldStyle
      // backgroundColor: "green"
    };
  });

  return (
    <Controller
      render={({ field }) => (
        <>
          {props.inputLabel && (
            <HawaInputLabel
              themeType={props.themeType}
              label={props.inputLabel}
            />
          )}

          <StyledTextField
            fullWidth={true}
            // helperText={props.helperText}
            type={props.type ?? "text"}
            // placeholder={props.placeholder}
            // inputProps={
            //   props.type === "number"
            //     ? {
            //         inputMode: "numeric",
            //         min: "0",
            //         max: "9999999",
            //         step: "0.01"
            //       }
            //     : {}
            // }

            defaultValue={props.defaultValue && ""}
            value={props.value && ""}
            {...props}
            // {...field}
            {...register(props.name)}
          />
          <Typography
            variant="caption"
            style={{ margin: 5, marginBottom: 0, color: "red" }}
          >
            {props.helperText}
          </Typography>
        </>
      )}
      name={props.name}
      rules={props.rules}
      control={control}
      shouldUnregister={props.shouldUnregister}
    />
  );
};

HawaTextField.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
