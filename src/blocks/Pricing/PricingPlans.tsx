import React, { useState } from "react"
import { HawaPricingCard, HawaTabs } from "../../elements"

type PricingPlansTypes = {
  plans: any
  // plans: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string,
  //     title_ar: PropTypes.string,
  //     subtitle: PropTypes.string,
  //     subtitle_ar: PropTypes.string,
  //     price: PropTypes.number,
  //     currency: PropTypes.string,
  //     cycleText: PropTypes.string,
  //     buttonText: PropTypes.string,
  //     features: PropTypes.array,
  //     features_ar: PropTypes.array,
  //     selectedPlan: PropTypes.bool,
  //   })
  // ),
  lang: any
}
export const PricingPlans: React.FunctionComponent<PricingPlansTypes> = (
  props
) => {
  const [currentCurrency, setCurrentCurrency] = useState("SAR")
  const [currentCycle, setCurrentCycle] = useState("month")
  let cycleOptions = [
    { label: `Monthly`, value: `month` },
    // { label: `3 Months`, value: `3-months` },
    // { label: `6 Months`, value: `6-months` },
    { label: `Annually`, value: `annually` },
  ]
  let currencyOptions = [
    { label: `USD`, value: `usd` },
    { label: `SAR`, value: `sar` },
  ]
  let activeTabStyle =
    "inline-block py-3 px-4 text-white bg-blue-600 rounded active"
  let inactiveTabStyle =
    "inline-block py-3 px-4 rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
  return (
    <div>
      <div className="mb-2 flex w-full justify-between">
        <HawaTabs
          pill
          defaultValue={currentCycle}
          options={cycleOptions}
          onChangeTab={(e: any) => setCurrentCycle(e.label)}
        />
        <HawaTabs
          pill
          defaultValue={currentCurrency}
          options={currencyOptions}
          onChangeTab={(e: any) => setCurrentCurrency(e.label)}
        />
      </div>

      <div className="flex flex-row justify-between">
        {props.plans.map((plan: any) => {
          return (
            <HawaPricingCard
              // size="large"
              // features={plan.features}
              lang={props.lang}
              {...plan}
              texts={{
                buttonText: "Upgrade",
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
