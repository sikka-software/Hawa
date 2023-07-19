import { useState, FC } from "react"
import { HawaButton } from "../../elements"
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
export const ChargeWalletForm: FC<ChargeWalletTypes> = (props) => {
  const [walletAmount, setWalletAmount] = useState(0)

  return (
    <HawaContainer>
      <div className="p-4 text-center">
        <div className=" text-5xl font-extrabold">
          {Number(walletAmount).toLocaleString("en") || "0"}
        </div>
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <div className="mb-2 flex w-full flex-row gap-4 text-center">
        <HawaButton variant="outlined" margins="none" className="h-full">
          10 SAR
        </HawaButton>
        <HawaButton variant="outlined" margins="none" className="h-full">
          100 SAR
        </HawaButton>

        <input
          placeholder="Custom"
          className="h-auto w-full rounded bg-gray-100 p-4"
        />
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
        </FormProvider> */}
      <HawaButton color="primary" width="full">
        {props.texts.chargeWallet}
      </HawaButton>
    </HawaContainer>
  )
}
