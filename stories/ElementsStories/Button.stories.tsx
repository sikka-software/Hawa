import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgedComponent, Button } from "../../components/elements";
import { ArgsTable, Title } from "@storybook/blocks";
import { useRef } from "react";

const meta = {
  title: "Elements/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const Template = () => {
  const badgeRef = useRef(null);
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2">
      <h1>Variations</h1>
      <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-flex-wrap">
        <Button variant={"default"}>Default</Button>

        <BadgedComponent position={"right"}>
          <Button variant={"outline"}>Outline</Button>
        </BadgedComponent>

        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"light"}>Light</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"neoBrutalism"}>NeoBrutalism</Button>
      </div>
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
};

export const Variations: Story = {
  render: Template.bind({}),
};
