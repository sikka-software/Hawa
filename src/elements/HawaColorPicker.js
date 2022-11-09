import React, { useState } from "react";
import PropTypes from "prop-types";

export const HawaColorPicker = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.color);
  return (
    <div className={`flex w-fit flex-row p-0`}>
      <div
        style={{ backgroundColor: selectedColor }}
        className="rounded-tl-lg rounded-bl-lg"
      >
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            props.handleChange(e.target.value);
          }}
          className="opacity-0"
        />
      </div>

      <input
        type="text"
        value={selectedColor}
        className="w-24 rounded-tr-lg rounded-br-lg pr-2 pl-2"
      />
    </div>
  );
};

HawaColorPicker.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func
};
