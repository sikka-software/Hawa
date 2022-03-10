import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyledInputLabel } from "../ui";

export const StyledTextArea = (props) => {
  const { control } = useFormContext();
  const { name, rules, shouldUnregister, inputLabel, helperText } = props;

  return (
    <Controller
      render={({ field }) => (
        <label>
          {inputLabel ? <StyledInputLabel label={inputLabel} /> : null}
          <textarea
            style={{
              color: "black",
              backgroundColor: props.bgColor || "white",
              borderRadius: props.bdRadius || 10,
              borderBottom: "none",
              border: "none",
              width: "100%",
              padding: 0,
              margin: 0,
              marginBottom: 0,
              resize: props.resize || "vertical"
            }}
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
