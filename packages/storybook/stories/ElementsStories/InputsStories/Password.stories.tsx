import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@sikka/hawa/elements/input";
import { PasswordInput } from "@sikka/hawa/elements/passwordInput";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Password",
  component: Input
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir="rtl" className="hawa-max-w-md p-4">
        <PasswordInput
          hidePopover
          onChange={(e) => console.log("changing to ", e.target.value)}
        />
      </div>
    );
  }
};
