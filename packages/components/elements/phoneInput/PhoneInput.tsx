import React, { useState, FC, useRef, useEffect, ChangeEvent } from "react";

import { cn } from "@util/index";

import Countries from "../../countries";
import { HelperText } from "../helperText";
import { Label, LabelProps } from "../label/Label";
import { Select } from "../select/Select";

export type PhoneCodeValue = {
  label: string;
  value?: string;
};
export type PhoneInputProps = {
  preferredCountry?: PhoneCodeValue;
  helperText?: any;
  label?: string;
  labelProps?: LabelProps;
  placeholder?: string;
  handleChange?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  countryCodes?: PhoneCodeValue[];
};
export const PhoneInput: FC<PhoneInputProps> = ({
  labelProps,
  inputProps,
  countryCodes,
  ...props
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState<PhoneCodeValue>(
    props.preferredCountry || { label: "+966" },
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          placeholder={props.preferredCountry?.label}
          options={countryCodes || Countries}
          onChange={(e: PhoneCodeValue) => setCountryCode({ label: e.label, value: e.label })}
          valueKey="label"
          labelKey="label"
          value={{ label: countryCode?.label, value: countryCode?.label }}
          defaultValue={{ label: countryCode?.label, value: countryCode?.label }}
        />

        <div className="hawa-relative hawa-flex hawa-h-fit hawa-w-full hawa-flex-col hawa-justify-center hawa-gap-0">
          <input
            type="tel"
            ref={inputRef}
            id="phone-number"
            value={phoneNumber}
            onChange={handleInputChange}
            placeholder={props.placeholder}
            className={cn(
              "placeholder:hawa-text-muted-foreground hawa-block hawa-h-[40px] hawa-w-full hawa-rounded hawa-rounded-l-none hawa-border hawa-border-l-0 hawa-border-l-transparent hawa-bg-background hawa-p-2 hawa-text-sm hawa-transition-all",
            )}
            {...inputProps}
          />
        </div>
      </div>

      <HelperText helperText={props.helperText} />
    </div>
  );
};
