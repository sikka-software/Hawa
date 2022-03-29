import { useTheme } from "@mui/system";
import React from "react";

export const HawaTextArea = (props) => {
  const theme = useTheme();
  console.log("theme is ", theme);
  return (
    <label>
      {/* {inputLabel ? <StyledInputLabel label={inputLabel} /> : null} */}
      <textarea
        style={{
          color: "black",
          backgroundColor: props.bgColor || "white",
          borderBottom: "none",
          border: "none",
          width: "100%",
          padding: 0,
          margin: 0,
          marginBottom: 0,
          resize: props.resize || "vertical"
        }}
        // value={field.value ?? ""}
      />
    </label>
  );
};
