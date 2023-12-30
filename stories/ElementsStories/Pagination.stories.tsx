import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@/packages/components/elements/pagination";

import { setLocale } from "../translations/i18n";

const meta = {
  title: "Elements/Pagination",
  component: Pagination
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-w-full hawa-p-2" dir={direction}>
        <Pagination totalPages={120} direction={direction} />
      </div>
    );
  }
};
