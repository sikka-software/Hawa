import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

export const StyledCheckbox = (props) => {
  console.log("props : ", props);
  return (
    <React.Fragment>
      <FormControlLabel
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
