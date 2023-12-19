import { ArgsTable, Story, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@elements/input";
import { Label } from "@elements/label";
import { Skeleton } from "@elements/skeleton";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Label",
  component: Label,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Label {...args}>This is a label</Label>
          <Skeleton className="hawa-h-10 hawa-w-64" />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Label {...args}>This is a label</Label>
          <Input className="hawa-h-10 hawa-w-64" />
        </div>
      </div>
    );
  },
  args: {
    required: false,
    hint: "This is a label hint"
  }
};
