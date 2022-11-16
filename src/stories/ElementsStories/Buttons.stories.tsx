import * as React from "react"
import { Story, Meta } from "@storybook/react"
import { HawaButton } from "../../elements/HawaButton"

// test component

export default {
  title: "Elements/Buttons",
  component: HawaButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta

const Template: Story = (args) => (
  <HawaButton
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </HawaButton>
)

export const ButtonStory = Template.bind({})
ButtonStory.storyName = "Button"
ButtonStory.args = {
  className: "",
  variant: "contained",
  color: "primary",
  size: "medium",
  disabled: false,
  text: "Button",
}

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="mb-2 text-2xl font-medium">Buttons</h1>

      <h2 className="mt-6 text-xl">Contained Buttons</h2>
      <div className="mt-1 flex flex-row">
        <HawaButton>Default</HawaButton>
        <HawaButton tooltip="This is a test" className="ml-2" color="primary">
          Primary
        </HawaButton>
        <HawaButton className="ml-2" color="secondary">
          Secondary
        </HawaButton>
        <HawaButton className="ml-2" disabled>
          Disabled
        </HawaButton>
      </div>

      <h2 className="mt-6 text-xl">Outlined Buttons</h2>
      <div className="mt-1 flex flex-row">
        <HawaButton variant="outlined">Default</HawaButton>
        <HawaButton className="ml-2" variant="outlined" color="primary">
          Primary
        </HawaButton>
        <HawaButton className="ml-2" variant="outlined" color="secondary">
          Secondary
        </HawaButton>
        <HawaButton className="ml-2" variant="outlined" disabled>
          Disabled
        </HawaButton>
      </div>

      <h2 className="mt-6 text-xl">Sizes</h2>
      <div className="mt-1 flex flex-row">
        <HawaButton variant="contained" color="primary" size="small">
          Small
        </HawaButton>
        <HawaButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </HawaButton>
        <HawaButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </HawaButton>
      </div>
      <h2 className="mt-6 text-xl">Width</h2>

      <div className="mt-2 flex flex-col">
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="full"
        >
          Full Width
        </HawaButton>
        <HawaButton
          className="my-2"
          variant="contained"
          color="primary"
          size="medium"
          width="half"
        >
          Half Width
        </HawaButton>
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
        >
          Normal Width
        </HawaButton>
      </div>
      <h2 className="mt-6 text-xl">Loading</h2>

      <div className="mt-2 flex flex-col">
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          isLoading={true}
        >
          Normal Width
        </HawaButton>
      </div>

      <h2 className="mt-6 text-xl">Link Buttons</h2>
      <div className="mt-2">
        <a className="btn-link" href="https://amazon.com">
          Amazon
        </a>
        <a className="btn-link ml-2" href="https://apple.com">
          Apple
        </a>
        <a className="btn-link ml-2" href="https://store.google.com">
          Google
        </a>
      </div>
    </div>
  )
}
ButtonVariationsStory.storyName = "Button Variations"
