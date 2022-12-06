import React from "react"
import Breadcrumb from "../../elements/Breadcrumb"
import { Story, Meta } from "@storybook/react"
import { AiFillCaretRight } from "react-icons/ai"

export default {
  title: "Elements/Breadcrumb",
  component: Breadcrumb,
} as Meta

const Template: Story = (args) => {
  return (
    <Breadcrumb
      breadcrumbLink={args.breadcrumbLink}
      separator={args.separator}
    />
  )
}

export const BreadCrumb = Template.bind({})

BreadCrumb.args = {
  breadcrumbLink: [
    { label: "test", href: "/test" },
    { label: "test1", href: "/test1" },
    { label: "test2", href: "/test2" },
  ],
}
BreadCrumb.storyName = "Without separator"

export const BreadCrumWithSeparator = Template.bind({})
BreadCrumWithSeparator.args = {
  separator: "-",
  breadcrumbLink: [
    { label: "test", href: "/test" },
    { label: "test1", href: "/test1" },
    { label: "test2", href: "/test2" },
  ],
}
BreadCrumWithSeparator.storyName = "With Separator"

export const BreadcrumbIconSeparator = Template.bind({})
BreadcrumbIconSeparator.args = {
  separator: <AiFillCaretRight />,
  breadcrumbLink: [
    { label: "test", href: "/test" },
    { label: "test1", href: "/test1" },
    { label: "test2", href: "/test2" },
  ],
}
BreadcrumbIconSeparator.storyName = "Icon Separator"
