import React from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type CreditCardFormTypes = {
  handle: any
  handlePayWithCreditCard: any
}

export const CreditCardForm: React.FunctionComponent<CreditCardFormTypes> = (
  props
) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <HawaContainer>
      {" "}
      <form onSubmit={handleSubmit(props.handle)}>
        <HawaTextField
          width="full"
          name="password"
          placeholder="Enter password"
          type="tel"
          label="Card Number"
          rules={{
            required: "Password is rquired",
          }}
          helperText={errors.password?.message}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              width="full"
              name="password"
              placeholder="Enter password"
              type="password"
              label="Name On Card"
              rules={{
                required: "Password is rquired",
              }}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              width="full"
              name="password"
              placeholder="Enter password"
              type="password"
              label="Expiry Date"
              rules={{
                required: "Password is rquired",
              }}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              width="full"
              name="password"
              placeholder="Enter password"
              type="password"
              label="CCV"
              rules={{
                required: "Password is rquired",
              }}
              helperText={errors.password?.message}
            />
          )}
        />
        <HawaButton
          type="submit"
          width="full"
          color="primary"
          onClick={props.handlePayWithCreditCard}
        >
          Pay with Credit Card
        </HawaButton>
      </form>
    </HawaContainer>
  )
}
