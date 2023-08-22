import React, { FC } from "react"
import { Card, CardContent } from "../../elements/Card"

type UserSettingsFormTypes = {
  children: any
  handleSaveSettings?: any
  saveSettingsText?: string
  blockTitle?: string
}

export const UserSettingsForm: FC<UserSettingsFormTypes> = (props) => {
  return (
    <Card>
      <CardContent headless>
        <div className="mb-2 text-sm font-bold">{props.blockTitle}</div>
        <div className="flex flex-col gap-4 rounded  p-2">{props.children}</div>
      </CardContent>
    </Card>
  )
}
