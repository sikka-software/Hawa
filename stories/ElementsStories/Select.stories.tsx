import type { Meta, StoryObj } from "@storybook/react";
import { Input, Select } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<Select/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>Select story</div>;
};
export const Default: Story = {
  render: (args) => (
    <div className="hawa-p-2 hawa-flex hawa-flex-row hawa-h-screen  hawa-justify-center hawa-items-center hawa-gap-2 hawa-w-full">
      <div className="hawa-max-w-md hawa-w-full ">
        <Select {...args} />
      </div>
    </div>
  ),
  args: {
    label: "Select Input",
    placeholder: "Choose something",
    isCreatable: false,
    isMulti: false,
    isClearable: false,
    isSearchable: true,
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
    onChange: (newValue: any, action: any) => {
      console.log("new value: ", newValue, "\n", "action", action);
    },
    onInputChange: (newValue: any, action: any) => {
      console.log("new value: ", newValue, "\n", "action", action);
    },
  },
};
export const Creatable: Story = {
  render: (args) => (
    <div className="hawa-p-2 hawa-flex hawa-flex-row hawa-h-screen  hawa-justify-center hawa-items-center hawa-gap-2 hawa-w-full">
      <div className="hawa-max-w-md hawa-w-full ">
        <Select {...args} />
      </div>
    </div>
  ),
  args: {
    label: "Select Input",
    // fullWidth: true,
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
    onChange: (newValue: any, action: any) => {
      console.log("new value: ", newValue, "\n", "action", action);
    },
    onInputChange: (newValue: any, action: any) => {
      console.log("new value: ", newValue, "\n", "action", action);
    },
  },
  argTypes: {
    handleCreateOption: { actions: "handleCreateOption" },
  },
};
// export const Old: Story = {
//   render: (args) => (
//     <div className="hawa-p-2 hawa-flex hawa-flex-row hawa-h-screen  hawa-justify-center hawa-items-center hawa-gap-2 hawa-w-full">
//       <div className="hawa-max-w-md hawa-w-full hawa-flex hawa-flex-row ">
//         <Select />
//         <Input />
//       </div>
//       {/* <HawaTextField
//         helperText="something invalid"
//         placeholder="input placeholder"
//         // preview: true,
//         type="text"
//         width="full"
//         label="Full Width"
//       /> */}
//     </div>
//   ),
//   args: {
//     label: "Select Input",
//     // fullWidth: true,
//     isCreatable: false,
//     isMulti: false,
//     isClearable: false,
//     isSearchable: true,
//     options: [
//       { value: "chocolate", label: "Chocolate" },
//       { value: "strawberry", label: "Strawberry" },
//       { value: "vanilla", label: "Vanilla" },
//     ],
//     onChange: (newValue: any, action: any) => {
//       console.log("new value: ", newValue, "\n", "action", action);
//     },
//     onInputChange: (newValue: any, action: any) => {
//       console.log("new value: ", newValue, "\n", "action", action);
//     },
//   },
// };
