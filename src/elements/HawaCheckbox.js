import React from "react";

export const HawaCheckbox = (props) => {
  return (
    <div className="flex items-center h-full p-2">
      <input
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {props.label && (
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.label}
        </label>
      )}
    </div>

    // <React.Fragment>
    //   <FormControlLabel
    //     label={props.label}
    //     control={
    //       <Checkbox
    //         style={{ color: props.color || null }}
    //         defaultChecked={props.defaultValue}
    //       />
    //     }
    //   />
    // </React.Fragment>
  );
};
