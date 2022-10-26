import React from "react";

export const HawaButton = (props) => {
  let styles =
    "text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  if (props.fullWidth) {
    styles =
      "mt-2 w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
  return (
    <button type="button" className={styles} {...props}>
      {props.icon ? <div class="mr-2 -ml-1 w-5 h-5">{props.icon}</div> : null}

      {props.children}
    </button>
  );
};
