import React, {
  useState,
  FC,
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { cn } from "../util";

type ColorPickerTypes = {
  /** The hex code for the color */
  color?: any;
  /** Fires everytime the color changes */
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  colorPickerClassNames?: string;
  colorTextClassNames?: string;
  colorPickerProps?: InputHTMLAttributes<HTMLInputElement>;
  textInputProps?: InputHTMLAttributes<HTMLInputElement>;
  containerProps?: InputHTMLAttributes<HTMLDivElement>;
};

export const ColorPicker: FC<ColorPickerTypes> = ({
  containerProps,
  colorPickerProps,
  textInputProps,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(props.color);
  return (
    <div
      className={cn(
        `hawa-flex hawa-w-fit hawa-flex-row hawa-rounded hawa-border hawa-p-0`,
        containerProps?.className
      )}
    >
      <div
        style={{ backgroundColor: selectedColor }}
        className="hawa-rounded-bl-lg hawa-rounded-tl-lg hawa-border-r"
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
          className={cn("hawa-opacity-0", props.colorPickerClassNames)}
          {...colorPickerProps}
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
        className={cn(
          "hawa-w-24 hawa-bg-background  hawa-rounded-br-lg hawa-rounded-tr-lg hawa-pl-2 hawa-pr-2",
          props.colorTextClassNames
        )}
        {...textInputProps}
      />
    </div>
  );
};
