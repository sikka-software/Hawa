import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  HawaPinInput,
  HawaTextField,
  HawaSelect,
  HawaPhoneInput,
  HawaColorPicker,
  HawaCardInput,
  HawaDatepicker,
  HawaButton
} from "../../elements";

export default {
  title: "Elements/Input Fields",
  component: [
    HawaTextField,
    HawaPhoneInput,
    HawaSelect,
    HawaColorPicker,
    HawaCardInput
  ],
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
      description: "Styled Text Field",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" }
      }
    }
  }
};

export const TextField = (args) => {
  const [editable, setEditable] = useState(false);
  return (
    <div>
      <HawaTextField {...args} width="full" label="Full Width" />
      <HawaTextField {...args} width="normal" label="Normal Width" />
      <HawaTextField {...args} width="small" label="Small Width" />

      <h1 className="text-xl font-bold">Preview Mode</h1>
      <div>
        <HawaButton onClick={() => setEditable(!editable)}>
          Edit mode
        </HawaButton>
        <div className="flex flex-row gap-2">
          <HawaTextField
            label="Label test"
            // helperText="something invalid"
            placeholder="input placeholder"
            // value="3434"
            type="text"
            width="small"
            preview={editable}
          />
          <HawaTextField
            label="Label test"
            // helperText="something invalid"
            placeholder="input placeholder"
            // value="3434"
            type="text"
            width="small"
            // preview={true}
          />
        </div>
      </div>
    </div>
  );
};

TextField.args = {
  label: "Label test",
  helperText: "something invalid",
  placeholder: "input placeholder",
  value: "3434",
  // preview: true,
  type: "text"
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
    <HawaTextField {...args} onChange={(e) => console.log(e.target.value)} />
  );
};

SearchInput.args = {
  placeholder: "Search",
  icon: <FaSearch color="gray" />
};

export const PinInput = (args) => {
  return <HawaPinInput {...args} />;
};

PinInput.args = {
  getPins: () => console.log("getting pins"),
  width: "normal",
  digits: 6
};

export const SelectInput = (args) => {
  return (
    <div className="grid">
      <HawaSelect {...args} />
    </div>
  );
};

SelectInput.args = {
  label: "Pin Input",
  fullWidth: true,
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
export const ColorPicker = (args) => {
  return <HawaColorPicker {...args} />;
};

ColorPicker.args = {
  color: "#f0f0f0"
};
export const CardInput = (args) => {
  return <HawaCardInput {...args} />;
};

CardInput.args = {
  color: "#f0f0f0"
};
export const Datepicker = (args) => {
  return <HawaDatepicker {...args} />;
};

Datepicker.args = {
  // color: "#f0f0f0"
};
