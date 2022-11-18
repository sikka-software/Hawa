import * as React from "react"
import { Meta } from "@storybook/react"
import { HawaButton } from "../../elements/HawaButton"
import { FaBars } from "react-icons/fa"
export default {
  title: "Elements/Buttons",
  component: HawaButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
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
    </div>
  )
}
export const ButtonLoadingStory = () => {
  return (
    <div className="card max-w-800 p-3">
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
    </div>
  )
}
export const ButtonWidthStory = () => {
  return (
    <div className="card max-w-800 p-3">
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
    </div>
  )
}
export const ButtonSizesStory = () => {
  return (
    <div className="card max-w-800 p-3">
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
    </div>
  )
}
export const ButtonIconsStory = () => {
  return (
    <div>
      <HawaButton size="small">
        <FaBars />
      </HawaButton>
      <HawaButton size="medium">
        <FaBars />
      </HawaButton>
      <HawaButton size="large">
        <FaBars />
      </HawaButton>
    </div>
  )
}

ButtonIconsStory.storyName = "Icons"
ButtonLoadingStory.storyName = "Loading"
ButtonWidthStory.storyName = "Widths"
ButtonSizesStory.storyName = "Sizes"
ButtonVariationsStory.storyName = "Variations"
