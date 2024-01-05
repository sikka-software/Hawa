import React, { useState, FC, useRef, useEffect } from "react";

import Countries from "../../countries";
import { cn } from "../../util";
import { Label, LabelProps } from "../label/Label";
import { Select } from "../select/Select";

type PhoneInputTypes = {
  preferredCountry?: { label: string };
  helperText?: any;
  label?: string;
  labelProps?: LabelProps;
  handleChange?: (value: string) => void;
};
export const PhoneInput: FC<PhoneInputTypes> = ({ labelProps, ...props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(props.preferredCountry);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus(); //Set focus on the <input/> element
    }
  }, []);

  const handleInputChange = (e: any) => {
    const validChars = /^[0-9-()]+$/;
    const input = e.target.value;

    // If the input is empty or matches the regex, update the state
    if (input === "" || validChars.test(input)) {
      setPhoneNumber(input);
    }
    if (props.handleChange) {
      props.handleChange(`${countryCode?.label}-${e.target.value}`);
    } else {
      console.log("handleChange prop was not provided in <PhoneInput/>");
    }
  };

  return (
    <div className="hawa-flex hawa-h-fit hawa-w-full hawa-flex-col hawa-gap-2">
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      <div dir="ltr" className="hawa-flex hawa-w-full hawa-flex-row">
        <Select
          width="fit"
          hideHelperText
          phoneCode
          hideIndicator
          placeholder="Code"
          options={Countries}
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          defaultValue={props.preferredCountry}
          value={countryCode?.label}
          onChange={setCountryCode}
        />

        <div className="hawa-relative hawa-flex hawa-h-fit hawa-w-full  hawa-flex-col hawa-justify-center hawa-gap-0">
          <input
            ref={inputRef}
            id="phone-number"
            className={cn(
              "hawa-block hawa-h-[40px] hawa-w-full hawa-rounded hawa-rounded-l-none hawa-border hawa-border-l-0 hawa-border-l-transparent  hawa-bg-background hawa-p-2 hawa-text-sm hawa-transition-all"
            )}
            onChange={handleInputChange}
            value={phoneNumber}
            type="tel"
            placeholder="531045453"
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
