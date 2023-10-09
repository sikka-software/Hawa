import React, { useState, FC } from "react";
import Countries from "../countries";
// import Select from "react-select";
import { Input } from "./Input";
import { Select } from "./Select";
type MenuTypes = {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
};
const Menu: FC<MenuTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      className="hawa-absolute hawa-z-50 hawa-w-[190px] hawa-rounded hawa-border hawa-bg-background"
      ref={innerRef}
      {...innerProps}
    >
      {children}
    </div>
  );
};
type OptionTypes = {
  cx: any;
  data: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
};
const Option: FC<OptionTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => (
  <div
    ref={innerRef}
    className="hawa-m-2 hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-justify-between hawa-rounded-inner hawa-p-1 hawa-px-2 hover:hawa-bg-primary hover:hawa-text-primary-foreground"
    {...innerProps}
  >
    <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-1">
      <img className="hawa-h-8 hawa-w-8" src={props.data.image}></img>
      <span className="hawa-text-[10px]">{props.data.country_label}</span>
    </div>
    {children}
  </div>
);

type PhoneInputTypes = {
  preferredCountry?: any;
  helperText?: any;
  label?: string;
  value?: any;
  country?: any;
  handleChange?: any;
};
export const PhoneInput: FC<PhoneInputTypes> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("+966");

  return (
    <div className="hawa-flex hawa-flex-col">
      {props.label && (
        <label className="hawa-mb-2 hawa-block hawa-text-sm hawa-font-medium">
          {props.label}
        </label>
      )}
      <div dir="ltr" className="hawa-flex hawa-flex-row hawa-w-full ">
        <Select
          width="fit"
          controlClassNames="hawa-rounded-r-none"
          containerClassNames="hawa-w-[100px] hawa-p-0 hawa-rounded-r-none"
          options={Countries}
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          defaultValue={props.preferredCountry}
          value={selectedCountry}
          onChange={(newValue: any, action: any) =>
            setSelectedCountry(newValue)
          }
        />
        <Input
          onChange={props.handleChange}
          type="number"
          placeholder="531045453"
          width="auto"
          inputProps={{
            className:
              "hawa-w-full hawa-min-w-full hawa-border-l-0 hawa-border-l-transparent hawa-rounded-l-none ",
          }}
        />

        {props.helperText && (
          <p className="hawa-mb-1   hawa-mt-1 hawa-text-xs hawa-text-red-600 dark:hawa-text-red-500">
            {props.helperText}
          </p>
        )}
      </div>
    </div>
  );
};
