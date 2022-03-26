import Container from "@mui/material/Container";
import React from "react";
import { ActionButton, HawaLogoButton } from "../../elements";

export default {
  title: "Elements/Buttons/LogoButtons",
  component: HawaLogoButton,
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "The text next to the logo"
    },
    logo: {
      control: "select",
      options: [
        "google",
        "twitter",
        "github",
        "paypal",
        "applepay",
        "googlepay",
        "stcpay",
        "mada",
        "visa/master"
      ],
      description: "a brand name that will display the logo accordingly",
      table: {
        type: {
          summary: "Examples",
          detail: "google, twitter, github, paypal, applepay, googlepay"
        }
      }
    }
  }
};

const Template = (args) => {
  return (
    <Container maxWidth="xs" variant="plain">
      <HawaLogoButton logo={args.logo} buttonText={args.buttonLabel} />
    </Container>
  );
};

export const Google = Template.bind({});
Google.args = { buttonLabel: "Sign in via Google", logo: "google" };

export const Twitter = Template.bind({});
Twitter.args = { buttonLabel: "Sign in via Twitter", logo: "twitter" };

export const Github = Template.bind({});
Github.args = { buttonLabel: "Sign in via Github", logo: "github" };

export const WalletPay = Template.bind({});
WalletPay.args = { buttonLabel: "Pay with Wallet", logo: "wallet" };

export const GooglePay = Template.bind({});
GooglePay.args = { buttonLabel: "Google Pay", logo: "googlepay" };

export const ApplePay = Template.bind({});
ApplePay.args = { buttonLabel: "Apple Pay", logo: "applepay" };

export const STCPay = Template.bind({});
STCPay.args = { buttonLabel: "STC Pay", logo: "stcpay" };

export const VisaMasterPay = Template.bind({});
VisaMasterPay.args = { buttonLabel: "Visa / Mastercard", logo: "visa/master" };

export const PayPal = Template.bind({});
PayPal.args = { buttonLabel: "PayPal", logo: "paypal" };

export const Mada = Template.bind({});
Mada.args = { buttonLabel: "Mada", logo: "mada" };
