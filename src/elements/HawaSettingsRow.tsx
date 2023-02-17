import React from "react"
import { HawaTextField } from "./HawaTextField"
import { HawaSwitch } from "./HawaSwitch"
import { HawaColorPicker } from "./HawaColorPicker"
import { HawaRange } from "./HawaRange"
import { HawaRadio } from "./HawaRadio"

type SettingsRowTypes = {
  settingsLabel: string
  settingsType: "text" | "radio" | "boolean" | "color" | "range"
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
    <div className="my-0.5  flex h-20 max-h-fit flex-row items-center justify-between rounded bg-white p-6 align-middle">
      <div>
        <div>{settingsLabel}</div>
        <div className="text-sm">Text here like a description</div>
      </div>
      {settingsType === "text" && <HawaTextField margin="none" width="small" />}
      {settingsType === "boolean" && <HawaSwitch size="large" />}
      {settingsType === "range" && <HawaRange {...rangeProps} />}
      {settingsType === "color" && <HawaColorPicker {...colorProps} />}
      {settingsType === "radio" && <HawaRadio {...radioProps} />}
    </div>
  )
}
