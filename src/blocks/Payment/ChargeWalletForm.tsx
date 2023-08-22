import React, { useState, FC } from "react"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"

type ChargeWalletTypes = {
  currency: any
  handleChargeWallet: any
  texts: {
    amountLabel: string
    amountRequired: string
    chargeWallet: string
  }
}
export const ChargeWalletForm: FC<ChargeWalletTypes> = (props) => {
  const [walletAmount, setWalletAmount] = useState(0)

  return (
    <Card>
      <CardContent headless>
        <div className="p-4 text-center">
          <div className=" text-5xl font-extrabold">
            {Number(walletAmount).toLocaleString("en") || "0"}
          </div>
          <div className="text-sm font-normal">{props.currency || "SAR"}</div>
        </div>
        <div className="mb-2 flex w-full flex-col gap-4 text-center">
          <div className="mb-2 flex w-full flex-row gap-4 text-center">
            <Button variant="outline" className="h-full w-full">
              10 SAR
            </Button>
            <Button variant="outline" className="h-full w-full">
              50 SAR
            </Button>
            <Button variant="outline" className="h-full w-full">
              100 SAR
            </Button>
          </div>

          <Input placeholder="Custom Amount" type="number" name="amount" />
        </div>
        {/* <FormProvider {...methods}>
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
                helpertext={errors.amount?.message}
              />
            )}
            rules={{
              required: props.texts.amountRequired,
            }}
          />

      
          </form>
        </FormProvider> */}
        <Button className="mt-6 w-full">{props.texts.chargeWallet}</Button>
      </CardContent>
    </Card>
  )
}
