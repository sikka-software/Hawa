import React from "react";
import { HawaCopyrights } from "../../elements";

export default {
  title: "Elements/Copyrights",
  component: [HawaCopyrights],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const Copyrights = (args) => {
  return <HawaCopyrights {...args} />;
};

Copyrights.args = {
  version: "v1.2.3",
  credits: "Developed by Sikka Software"
};
