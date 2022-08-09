import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "../styles.css";
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
    <PhoneInput
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
      specialLabel={label ?? ""}
      placeholder={placeholder ?? ""}
      inputClass="phoneInput"
      buttonClass="phoneInputButton"
      containerClass="phoneInputContainer"
      // onChange={(phone) => {
      //   setPhone(phone);
      //   handleChange();
      // }}
      // onEnterKeyPress={async (e) => {
      //   e.preventDefault();
      //   await handleSignInWithPhone({ phone: phone });
      // }}

      {...rest}
    />
  );
}

// prop  types
// country = string
// onChange = function
// value = string
// onlyCountries = array
// preferredCountries = array
