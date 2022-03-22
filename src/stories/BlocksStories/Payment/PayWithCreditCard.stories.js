import React from "react";
import { CreditCardForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Pay Via Credit Card",
  component: [CreditCardForm],
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    },
    viaWallet: { control: "boolean" },
    viaApplePay: { control: "boolean" },
    viaGooglePay: { control: "boolean" },
    viaSTCPay: { control: "boolean" },
    viaCreditCard: { control: "boolean" },
    viaPayPal: { control: "boolean" }
  },
  args: {
    theme: "primary",
    viaWallet: true,
    viaMada: true,
    viaApplePay: true,
    viaGooglePay: true,
    viaSTCPay: true,
    viaCreditCard: true,
    viaPayPal: true
  }
};

export const PayViaCreditCard = (args) => {
  return <CreditCardForm theme={args.theme} />;
};

PayViaCreditCard.args = {
  theme: "secondary"
};
