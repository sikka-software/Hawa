import React from "react";
import { Testimonial as Testi } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Testimonial",
  component: [Testi]
};

export const Testimonial = (args) => {
  return (
    <div className="max-w-md">
      <Testi className="bg-red-300" {...args} />
    </div>
  );
};

Testimonial.args = {
  variant: "contained"
};
