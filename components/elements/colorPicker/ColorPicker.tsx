import React, {
  useState,
  FC,
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  FormEvent
} from "react";

import { cn } from "../../../packages/components/util";
import { Label, LabelProps } from "../label";

type ColorPickerTypes = {
  label?: string;
  id?: string;
  // hint?: string;
  // hintSide?: PositionType;
  // isRequired?: boolean;
  labelProps?: LabelProps;
  helperText?: string;
  /** The hex code for the color */
  color?: any;
  /** Fires everytime the color changes */
  handleChange?: (
    e: ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>
  ) => void;
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
  labelProps,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(props.color);

  useEffect(() => {
    if (selectedColor && selectedColor[0] !== "#") {
      setSelectedColor(`#${selectedColor}`);
    }
  }, [selectedColor]);

  const handleTextInputChange = (e: FormEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    let inputColor = inputElement.value;

    if (inputColor[0] !== "#") {
      // Prepend a hash (#) to the input value
      inputColor = `#${inputColor}`;
      // inputElement.value = inputColor;
    }
    // Remove any non-alphanumeric characters except the hash (#)
    const sanitizedInput = inputColor.replace(/[^a-fA-F0-9#]/g, "");

    setSelectedColor(sanitizedInput);

    if (props.handleChange) {
      props.handleChange(e); // Pass the original event
    }
  };

  return (
    <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-2">
      {props.label && <Label {...labelProps}>{props.label}</Label>}

      <div dir="ltr" className="hawa-flex hawa-w-full hawa-flex-row">
        <div
          style={{ height: 40, backgroundColor: selectedColor }}
          className="hawa-rounded-bl-lg hawa-rounded-tl-lg hawa-border"
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
            className={cn(
              "hawa-mt-0 hawa-h-[38px] hawa-opacity-0",
              props.colorPickerClassNames
            )}
            {...colorPickerProps}
          />
        </div>
        <div className="hawa-relative hawa-flex hawa-max-h-fit hawa-w-full hawa-flex-col hawa-justify-center hawa-gap-0">
          <input
            maxLength={7}
            type="text"
            onInput={handleTextInputChange}
            value={selectedColor}
            className={cn(
              "hawa-block hawa-h-[40px] hawa-w-24 hawa-rounded hawa-rounded-l-none hawa-border hawa-border-l-0 hawa-border-l-transparent  hawa-bg-background hawa-p-2 hawa-text-sm hawa-transition-all"
            )}
            {...textInputProps}
          />
        </div>
      </div>

      <p
        className={cn(
          "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
          props.helperText
            ? "hawa-h-4 hawa-opacity-100"
            : "hawa-h-0 hawa-opacity-0"
        )}
      >
        {props.helperText}
      </p>
    </div>
  );
};
