import React from "react";

export const HawaTooltip = (props) => {
  return (
    <div>
      <div
        id={props.tooltipID}
        role="tooltip"
        // className="inline-block absolute py-2 px-3"
        className="inline-block opacity-0 absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {props.content}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      <div onMouseEnter={() => console.log("hovering")}>{props.children}</div>
    </div>
  );
};
