import React, { useState } from "react";

export const HawaTabs = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);
  let activeTabStyle =
    "inline-block py-2 px-4 text-white bg-blue-600 rounded-lg active";
  let inactiveTabStyle =
    "inline-block py-2 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white";

  return (
    <div>
      <ul className="bg-gray-100 w-fit rounded-lg flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {props.options.map((opt) => (
          <li className="mr-2">
            <button
              aria-current="page"
              onClick={() => {
                setSelectedOption(opt.value);
                props.onChangeTab(opt.value);
              }}
              className={
                selectedOption === opt.value ? activeTabStyle : inactiveTabStyle
              }
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
