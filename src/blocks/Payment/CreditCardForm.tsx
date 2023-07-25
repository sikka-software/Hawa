import React, { FC } from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type CreditCardFormTypes = {
  handle: any
  handlePayWithCreditCard: any
}

export const CreditCardForm: FC<CreditCardFormTypes> = (props) => {
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
        <div className="flex flex-row gap-4">
          <Controller
            control={control}
            name="cardName"
            render={({ field }) => (
              <HawaTextField
                width="full"
                name="password"
                placeholder="Enter password"
                type="tel"
                label="Card Number"
                helpertext={errors.password?.message}
              />
            )}
            rules={{
              required: "Password is rquired",
            }}
          />
          <div className="w-1/4">
            <Controller
              control={control}
              name="cardName"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  name="password"
                  maxLength="3"
                  autoComplete="cc-number"
                  placeholder=""
                  type="password"
                  label="CCV"
                  helpertext={errors.password?.message}
                />
              )}
              rules={{
                required: "Password is rquired",
              }}
            />
          </div>
        </div>
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              width="full"
              name="password"
              placeholder="Enter password"
              type="text"
              label="Name On Card"
              helpertext={errors.password?.message}
            />
          )}
          rules={{
            required: "Password is rquired",
          }}
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
              helpertext={errors.password?.message}
            />
          )}
          rules={{
            required: "Password is rquired",
          }}
        />

        <HawaButton
          // type="submit"
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
