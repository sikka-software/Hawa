import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { Select, Typography } from "@mui/material";
export const HawaSelect = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <InputLabel>{props.label}</InputLabel>

        {props.helperText && (
          <Typography variant="validation">{props.helperText}</Typography>
        )}
      </div>
      <Select {...props}>{props.children}</Select>
    </div>
  );
};
