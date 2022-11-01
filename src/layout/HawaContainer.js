import React from "react";

export const HawaContainer = (props) => {
  let containerStyle =
    "w-full max-w-sm flex flex-col bg-primary-300 dark:bg-gray-600 rounded-xl p-4";

  return <div className={containerStyle}>{props.children}</div>;
};
