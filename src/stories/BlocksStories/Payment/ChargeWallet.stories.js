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
      {...args}
      handleChargeWallet={(e) => console.log("amount is ", e)}
      texts={{
        amountLabel: "Enter Amount",
        chargeWallet: "Charge Wallet"
      }}
    />
  );
};

ChargeWallet.args = { currency: "SAR" };
