import React from "react"
import { HawaTextField } from "./HawaTextField"
import { HawaSwitch } from "./HawaSwitch"
import { HawaColorPicker } from "./HawaColorPicker"
import { HawaRange } from "./HawaRange"
import { HawaRadio } from "./HawaRadio"

type SettingsRowTypes = {
  settingsLabel: string
  settingsType: "text" | "radio" | "boolean" | "color" | "range"
  settingsDescription?: string
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
  switchProps: {
    size: "small" | "normal" | "large"
  }
}

export const HawaSettingsRow: React.FunctionComponent<SettingsRowTypes> = ({
  settingsLabel,
  settingsType,
  settingsDescription,
  colorProps,
  rangeProps,
  radioProps,
  switchProps,
}) => {
  return (
    <div className="flex max-h-fit flex-row items-center justify-between rounded  align-middle">
      <div>
        <div className="text-sm">{settingsLabel}</div>
        {settingsDescription && (
          <div className="text-xs">{settingsDescription}</div>
        )}{" "}
      </div>
      {settingsType === "text" && <HawaTextField margin="none" width="small" />}
      {settingsType === "boolean" && <HawaSwitch {...switchProps} />}
      {settingsType === "range" && <HawaRange {...rangeProps} />}
      {settingsType === "color" && <HawaColorPicker {...colorProps} />}
      {settingsType === "radio" && <HawaRadio {...radioProps} />}
    </div>
  )
}
