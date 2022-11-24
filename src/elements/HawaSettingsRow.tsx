import React from "react"
import { HawaTypography } from "./HawaTypography"
import { HawaTextField } from "./HawaTextField"
import { HawaSwitch } from "./HawaSwitch"
import { HawaColorPicker } from "./HawaColorPicker"
import { HawaRange } from "./HawaRange"
import { HawaCheckbox } from "./HawaCheckbox"
import { HawaTabs } from "./HawaTabs"
import { HawaRadio } from "./HawaRadio"

type SettingsRowTypes = {
  settingsLabel: any
  settingsType: "checkbox" | "text" | "radio" | "boolean" | "color" | "range"
  radioProps: {
    defaultValue: any
    onChangeTab: any
    options: any
  }
  colorProps: {
    color?: any
    handleChange?: any
  }
  rangeProps: {
    min?: any
    max?: any
  }
}

export const HawaSettingsRow: React.FunctionComponent<SettingsRowTypes> = ({
  settingsLabel,
  settingsType,
  colorProps,
  rangeProps,
  radioProps,
}) => {
  return (
    <div className="my-2 flex max-h-fit flex-row items-center justify-between rounded-xl bg-white px-4 py-2 pr-2 align-middle">
      <HawaTypography>{settingsLabel}</HawaTypography>
      {settingsType === "checkbox" && <HawaCheckbox centered />}
      {settingsType === "text" && <HawaTextField margin="none" width="small" />}
      {settingsType === "boolean" && <HawaSwitch />}
      {settingsType === "range" && <HawaRange {...rangeProps} />}
      {settingsType === "color" && <HawaColorPicker {...colorProps} />}
      {settingsType === "radio" && <HawaTabs {...radioProps} />}
    </div>
  )
}
