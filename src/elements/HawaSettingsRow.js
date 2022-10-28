import React from "react";
import PropTypes from "prop-types";
import { HawaTypography } from "./HawaTypography";
import { HawaTextField } from "./HawaTextField";
import { HawaPanelTabs } from "./HawaPanelTabs";
import { HawaSwitch } from "./HawaSwitch";
import { HawaColorPicker } from "./HawaColorPicker";
import { HawaRange } from "./HawaRange";
import { HawaCheckbox } from "./HawaCheckbox";

export const HawaSettingsRow = (props) => {
  return (
    <div className="flex flex-row bg-white justify-between align-middle items-center p-2 rounded-xl my-2 h-14">
      <HawaTypography>{props.settingsLabel}</HawaTypography>
      {props.settingsType === "checkbox" && <HawaCheckbox {...props} />}
      {props.settingsType === "text" && <HawaTextField {...props} />}
      {props.settingsType === "boolean" && <HawaSwitch {...props} />}
      {props.settingsType === "range" && <HawaRange {...props} />}
      {props.settingsType === "color" && <HawaColorPicker {...props} />}
      {props.settingsType === "radio" && (
        <HawaPanelTabs location="inSettings" {...props} />
      )}
    </div>
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
