import React from "react";
import { SelectPayment } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Payment Selection",
  component: [SelectPayment],
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

const PaymentSelectionTemplate = (args) => {
  return (
    <SelectPayment
      {...args}
      walletLabel="Wallet Balance"
      handleWallet={() => console.log("paying via wallet")}
      visaMasterLabel="Credit Card"
      handleCreditCard={() => console.log("paying via Credit Card")}
      madaLabel="Mada"
      handleMada={() => console.log("paying via Mada")}
      paypalLabel="PayPal"
      handlePayPal={() => console.log("paying via PayPal")}
      applePayLabel="Apple Pay"
      handleApplePay={() => console.log("paying via Apple Pay")}
      googlePayLabel="Google Pay"
      handleGooglePay={() => console.log("paying via Google Pay")}
      stcPayLabel="STC Pay"
      handleSTCPay={() => console.log("paying via STC Pay")}
    />
  );
};
export const PaymentSelection = PaymentSelectionTemplate.bind({});
PaymentSelection.args = {
  viaGoogle: true,
  viaGithub: true,
  viaTwitter: true,
  showError: false,
  errorTitle: "Error",
  errorText: "Something went wrong"
};
