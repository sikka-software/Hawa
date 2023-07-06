import React from "react";

import {
  FloatingComment as FC,
  FloatingCommentSlate as FCS
} from "../../elements";

export default {
  title: "Elements/Floating Comment",
  component: [FC, FCS],
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

const Template2 = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex flex-col flex-wrap items-start justify-start gap-2"
    >
      <h3>Slate</h3>
      <FCS {...args} />
    </div>
  );
};

export const FloatingCommentSlate = Template2.bind({});
FloatingCommentSlate.args = {};
