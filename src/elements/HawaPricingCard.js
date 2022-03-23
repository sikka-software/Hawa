import React from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
export const HawaPricingCard = (props) => {
  return (
    <Container
      maxWidth="xs"
      variant="price-card"
      style={{ direction: props.lang === "ar" ? "rtl" : "ltr" }}
    >
      <Container variant="price-header">
        <Typography variant="h3" fontWeight={500}>
          {props.title}
        </Typography>
        <Typography variant="caption">{props.subtitle}</Typography>
        <br />
        <Typography
          variant="h4"
          fontWeight={500}
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center"
            // justifyContent: props.lang === "ar" ? "" : "center"
          }}
        >
          {props.lang === "ar" ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
                // alignItems: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                {props.price}
                <div style={{ width: 5 }} />
                <Typography>{props.currency}</Typography>
              </div>
              <Typography style={{ fontSize: 14, margin: 5 }}>
                {props.cycleText}
              </Typography>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
                // alignItems: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>{props.currency}</Typography>
                <div style={{ width: 5 }} />
                {props.price}
              </div>
              <Typography style={{ fontSize: 14, margin: 5 }}>
                {props.cycleText}
              </Typography>
            </div>
          )}
          {/* {props.lang === "ar" ? null : (
            <Typography style={{ fontSize: 14, margin: 5 }}>
              {" / "}
              {props.cycleText}
            </Typography>
          )} */}
        </Typography>
      </Container>

      <div style={{ padding: 20 }}>
        {props.features?.map((feature) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 10,
                width: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "10%"
                }}
              >
                <CheckIcon fontSize="small" />
              </div>
              <div style={{ width: 10 }} />
              <Typography variant="subtitle2">{feature}</Typography>
            </div>
          );
        })}
      </div>
      <Button variant="contained" style={{ margin: 20 }}>
        {props.buttonText}
      </Button>
    </Container>
  );
};
