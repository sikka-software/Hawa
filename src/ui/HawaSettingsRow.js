import React from "react";

import PropTypes from "prop-types";
import { Box } from "../layout";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { HawaTypography } from "./HawaTypography";
export const HawaSettingsRow = (props) => {


  return (
    <Box noColor>
      {props.settingsType === "checkbox" && (
        <div style={{ ...settingsRowStyle }}>
          <HawaTypography>Checkbox Label</HawaTypography> <Checkbox />
        </div>
      )}
      {props.settingsType === "text" && (
        <div style={{ ...settingsRowStyle }}>
          Text Label{" "}
          <TextField
            InputProps={{
              style: {
                ...hawaTheme.inputFields[currentTheme],
                // borderRadius: 0,
                // padding: 0,
                // backgroundColor: "white",
                height: 40
              }
            }}
            style={{
              padding: 0
            }}
            placeholder="test"
          />
        </div>
      )}
    </Box>
  );
};

HawaSettingsRow.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
