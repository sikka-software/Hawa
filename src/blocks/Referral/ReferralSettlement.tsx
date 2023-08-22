import React, { FC } from "react"
import {
  HawaAlert,
  HawaChip,
  HawaMenu,
  HawaSelect,
  HawaTextField,
} from "../../elements"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"

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
          <Button className="mt-6 w-full">Add Bank Account</Button>
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
          <HawaChip
            label="Default"
            size="small"
            // disabled
            // variant="outlined"
            // size="xs"
            // margins="none"
          />
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
          <Button variant="outline" size="icon">
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
          </Button>
        </HawaMenu>
      </div>
    </div>
  )
}
