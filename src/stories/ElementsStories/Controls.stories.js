import React from "react";
import { HawaRange } from "../../elements";

export default {
  title: "Elements/Range",
  component: [HawaRange],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#96ACB7" }]
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the acordion"
    },
    content: {
      control: "text",
      description: "The content text of the accordion when expanded"
    }
  }
};

export const Range = (args) => {
  return (
    <>
      <HawaRange {...args} startElement={0} endElement={100} />
    </>
  );
};
