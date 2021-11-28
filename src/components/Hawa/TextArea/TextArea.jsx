import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {StyledInputLabel} from "../InputLabel";
import styles from "../../../styles.css"

const TextArea = (props) => {
  const { control } = useFormContext();
  const { name, rules, shouldUnregister, inputLabel, helperText } = props;

  return (
    <Controller
      render={({ field }) => (
        <label>
          {inputLabel ? <StyledInputLabel label={inputLabel} /> : null}
          <textarea
            className={styles.form_textarea}
            value={field.value ?? ""}
            {...field}
          />
        </label>
      )}
      name={name}
      rules={rules}
      control={control}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default StyledTextArea;
