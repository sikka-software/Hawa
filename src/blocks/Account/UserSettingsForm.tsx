import React from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type UserSettingsFormTypes = {
  children: any
  handleSaveSettings: any
  saveSettingsText: string
}

export const UserSettingsForm: React.FunctionComponent<
  UserSettingsFormTypes
> = (props) => {
  return (
    <HawaContainer>
      {props.children}
      <HawaButton
        color="primary"
        // type="submit"
        width="full"
        onClick={props.handleSaveSettings}
      >
        {props.saveSettingsText}
      </HawaButton>
    </HawaContainer>
  )
}
