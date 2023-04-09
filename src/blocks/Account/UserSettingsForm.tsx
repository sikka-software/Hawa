import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type UserSettingsFormTypes = {
  children: any
  handleSaveSettings?: any
  saveSettingsText?: string
  blockTitle?: string
}

export const UserSettingsForm: React.FunctionComponent<
  UserSettingsFormTypes
> = (props) => {
  return (
    <div>
      <div className="mb-2 text-sm font-bold">{props.blockTitle}</div>
      <div className="flex flex-col gap-4 rounded bg-white p-2">
        {props.children}
      </div>
      {/* <HawaButton
        color="primary"
        // type="submit"
        width="full"
        margins="none"
        onClick={props.handleSaveSettings}
      >
        {props.saveSettingsText}
      </HawaButton> */}
    </div>
  )
}
