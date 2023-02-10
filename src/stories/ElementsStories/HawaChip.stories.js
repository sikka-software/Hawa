import React from "react";
import { HawaChip } from "../../elements";
import { FaCheck } from "react-icons/fa";
export default {
  title: "Elements/Chip",
  component: HawaChip,
  argTypes: {
    label: {
      control: "text",
      description: "The button text",
      table: {
        defaultValue: { summary: "Click" }
      }
    }
  },
  args: {
    label: "Text"
  }
};

export const Default = (args) => {
  return (
    <div>
      <h1>Small</h1>
      <HawaChip
        variant="contained"
        size="small"
        label="small"
        color={"green"}
      />
      <h1>Normal</h1>
      <HawaChip
        variant="contained"
        size="normal"
        label="normal"
        color={"red"}
      />
      <h1>Large</h1>
      <HawaChip variant="contained" size="large" label="large" />
    </div>
  );
};
export const Variants = (args) => {
  return (
    <div>
      <h1>With Dot</h1>
      <HawaChip
        variant="contained"
        size="normal"
        label="Available"
        dot={true}
        color={"green"}
        dotType={"available"}
      />
      <h1>Without Dot</h1>
      <HawaChip
        variant="contained"
        size="normal"
        label="normal"
        dot={args.dot}
        color={"red"}
        dotType={args.dotType}
      />
    </div>
  );
};

export const WithIcon = (args) => {
  return <HawaChip variant="contained" {...args} />;
};

WithIcon.args = {
  icon: <FaCheck />
};
