import React, { useState, FC, useRef, useEffect } from "react";

import { cn } from "@util/index";

import Countries from "../../countries";
import { Label, LabelProps } from "../label/Label";
import { Select } from "../select/Select";

type PhoneInputTypes = {
  preferredCountry?: { label: string };
  helperText?: any;
  label?: string;
  labelProps?: LabelProps;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export const PhoneInput: FC<PhoneInputTypes> = ({
  labelProps,
  inputProps,
  ...props
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(props.preferredCountry);
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current?.focus(); //Set focus on the <input/> element
  //   }
  // }, []);

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
          phoneCode
          width="fit"
          hideHelperText
          hideIndicator
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          placeholder="Code"
          options={Countries}
          onChange={setCountryCode}
          value={countryCode?.label}
          defaultValue={props.preferredCountry}
        />

        <div className="hawa-relative hawa-flex hawa-h-fit hawa-w-full  hawa-flex-col hawa-justify-center hawa-gap-0">
          <input
            type="tel"
            ref={inputRef}
            id="phone-number"
            value={phoneNumber}
            onChange={handleInputChange}
            placeholder={props.placeholder}
            className={cn(
              "hawa-block hawa-h-[40px] hawa-w-full hawa-rounded hawa-rounded-l-none hawa-border hawa-border-l-0 hawa-border-l-transparent  hawa-bg-background hawa-p-2 hawa-text-sm hawa-transition-all",
            )}
            {...inputProps}
          />
        </div>
      </div>

      <p
        className={cn(
          "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
          props.helperText
            ? "hawa-h-4 hawa-opacity-100"
            : "hawa-h-0 hawa-opacity-0",
        )}
      >
        {props.helperText}
      </p>
    </div>
  );
};
