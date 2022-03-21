import React from "react";
import { HawaProvider } from "../../themes/HawaProvider";
import { ActionButton, HawaLogoButton } from "../../ui";

export default {
  title: "Elements/Buttons/LogoButtons",
  component: ActionButton,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    },
    buttonLabel: { control: "text" },
    logo: { control: "text" }
  },
  args: {
    buttonLabel: "test",
    logo: "google",
    theme: "primary"
  }
};
const Template = (args) => {
  return (
    <HawaProvider themeName={args.theme}>
      <HawaLogoButton logo={args.logo} buttonText={args.buttonLabel} />
    </HawaProvider>
  );
};

export const Google = Template.bind({});
Google.args = {
  buttonLabel: "Sign in via Google",
  logo: "google",
  theme: "primary"
};

export const Twitter = Template.bind({});
Twitter.args = {
  buttonLabel: "Sign in via Twitter",
  logo: "twitter",
  theme: "primary"
};
export const Github = Template.bind({});
Github.args = {
  buttonLabel: "Sign in via Github",
  logo: "github",
  theme: "primary"
};
export const WalletPay = Template.bind({});
WalletPay.args = {
  buttonLabel: "Pay with Wallet",
  logo: "wallet",
  theme: "primary"
};
export const GooglePay = Template.bind({});
GooglePay.args = {
  buttonLabel: "Google Pay",
  logo: "googlepay",
  theme: "primary"
};
export const ApplePay = Template.bind({});
ApplePay.args = {
  buttonLabel: "Apple Pay",
  logo: "applepay",
  theme: "primary"
};
export const STCPay = Template.bind({});
STCPay.args = {
  buttonLabel: "STC Pay",
  logo: "stcpay",
  theme: "primary"
};
export const VisaMasterPay = Template.bind({});
VisaMasterPay.args = {
  buttonLabel: "Visa / Mastercard",
  logo: "visa/master",
  theme: "primary"
};
export const PayPal = Template.bind({});
PayPal.args = {
  buttonLabel: "PayPal",
  logo: "paypal",
  theme: "primary"
};
export const Mada = Template.bind({});
Mada.args = {
  buttonLabel: "Mada",
  logo: "mada",
  theme: "primary"
};
