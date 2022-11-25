import React, { useState } from "react";
import {
  ReferralStats,
  ReferralAccount,
  ReferralSettlement
} from "../../blocks";

export default {
  title: "Blocks/Referral",
  component: [ReferralStats, ReferralAccount, ReferralSettlement],
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

export const ReferralCodes = (args) => {
  return <ReferralAccount {...args} />;
};

ReferralCodes.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
export const ReferralBank = (args) => {
  return <ReferralSettlement {...args} />;
};

ReferralBank.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
export const ReferralAnalytics = (args) => {
  return <ReferralStats {...args} />;
};

ReferralAnalytics.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
