import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { HawaTypography } from "./HawaTypography";
import { HawaTextField } from "./HawaTextField";
import { HawaRadio } from "./HawaRadio";
import { HawaSwitch } from "./HawaSwitch";
import { HawaColorPicker } from "./HawaColorPicker";

export const HawaSettingsRow = (props) => {
  return (
    <Container variant="settingsRow">
      <HawaTypography>{props.settingsLabel}</HawaTypography>
      {props.settingsType === "checkbox" && <Checkbox {...props} />}
      {props.settingsType === "text" && <HawaTextField {...props} />}
      {props.settingsType === "boolean" && <HawaSwitch {...props} />}
      {props.settingsType === "color" && <HawaColorPicker {...props} />}
      {props.settingsType === "radio" && (
        <HawaRadio location="inSettings" {...props} />
      )}
    </Container>
  );
};

HawaSettingsRow.propTypes = {
  settingsLabel: PropTypes.string,
  settingsType: PropTypes.oneOf([
    "checkbox",
    "text",
    "radio",
    "boolean",
    "color"
  ])
};
