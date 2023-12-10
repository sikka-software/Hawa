import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Copyrights } from "@layout/index";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/Copyrights",
  component: Copyrights,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Copyrights>;

export default meta;
type Story = StoryObj<typeof Copyrights>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div
        dir={direction}
        className="hawa-flex hawa-h-screen  hawa-w-full hawa-flex-col hawa-items-center hawa-justify-end"
      >
        <Copyrights {...args} />
      </div>
    );
  },
  args: {
    version: "v1.2.3",
    credits: "Developed by Sikka Software"
  }
};
