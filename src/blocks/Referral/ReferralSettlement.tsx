import React from "react"
import { FaTimes } from "react-icons/fa"
import {
  HawaAlert,
  HawaButton,
  HawaChip,
  HawaSelect,
  HawaTextField,
} from "../../elements"
import { HawaContainer } from "../../layout"
import { Controller, FormProvider, useForm } from "react-hook-form"

type TReferralSettlement = {
  referralLink: string
  referralCode: string
  withdrawError?: string
}

export const ReferralSettlement: React.FunctionComponent<
  TReferralSettlement
> = ({ referralLink, referralCode, withdrawError }) => {
  const methods = useForm()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods
  return (
    <HawaContainer>
      <div>
        <FormProvider {...methods}>
          <HawaTextField label={"IBAN"} />
          <HawaTextField label={"Holder Name"} />
          <Controller
            control={control}
            name="bank"
            render={({ field }) => (
              <HawaSelect
                label="Bank"
                isCreatable={false}
                isMulti={false ?? false}
                isSearchable={false}
                isClearable={false ?? false}
                options={[
                  { value: "snb", label: "Saudi National Bank" },
                  { value: "bilad", label: "Al Bilad Bank" },
                  { value: "rajihi", label: "Al Rajihi Bank" },
                ]}
                onInputChange={(e: any, o: any) => console.log("changing", e)}
                {...field}
                onChange={(e: any, o: any) => console.log("chooo", e)}
              />
            )}
          />
        </FormProvider>
      </div>
      <div>
        <HawaButton width="full">Add Bank Account</HawaButton>
      </div>
      {withdrawError && (
        <div>
          <HawaAlert
            text={
              "Sorry can't withdraw the money at the moment. Please try again in 2022/11/20"
            }
            severity="warning"
          />
        </div>
      )}
      <div className="mt-3">
        <div className="mb-1">Settlement Accounts</div>
        <div className="rounded">
          <SettlementAccountCard
            bank="Al Inma Bank"
            iban="SA10228094028098329119"
            accountHolder="Zakher Masri"
            default
          />
          <SettlementAccountCard
            bank="Al Rajihi Bank"
            iban="SA10228094028098329119"
            accountHolder="Zakher Masri"
          />
          <SettlementAccountCard
            bank="Al Inma Bank"
            iban="SA10228094028098329119"
            accountHolder="Zakher Masri"
          />
        </div>
      </div>
    </HawaContainer>
  )
}

const SettlementAccountCard = (props) => (
  <div className="mb-3 flex flex-row items-center justify-between rounded border-b bg-white p-2">
    <div className="flex flex-col justify-between">
      <div className="text-xs">{props.bank}</div>
      <div>{props.accountHolder}</div>
      <div className="text-xs">{props.iban}</div>
    </div>
    <div className="flex flex-row items-center justify-center gap-1">
      {props.default && <HawaChip size="normal" label="Default" />}
      {!props.default && <HawaButton size="small">Make Default</HawaButton>}
      <HawaButton tooltip="Delete">
        <FaTimes />
      </HawaButton>
    </div>
  </div>
)
