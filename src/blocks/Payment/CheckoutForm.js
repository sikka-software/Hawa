import React from "react";
import {
  HawaTextField,
  HawaTable,
  HawaSelect,
  HawaButton
} from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";

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
    <div className="flex flex-col bg-blue-300 rounded-xl p-4">
      <div>
        <div className="text-xl text-center font-semibold mb-2">
          {props.texts.orderDetails}
        </div>
        <HawaTable
          lang={props.lang}
          columns={["Product", "Price"]}
          rows={props.products}
          end={["Total", props.total]}
        />
      </div>

      <div>
        <div className="text-xl text-center font-semibold my-2">
          {props.texts.billingAddress}
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(props.handlePayNow)}>
            <div>
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
            </div>
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

            <div sx={containerStyle}>
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
            </div>
            <div sx={containerStyle}>
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
            </div>
            <div sx={containerStyle}>
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
            </div>
            <HawaButton type="submit" fullWidth>
              {props.texts.payNow}
            </HawaButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  texts: PropTypes.shape({
    orderDetails: PropTypes.string,
    billingAddress: PropTypes.string,
    payNow: PropTypes.string,
    emailLabel: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    firstNameLabel: PropTypes.string,
    required: PropTypes.string,
    lastNameLabel: PropTypes.string,
    streetAddressLabel: PropTypes.string,
    buildingNumberLabel: PropTypes.string,
    cityLabel: PropTypes.string,
    stateLabel: PropTypes.string,
    countryLabel: PropTypes.string,
    zipCodeLabel: PropTypes.string
  }),
  lang: PropTypes.string,
  countriesList: PropTypes.array,
  products: PropTypes.array,
  total: PropTypes.string,
  handlePayNow: PropTypes.func
};
