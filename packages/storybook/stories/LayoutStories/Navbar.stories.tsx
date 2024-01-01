import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { Navbar } from "@sikka/hawa/layout";
import { Logos } from "@sikka/hawa/elements/logos";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div>
        <Navbar
          menuItems={[
            {
              label: "item 1",
              trigger: "item 1",
              action: () => console.log("clicked on item 1")
            },
            {
              label: "item 2",
              trigger: "item 2",
              action: () => console.log("clicked on item 2")
            },
            {
              label: "item 3",
              trigger: "item 3",
              action: () => console.log("clicked on item 3")
            }
          ]}
          logo={<Logos.sikka className="hawa-h-6 hawa-w-6" />}
          buttons={
            <>
              <Button>Login</Button>
              <Button>Login</Button>
              <Button>Login</Button>
            </>
          }
        />
        <div className="hawa-m-2 hawa-flex hawa-h-[calc(200dvh)] hawa-border-spacing-3 hawa-flex-col hawa-items-center hawa-justify-start hawa-rounded hawa-border-2 hawa-border-dashed hawa-border-gray-500 hawa-bg-card hawa-p-10 hawa-text-center">
          Content Area
        </div>
      </div>
    );
  }
};
