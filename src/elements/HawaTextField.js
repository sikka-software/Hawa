import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

export const HawaTextField = (props) => {
  return (
    <div style={props.inForm && { width: "100%" }}>
      <div style={{ width: props.fullWidth ? "100%" : "fit-content" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {props.label && <InputLabel>{props.label}</InputLabel>}

          {props.helperText && (
            <Typography variant="validation">{props.helperText}</Typography>
          )}
        </div>
        <Input disableUnderline {...props} />
      </div>
    </div>
  );
};
