import React from "react";
import { PayWithWallet } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Pay Via Wallet",
  component: [PayWithWallet],
  argTypes: {
    walletBalance: { control: "number" }
  },
  args: {
    walletBalance: 20
  }
};

export const PayViaWallet = (args) => {
  return <PayWithWallet {...args} />;
};
