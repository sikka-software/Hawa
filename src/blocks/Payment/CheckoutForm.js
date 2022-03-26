import React, { useState } from "react";
import { HawaTextField, HawaTable, HawaSelect } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const CheckoutForm = (props) => {
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
    <Container maxWidth="sm" style={{ direction: isArabic ? "rtl" : "ltr" }}>
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

      <Typography
        align="center"
        variant="h5"
        fontWeight={500}
        style={{ marginBottom: 10 }}
      >
        {props.texts.billingAddress}
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handlePayNow)}>
          <Container sx={containerStyle}>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.firstNameLabel + " *"}
                  helperText={errors.firstName?.message}
                  {...field}
                />
              )}
            />
            <div style={{ width: 20 }} />

            <Controller
              control={control}
              name="lastName"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.lastNameLabel + " *"}
                  helperText={errors.lastName?.message}
                  {...field}
                />
              )}
            />
          </Container>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
                inForm
                fullWidth
                type="text"
                value={field.value ?? ""}
                label={props.texts?.emailLabel + " *"}
                helperText={errors.email?.message}
                {...field}
              />
            )}
            rules={{
              required: props.texts?.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts?.emailInvalidText
              }
            }}
          />

          <Container sx={containerStyle}>
            <Controller
              control={control}
              name="streetAddress"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.streetAddressLabel + " *"}
                  helperText={errors.streetAddress?.message}
                  {...field}
                />
              )}
            />
            <div style={{ width: 20 }} />

            <Controller
              control={control}
              name="buildingNumber"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.buildingNumberLabel + " *"}
                  helperText={errors.buildingNumber?.message}
                  {...field}
                />
              )}
            />
          </Container>
          <Container sx={containerStyle}>
            <Controller
              control={control}
              name="province"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.stateLabel + " *"}
                  helperText={errors.province?.message}
                  {...field}
                />
              )}
            />
            <div style={{ width: 20 }} />

            <Controller
              control={control}
              name="city"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="text"
                  value={field.value ?? ""}
                  label={props.texts?.cityLabel + " *"}
                  helperText={errors.city?.message}
                  {...field}
                />
              )}
            />
          </Container>
          <Container sx={containerStyle}>
            <Controller
              control={control}
              name="zipCode"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  inForm
                  fullWidth
                  type="number"
                  variant="unscrollable"
                  value={field.value ?? ""}
                  label={props.texts?.zipCodeLabel + " *"}
                  helperText={errors.zipCode?.message}
                  {...field}
                />
              )}
            />
            <div style={{ width: 20 }} />

            <Controller
              control={control}
              name="country"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaSelect
                  fullWidth
                  native
                  label={props.texts?.countryLabel + " *"}
                  variant="standard"
                  value={field.value ?? ""}
                  helperText={errors.country?.message}
                  displayEmpty
                  disableUnderline
                  validators={["required"]}
                  {...field}
                >
                  <option></option>
                  {props.countriesList.map((country, i) => (
                    <option key={i}>{country}</option>
                  ))}
                </HawaSelect>
              )}
            />
          </Container>
          <Button type="submit" fullWidth variant="last">
            {props.texts.payNow}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
