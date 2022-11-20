import React from "react"
// import PropTypes from "prop-types"
import { HawaTypography } from "./HawaTypography"
import { HawaTextField } from "./HawaTextField"
import { HawaSwitch } from "./HawaSwitch"
import { HawaColorPicker } from "./HawaColorPicker"
import { HawaRange } from "./HawaRange"
import { HawaCheckbox } from "./HawaCheckbox"
import { HawaTabs } from "./HawaTabs"

type SettingsRowTypes = {
  settingsLabel: any
  settingsType: any
}

export const HawaSettingsRow: React.FunctionComponent<SettingsRowTypes> = (
  props
) => {
  return (
    <div className="my-2 flex max-h-fit flex-row items-center justify-between rounded-xl bg-white px-4 py-2 pr-2 align-middle">
      <HawaTypography>{props.settingsLabel}</HawaTypography>
      {props.settingsType === "checkbox" && (
        <HawaCheckbox centered {...props} />
      )}
      {props.settingsType === "text" && (
        <HawaTextField margin="none" {...props} />
      )}
      {props.settingsType === "boolean" && <HawaSwitch {...props} />}
      {props.settingsType === "range" && <HawaRange {...props} />}
      {props.settingsType === "color" && <HawaColorPicker {...props} />}
      {props.settingsType === "radio" && <HawaTabs {...props} />}
    </div>
  )
}

// HawaSettingsRow.propTypes = {
//   settingsLabel: PropTypes.string,
//   settingsType: PropTypes.oneOf([
//     "checkbox",
//     "text",
//     "radio",
//     "boolean",
//     "color",
//   ]),
// }
