import React, { useState } from "react";
import { HawaPricingCard, HawaPanelTabs, HawaTabs } from "../../elements";
import PropTypes from "prop-types";

const CheckMark = () => (
  <svg
    class="w-5 h-5 text-green-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

const UncheckMark = () => (
  <svg
    class="w-5 h-5 text-red-500"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

export const ComparingPlans = (props) => {
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
    <div id="detailed-pricing" class="overflow-x-auto w-full">
      <div class="overflow-hidden min-w-max">
        <div class="grid grid-cols-4 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <div class="flex items-center"></div>
          {props.plans.map((plan) => (
            <div>{plan.title}</div>
          ))}
        </div>
        {props.plans.map((plan) => {
          return (
            <div class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
              <div class="text-gray-500 dark:text-gray-400">
                Basic components (
                <a href="#" class="text-blue-600 hover:underline">
                  view all
                </a>
                )
              </div>
              <CheckMark />
              <CheckMark />
              <CheckMark />
            </div>
          );
        })}
        <div class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
          <div class="text-gray-500 dark:text-gray-400">
            Application UI (
            <a href="#" class="text-blue-600 hover:underline">
              view demo
            </a>
            )
          </div>
          <UncheckMark />
          <CheckMark />
          <UncheckMark />
        </div>
        <div class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
          <div class="text-gray-500 dark:text-gray-400">
            Marketing UI pre-order
          </div>
          <UncheckMark />
          <CheckMark />
          <UncheckMark />
        </div>
        <div class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
          <div class="text-gray-500 dark:text-gray-400"></div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
          <div>
            <a
              href="#"
              class="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ComparingPlans.propTypes = {
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
