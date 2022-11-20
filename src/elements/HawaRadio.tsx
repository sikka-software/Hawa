import React from "react"

type RadioTypes = {}
export const HawaRadio: React.FunctionComponent<RadioTypes> = (props) => {
  return (
    <div>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        {props.options.map((option) => {
          return (
            <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option.label}
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
