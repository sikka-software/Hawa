import React, { useState, FC, ChangeEvent } from "react";

type ColorPickerTypes = {
  /** The hex code for the color */
  color?: any;
  /** Fires everytime the color changes */
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ColorPicker: FC<ColorPickerTypes> = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.color);
  return (
    <div
      className={`hawa-flex hawa-w-fit hawa-flex-row hawa-rounded hawa-border hawa-p-0`}
    >
      <div
        style={{ backgroundColor: selectedColor }}
        className="hawa-rounded-bl-lg hawa-rounded-tl-lg"
      >
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            if (props.handleChange) {
              props.handleChange(e);
            }
          }}
          className="hawa-opacity-0"
        />
      </div>

      <input
        type="text"
        onChange={(e) => {
          setSelectedColor(e.target.value);
          if (props.handleChange) {
            props.handleChange(e);
          }
        }}
        value={selectedColor}
        className="hawa-w-24 hawa-bg-background  hawa-rounded-br-lg hawa-rounded-tr-lg hawa-pl-2 hawa-pr-2"
      />
    </div>
  );
};
