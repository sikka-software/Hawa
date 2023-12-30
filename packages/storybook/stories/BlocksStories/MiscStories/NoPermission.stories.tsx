import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { NoPermission } from "@/packages/components/blocks/misc";

import { setLocale } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Misc/No Permission",
  component: NoPermission,
  parameters: { layout: "centered" }
} satisfies Meta<typeof NoPermission>;

export default meta;
type Story = StoryObj<typeof NoPermission>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction}>
        <NoPermission />
      </div>
    );
  }
};
