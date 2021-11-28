import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const MuiSelect = (props) => {
  const { name, options, required, error } = props;
  let isError = false;
  let errorMessage = "";
  if (error && error.hasOwnProperty(name)) {
    isError = true;
    errorMessage = error[name].message;
  }

  return (
    <FormControl fullWidth={true} error={isError}>
      {label} {required ? <span className="req-label">*</span> : null}
      <Select id={name} {...props}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export const SelectField = (props) => {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <Controller
        control={control}
        render={(field) => <MuiSelect {...props} {...field} />}
        {...props}
      />
    </React.Fragment>
  );
}
