import React from "react";
import { SelectPayment } from "../../blocks/Payment";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

export default {
  title: "Blocks/PaymentForm",
  component: SelectPayment,
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
    viaApplePay: true,
    viaGooglePay: true,
    viaSTCPay: true,
    viaCreditCard: true,
    viaPayPal: true
  }
};

export const PaymentSelection = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <SelectPayment
        {...args}
        theme={args.theme}
        walletLabel="Wallet Balance"
        visaMasterLabel="Credit Card"
        madaLabel="Mada"
        paypalLabel="PayPal"
        applePayLabel="Apple Pay"
        googlePayLabel="Google Pay"
        stcPayLabel="STC Pay"
      />
    </HawaProvider>
  );
};
