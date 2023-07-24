import React from "react";

import {
  FloatingComment as FC,
  FloatingCommentSlate as FCS,
  FloatingCommentExec as FCE
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
FloatingComment.args = {
  rtl: "disabled"
};

const Template1 = (args) => {
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

export const FloatingCommentSlate = Template1.bind({});
FloatingCommentSlate.args = {};

const Template2 = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex flex-col flex-wrap items-start justify-start gap-2"
    >
      <h3>.execCommand</h3>
      <FCE {...args} />
    </div>
  );
};

export const FloatingCommentExec = Template2.bind({});
FloatingCommentExec.args = {};
