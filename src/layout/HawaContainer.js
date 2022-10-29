import React from "react";

export const HawaContainer = (props) => {
  let containerStyle = "";
  if (props.withDividers) {
    containerStyle =
      "w-full max-w-sm flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4";
  } else {
    containerStyle = "w-full max-w-sm flex flex-col bg-blue-300 rounded-xl p-4";
  }
  return <div className={containerStyle}>{props.children}</div>;
};
