import React from "react";
import { HawaContainer } from "../../layout";

export default {
  title: "Layout/Container",
  component: <HawaContainer />,
  parameters: {
    backgrounds: {
      default: "light"
      // values: [
      //   { name: "light", value: theme.lightBackground },
      //   { name: "dark", value: theme.darkBackground }
      // ]
    }
  }
};

const Template = (args) => {
  return <HawaContainer {...args}>Test</HawaContainer>;
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained"
};
export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined"
};
export const Neobrutalism = Template.bind({});
Neobrutalism.args = {
  variant: "neobrutalism"
};
