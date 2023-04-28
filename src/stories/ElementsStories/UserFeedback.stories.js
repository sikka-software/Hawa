import React from "react";

import { UserFeedback as UF } from "../../elements";

export default {
  title: "Elements/User Feedback",
  component: UF,
  argTypes: {}
};

const Template = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex flex-wrap items-start justify-start gap-2"
    >
      <UF {...args} />
    </div>
  );
};

export const UserFeedback = Template.bind({});
UserFeedback.args = {
  title: "Quick question",
  question: "How satisfied are you with the invoicing system?",
  texts: {
    least: "Not at all satisfied",
    most: "Extremely satisfied"
  },
  options: [1, 2, 3, 4, 5],
  onOptionClicked: (e) => console.log("clicking option ", e)
};
