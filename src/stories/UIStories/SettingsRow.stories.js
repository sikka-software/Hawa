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
    // <HawaProvider theme={{ ...defaultTheme }}>
    <HawaSettingsRow />
    // </HawaProvider>
  );
};

export const Default = HawaSettingsRowTemplate.bind({});
Default.args = {
  theme: "primary"
};
