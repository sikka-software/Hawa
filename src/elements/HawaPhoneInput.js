import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'

export default function HawaPhoneInput(props) {
  const {
    country,
    onChange,
    value,
    onlyContries,
    preferredCountries,
    inputProps,
    required,
    name,
    label,
    ...rest
  } = props;
  return (
    <PhoneInput
      country={country ?? null}
      onChange={(e) => onchange(e)}
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
      {...rest}
    />
  );
}
