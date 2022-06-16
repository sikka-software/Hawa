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
    >
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
      <HawaPinInputField />
    </HawaPinInput>
  );
};

PinInput.args = {
  defaultValue: "1234",
  isAlphanumeric: false
};
