import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const TheStory = () => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2">
    <h1>Variations</h1>
    <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-flex-wrap">
      <Button variant={"default"}>Default</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"light"}>Light</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"neoBrutalism"}>NeoBrutalism</Button>
    </div>
      <div className="clickable-link">Something</div>
      <div className="inline-code">Something</div>
    <h1>Loading</h1>
    <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-flex-wrap">
      <Button isLoading variant={"default"}>
        Default
      </Button>
      <Button isLoading variant={"outline"}>
        Outline
      </Button>
      <Button isLoading variant={"destructive"}>
        Destructive
      </Button>
      <Button isLoading variant={"ghost"}>
        Ghost
      </Button>
      <Button isLoading variant={"light"}>
        Light
      </Button>
      <Button isLoading variant={"secondary"}>
        Secondary
      </Button>
      <Button isLoading variant={"link"}>
        Link
      </Button>
      <Button isLoading variant={"neoBrutalism"}>
        NeoBrutalism
      </Button>
    </div>
  </div>
);
export const Variations: Story = {
  render: () => <TheStory />,
};

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
