import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent
} from "@sikka/hawa/elements/card";
import { GlowCapture, Glow } from "@sikka/hawa/elements/glow";

const meta = {
  title: "Elements/Glow",
  component: Glow
} satisfies Meta<typeof Glow>;

export default meta;
type Story = StoryObj<typeof Glow>;

export const Default: Story = {
  parameters: { layout: "fullscreen" },
  render: (args: any) => (
    <GlowCapture className="hawa-flex hawa-h-[100dvh] hawa-flex-col hawa-gap-2 hawa-p-10">
      <Glow color="purple">
        <Card className="glow:hawa-border-gray-700 glow:hawa-bg-gray-200 dark:glow:hawa-bg-gray-900 hawa-max-w-sm hawa-border hawa-p-10">
          <CardHeader>
            This is
            <CardTitle>a card</CardTitle>
            <CardDescription>Component</CardDescription>
          </CardHeader>
          <CardContent>With glow</CardContent>
          <CardFooter>on hover</CardFooter>
        </Card>
      </Glow>
      <Glow color="purple">
        <div className="glow:hawa-border-gray-700 glow:hawa-bg-gray-200 dark:glow:hawa-bg-gray-900 hawa-max-w-sm hawa-rounded hawa-border hawa-p-10">
          This is a normal div
        </div>
      </Glow>
      <Glow color="purple">
        <div className="glow:hawa-border-gray-700 glow:hawa-text-gray-700 hawa-text-gray-100 dark:glow:hawa-text-gray-900 hawa-max-w-sm hawa-rounded hawa-p-10">
          This is a text
        </div>
      </Glow>
    </GlowCapture>
  )
};
