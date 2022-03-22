import React from "react";
import { HawaRadio } from "../../ui";

export default {
  title: "Elements/Selections/Radio Selector",
  component: [HawaRadio],
  argTypes: {},
  args: {}
};

export const RadioSelector = (args) => {
  return (
    <HawaRadio
      {...args}
      handleChange={(e) => console.log("changing to ", e)}
      defaultValue="option1"
      options={[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
      ]}
    />
  );
};
