import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCircle } from "@elements/progressCircle";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Progress Circle",
  component: ProgressCircle,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction} className="hawa-h-52 hawa-w-full ">
        <ProgressCircle {...args}>{args.value}%</ProgressCircle>
      </div>
    );
  }
};
