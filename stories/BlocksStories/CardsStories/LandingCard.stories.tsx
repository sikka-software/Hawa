import type { Meta, StoryObj } from "@storybook/react";
import { ScreenShare } from "lucide-react";

import { LandingCard } from "../../../components/blocks";

const meta = {
  title: "Blocks/Cards/Landing Card",
  component: LandingCard,
  tags: ["autodocs"]
} satisfies Meta<typeof LandingCard>;

export default meta;
type Story = StoryObj<typeof LandingCard>;

export const Default: Story = {
  render: () => (
    <LandingCard
      className={"hawa-max-w-md"}
      title="Title of landing card"
      subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
      icon={<ScreenShare />}
    />
  )
};
