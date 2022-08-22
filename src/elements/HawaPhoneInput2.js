import { Input } from "@mui/material";
import { height } from "@mui/system";
import { useState } from "react";
import Countries from "../../countries.json";

export default function HawaPhoneInput2({ preferredCountry }) {
  const [code, setCode] = useState(preferredCountry.toUpperCase() ?? "");
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
      <div style={{ maxWidth: "50px", height: "100%" }}>
        <select
          style={{
            width: 38,
            height: 40,
            scale: 1.2,
            borderRight: "none",
            borderTop: "none",
            borderTopLeftRadius: 10
          }}
          onChange={(e) => {
            setCode(e.target.value);
            setTel(
              Countries.find((country) => country.code == e.target.value)
                .dial_code
            );
          }}
          defaultValue={code}
          value={code}
        >
          {Countries.map((country) => (
            <option
              value={country.code}
              dangerouslySetInnerHTML={{
                __html: country.unicode + " " + country.name
              }}
              key={country.name + "_" + country.code}
            ></option>
          ))}
        </select>
      </div>

      <Input
        type="tel"
        style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
        onChange={(e) => handleChangePhone(e.target.value)}
        value={tel}
      />
    </div>
  );
}
