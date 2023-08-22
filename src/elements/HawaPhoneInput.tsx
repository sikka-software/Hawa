import React, { useState, FC } from "react"
import Countries from "../countries"
import Select from "react-select"
type MenuTypes = {
  cx: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
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
      // width: 190,
      // borderRadius: "0.5rem",
      className="absolute z-50 w-[190px] rounded border bg-background"
      // "absolute z-10 mt-2 flex  w-full flex-col  justify-start  rounded bg-white p-1 px-1.5 ring-1 ring-blue-200"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  )
}
type OptionTypes = {
  cx: any
  data: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
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
    className="m-2 flex cursor-pointer flex-row items-center justify-between rounded-inner p-1 px-2 hover:bg-primary hover:text-primary-foreground"
    {...innerProps}
  >
    <div className="flex flex-row items-center justify-center gap-1">
      <img className="h-8 w-8" src={props.data.image}></img>
      <span className="text-[10px]">{props.data.country_label}</span>
    </div>
    {children}
  </div>
)

type HawaPhoneInputTypes = {
  preferredCountry?: any
  helperText?: any
  label?: string
  value?: any
  country?: any
  handleChange?: any
}
export const HawaPhoneInput: FC<HawaPhoneInputTypes> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("+966")

  return (
    <div className="mb-3 flex flex-col">
      {props.label && (
        <label className="mb-2 block text-sm font-medium">{props.label}</label>
      )}
      <div dir="ltr" className="flex flex-row ">
        <Select
          classNames={{
            // container: () => "cursor-pointer z-10 border rounded-l bg-background",
            control: () =>
              "w-[64px] text-right pr-2 cursor-pointer z-10 border rounded-l bg-background",
            placeholder: (state) => "text-muted-foreground text-right ",
            input: (state) =>
              "bg-transparent cursor-pointer dark:text-white p-2 rounded-l text-[0.875rem] ",
            valueContainer: () => "rounded-l h-auto text-[0.875rem]",
            // container: () => "bg-orange-400 border-none",
            // control: () => "bg-blue-500",
            // menu: () => "bg-red-900",
          }}
          styles={{
            // input: (base) => ({
            //   ...base,
            //   fontSize: "0.875rem",
            //   "input:focus": {
            //     boxShadow: "none",
            //   },
            //   lineHeight: "1.25rem",
            //   padding: "0.37rem",
            //   paddingLeft: 0,
            //   textAlign: "right",
            //   direction: "ltr",
            // }),
            // singleValue: (base) => ({
            //   ...base,
            //   fontSize: "0.875rem",
            //   // textAlign: "right",
            // }),
            placeholder: (base) => ({
              ...base,
              fontSize: "0.875rem",
              textAlign: "right",
            }),
            // control: (base) => ({
            //   ...base,
            //   width: 64,
            //   borderRadius: "0.5rem",
            //   borderTopRightRadius: 0,
            //   borderBottomRightRadius: 0,
            // }),
            // menu: (base) => ({
            //   ...base,
            //   width: 190,
            //   borderRadius: "0.5rem",
            // }),
          }}
          components={{
            Option,
            Menu,
            // SelectContainer,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            // Placeholder: () => <div className="bg-red-400">test</div>,
            // SelectContainer:
            //   () =>
            //   ({ innerProps, innerRef }) =>
            //     <div ref={innerRef} {...innerProps} />,
          }}
          // className="bg-red-500"

          options={Countries}
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          placeholder="+966"
          unstyled
          defaultValue={props.preferredCountry}
          value={selectedCountry}
          onChange={(newValue, action) => setSelectedCountry(newValue)}
        />
        <input
          onChange={props.handleChange}
          type="number"
          placeholder="531045453"
          // text-gray-900 dark:text-gray-300
          // dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          className="block w-full rounded-r  border bg-background p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"

          // className="block  w-full  appearance-none rounded rounded-l-none border border-l-0
          //   bg-background p-2 text-[0.875rem] text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white "
        />
        {props.helperText && (
          <p className="mb-1 mt-1 text-xs text-red-600 dark:text-red-500">
            {props.helperText}
          </p>
        )}
      </div>
    </div>
  )
}
