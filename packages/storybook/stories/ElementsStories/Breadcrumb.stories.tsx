import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "@sikka/hawa/elements/breadcrumb";

const meta = {
  title: "Elements/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    // setLocale(locale);
    return (
      <div>
        <Breadcrumb
          breadcrumbLinks={[
            { label: "Home", href: "/test" },
            { label: "User", href: "/test1" },
            { label: "New User", href: "/test2" },
          ]}
          separator={">"}
          {...args}
        />
      </div>
    );
  },
  args: {
    size: "normal",
  },
};
