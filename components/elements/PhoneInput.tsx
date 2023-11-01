import React, { useState, FC, useRef, useEffect } from "react";
import Countries from "../countries";
import { Select } from "./Select";
import { cn } from "../util";
import { Label } from "./Label";

type PhoneInputTypes = {
  preferredCountry?: { label: string };
  helperText?: any;
  label?: string;
  handleChange?: (value: string) => void;
};
export const PhoneInput: FC<PhoneInputTypes> = (props) => {
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
    // setPhoneNumber(e.target.value);
    if (props.handleChange) {
      props.handleChange(`${countryCode?.label}-${e.target.value}`);
    } else {
      console.log("handleChange prop was not provided in <PhoneInput/>");
    }
  };

  return (
    <div className="hawa-flex hawa-flex-col hawa-w-full hawa-gap-2 hawa-h-fit">
      {props.label && <Label>{props.label}</Label>}

      <div dir="ltr" className="hawa-flex hawa-flex-row hawa-w-full">
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

        {/* TODO: attempt to use this one */}
        {/* <Combobox data={Countries} valueKey={"label"} width="fit" /> */}

        <div className="hawa-flex hawa-h-fit hawa-relative hawa-flex-col  hawa-justify-center hawa-w-full hawa-gap-0">
          <input
            ref={inputRef}
            id="phone-number"
            className={cn(
              "hawa-block hawa-h-[40px] hawa-rounded hawa-border hawa-transition-all hawa-bg-background hawa-p-2 hawa-text-sm  hawa-border-l-0 hawa-border-l-transparent hawa-rounded-l-none hawa-w-full"
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
          "hawa-my-0 hawa-text-xs hawa-text-helper-color hawa-transition-all hawa-text-start",
          props.helperText
            ? "hawa-opacity-100 hawa-h-4"
            : "hawa-opacity-0 hawa-h-0"
        )}
      >
        {props.helperText}
      </p>
    </div>
  );
};
