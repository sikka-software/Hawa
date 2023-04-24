import React, { useState } from "react"
import { HawaPricingCard, HawaTabs } from "../../elements"

// TODO: make lang into direction rtl | ltr

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
  onCycleChange?: (e) => void
  onCurrencyChange?: (e) => void
  direction?: "rtl" | "ltr"
}
export const PricingPlans: React.FunctionComponent<PricingPlansTypes> = (
  props
) => {
  const [currentCurrency, setCurrentCurrency] = useState("SAR")
  const [currentCycle, setCurrentCycle] = useState("month")

  return (
    <div>
      <div className="mb-2 flex w-full justify-between">
        <HawaTabs
          pill
          defaultValue={currentCycle}
          options={props.billingCycles}
          onChangeTab={(e: any) => {
            setCurrentCycle(e.label)
            props.onCycleChange(e)
          }}
        />
        <HawaTabs
          pill
          defaultValue={currentCurrency}
          options={props.currencies}
          onChangeTab={(e: any) => {
            setCurrentCurrency(e.label)
            props.onCurrencyChange(e)
          }}
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
                currencyText: currentCurrency,
                cycleText: currentCycle,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
