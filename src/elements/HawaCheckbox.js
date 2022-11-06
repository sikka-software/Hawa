import React from "react";

export const HawaCheckbox = (props) => {
  return (
    <div className="flex items-top h-full">
      <input
        type="checkbox"
        value=""
        className="w-4 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
      {(props.label || props.helperText) && (
        <div className="flex flex-col items-stat">
          {props.label && (
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {props.label}
            </label>
          )}
          {props.helperText && (
            <p className="mx-2 mt-1 text-xs text-red-600 dark:text-red-500">
              {props.helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
