import React from "react";
import { CheckoutForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Checkout",
  component: [CheckoutForm],
  argTypes: {},
  args: {}
};

export const Checkout = (args) => {
  return <CheckoutForm  />;
};

Checkout.args = {};
