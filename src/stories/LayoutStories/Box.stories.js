import React from "react";

const Template = (args) => {
  return <div className="bg-red-100 p-10 rounded-xl">test</div>;
};
export default {
  title: "Layout/Container",
  // component: <Container />,
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

export const Normal = Template.bind({});
Normal.args = {
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const Compact = Template.bind({});
Compact.args = {
  size: "small",
  showText: true,
  buttonLabel: "test"
};
