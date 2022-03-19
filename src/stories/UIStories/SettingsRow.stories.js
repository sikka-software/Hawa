import React from "react";
import {
  SelectPayment,
  CreditCardForm,
  ChargeWalletForm,
  PayWithWallet
} from "../../blocks/Payment";
import { defaultTheme, HawaProvider } from "../../themes/HawaProvider";
import { HawaSettingsRow } from "../../ui";

export default {
  title: "UI/SettingsRow",
  component: [SelectPayment, CreditCardForm],
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  },
  args: {
    theme: "primary"
  }
};

const HawaSettingsRowTemplate = (args) => {
  return (
    <HawaProvider themeName={args.theme}>
      <HawaSettingsRow settingsType="checkbox" />
    </HawaProvider>
  );
};

export const Checkbox = HawaSettingsRowTemplate.bind({});
Checkbox.args = {
  theme: "primary"
};
export const TextFieldSettings = (args) => {
  return (
    <HawaProvider themeName={args.theme}>
      <HawaSettingsRow settingsType="text" />
    </HawaProvider>
  );
};
TextFieldSettings.args = {
  theme: "primary"
};
