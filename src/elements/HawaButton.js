import React from "react";
import { HawaTooltip } from "./HawaTooltip";

export const HawaButton = (props) => {
  let iconStyle = "pr-2 flex flex-col justify-center items-center";
  let styles =
    "m-1 px-2.5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300       font-medium rounded-lg        text-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  if (props.fullWidth) {
    styles =
      "my-1 w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
  if (props.iconOnly) {
    iconStyle = "flex flex-col justify-center items-center";
  }
  return (
    <button data-tooltip-target={props.tooltip} type="button" className={styles} {...props}>
      {props.tooltip && (
        <HawaTooltip tooltipID={props.tooltip} content={props.tooltip} />
      )}
      {props.icon ? <div className={iconStyle}>{props.icon}</div> : null}
      {!props.iconOnly && props.text}
    </button>
  );
};
