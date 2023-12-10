import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "@elements/colorPicker";

const meta = {
  title: "Elements/Inputs/Color Picker",
  component: ColorPicker,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: (args: any) => {
    const [currentColor, setCurrentColor] = useState("#f0f0f0");
    return (
      <div>
        <ColorPicker
          label="Color"
          color={currentColor}
          handleChange={(e: any) => {
            console.log("changing color to: ", e.target.value);
            setCurrentColor(e.target.value);
          }}
          {...args}
        />
      </div>
    );
  },
  args: {
    color: "#f0f0f0"
  }
};
