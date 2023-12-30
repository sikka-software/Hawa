import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { EmptyState } from "@sikka/hawa/blocks/misc";

import { setLocale } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Misc/EmptyState",
  component: EmptyState,
  parameters: { layout: "centered" }
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction}>
        <EmptyState onActionClick={() => console.log("going home")} />
      </div>
    );
  }
};
