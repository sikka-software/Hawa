import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/packages/components/elements/separator";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Separator",
  component: Separator,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div>
        <div className="hawa-space-y-1">
          <h4 className="hawa-text-sm hawa-font-medium hawa-leading-none">
            Hawa Elements
          </h4>
          <p className="hawa-text-sm hawa-text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="hawa-my-4" />
        <div className="hawa-flex hawa-h-5 hawa-items-center hawa-space-x-4 hawa-text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    );
  }
};
