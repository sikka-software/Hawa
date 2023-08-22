import React from "react";
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
  return (
    <div className="max-w-md">
      <ReferralAccount {...args} />
    </div>
  );
};

ReferralCodes.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
export const ReferralBank = (args) => {
  return (
    <div className="max-w-md">
      <ReferralSettlement {...args} />
    </div>
  );
};

ReferralBank.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
export const ReferralAnalytics = (args) => {
  return (
    <div className="max-w-md">
      <ReferralStats {...args} />
    </div>
  );
};

ReferralAnalytics.args = {
  referralLink: "https://my.qawaim/signUp?ref=DF522D",
  referralCode: "DF522D"
};
