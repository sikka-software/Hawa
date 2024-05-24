import React, { useState, FC, useRef, useEffect, ChangeEvent } from "react";

import { cn } from "@util/index";

import Countries from "../../countries";
import { HelperText } from "../helperText";
import { Label, LabelProps } from "../label/Label";
import { Select } from "../select/Select";

export type PhoneInputProps = {
  preferredCountry?: { label: string };
  helperText?: any;
  label?: string;
  labelProps?: LabelProps;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  countryCodes?: { label: string }[];
};
export const PhoneInput: FC<PhoneInputProps> = ({
  labelProps,
  inputProps,
  countryCodes,
  ...props
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(props.preferredCountry);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("test e ", e.target.value);
    const validChars = /^[0-9-()]+$/;
    const input = e.target.value;

    // If the input is empty or matches the regex, update the state
    if (input === "" || validChars.test(input)) {
      setPhoneNumber(input);
    }
    if (props.handleChange) {
      // console.log("label is", countryCode?.label);
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
          options={countryCodes || Countries}
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
              "placeholder:hawa-text-muted-foreground hawa-block hawa-h-[40px] hawa-w-full hawa-rounded hawa-rounded-l-none hawa-border hawa-border-l-0 hawa-border-l-transparent  hawa-bg-background hawa-p-2 hawa-text-sm hawa-transition-all",
            )}
            {...inputProps}
          />
        </div>
      </div>

      <HelperText helperText={props.helperText} />
    </div>
  );
};
