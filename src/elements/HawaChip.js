import React from "react";
import PropTypes from "prop-types";

export const HawaChip = (props) => {
  return (
    <span className="mr-2 rounded h-fit bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
      {props.label}
    </span>
  );
};

HawaChip.propTypes = {
  label: PropTypes.string
};
