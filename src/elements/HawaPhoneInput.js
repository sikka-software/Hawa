// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/material.css";

export default function HawaPhoneInput(props) {
  const {
    country,
    onChange,
    value,
    onlyContries,
    preferredCountries,
    inputProps,
    required,
    placeholder,
    name,
    label,
    // onChange,
    ...rest
  } = props;

  return (
    <div>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.label}
      </label>
      <input
        {...props}
        className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {/* {label && <InputLabel>{props.label}</InputLabel>} */}
      {/* <PhoneInput
        country={country ?? null}
        onChange={(e) => onChange(e)}
        value={value ?? value}
        onlyCountries={onlyContries?.length > 0 ? onlyContries : []}
        preferredCountries={
          preferredCountries?.length > 0 ? preferredCountries : []
        }
        inputProps={{
          required: required ?? false,
          name: name ?? null
        }}
        specialLabel={""}
        placeholder={placeholder ?? ""}
        inputStyle={{
          width: "100%"
        }}
        // inputClass="bg-red-900"
        // inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        dropdownClass="bg-blue-900"
        buttonClass="bg-green-900"
        // containerClass="bg-orange-900"
        // containerClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
      /> */}
    </div>
  );
}
