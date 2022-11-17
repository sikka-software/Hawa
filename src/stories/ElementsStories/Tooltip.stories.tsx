import { Meta, Story } from "@storybook/react"
import React from "react"
import { HawaTooltip } from "../../elements/HawaTooltip"

export default {
  title: "Elements/Tooltip",
  component: HawaTooltip,
  // argTypes: {
  //   content: {
  //     control: "text",
  //     description: "The title of the dialog"
  //   },
  //   children: {
  //     control: "object",
  //     description:
  //       "The children element that will be contained by the dialog component"
  //   }
  // }
} as Meta

export const Tooltip: Story = (args) => {
  return (
    <div>
      <HawaTooltip content={args.content}>
        <button>Show tooltip</button>
      </HawaTooltip>
    </div>
  )
}

Tooltip.args = {
  content: "This is tooltip content and it can be long sometimes ",
}
