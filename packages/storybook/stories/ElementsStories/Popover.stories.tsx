import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { Popover } from "@sikka/hawa/elements/popover";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Popover",
  component: Popover,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <Popover
        side={args.side}
        triggerProps={{ asChild: true }}
        trigger={<Button>Show Popover</Button>}
      >
        <div className="hawa-m-4">This is the content of the popover</div>
      </Popover>
    );
  }
};
