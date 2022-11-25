import React, { useState } from "react";
import { ReferralBlock } from "../../blocks";

export default {
  title: "Blocks/Referral",
  component: [ReferralBlock],
  parameters: {
    docs: {
      description: {
        component: "Referral block"
      }
    }
  },
  argTypes: {
    texts: { default: "" }
  }
};

export const Referral = (args) => {
  return <ReferralBlock {...args} />;
};

Referral.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
