import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  HawaPinInput,
  HawaTextField,
  HawaSelect,
  HawaPhoneInput,
  HawaColorPicker,
  HawaDatepicker,
  Textarea,
  Button
} from "../../elements";

export default {
  title: "Elements/Input Fields",
  component: [HawaTextField, HawaPhoneInput, HawaSelect, HawaColorPicker],

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
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <HawaTextField {...args} width="full" label="Full Width" />
      <HawaTextField {...args} width="normal" label="Normal Width" />
      <HawaTextField {...args} width="small" label="Small Width" />

      <div>
        <div className="mb-6 mt-10 flex flex-row items-center gap-2">
          <Button onClick={() => setEditable(!editable)} size={"sm"}>
            Turn {editable ? "ON" : "OFF"}
          </Button>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Edit Mode</span>
            <span className="text-sm text-muted-foreground">
              Treat the input field as a regular text when edit mode is off.
            </span>
          </div>
        </div>
        <div className="w-fit">
          <div className="grid grid-cols-2 gap-2 ">
            <HawaTextField
              defaultValue={"https://sikka.io"}
              label="Website"
              placeholder="https://example.com"
              type="text"
              width="small"
              preview={editable}
            />
            <HawaTextField
              defaultValue={"@sikka_io"}
              label="Twitter"
              placeholder="@example"
              type="text"
              width="small"
              preview={editable}
            />

            <HawaSelect
              label={"Role"}
              options={[{ label: "Option 1", value: "option1" }]}
              value={"option1"}
            />

            <HawaTextField
              defaultValue={"@sikka_io"}
              label="Instagram"
              placeholder="@example"
              type="text"
              width="small"
              preview={editable}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-6 mt-10 flex flex-row items-center gap-2">
          <Button onClick={() => setLoading(!loading)} size={"sm"}>
            Turn {loading ? "ON" : "OFF"}
          </Button>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Loading Mode</span>
            <span className="text-sm text-muted-foreground">
              Show a skeleton while data is loading
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <HawaTextField
              isLoading={loading}
              defaultValue={"https://sikka.io"}
              label="Website"
              placeholder="https://example.com"
              type="text"
              width="small"
              preview={true}
            />
            <HawaTextField
              isLoading={loading}
              defaultValue={"@sikka_io"}
              label="Twitter"
              placeholder="@example"
              type="text"
              width="small"
              preview={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TextField.args = {
  label: "Label test",
  helpertext: "something invalid",
  placeholder: "input placeholder",
  type: "text"
};

export const TextArea = (args) => {
  return <Textarea label="Textarea Test" />;
};
TextArea.args = {
  label: "Label test",
  helpertext: "something invalid",
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
    <div className="flex flex-row gap-2">
      <HawaSelect {...args} />{" "}
      <HawaTextField
        helpertext="something invalid"
        placeholder="input placeholder"
        // preview: true,
        type="text"
        width="full"
        label="Full Width"
      />
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
  const [currentColor, setCurrentColor] = useState("#f0f0f0");
  return (
    <HawaColorPicker
      color={currentColor}
      handleChange={(e) => {
        console.log("changing color to: ", e.target.value);
        setCurrentColor(e.target.value);
      }}
      {...args}
    />
  );
};
ColorPicker.args = {
  color: "#f0f0f0"
};

export const Datepicker = (args) => {
  return <HawaDatepicker {...args} />;
};

Datepicker.args = {
  // color: "#f0f0f0"
};
