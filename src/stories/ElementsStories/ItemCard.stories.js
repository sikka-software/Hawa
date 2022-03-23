import { Container } from "@mui/material";
import React from "react";
import { HawaCard } from "../../elements";

export default {
  title: "Elements/Cards/Items",
  component: [HawaCard],
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "The text next to the logo"
    }
  }
};

export const Items = (args) => {
  return <HawaCard />;
};
