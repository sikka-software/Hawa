import React, { FC } from "react"
import { HawaTextField } from "./HawaTextField"
import { HawaSwitch } from "./HawaSwitch"
import { HawaColorPicker } from "./HawaColorPicker"
import { HawaRange } from "./HawaRange"
import { HawaRadio } from "./HawaRadio"
import { HawaSelect } from "./HawaSelect"

type SettingsRowTypes = {
  settingsLabel: string
  settingsType: "text" | "radio" | "boolean" | "color" | "range" | "select"
  settingsDescription?: string
  radioProps: {
    defaultValue: any
    onChangeTab: any
    options: [{ label: string; value: any }]
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
  selectProps: {
    label?: string
    options?: any[any]
    isCreatable?: boolean
    isClearable?: boolean
    isMulti?: boolean
    isSearchable?: boolean
    onChange?: any
    helperText?: any
    onInputChange?: any
    native?: any
    fullWidth?: any
    value?: any
    children?: any
    getOptionLabel?: any
    disabled?: boolean
  }
}

export const HawaSettingsRow: FC<SettingsRowTypes> = ({
  settingsLabel,
  settingsType,
  settingsDescription,
  colorProps,
  rangeProps,
  radioProps,
  switchProps,
  selectProps,
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
      {settingsType === "select" && <HawaSelect {...selectProps} />}
    </div>
  )
}
