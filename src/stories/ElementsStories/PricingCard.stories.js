import { Container } from "@mui/material";
import React from "react";
import { PricingCard } from "../../elements";

export default {
  title: "Elements/Cards/Pricing",
  component: PricingCard,
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "The text next to the logo"
    }
  }
};

export const Card = (args) => {
  return <PricingCard />;
};
