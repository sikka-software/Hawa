import React, { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { HawaInputLabel } from "./HawaInputLabel";
import { Controller, useFormContext } from "react-hook-form";

export const HawaTextField = (props) => {
  const { control, register } = useFormContext();

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
        // position: "relative",
        border: "1px solid #ced4da",
        fontSize: 16,
        // width: "auto",
        padding: "10px 12px",
        marginBottom: props.helperText ? 5 : 0,
        ...textFieldStyle
      }
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
          <span style={{ margin: 5, color: "red" }}>{props.helperText}</span>
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
