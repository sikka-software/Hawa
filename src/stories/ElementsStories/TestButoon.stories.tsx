import * as React from "react"
import { Story, Meta } from "@storybook/react"
import { TestButton } from "../../elements/TestButton"

export default {
  title: "Elements/TestButton",
  component: TestButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta

const Template: Story = (args) => (
  <TestButton
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </TestButton>
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
      <div className="mt-1">
        <TestButton>Default</TestButton>
        <TestButton className="ml-2" color="primary">
          Primary
        </TestButton>
        <TestButton className="ml-2" color="secondary">
          Secondary
        </TestButton>
        <TestButton className="ml-2" disabled>
          Disabled
        </TestButton>
      </div>

      <h2 className="mt-6 text-xl">Outlined Buttons</h2>
      <div className="mt-1">
        <TestButton variant="outlined">Default</TestButton>
        <TestButton className="ml-2" variant="outlined" color="primary">
          Primary
        </TestButton>
        <TestButton className="ml-2" variant="outlined" color="secondary">
          Secondary
        </TestButton>
        <TestButton className="ml-2" variant="outlined" disabled>
          Disabled
        </TestButton>
      </div>

      <h2 className="mt-6 text-xl">Sizes</h2>
      <div className="mt-1">
        <TestButton variant="contained" color="primary" size="small">
          Small
        </TestButton>
        <TestButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </TestButton>
        <TestButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </TestButton>
      </div>
      <div className="mt-2">
        <TestButton variant="outlined" color="primary" size="small">
          Small
        </TestButton>
        <TestButton
          className="ml-2"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </TestButton>
        <TestButton
          className="ml-2"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </TestButton>
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
