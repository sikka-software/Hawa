import React, { FC } from "react"
import { HawaPricingCard, HawaRadio } from "../../elements"

type PricingPlansTypes = {
  plans: [
    {
      direction: "rtl" | "ltr"
      features: [{ included: boolean; text: string }]
      price: number
      texts: {
        title: string
        subtitle: string
        buttonText: string
        cycleText: string
        currencyText: string
      }
      size: "small" | "medium" | "large"
    }
  ]
  currencies: [
    {
      label: string
      value: string
    }
  ]
  billingCycles: [
    {
      label: string
      value: string
    }
  ]
  onPlanClicked?: (e) => void
  currentCycle: {
    label: string
    value: string
  }
  currentCurrency: {
    label: string
    value: string
  }
  onCycleChange?: (e) => void
  onCurrencyChange?: (e) => void
  direction?: "rtl" | "ltr"
}
export const PricingPlans: FC<PricingPlansTypes> = (props) => {
  return (
    <div>
      <div className="mb-2 flex w-full justify-between">
        <HawaRadio
          design="tabs"
          defaultValue={props.currentCycle}
          options={props.billingCycles}
          onChangeTab={(e: any) => props.onCycleChange(e)}
        />
        <HawaRadio
          design="tabs"
          defaultValue={props.currentCurrency}
          options={props.currencies}
          onChangeTab={(e: any) => props.onCurrencyChange(e)}
        />
      </div>

      <div className="flex flex-row justify-between">
        {props.plans.map((plan: any, index) => {
          return (
            <HawaPricingCard
              key={index}
              onPlanClicked={() => props.onPlanClicked(plan)}
              {...plan}
              texts={{
                ...plan.texts,
                currencyText: props.currentCurrency,
                cycleText: props.currentCycle,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
