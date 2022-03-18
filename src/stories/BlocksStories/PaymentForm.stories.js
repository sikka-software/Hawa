import React from "react";
import {
  SelectPayment,
  CreditCardForm,
  ChargeWalletForm,
  PayWithWallet
} from "../../blocks/Payment";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";

export default {
  title: "Blocks/PaymentBlocks",
  component: [SelectPayment, CreditCardForm],
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
    </HawaProvider>
  );
};

export const PayViaWallet = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <PayWithWallet theme={args.theme} />
    </HawaProvider>
  );
};
export const PayViaCreditCard = (args) => {
  return (
    <HawaProvider theme={{ ...defaultTheme }}>
      <CreditCardForm />
    </HawaProvider>
  );
};

export const ChargeWallet = (args) => {
  return <ChargeWalletForm theme={args.theme} currency="SAR" />;
};

// ChargeWallet.args = {
//   theme: "secondary"
// };
