import React, { FC, useState } from "react"
import { HawaRadio } from "../../elements"
import clsx from "clsx"

type HorizontalPricingTypes = {
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
export const HorizontalPricing: FC<HorizontalPricingTypes> = (props) => {
  const [selectedCard, setSelectedCard] = useState(null)
  let data = [
    { title: "basic", price: "$49", cycle: "/mo" },
    { title: "business", price: "$99", cycle: "/mo" },
    { title: "enterprise", price: "$149", cycle: "/mo" },
  ]
  return (
    <div className="z-10 w-full max-w-screen-sm">
      <div className="max-w-2xl ">
        <div className="flex flex-row justify-between">
          <HawaRadio
            design="tabs"
            options={props.currencies}
            defaultValue={props.currentCurrency}
          />
          <HawaRadio
            design="tabs"
            options={props.billingCycles}
            defaultValue={props.currentCycle}
          />
        </div>
        {data.map((d) => (
          <label htmlFor={d.title} onClick={() => setSelectedCard(d.title)}>
            <input
              type="radio"
              name="radio"
              id={d.title}
              className="peer appearance-none"
            />
            <div
              className={clsx(
                selectedCard === d.title ? "peer-checked:border-blue-500" : "",
                "peer flex cursor-pointer items-center justify-between rounded-xl border-2 border-transparent bg-white px-5 py-4 shadow  peer-checked:[&_.active]:block peer-checked:[&_.default]:hidden"
              )}
            >
              <div className="peer flex items-center gap-4">
                <CheckIcons />
                <CardText
                  title="Enterprise"
                  subtitle="For startups and new businesses"
                />
              </div>

              <CardPrice amount={d.price} cycle={d.cycle} />
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

const CheckIcons = () => (
  <>
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="default h-8 w-8 text-neutral-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="active hidden h-8 w-8 text-blue-500"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      />
    </svg>
  </>
)
const CardText = (props) => (
  <div className="peer flex flex-col items-start">
    <h2 className="font-medium text-neutral-700 sm:text-xl">{props.title}</h2>
    <p className="text-sm text-neutral-500">{props.subtitle} </p>
  </div>
)
const CardPrice = (props) => (
  <h2 className="peer text-xl font-semibold text-neutral-900 sm:text-2xl">
    {props.amount}
    <span className="text-base font-medium text-neutral-400">
      {props.cycle}
    </span>
  </h2>
)
