import React from "react";
import "flowbite";

export const HawaTooltip = (props) => {
  return (
    <div
      id={props.tooltipID}
      role="tooltip"
      className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
    >
      {props.content}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};
