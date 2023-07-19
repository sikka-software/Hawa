import React from "react";
import { Testimonial as Testi } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Testimonial",
  component: [Testi]
};

export const Testimonial = (args) => {
  return <Testi className="bg-red-300" {...args} />;
};

Testimonial.args = {
  variant: "contained"
};
