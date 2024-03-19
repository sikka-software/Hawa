import { Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { SplitButton } from "@sikka/hawa/elements/splitButton";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Split Button",
  component: SplitButton,
  parameters: { layout: "centered" },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-w-full hawa-max-w-md hawa-flex-col">
        <SplitButton
          direction={direction}
          variant={"outline"}
          menuItems={[
            {
              value: 10,
              label: t("discard"),
              action: () => console.log("discarding changes"),
            },
            { label: t("save-draft"), value: 10 },
            { label: t("send-review"), value: 10 },
          ]}
          {...args}
        >
          {t("submit")}
        </SplitButton>
      </div>
    );
  },
};
