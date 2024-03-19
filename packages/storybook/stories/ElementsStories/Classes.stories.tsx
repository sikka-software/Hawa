import { Story } from "@storybook/blocks";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Elements/Classes",
};

export default meta;
type Story = StoryObj;

export const Link: Story = {
  render: () => <div className="clickable-link">Clickable Link</div>,
};
export const NewWindowLink: Story = {
  render: () => <div className="link">This is a link</div>,
};
export const InlineCode: Story = {
  render: () => <div className="inline-code">Inline Code</div>,
};
