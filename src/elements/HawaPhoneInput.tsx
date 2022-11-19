import { useState } from "react"
import Countries from "../../countries"
import Select from "react-select"

type OptionTypes = {
  cx: any
  data: any
  children: any
  getStyles: any
  innerProps: any
  innerRef: any
}
const Option: React.FunctionComponent<OptionTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => (
  <div
    ref={innerRef}
    className="m-2 flex flex-row items-center justify-between rounded-lg p-1 px-3 hover:bg-blue-200"
    {...innerProps}
  >
    <img className="h-8 w-8" src={props.data.image}></img>
    {children}
  </div>
)

type HawaPhoneInputTypes = {
  preferredCountry: any
  helperText: any
  label: string
}
export const HawaPhoneInput: React.FunctionComponent<HawaPhoneInputTypes> = ({
  preferredCountry,
  helperText,
  ...props
}) => {
  const [code, setCode] = useState(preferredCountry ?? "")
  const [selectedCountry, setSelectedCountry] = useState("+966")
  const [tel, setTel] = useState("")
  // const handleChangePhone = (phone) => {
  //   if (phone.length == 0) {
  //     setTel("")
  //     setCode("")
  //     return
  //   }
  //   if (!phone.startsWith("+")) phone = "+".concat(phone)
  //   if (phone.length >= 5) {
  //     setTel(phone)
  //     return
  //   }
  //   let findDialCode = Countries.find((country) => country.dial_code == phone)
  //   if (findDialCode != undefined && findDialCode != null) {
  //     setCode(findDialCode.code)
  //   }
  //   setTel(phone)
  // }

  return (
    <div className="mb-3 flex flex-col">
      {props.label && (
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.label}
        </label>
      )}
      <div className="flex flex-row">
        <Select
          styles={{
            input: (base) => ({
              ...base,
              fontSize: "0.875rem",
              "input:focus": {
                boxShadow: "none",
              },
              lineHeight: "1.25rem",
              padding: "0.37rem",
            }),
            singleValue: (base) => ({
              ...base,
              fontSize: "0.875rem",
              textAlign: "right",
            }),
            control: (base) => ({
              ...base,
              width: 64,
              borderRadius: "0.5rem",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }),
            menu: (base) => ({
              ...base,
              width: 190,
              borderRadius: "0.5rem",
            }),
          }}
          components={{
            Option,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          options={Countries}
          // isCreatable={false}
          isMulti={false}
          isSearchable={true}
          isClearable={false}
          placeholder="+966"
          defaultValue={Countries[0]}
          onInputChange={() => console.log("changed to")}
          onChange={(newValue, action) => {
            console.log("test n", newValue)
            setSelectedCountry(newValue)
          }}
        />
        <input
          type="number"
          className="block w-full appearance-none rounded-lg rounded-l-none border border-l-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        {helperText && (
          <p className="mb-1 mt-1 text-xs text-red-600 dark:text-red-500">
            {helperText}
          </p>
        )}
      </div>
    </div>
  )
}
