import React from "react";
import { CreditCardForm } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Pay Via Credit Card",
  component: [CreditCardForm],
  argTypes: {},
  args: {}
};

export const PayViaCreditCard = (args) => {
  return <CreditCardForm />;
};

PayViaCreditCard.args = {};
