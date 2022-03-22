import React from "react";
import { ChargeWalletForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Charge Wallet",
  component: [ChargeWalletForm],
  argTypes: {
    viaWallet: { control: "boolean" },
    viaApplePay: { control: "boolean" },
    viaGooglePay: { control: "boolean" },
    viaSTCPay: { control: "boolean" },
    viaCreditCard: { control: "boolean" },
    viaPayPal: { control: "boolean" }
  },
  args: {
    viaWallet: true,
    viaMada: true,
    viaApplePay: true,
    viaGooglePay: true,
    viaSTCPay: true,
    viaCreditCard: true,
    viaPayPal: true
  }
};

export const ChargeWallet = (args) => {
  return <ChargeWalletForm {...args} />;
};

ChargeWallet.args = { currency: "SAR" };
