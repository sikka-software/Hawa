import React from "react"
import HawaBreadcrumb from "../../elements/Breadcrumb"
import { Story, Meta } from "@storybook/react"

export default {
  title: "Elements/Breadcrumb",
  component: HawaBreadcrumb,
} as Meta

const Template: Story = (args) => {
  return (
    <HawaBreadcrumb
      breadcrumbLinks={args.breadcrumbLink}
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
  separator: (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
  breadcrumbLink: [
    { label: "test", href: "/test" },
    { label: "test1", href: "/test1" },
    { label: "test2", href: "/test2" },
  ],
}
BreadcrumbIconSeparator.storyName = "Icon Separator"
