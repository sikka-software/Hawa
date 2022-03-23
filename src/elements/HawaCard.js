import React from "react";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
export const HawaCard = (props) => {
  return (
    <Container maxWidth="xs" variant="price-card">
      <Container variant="price-header">
        <Typography variant="h3" fontWeight={500}>
          {props.title}
        </Typography>
        <Typography variant="caption">{props.subtitle}</Typography>
        <br />
        <Typography variant="h5" fontWeight={500}>
          {props.price} {props.currency} /{" "}
          <span style={{ fontSize: 14 }}>{props.cycleText}</span>
        </Typography>
        {/* <div style={{ width: 5 }} /> */}
        {/* <Typography variant="caption">{props.currency}</Typography> */}
      </Container>
      {/* <div style={{ marginBottom: 20, width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "red",

            width: "100%"
          }}
        >
          <Typography variant="h2" fontWeight={500}>
            {props.price}
          </Typography>
          <div style={{ width: 5 }} />
          <Typography variant="caption">{props.currency}</Typography>
        </div>
        <Typography>{props.cycleText}</Typography>
      </div> */}
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
                  // alignItems: "flex-end",
                  justifyContent: "flex-end",
                  // backgroundColor: "red",
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
        Select Plan
      </Button>
    </Container>
  );
};
