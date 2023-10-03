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
    <div className="hawa-mb-3 hawa-flex hawa-flex-col">
      {props.label && (
        <label className="hawa-mb-2 hawa-block hawa-text-sm hawa-font-medium">
          {props.label}
        </label>
      )}
      <div dir="ltr" className="hawa-flex hawa-flex-row ">
        <Select
          // classNames={{
          //   control: () =>
          //     "hawa-w-[64px] hawa-text-right hawa-pr-2 hawa-cursor-pointer hawa-z-10 hawa-border hawa-rounded-l hawa-bg-background",
          //   placeholder: (state: any) =>
          //     "hawa-text-muted-foreground hawa-text-right ",
          //   input: (state: any) =>
          //     "hawa-bg-transparent hawa-cursor-pointer dark:hawa-text-white hawa-p-2 hawa-rounded-l hawa-text-[0.875rem] ",
          //   valueContainer: () =>
          //     "hawa-rounded-l hawa-h-auto hawa-text-[0.875rem]",
          // }}
          // styles={{
          //   placeholder: (base: any) => ({
          //     ...base,
          //     // fontSize: "0.875rem",
          //     // textAlign: "right",
          //   }),
          // }}
          // components={{
          //   Option,
          //   Menu,
          //   DropdownIndicator: () => null,
          //   IndicatorSeparator: () => null,
          // }}
          options={Countries}
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          // placeholder="+966"
          // unstyled
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
          inputProps={{
            className: "hawa-border-l-0 hawa-border-l-transparent",
          }}
          // className="hawa-block hawa-w-full hawa-rounded-r hawa-z-50  hawa-border hawa-bg-background hawa-p-2 hawa-text-sm hawa-text-gray-900 focus:hawa-border-blue-500 focus:hawa-ring-blue-500"
        />
        {/* <input
          onChange={props.handleChange}
          type="number"
          placeholder="531045453"
          className="hawa-block hawa-w-full hawa-rounded-r hawa-z-50  hawa-border hawa-bg-background hawa-p-2 hawa-text-sm hawa-text-gray-900 focus:hawa-border-blue-500 focus:hawa-ring-blue-500"
        /> */}
        {props.helperText && (
          <p className="hawa-mb-1 hawa-mt-1 hawa-text-xs hawa-text-red-600 dark:hawa-text-red-500">
            {props.helperText}
          </p>
        )}
      </div>
    </div>
  );
};
