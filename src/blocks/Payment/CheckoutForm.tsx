import React, { FC } from "react"
import {
  HawaTextField,
  HawaTable,
  HawaSelect,
  HawaButton,
} from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"
import countries from "../../countries"

type CheckoutFormTypes = {
  lang: string
  products: any
  total: any
  handlePayNow: any
  countriesList: any
  texts: {
    orderDetails: string
    billingAddress: string
    payNow: string
    emailLabel: string
    emailRequiredText: string
    emailInvalidText: string
    firstNameLabel: string
    required: string
    lastNameLabel: string
    streetAddressLabel: string
    buildingNumberLabel: string
    cityLabel: string
    stateLabel: string
    countryLabel: string
    zipCodeLabel: string
  }
}

export const CheckoutForm: FC<CheckoutFormTypes> = (props) => {
  let isArabic = props.lang === "ar"
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = methods

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
      xl: "row",
    },
  }
  return (
    <HawaContainer>
      <div>
        <div className="mb-2 text-center text-xl font-semibold dark:text-white">
          {props.texts.orderDetails}
        </div>
        <div className="rounded border border-gray-300">
          <HawaTable
            pagination={false}
            direction={isArabic ? "rtl" : "ltr"}
            columns={[
              { hidden: false, value: "Product" },
              { hidden: true, value: "ID" },
              { hidden: false, value: "Price" },
            ]}
            borders="inner"
            rows={props.products}
            bordersWidth="1"
          />
        </div>
      </div>
      <div>
        <div className="my-2 text-center text-xl font-semibold dark:text-white">
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
                    type="text"
                    label={props.texts?.firstNameLabel + " *"}
                    helpertext={errors.firstName?.message}
                    {...field}
                    value={field.value ?? ""}
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
                    width="full"
                    type="text"
                    label={props.texts?.lastNameLabel + " *"}
                    helpertext={errors.lastName?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  type="text"
                  label={props.texts?.emailLabel + " *"}
                  helpertext={errors.email?.message}
                  {...field}
                  value={field.value ?? ""}
                />
              )}
              rules={{
                required: props.texts?.emailRequiredText,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: props.texts?.emailInvalidText,
                },
              }}
            />
            <div className="flex flex-col md:flex-row">
              <Controller
                control={control}
                name="streetAddress"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="text"
                    label={props.texts?.streetAddressLabel + " *"}
                    helpertext={errors.streetAddress?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row">
              <Controller
                control={control}
                name="province"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="text"
                    label={props.texts?.stateLabel + " *"}
                    helpertext={errors.province?.message}
                    {...field}
                    value={field.value ?? ""}
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
                    width="full"
                    type="text"
                    label={props.texts?.cityLabel + " *"}
                    helpertext={errors.city?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <Controller
                control={control}
                name="buildingNumber"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="text"
                    label={props.texts?.buildingNumberLabel + " *"}
                    helpertext={errors.buildingNumber?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
              <div style={{ width: 20 }} />
              <Controller
                control={control}
                name="zipCode"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    type="number"
                    label={props.texts?.zipCodeLabel + " *"}
                    helpertext={errors.zipCode?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
              {/* <div style={{ width: 20 }} /> */}
            </div>
            <div className="mb-3">
              <Controller
                control={control}
                name="country"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaSelect
                    native
                    label={props.texts?.countryLabel + " *"}
                    helperText={errors.country?.message}
                    options={countries}
                    getOptionLabel={(countries) => countries.country_label}
                    onChange={(e) => field.onChange(e.country_label)}
                    value={field.value ?? ""}
                  >
                    <option></option>
                    {props.countriesList.map((country: any, i: any) => (
                      <option key={i}>{country}</option>
                    ))}
                  </HawaSelect>
                )}
              />
            </div>
            <HawaButton color="primary" width="full">
              {props.texts.payNow}
            </HawaButton>
          </form>
        </FormProvider>
      </div>
    </HawaContainer>
  )
}
