import React, { FC } from "react"

type InlineCodeTypes = {
  text: string
}

export const HawaInlineCode: FC<InlineCodeTypes> = (props) => {
  return <code className="inline-code">{props.text}</code>
}
