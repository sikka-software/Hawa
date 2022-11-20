import React from "react";
import PropTypes from "prop-types";

export const HawaRange = ({
  value,
  handleChange,
  startElement,
  endElement,
  label,
  ...props
}) => {
  const [rangeValue, setRangeValue] = React.useState(value);

  return (
    <div {...props}>
      {label && (
        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="flex flex-row justify-center items-center w-fit">
        <div className="mr-2">{startElement}</div>{" "}
        <input
          id="default-range"
          type="range"
          value={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
            handleChange(e);
          }}
          className="w-fit h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="ml-2">{endElement}</div>{" "}
      </div>
    </div>
  );
};
HawaRange.propTypes = {
  /**
   * The element at the side where the range value is 0
   * Can be an icon
   */
  startElement: PropTypes.element,
  value: PropTypes.number,
  /**
   * The element at the side where the range value is 100
   */
  endElement: PropTypes.element,
  handleChange: PropTypes.func,
  label : PropTypes.string
};
