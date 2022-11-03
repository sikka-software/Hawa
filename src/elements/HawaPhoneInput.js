import { useState } from "react";
import Countries from "../../countries";
import Select from "react-select";
const Option = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => (
  <div
    ref={innerRef}
    className="m-2 p-1 px-3 rounded-lg flex flex-row items-center justify-between hover:bg-blue-200"
    {...innerProps}
  >
    <img className="h-8 w-8" src={props.data.image}></img>
    {children}
  </div>
);

export const HawaPhoneInput = ({ preferredCountry }) => {
  const [code, setCode] = useState(preferredCountry ?? "");
  const [selectedCountry, setSelectedCountry] = useState("+966");
  const [tel, setTel] = useState("");
  const handleChangePhone = (phone) => {
    if (phone.length == 0) {
      setTel("");
      setCode("");
      return;
    }
    if (!phone.startsWith("+")) phone = "+".concat(phone);
    if (phone.length >= 5) {
      setTel(phone);
      return;
    }
    let findDialCode = Countries.find((country) => country.dial_code == phone);
    if (findDialCode != undefined && findDialCode != null) {
      setCode(findDialCode.code);
    }
    setTel(phone);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Select
        styles={{
          input: (base) => ({
            ...base,
            fontSize: "0.875rem",
            "input:focus": {
              boxShadow: "none"
            },
            lineHeight: "1.25rem",
            padding: "0.37rem"
          }),
          singleValue: (base) => ({
            ...base,
            fontSize: "0.875rem",
            textAlign: "right"
          }),
          control: (base) => ({
            ...base,
            width: 64,
            borderRadius: "0.5rem",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }),
          menu: (base) => ({
            ...base,
            width: 190,
            borderRadius: "0.5rem"
          })
        }}
        components={{
          Option,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }}
        options={Countries}
        isCreatable={false}
        isMulti={false}
        isSearchable={true}
        isClearable={false}
        placeholder="+966"
        defaultValue={Countries[0]}
        onInputChange={() => console.log("changed to")}
        onChange={(newValue, action) => {
          console.log("test n", newValue);
          setSelectedCountry(newValue);
        }}
      />
      <input
        type="number"
        className="bg-gray-50 appearance-none border rounded-l-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-l-0"
      />
    </div>
  );
};
