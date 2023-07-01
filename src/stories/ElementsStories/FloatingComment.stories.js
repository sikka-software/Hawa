import React from "react";

import { FloatingComment as FC } from "../../elements";

export default {
  title: "Elements/Floating Comment",
  component: FC,
  argTypes: {}
};

const Template = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex flex-wrap items-start justify-start gap-2"
    >
      <FC {...args} />
    </div>
  );
};

export const FloatingComment = Template.bind({});
FloatingComment.args = {};
