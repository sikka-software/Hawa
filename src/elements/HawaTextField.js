import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";

export const HawaTextField = (props) => {
  return (
    <>
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
      <Input disableUnderline {...props} />
    </>
  );
};
