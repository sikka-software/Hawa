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
    <div className="max-w-md">
      <SelectPayment
        {...args}
        walletLabel="Wallet Balance"
        visaMasterLabel="Credit Card"
        madaLabel="mada"
        paypalLabel="PayPal"
        applePayLabel="Apple Pay"
        googlePayLabel="Google Pay"
        stcPayLabel="STC Pay"
        handleContinue={(e) => console.log("continue payment with :", e)}
      />
    </div>
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
