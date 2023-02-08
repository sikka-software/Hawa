import React from "react"
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

export const CheckoutForm: React.FunctionComponent<CheckoutFormTypes> = (
  props
) => {
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
        <div className="mb-2 text-center text-xl font-semibold">
          {props.texts.orderDetails}
        </div>
        <HawaTable
          direction={isArabic ? "rtl" : "ltr"}
          columns={["Product", "Price"]}
          rows={props.products}
          end={["Total", props.total]}
        />
      </div>
      <div>
        <div className="my-2 text-center text-xl font-semibold">
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
                    helperText={errors.firstName?.message}
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
                    // inForm
                    width="full"
                    type="text"
                    label={props.texts?.lastNameLabel + " *"}
                    helperText={errors.lastName?.message}
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
                  // inForm
                  width="full"
                  type="text"
                  label={props.texts?.emailLabel + " *"}
                  helperText={errors.email?.message}
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
                    // inForm
                    width="full"
                    type="text"
                    label={props.texts?.streetAddressLabel + " *"}
                    helperText={errors.streetAddress?.message}
                    {...field}
                    value={field.value ?? ""}
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
                    // inForm
                    width="full"
                    type="text"
                    label={props.texts?.buildingNumberLabel + " *"}
                    helperText={errors.buildingNumber?.message}
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
                    // inForm
                    width="full"
                    type="text"
                    label={props.texts?.stateLabel + " *"}
                    helperText={errors.province?.message}
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
                    // inForm
                    width="full"
                    type="text"
                    label={props.texts?.cityLabel + " *"}
                    helperText={errors.city?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
            </div>
            <div className="mb-3">
              <Controller
                control={control}
                name="zipCode"
                rules={{ required: props.texts?.required }}
                render={({ field }) => (
                  <HawaTextField
                    // inForm
                    width="full"
                    type="number"
                    // variant="unscrollable"
                    label={props.texts?.zipCodeLabel + " *"}
                    helperText={errors.zipCode?.message}
                    {...field}
                    value={field.value ?? ""}
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
                    helperText={errors.country?.message}
                    options={countries}
                    getOptionLabel={(countries) => countries.country_label}
                    // {...field}
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
            <HawaButton
              color="primary"
              // type="submit"
              width="full"
            >
              {props.texts.payNow}
            </HawaButton>
          </form>
        </FormProvider>
      </div>
    </HawaContainer>
  )
}
