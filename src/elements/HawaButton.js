import React, { useState } from "react";
import { HawaTooltip } from "./HawaTooltip";
import PropTypes from "prop-types";

export const HawaButton = ({
  tooltip,
  icon,
  iconOnly,
  text,
  isLoading = false,
  loadingText,
  ...props
}) => {
  const [loading, setLoading] = useState(isLoading);
  let iconStyle = "pr-2 flex flex-col justify-center items-center";
  let styles = `${
    isLoading ? "cursor-not-allowed" : "cursor-pointer"
  } m-1 px-2.5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300       font-medium rounded-lg        text-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  if (props.fullWidth) {
    styles =
      "my-1 w-full flex justify-center text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
  if (props.normalWidth) {
    styles =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
  if (iconOnly) {
    iconStyle = "flex flex-col justify-center items-center";
  }
  return (
    <>
      {tooltip ? (
        <HawaTooltip tooltipID={tooltip} content={tooltip}>
          <button
            data-tooltip-target={tooltip}
            className={styles}
            disabled={isLoading}
            {...props}
          >
            {!isLoading ? (
              <>
                {icon ? <div className={iconStyle}>{icon}</div> : null}
                {!iconOnly && text}
              </>
            ) : (
              <div className="flex flex-row gap-x-3">
                <div className="h-5 w-5 animate-spin rounded-full  border-2 border-gray-400 border-t-white text-white"></div>
              </div>
            )}
          </button>
        </HawaTooltip>
      ) : (
        <button
          data-tooltip-target={tooltip}
          className={styles}
          disabled={isLoading}
          {...props}
        >
          {!isLoading ? (
            <>
              {icon ? <div className={iconStyle}>{icon}</div> : null}
              {!iconOnly && text}
            </>
          ) : (
            <div className="flex flex-row gap-x-3">
              <div className="h-5 w-5 animate-spin rounded-full  border-2 border-gray-400 border-t-white text-white"></div>
            </div>
          )}
        </button>
      )}
    </>
  );
};

HawaButton.PropTypes = {
  tooltip: PropTypes.string,
  icon: PropTypes.element,
  iconOnly: PropTypes.bool,
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
};
