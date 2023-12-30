import { Card, CardContent, Label } from "@/packages/components";
import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Signature } from "@/packages/components/elements/signature";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Signature",
  component: Signature
} satisfies Meta<typeof Signature>;

export default meta;
type Story = StoryObj<typeof Signature>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4 hawa-p-10 ">
        <Card>
          <CardContent headless>
            <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-2 hawa-p-2">
              <Signature
                label={t("Signature")}
                texts={{ clear: t("clear") }}
                // canvasProps={{ className: "hawa-border hawa-bg-background" }}
                {...args}
              />
            </div>
            <div className="hawa-w-full hawa-max-w-4xl hawa-p-2">
              <Signature
                canvasProps={{ className: "hawa-border", width: 400 }}
                {...args}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
};
