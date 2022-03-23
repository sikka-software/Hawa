import React, { useState } from "react";
import Container from "@mui/material/Container";
import { HawaPricingCard, HawaRadio } from "../../elements";

export const PricingPlans = (props) => {
  const [currentCurrency, setCurrentCurrency] = useState("sar");
  const [currentCycle, setCurrentCycle] = useState("monthly");
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
          handleChange={(e) => setCurrentCycle(e)}
          defaultValue="monthly"
          options={[
            { label: `Monthly`, value: `monthly` },
            { label: `3 Months`, value: `3-months` },
            { label: `6 Months`, value: `6-months` },
            { label: `Annually`, value: `annually` }
          ]}
        />

        <HawaRadio
          location="inPricing"
          handleChange={(e) => {
            setCurrentCurrency(e);
          }}
          defaultValue="sar"
          options={[
            { label: `USD`, value: `usd` },
            { label: `SAR`, value: `sar` }
          ]}
        />
      </div>

      <Container variant="pricing">
        {props.plans.map((plan) => {
          return (
            <HawaPricingCard
              lang={props.lang}
              {...plan}
              currency={currentCurrency}
              cycleText={currentCycle}
            />
          );
        })}
      </Container>
    </Container>
  );
};
