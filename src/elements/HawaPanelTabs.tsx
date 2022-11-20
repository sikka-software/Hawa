import React, { useState } from "react"

// import PropTypes from "prop-types"

type PanelTabsTypes = {
  defaultValue: any
  options: any
}
export const HawaPanelTabs: React.FunctionComponent<PanelTabsTypes> = (
  props
) => {
  const [value, setValue] = useState(props.defaultValue)
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {props.options.map((option) => {
            return (
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 hover:text-blue-600 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-500"
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
            )
          })}
        </ul>
      </div>
      <div id="myTabContent">
        {props.options.map((option) => {
          return (
            <div
              className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
              id={option.value}
              role="tabpanel"
              aria-labelledby={`${option.value}-tab`}
            >
              {option.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// HawaPanelTabs.propTypes = {
//   lang: PropTypes.string,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string,
//       value: PropTypes.string,
//     })
//   ),
//   defaultValue: PropTypes.string,
//   handleChange: PropTypes.func,
//   location: PropTypes.string,
// }
