import React from "react";
import {
  SelectPayment,
  CreditCardForm,
  ChargeWalletForm,
  PayWithWallet
} from "../../blocks/Payment";
import { HawaSettingsRow } from "../../ui";

export default {
  title: "UI/SettingsRow",
  component: [SelectPayment, CreditCardForm],
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    },
    type: {
      options: ["checkbox", "text", "default"],
      control: { type: "select" }
    }
  },
  args: {
    theme: "primary",
    type: "checkbox"
  }
};

const HawaSettingsRowTemplate = (args) => {
  return <HawaSettingsRow settingsType={args.type} />;
};

export const Checkbox = HawaSettingsRowTemplate.bind({});
Checkbox.args = {
  theme: "primary",
  type: "checkbox"
};
export const Text = (args) => {
  return <HawaSettingsRow settingsType={args.type} />;
};
Text.args = {
  theme: "primary",
  type: "text"
};
export const Radio = (args) => {
  return <HawaSettingsRow settingsType={args.type} />;
};
Radio.args = {
  theme: "primary",
  type: "radio"
};
