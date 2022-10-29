import React from "react";
import PropTypes from "prop-types";

export const HawaPricingCard = (props) => {
  let isArabic = props.lang === "ar";
  let cycleTextsArabic = {
    monthly: "شهرياً",
    "3-months": "كل 3 أشهر",
    "6-months": "كل 6 أشهر",
    annually: "سنوياً"
  };
  let cycleTextsEnglish = {
    monthly: "Monthly",
    "3-months": "3 Months",
    "6-months": "6 Months",
    annually: "Annually"
  };
  let currencyMapping = {
    usd: isArabic ? "دولار" : "$",
    sar: isArabic ? "ريال" : "SAR"
  };
  let featuresMapping = isArabic ? props.features_ar : props.features;
  let chipSpacing = isArabic ? { left: 10 } : { right: 10 };
  return (
    <div class="mx-1 p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {isArabic ? props.title_ar : props.title}
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="font-semibold text-sm">
          {" "}
          {currencyMapping[props.currency?.toLowerCase()]}
        </span>
        <span class="text-5xl font-extrabold tracking-tight">
          {props.price}
        </span>
        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /{" "}
          {isArabic
            ? cycleTextsArabic[props.cycleText]
            : cycleTextsEnglish[props.cycleText]}
        </span>
      </div>
      <ul role="list" class="my-7 space-y-5">
        {featuresMapping?.map((feature) => {
          return (
            <li class="flex space-x-3">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {feature}
              </span>
            </li>
          );
        })}

        {/* <li class="flex space-x-3 line-through decoration-gray-500">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500">
              Sketch Files
            </span>
          </li> */}
      </ul>
      <button
        type="button"
        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        {props.buttonText}
      </button>
    </div>

    // <Container
    //   maxWidth="xs"
    //   variant={props.selectedPlan ? "selected-plan-card" : "plan-card"}
    //   style={{ direction: isArabic ? "rtl" : "ltr" }}
    // >
    //     {props.discount && (
    //       <Chip
    //         label={props.discount}
    //         variant="standard"
    //         style={{
    //           maxWidth: "fit-content",
    //           position: "absolute",
    //           bottom: 10,
    //           ...chipSpacing
    //         }}
    //         color="success"
    //       />
    //     )}

    //   <div
    //     style={{ padding: 20, color: props.selectedPlan ? "white" : "black" }}
    //   >
    //
    //   </div>
    //   <button
    //     onClick={props.selectPlan}
    //     variant={props.selectedPlan ? "outlined" : "contained"}
    //     style={{ margin: 20 }}
    //   >
    //     {props.buttonText}
    //   </button>
    // </Container>
  );
};

HawaPricingCard.propTypes = {
  lang: PropTypes.string,
  buttonText: PropTypes.string,
  selectedPlan: PropTypes.string,
  title: PropTypes.string,
  title_ar: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle_ar: PropTypes.string,
  features: PropTypes.array,
  features_ar: PropTypes.array,
  currency: PropTypes.oneOf(["sar", "usd"]),
  cycleText: PropTypes.oneOf(["monthly", "3-months", "6-months", "annually"])
};
