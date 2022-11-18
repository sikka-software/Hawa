import React, { useState } from "react";
import { HawaPricingCard, HawaTabs } from "../../elements";
import PropTypes from "prop-types";

export const PricingPlans = (props) => {
  const [currentCurrency, setCurrentCurrency] = useState("sar");
  const [currentCycle, setCurrentCycle] = useState("monthly");
  let cycleOptions = [
    { label: `Monthly`, value: `monthly` },
    { label: `3 Months`, value: `3-months` },
    { label: `6 Months`, value: `6-months` },
    { label: `Annually`, value: `annually` }
  ];
  let currencyOptions = [
    { label: `USD`, value: `usd` },
    { label: `SAR`, value: `sar` }
  ];
  let activeTabStyle =
    "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active";
  let inactiveTabStyle =
    "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white";
  return (
    <div>
      <div className="mb-2 flex w-full justify-between">
        <HawaTabs
          defaultValue={currentCycle}
          options={cycleOptions}
          onChangeTab={(e) => setCurrentCycle(e)}
        />
        <HawaTabs
          defaultValue={currentCurrency}
          options={currencyOptions}
          onChangeTab={(e) => setCurrentCurrency(e)}
        />
      </div>

      <div className="flex flex-row justify-between">
        {props.plans.map((plan) => {
          return (
            <HawaPricingCard
              size="large"
              lang={props.lang}
              {...plan}
              currency={currentCurrency}
              cycleText={currentCycle}
            />
          );
        })}
      </div>
    </div>
  );
};

PricingPlans.propTypes = {
  /**
   * An array of the pricing plans
   */
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      title_ar: PropTypes.string,
      subtitle: PropTypes.string,
      subtitle_ar: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
      cycleText: PropTypes.string,
      buttonText: PropTypes.string,
      features: PropTypes.array,
      features_ar: PropTypes.array,
      selectedPlan: PropTypes.bool
    })
  ),
  lang: PropTypes.string
};
