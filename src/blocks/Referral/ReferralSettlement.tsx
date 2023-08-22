import React, { FC } from "react"
import {
  HawaAlert,
  HawaButton,
  HawaChip,
  HawaMenu,
  HawaSelect,
  HawaTextField,
} from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { Card, CardContent } from "../../elements/Card"

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
    <Card>
      <CardContent headless>
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
      </CardContent>
    </Card>
  )
}

const SettlementAccountCard = (props) => {
  return (
    <div className="mb-3 flex flex-row items-center justify-between rounded border bg-background p-3">
      <div className="flex flex-col justify-between">
        <div className="text-xs">{props.bank}</div>
        <div>{props.accountHolder}</div>
        <div className="text-xs">{props.iban}</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        {props.default && (
          <HawaButton disabled variant="outlined" size="xs" margins="none">
            Default
          </HawaButton>
        )}

        <HawaMenu
          size="small"
          menuItems={[
            [
              { label: "Set Default", disabled: props.default },
              { label: "Edit" },
              { label: "Delete" },
            ],
          ]}
          // position={direction === "rtl" ? "right-bottom" : "left-bottom"}
          // direction={direction}
        >
          <HawaButton variant="outlined">
            <svg
              aria-label="Vertical Three Dots Menu Icon"
              className="rotate-90"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            </svg>
          </HawaButton>
          {/* <div className="flex w-fit rotate-90 cursor-pointer  items-center justify-center rounded  p-2 hover:bg-buttonPrimary-500/50">
            <svg
              aria-label="Vertical Three Dots Menu Icon"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            </svg>
          </div> */}
        </HawaMenu>
        {/* {!props.default && <HawaButton size="small">Make Default</HawaButton>} */}
        {/* <HawaButton tooltip="Delete" size="small">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </HawaButton> */}
      </div>
    </div>
  )
}
