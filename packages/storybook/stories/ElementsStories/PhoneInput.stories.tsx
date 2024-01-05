import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { PhoneInput } from "@sikka/hawa/elements/phoneInput";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Phone Input",
  component: PhoneInput
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div className="hawa-w-full hawa-max-w-sm hawa-p-2">
        <PhoneInput label="Testing" />
      </div>
    );
  }
};
