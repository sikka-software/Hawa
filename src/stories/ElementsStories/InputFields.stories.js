import React from "react";
import {
  HawaSearchBar,
  HawaTextField,
  HawaSelect,
  HawaPhoneInput
} from "../../elements";
import { HawaPinInput, HawaPinInputField } from "../../elements/PinInput";

export default {
  title: "Elements/Input Fields",
  component: [HawaTextField, HawaPhoneInput, HawaSelect],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ECEBE4" }]
    }
  },
  argsTypes: {
    type: {
      name: "type",
      type: { name: "string", required: true },
      options: ["text", "number", "date"],
      control: { type: "radio" },
      defaultValue: "text",
      description: "Styled Text Field",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" }
      }
    }
  }
};

export const TextField = (args) => {
  return <HawaTextField {...args} />;
};

TextField.args = {
  label: "Label test",
  helperText: "something invalid",
  placeholder: "input placeholder",
  type: "text",
  fullWidth: false
};

export const TextArea = (args) => {
  return <HawaTextField multiline {...args} />;
};
TextArea.args = {
  label: "Label test",
  helperText: "something invalid",
  placeholder: "input placeholder",
  type: "text",
  fullWidth: false
};

export const PhoneInput = (args) => {
  return <HawaPhoneInput {...args} />;
};
PhoneInput.args = {
  // country: "sa",
  // onChange: (e) => console.log(e),
  // required: true,
  // name: "phone",
  // label: "phone number"
};

export const SearchInput = (args) => {
  return (
    <HawaSearchBar {...args} onChange={(e) => console.log(e.target.value)} />
  );
};

SearchInput.args = {
  placeholder: "Search"
};
export const PinInput = (args) => {
  return (
    <HawaPinInput
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
    </HawaPinInput>
  );
};

PinInput.args = {
  defaultValue: "1234",
  isAlphanumeric: false,
  onChange: (value) => console.log("current value : ", value),
  onComplete: (value) => console.log("final value :", value)
};
export const SelectInput = (args) => {
  return (
    <HawaSelect
      options={args.options}
      isCreatable={args.isCreatable}
      isMulti={args.isMulti ?? false}
      isSearchable={args.isSearchable}
      isClearable={args.isClearable ?? false}
      onChange={(e, o) => console.log("chooo", e)}
      onInputChange={(e, o) => console.log("changing", e)}
    />
  );
};

SelectInput.args = {
  isCreatable: false,
  isMulti: false,
  isClearable: false,
  isSearchable: true,
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ],
  onChange: (newValue, action) => {
    console.log("new value: ", newValue, "\n", "action", action);
  },
  onInputChange: (newValue, action) => {
    console.log("new value: ", newValue, "\n", "action", action);
  }
};
