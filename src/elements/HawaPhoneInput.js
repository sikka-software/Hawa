import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useTheme } from "@mui/system";
import { InputLabel } from "@mui/material";

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

  const theme = useTheme();
  return (
    <div>
      {label && <InputLabel>{props.label}</InputLabel>}
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
        specialLabel={""}
        placeholder={placeholder ?? ""}
        inputStyle={{
          width: "100%",
          borderRadius: theme.allBorderRadius
        }}
        {...rest}
      />
    </div>
  );
}
