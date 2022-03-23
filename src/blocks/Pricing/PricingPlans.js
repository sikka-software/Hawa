import React from "react";
import Container from "@mui/material/Container";
import { HawaPricingCard } from "../../elements";

export const PricingPlans = (props) => {
  return (
    <Container variant="pricing">
      {props.plans.map((plan) => {
        return <HawaPricingCard lang={props.lang} {...plan} />;
      })}
    </Container>
  );
};
