import React from "react";
import Select from "react-select";
import HawaSelectInput from "../../elements/HawaSelectInput";

export default {
  title: "Elements/Select Input",
  component: [SelectInput]
};

export const SelectInput = (args) => {
  return (
    <HawaSelectInput
      options={args.options}
      isCreatable={args.isCreatable}
      isMulti={args.isMulti ?? false}
      isSearchable={args.isSearchable}
      isClearable={args.isClearable ?? false}
      onChange={args.onChange}
      onInputChange={args.onInputChange}
    />
  );
};

SelectInput.args = {
  isCreatable: false,
  isMulti: false,
  isClearable: false,
  isSearchable: false,
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
