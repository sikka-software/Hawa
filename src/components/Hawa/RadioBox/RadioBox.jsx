import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const StyledRadioBox = (props) => {
  const { control } = useFormContext();
  const { name, defaultValue, rules, shouldUnregister } = props;

  return (
    <React.Fragment>
      <Controller
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox />}
            {...props}
            {...field}
            checked={field.value}
          />
        )}
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
      />
    </React.Fragment>
  );
}
