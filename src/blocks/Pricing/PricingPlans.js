import React from "react";
import Container from "@mui/material/Container";
import { HawaPricingCard, HawaRadio } from "../../elements";

export const PricingPlans = (props) => {
  return (
    <Container style={{ width: "fit-content" }} variant="plain">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          marginBottom: 10
        }}
      >
        <HawaRadio
          location="inPricing"
          handleChange={(e) => console.log("changing to ", e)}
          defaultValue="usd"
          options={[
            { label: `Monthly`, value: `usd` },
            { label: `3 Months`, value: `3-months` },
            { label: `6 Months`, value: `6-months` },
            { label: `Annually`, value: `annual` }
          ]}
        />

        <HawaRadio
          location="inPricing"
          handleChange={(e) => console.log("changing to ", e)}
          defaultValue="usd"
          options={[
            { label: `USD`, value: `usd` },
            { label: `SAR`, value: `sar` }
          ]}
        />
      </div>

      <Container variant="pricing">
        {props.plans.map((plan) => {
          return <HawaPricingCard lang={props.lang} {...plan} />;
        })}
      </Container>
    </Container>
  );
};
