import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const HawaCheckbox = (props) => {
  console.log("props : ", props);
  return (
    <div class="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Default checkbox
      </label>
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
