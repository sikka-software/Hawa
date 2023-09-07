import React, { FC } from "react"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"

type AnnouncementTypes = {
  variant?: "outlined" | "contained" | "neobrutalism"
  onActionClick: () => void
  actionText?: string
  title?: string
  subtitle?: string
}

export const Announcement: FC<AnnouncementTypes> = ({
  variant = "contained",
  onActionClick,
  ...props
}) => {
  return (
    <Card>
      <CardContent
        headless
        className="flex flex-row items-center justify-between"
      >
        <div className="flex flex-col items-start justify-center ">
          <span className="text-lg font-bold">{props.title}</span>
          <span className="text-sm">{props.subtitle}</span>
        </div>
        <Button onClick={() => onActionClick()}>{props.actionText}</Button>
      </CardContent>
    </Card>
  )
}
