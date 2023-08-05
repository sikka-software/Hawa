import React, { FC } from "react"
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

export const ReferralSettlement: FC<TReferralSettlement> = ({
  referralLink,
  referralCode,
  withdrawError,
}) => {
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
  <div className="mb-3 flex flex-row items-center justify-between rounded border-b bg-white p-3">
    <div className="flex flex-col justify-between">
      <div className="text-xs">{props.bank}</div>
      <div>{props.accountHolder}</div>
      <div className="text-xs">{props.iban}</div>
    </div>
    <div className="flex flex-row items-center justify-center gap-2">
      {props.default && (
        <HawaButton disabled variant="outlined" size="small">
          Default
        </HawaButton>
      )}
      {/* {props.default && <HawaChip size="normal" label="Default" />} */}
      {!props.default && <HawaButton size="small">Make Default</HawaButton>}
      <HawaButton tooltip="Delete" size="small">
        {/* <FaTimes /> */}
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </HawaButton>
    </div>
  </div>
)
