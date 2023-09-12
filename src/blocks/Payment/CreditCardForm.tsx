import React, { FC } from "react"
import { HawaTextField } from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"

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
    <Card>
      <form onSubmit={handleSubmit(props.handle)}>
        <CardContent headless>
          <div className="flex flex-row gap-4">
            <Controller
              control={control}
              name="cardName"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  type="number"
                  label="Card Number"
                  helpertext={errors.password?.message}
                />
              )}
              rules={{
                required: "Card Number is rquired",
              }}
            />
            <div className="w-1/4">
              <Controller
                control={control}
                name="cardCVC"
                render={({ field }) => (
                  <HawaTextField
                    width="full"
                    name="cardCVC"
                    maxLength="3"
                    autoComplete="cc-number"
                    placeholder="CVC"
                    type="number"
                    label="CVC"
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
            name="cardExpiry"
            render={({ field }) => (
              <HawaTextField
                width="full"
                name="cardExpiry"
                placeholder="MM / YY"
                type="password"
                label="Expiry Date"
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
                name="cardName"
                // placeholder="Enter password"
                type="text"
                label="Name on card"
                helpertext={errors.password?.message}
              />
            )}
            rules={{
              required: "Card holder name is rquired",
            }}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={props.handlePayWithCreditCard}>
            Pay with Credit Card
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
