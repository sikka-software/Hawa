import React, { useState } from "react"
import { HawaButton, HawaTextField } from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { HawaContainer } from "../../layout"

type ChargeWalletTypes = {
  currency: any
  handleChargeWallet: any
  texts: {
    amountLabel: string
    amountRequired: string
    chargeWallet: string
  }
}
export const ChargeWalletForm: React.FunctionComponent<ChargeWalletTypes> = (
  props
) => {
  const [walletAmount, setWalletAmount] = useState(0)
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods

  return (
    <HawaContainer>
      {" "}
      <div className="text-center text-5xl font-extrabold">
        {Number(walletAmount).toLocaleString("en") || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleChargeWallet)}>
          <Controller
            control={control}
            name="amount"
            render={({ field }) => (
              <HawaTextField
                width="full"
                placeholder={props.texts.amountLabel}
                type="number"
                {...field}
                value={field.value ?? ""}
                inputProps={{
                  inputMode: "numeric",
                  min: "1",
                  max: "9999999",
                  step: "0.01",
                }}
                onChange={(e: any) => {
                  field.onChange(parseFloat(e.target.value))
                  setWalletAmount(e.target.value)
                }}
                helperText={errors.amount?.message}
              />
            )}
            rules={{
              required: props.texts.amountRequired,
            }}
          />

          <HawaButton
            color="primary"
            // type="submit"
            width="full"
          >
            {props.texts.chargeWallet}
          </HawaButton>
        </form>
      </FormProvider>
    </HawaContainer>
  )
}
