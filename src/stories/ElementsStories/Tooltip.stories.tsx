import { Meta, Story } from "@storybook/react"
import React from "react"
import { HawaButton } from "../../elements"
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
    <div className="flex h-screen w-full items-center justify-center">
      <HawaTooltip content={args.content} {...args}>
        <div className="rounded bg-red-300 p-2">Show Tooltip</div>
        {/* <HawaButton tooltip="Testing">Show Tooltip</HawaButton>{" "} */}
      </HawaTooltip>
    </div>
  )
}

Tooltip.args = {
  content:
    "This is tooltip content and it can bhis is tooltip content and it can bhis is tooltip content and it can bhis is tooltip content and it can be long sometimes ",
  position: "top",
}
