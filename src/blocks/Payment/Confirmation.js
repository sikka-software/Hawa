import React, { useState } from "react";
import { HawaTextField, HawaTable, HawaSelect } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const ConfirmationPage = (props) => {
  let isArabic = props.lang === "ar";
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control
  } = methods;

  let containerStyle = {
    display: "flex",
    padding: 0,
    paddingRight: "0px !important",
    paddingLeft: "0px !important",
    flexDirection: {
      xs: "column",
      sm: "row",
      md: "row",
      lg: "row",
      xl: "row"
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container maxWidth="sm" style={{ direction: isArabic ? "rtl" : "ltr" }}>
        <Typography
          align="center"
          variant="h3"
          fontWeight={400}
          style={{ marginBottom: 10 }}
        >
          {props.confirmationTitle}
        </Typography>
        <Divider variant="middle" />

        <Typography
          align="center"
          variant="body1"
          //   fontWeight={500}
          style={{ marginBottom: 10 }}
        >
          {props.texts.successMessage} <strong>{props.userEmail}</strong>
        </Typography>
        <Typography align="center" variant="body1">
          {props.texts.yourOrderNumber}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontWeight={700}
          style={{ marginBottom: 10 }}
        >
          {props.orderNumber}
        </Typography>
        <Divider variant="middle" />
        {props.products && (
          <>
            <Typography
              align="center"
              variant="h5"
              fontWeight={500}
              style={{ marginBottom: 10 }}
            >
              {props.texts.orderDetails}
            </Typography>

            <HawaTable
              lang={props.lang}
              columns={["Product", "Price"]}
              rows={props.products}
              end={["Total", props.total]}
            />
            <Divider variant="middle" />
          </>
        )}
        <Button onClick={props.handlePrint} variant="contained">
          {props.texts.print}
        </Button>
        <Button onClick={props.handleHistory} variant="last">
          {props.texts.history}
        </Button>
        <Button onClick={props.handleHome} variant="last">
          {props.texts.homePage}
        </Button>
        <Typography align="center" variant="body2" style={{ marginTop: 10 }}>
          {props.texts.fasterPaymentNote}
        </Typography>
      </Container>
      <a
        style={{
          marginTop: 10,
          paddingTop: 10,
          padding: 5,
          cursor: "pointer"
        }}
        onClick={props.handleRefundPolicyLink}
      >
        <Typography align="center" variant="caption" fontWeight={500}>
          {props.texts.refundPolicy}
        </Typography>
      </a>
    </div>
  );
};
