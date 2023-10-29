import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker, Label } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Elements/Inputs/Color Picker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<ColorPicker/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const Template = (args: any) => {
  const [currentColor, setCurrentColor] = useState("#f0f0f0");
  return (
    <div>
      <ColorPicker
        label="Color"
        color={currentColor}
        handleChange={(e) => {
          console.log("changing color to: ", e.target.value);
          setCurrentColor(e.target.value);
        }}
        {...args}
      />
    </div>
  );
};

export const Default: Story = {
  render: Template.bind({}),
  args: {
    color: "#f0f0f0",
  },
};
