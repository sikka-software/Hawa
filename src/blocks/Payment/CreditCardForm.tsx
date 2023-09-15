import React, { FC, useEffect, useState } from "react"
import { HawaTextField } from "../../elements"
import { Controller, useForm } from "react-hook-form"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"

type CreditCardFormTypes = {
  handle: any
  handlePayWithCreditCard: any
}

export const CreditCardForm: FC<CreditCardFormTypes> = (props) => {
  const [cardNumber, setCardNumber] = useState("")
  const [cardType, setCardType] = useState("")
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  const getCardType = (card_bin) => {
    const visa_regex = /^4[0-9]{0,15}$/m
    const mastercard_regex = /^5$|^5[0-5][0-9]{0,16}$/m
    const amex_regex = /^3$|^3[47][0-9]{0,13}$/m
    const mada_regex =
      /^(440647|440795|446404|457865|968208|457997|474491|636120|417633|468540|468541|468542|468543|968201|446393|409201|458456|484783|462220|455708|410621|455036|486094|486095|486096|504300|440533|489318|489319|445564|968211|410685|406996|432328|428671|428672|428673|968206|446672|543357|434107|407197|407395|412565|431361|604906|521076|529415|535825|543085|524130|554180|549760|968209|524514|529741|537767|535989|536023|513213|520058|558563|588982|589005|531095|530906|532013|968204|422817|422818|422819|428331|483010|483011|483012|589206|968207|419593|439954|530060|531196|420132)/
    const meeza_regex =
      /^507803[0-6][0-9]|507808[3-9][0-9]|507809[0-9][0-9]|507810[0-2][0-9]/
    let card_type = "visa"
    if (card_bin.replace(/[^\d]/g, "").match(mada_regex)) {
      card_type = "mada"
    } else if (card_bin.replace(/[^\d]/g, "").match(meeza_regex)) {
      card_type = "meeza"
    } else if (card_bin.replace(/[^\d]/g, "").match(visa_regex)) {
      card_type = "visa"
    } else if (card_bin.replace(/[^\d]/g, "").match(mastercard_regex)) {
      card_type = "mastercard"
    } else if (card_bin.replace(/[^\d]/g, "").match(amex_regex)) {
      card_type = "amex"
    }
    return card_type
  }
  const onCardNumberChange = (event) => {
    let { value, name } = event.target
    let cardNumber = value
    value = value.replace(/\D/g, "")
    if (/^3[47]\d{0,13}$/.test(value)) {
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ")
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ")
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ")
    }
    console.log("card number is ", cardNumber.trimRight())
    setCardNumber(cardNumber.trimRight())
    // onUpdateState(name, cardNumber);
  }
  useEffect(() => {
    let cardTypeSlug = getCardType(cardNumber)
    setCardType(cardTypeSlug)
  })
  return (
    <Card>
      <form onSubmit={handleSubmit(props.handle)}>
        <CardContent headless>
          <div className="flex flex-row gap-4">
            <Controller
              control={control}
              name="cardNumber"
              render={({ field }) => (
                <HawaTextField
                  width="full"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  type="number"
                  onChange={onCardNumberChange}
                  // onChange={(e) => setCardNumber(e.target.value)}
                  label="Card Number"
                  helpertext={errors.password?.message}
                  iconInside={
                    <img
                      src={`https://sikka-images.s3.ap-southeast-1.amazonaws.com/payment-symbols/borderless/${cardType}.png`}
                      alt=""
                      className="h-8"
                    />
                  }
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
