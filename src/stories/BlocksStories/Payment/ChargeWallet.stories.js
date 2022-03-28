import React from "react";
import { ChargeWalletForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Charge Wallet",
  component: [ChargeWalletForm],
  argTypes: {
    currency: {
      options: ["SAR", "USD"],
      control: { type: "select" }
    }
  },
  args: {
    currency: "sar"
  }
};

export const ChargeWallet = (args) => {
  return (
    <ChargeWalletForm
      handleChargeWallet={(e) => console.log("amount is ", e)}
      {...args}
    />
  );
};

ChargeWallet.args = { currency: "SAR" };
