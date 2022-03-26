import React from "react";
import { HawaTextField, HawaTable, HawaSelect } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Button, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export const CheckoutForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control
  } = methods;
  return (
    <Container maxWidth="sm">
      <Typography
        align="center"
        variant="h4"
        fontWeight={400}
        style={{ marginBottom: 10 }}
      >
        Order Details
      </Typography>
      <HawaTable
        columns={["Product", "Price"]}
        rows={[
          ["Logo Design", "1,200 SAR"],
          ["Website Design", "1,500 SAR"],
          ["Website Development", "900 SAR"],
          ["Hosting", "200 SAR"],
          ["Social Media Management", "700 SAR"]
        ]}
        end={["Total", "5,330 SAR"]}
      />
      <Divider variant="middle" />

      <Typography
        align="center"
        variant="h4"
        fontWeight={400}
        style={{ marginBottom: 10 }}
      >
        Billing Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handle)}>
          <Container
            sx={{
              display: "flex",
              //   backgroundColor: "red",
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
            }}
          >
            <Controller
              control={control}
              name="firstName"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
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
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%"
            }}
          >
           
          </div> */}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
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

          <Container
            sx={{
              display: "flex",
              //   backgroundColor: "red",
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
            }}
          >
            <Controller
              control={control}
              name="streetAddress"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
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
          <Container
            sx={{
              display: "flex",
              //   backgroundColor: "red",
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
            }}
          >
            <Controller
              control={control}
              name="province"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
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
          <Container
            sx={{
              display: "flex",
              //   backgroundColor: "red",
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
            }}
          >
            <Controller
              control={control}
              name="zipCode"
              rules={{ required: props.texts?.required }}
              render={({ field }) => (
                <HawaTextField
                  fullWidth
                  type="tel"
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
                  // <HawaTextField
                  fullWidth
                  native
                  value={""}
                  label={props.texts?.countryLabel + " *"}
                  variant="standard"
                  //   value={countryCode}
                  //   value={field.value ?? ""}
                  helperText={errors.country?.message}
                  //   onChange={(e) => handleChangeInput(e)}
                  //   label={t("country")}
                  displayEmpty
                  disableUnderline
                  required
                  validators={["required"]}
                  {...field}
                >
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </HawaSelect>
              )}
            />
          </Container>
          <Button
            type="submit"
            fullWidth
            variant="last"
            onClick={props.handlePayWithCreditCard}
          >
            {/* {props.texts.signInText} */}
            {"Pay Now"}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
