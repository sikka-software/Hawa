import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';

export const StyledCheckbox = (props) => {
  const { control } = useFormContext();
  const { name, defaultValue, rules, shouldUnregister } = props;

  return (
    <React.Fragment>
      <Controller
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox style={{color : props.color || null}} />}
            
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

console.log(StyledCheckbox.prototype)
