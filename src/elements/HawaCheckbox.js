import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const HawaCheckbox = (props) => {
  console.log("props : ", props);
  return (
    <React.Fragment>
      <FormControlLabel
        label={props.label}
        control={
          <Checkbox
            style={{ color: props.color || null }}
            defaultChecked={props.defaultValue}
          />
        }
      />
    </React.Fragment>
  );
};
