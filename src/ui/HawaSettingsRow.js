import React from "react";

import PropTypes from "prop-types";
import { Box } from "../layout";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { HawaTypography } from "./HawaTypography";
import { Container } from "@mui/material";
import { HawaTextField } from "./HawaTextField";
import { HawaRadio } from "./HawaRadio";
export const HawaSettingsRow = (props) => {
  return (
    <Container variant="settingsRow">
      <HawaTypography>{props.settingsLabel}</HawaTypography>
      {props.settingsType === "checkbox" && <Checkbox {...props} />}
      {props.settingsType === "text" && <HawaTextField {...props} />}
      {props.settingsType === "radio" && (
        <HawaRadio location="inSettings" {...props} />
      )}
    </Container>
  );
};

HawaSettingsRow.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
