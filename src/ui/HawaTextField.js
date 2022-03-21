import React, { useContext } from "react";
// import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import PropTypes from "prop-types";
// import { ThemeProvider } from "../themes/HawaProvider";
import { HawaInputLabel } from "./HawaInputLabel";
import { Controller, useFormContext } from "react-hook-form";
import { InputLabel, TextField } from "@mui/material";

export const HawaTextField = (props) => {
  const { control, register } = useFormContext();

  // const { hawaTheme, themeName } = useContext(ThemeProvider);
  // const currentTheme = Object.keys(hawaTheme.inputFields).find(
  //   (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  // );
  // let textFieldStyle = {};

  // if (currentTheme) {
  //   textFieldStyle = {
  //     ...hawaTheme.inputFields[currentTheme],
  //     margin: props.last ? 0 : hawaTheme.inputFields[currentTheme].margin,
  //     marginTop: props.last
  //       ? hawaTheme.inputFields[currentTheme].margin * 2
  //       : 0,
  //   };
  // } else {
  //   textFieldStyle = {
  //     backgroundColor: "white"
  //   };
  // }

  // const StyledTextField = styled(InputBase)(({ theme }) => {
  //   return {
  //     // "& .MuiInputBase-input": {
  //     //   // border: "1px solid #ced4da",
  //     //   fontSize: 16,
  //     //   // padding: "10px 12px",
  //     //   marginBottom: props.helperText ? 5 : 0,
  //     //   // paddingLeft: 10,
  //     //   // paddingRight: 10,
  //     //   ...textFieldStyle
  //     // },
  //     // "& .MuiInputBase-root": {
  //     //   border: "1px solid #ced4da",
  //     //   fontSize: 16,
  //     //   // width: "auto",
  //     //   // padding: "10px 12px",
  //     //   marginBottom: props.helperText ? 5 : 0,
  //     //   // paddingLeft: 10,
  //     //   // paddingRight: 10,

  //     //   // ...textFieldStyle,
  //     //   backgroundColor: "blue"
  //     //   // "&:focus": {
  //     //   //   borderColor: "red",
  //     //   //   borderWidth: 1,
  //     //   //   outline: "1px solid black",
  //     //   //   backgroundColor: "red"
  //     //   // }
  //     //   // "& input:valid + fieldset": {
  //     //   //   borderColor: "green",
  //     //   //   borderWidth: 2
  //     //   // },
  //     //   // "& input:invalid + fieldset": {
  //     //   //   borderColor: "red",
  //     //   //   borderWidth: 2
  //     //   // },
  //     //   // "& input:valid:focus + fieldset": {
  //     //   //   borderLeftWidth: 6,
  //     //   //   padding: "4px !important" // override inline-style
  //     //   // }
  //     // },

  //     // "&:hover": {
  //     //   borderColor: "red",
  //     //   borderWidth: 1,
  //     //   outline: "1px solid black"
  //     // },

  //     // paddingLeft: 10,
  //     // paddingRight: 10,
  //     // border: "none"

  //     // position: "relative",
  //     // backgroundColor: "green"
  //     ...textFieldStyle
  //   };
  // });

  return (
    <Controller
      render={({ field }) => (
        <>
          {props.inputLabel && <InputLabel label={props.inputLabel} />}

          <TextField
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

// HawaTextField.propTypes = {
//   type: PropTypes.oneOf(["text", "number", "password"]),
//   helperText: PropTypes.string
// };
