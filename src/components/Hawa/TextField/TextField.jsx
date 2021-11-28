import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller, useFormContext } from "react-hook-form";
import {StyledInputLabel} from "../InputLabel";
import styles from "../../../styles.css"

export const StyledTextField = (props) => {
  const { control } = useFormContext();
  const { name, rules, shouldUnregister, inputLabel, helperText } = props;


  return (
    <Controller
      render={({ field }) => (
        <div>
          {inputLabel ? <StyledInputLabel label={inputLabel} /> : null}
          <TextField
            fullWidth={true}
            helperText={helperText}
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
              className: "theme_form_input",
              disableUnderline: true,
              onWheelCapture: (e) => e.target.blur()
            }}
            {...field}
            value={field.value ? field.value : null}
          />
        </div>
      )}
      name={name}
      rules={rules}
      control={control}
      shouldUnregister={shouldUnregister}
    />
  );
};
