import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@sikka/hawa/elements";
import { Select } from "@sikka/hawa/elements/select";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Select",
  component: Select,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    return (
      <div className="hawa-flex hawa-h-screen hawa-w-full hawa-flex-row hawa-items-start hawa-justify-center hawa-gap-2 hawa-p-10">
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Select
            label={"Select Input"}
            placeholder={"Choose something"}
            isCreatable={false}
            isMulti={false}
            isClearable={false}
            isSearchable={true}
            defaultValue={{ label: "Chocolate", value: "chocolate" }}
            helperText="Helper text here"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            {...args}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Select
            label={"Disabled Select"}
            placeholder={"Choose something"}
            isCreatable={false}
            disabled
            isMulti={false}
            isClearable={false}
            isSearchable={true}
            defaultValue={{ label: "Chocolate", value: "chocolate" }}
            helperText="Helper text here"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            {...args}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Input
            label="Input for comparison"
            placeholder="Input"
            helperText={""}
          />
        </div>
      </div>
    );
  },
  argTypes: {
    onChange: { action: "onChange" },
    onInputChange: { action: "onInputChange" },
  },
};
export const Creatable: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-h-screen hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2 hawa-p-2">
      <div className="hawa-w-full hawa-max-w-md">
        <Select {...args} />
      </div>
    </div>
  ),
  args: {
    label: "Select Input",
    isCreatable: true,
    isMulti: false,
    isClearable: false,
    isSearchable: true,
    placeholder: "Choose something",
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  },
  argTypes: {
    handleCreateOption: { actions: "handleCreateOption" },
    onChange: { action: "onChange" },
    onInputChange: { action: "onInputChange" },
  },
};

export const Multiselect: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    return (
      <div className="hawa-flex hawa-h-screen hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2 hawa-p-2">
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Select
            label={"Select Input"}
            placeholder={"Choose something"}
            isCreatable={false}
            isMulti={true}
            isClearable={false}
            isSearchable={true}
            defaultValue={{ label: "Chocolate" }}
            helperText="Helper text here"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: {
    onChange: { action: "onChange" },
    onInputChange: { action: "onInputChange" },
  },
};
