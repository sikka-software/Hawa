import { InputLabel } from "@mui/material";
import React, { useState } from "react";
import { HawaPinInput, HawaPinInputField } from "../../elements/PinInput";

export default {
  title: "Elements/Pin Input",
  component: PinInput,
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ECEBE4" }]
    }
  }
};

export const PinInput = (args) => {
  const [defaultValue, setDefault] = useState(args.defaultValue || "");
  return (
    <HawaPinInput
      defaultValue={defaultValue}
      type={args.isAlphanumeric ? "alphanumeric" : null}
      onChange={args.onChange}
      onComplete={args.onComplete}
    >
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
    </HawaPinInput>
  );
};

PinInput.args = {
  defaultValue: "1234",
  isAlphanumeric: false,
  onChange : (value) => console.log("current value : ", value),
  onComplete : (value) => console.log("final value :", value)
};
