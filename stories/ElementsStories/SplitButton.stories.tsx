import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "../../components/elements";
import { ArgsTable, Title } from "@storybook/blocks";

const meta = {
  title: "Elements/SplitButton",
  component: SplitButton,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof SplitButton>;

const TheStory = () => (
  <div className="hawa-flex hawa-flex-col hawa-gap-2">
    <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-flex-wrap">
      <SplitButton variant={"outline"}>Default</SplitButton>
    </div>
  </div>
);

export const Variations: Story = {
  render: () => <TheStory />,
};
