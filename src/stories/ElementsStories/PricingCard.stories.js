import { Container } from "@mui/material";
import React from "react";
import { HawaCard } from "../../elements";

export default {
  title: "Elements/Cards/Pricing",
  component: [HawaCard],
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "The text next to the logo"
    }
  }
};

export const Pricing = (args) => {
  return (
    <HawaCard
      title="Pro"
      subtitle="For small business"
      price="300"
      currency="SAR"
      cycleText="Every 6 months"
      features={["Unlimited Menus", "Unlimited Items", "Custom Handle"]}
    />
  );
};
