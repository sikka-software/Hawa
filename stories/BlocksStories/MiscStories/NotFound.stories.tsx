import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { NotFound } from "@blocks/misc";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Not Found",
  component: NotFound,
  parameters: { layout: "centered" }
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction}>
        <NotFound />
      </div>
    );
  }
};
