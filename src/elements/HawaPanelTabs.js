import React, { useState } from "react";

import PropTypes from "prop-types";

export const HawaPanelTabs = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {props.options.map((option) => {
            return (
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                  id={`${option.value}-tab`}
                  data-tabs-target={`#${option.value}`}
                  type="button"
                  role="tab"
                  aria-controls={option.value}
                  aria-selected="true"
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="myTabContent">
        {props.options.map((option) => {
          return (
            <div
              className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id={option.value}
              role="tabpanel"
              aria-labelledby={`${option.value}-tab`}
            >
              {option.content}
            </div>
          );
        })}
      </div>
    </div>
    // <Container variant={props.location || "panelTabs"}>
    //   {props.options.map((singleOption, i) => {
    //     return (
    //       <button
    //         key={i}
    //         onClick={() => {
    //           props.handleChange(singleOption.value);
    //           setValue(singleOption.value);
    //         }}
    //         fullWidth
    //         variant={
    //           value?.toLowerCase() === singleOption.value?.toLowerCase()
    //             ? "selected"
    //             : "unselected"
    //         }
    //       >
    //         {singleOption.label}
    //       </button>
    //     );
    //   })}
    // </Container>
  );
};

HawaPanelTabs.propTypes = {
  lang: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  location: PropTypes.string
};
