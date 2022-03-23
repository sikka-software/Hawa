import React from "react";

import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import { HawaTypography } from "./HawaTypography";
import Container from "@mui/material/Container";
import { HawaTextField } from "./HawaTextField";
import { HawaRadio } from "./HawaRadio";
import { HawaSwitch } from "./HawaSwitch";
export const HawaSettingsRow = (props) => {
  return (
    <Container variant="settingsRow">
      <HawaTypography>{props.settingsLabel}</HawaTypography>
      {props.settingsType === "checkbox" && <Checkbox {...props} />}
      {props.settingsType === "text" && <HawaTextField {...props} />}
      {props.settingsType === "radio" && (
        <HawaRadio location="inSettings" {...props} />
      )}
      {props.settingsType === "boolean" && <HawaSwitch {...props} />}
    </Container>
  );
};

HawaSettingsRow.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
