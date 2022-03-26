import React from "react";
import { CheckoutForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Checkout",
  component: [CheckoutForm],
  argTypes: {},
  args: {}
};

export const Checkout = (args) => {
  return (
    <CheckoutForm
      texts={{
        emailLabel: "Email",
        emailRequiredText: "Email is required",
        emailInvalidText: "Invalid email address",
        firstNameLabel: "First Name",
        required: "Required",
        lastNameLabel: "Last Name",
        streetAddressLabel: "Street Address",
        buildingNumberLabel: "Building Number",
        cityLabel: "City",
        stateLabel: "State/Province",
        countryLabel: "Country",
        zipCodeLabel: "Zip Code"
      }}
    />
  );
};

Checkout.args = {};
