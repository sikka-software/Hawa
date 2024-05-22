import React, { useEffect, useState, FC } from "react";

import { cn } from "@util/index";

type PinInputTypes = {
  /** Label text to display for the Pin Input */
  label?: string;
  /** Icon element to be displayed next to the Pin Input */
  icon?: JSX.Element;
  /** Number of digits in the Pin Input */
  digits: number;
  /** Width of the Pin Input - either 'normal' or 'full' */
  width?: "normal" | "full";
  /** Function to get the value of pins */
  getPins?: (pins: string[]) => void;
  /** The small red text under the input field to show validation or a hint.   */
  helperText?: any;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const PinInput: FC<PinInputTypes> = ({
  label,
  icon,
  digits,
  width = "normal",
  getPins,
  inputProps,
  ...props
}) => {
  const [pin, setPin] = useState(Array.from(Array(digits)));

  const handleKeyDown = (e: any, index: any) => {
    let backTo = 0;
    if (e.key === "Backspace") {
      e.target.value.length === 0 ? (backTo = index - 1) : (backTo = index);
      const previousInput = document.getElementById(`input-${backTo}`);
      previousInput?.focus();
    }
  };
  useEffect(() => {
    let unfilled = pin.includes(undefined);
    if (!unfilled && getPins) {
      getPins(pin);
    }
  });
  const handleChange = (e: any, index: any) => {
    if (!/^\d*$/.test(e.target.value)) {
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
      return;
    } else {
      const newPin = [...pin];
      newPin[index] = e.target.value;
      setPin(newPin);

      if (e.target.value.length === 1) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        nextInput?.focus();
      } else if (e.target.value.length === 0) {
        const previousInput = document.getElementById(`input-${index - 1}`);
        previousInput?.focus();
      }
    }
  };

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2">
      <div
        className="hawa-flex hawa-w-full hawa-flex-row hawa-justify-center hawa-gap-2"
        dir="ltr"
      >
        {pin.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={value}
            inputMode="numeric"
            id={`input-${index}`}
            pattern="[0-9]*"
            className={cn(
              "hawa-h-10 hawa-rounded hawa-border hawa-bg-background hawa-text-center placeholder:hawa-text-muted-foreground",
              width === "full" ? "hawa-w-full" : "hawa-w-10"
            )}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            {...inputProps}
          />
        ))}
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
