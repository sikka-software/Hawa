import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "@sikka/hawa/blocks";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Contact Form",
  component: ContactForm
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir={direction} className="hawa-max-w-lg">
        <ContactForm
          {...args}
          texts={{
            email: {
              invalid: t("emailInvalidText"),
              label: t("emailLabel"),
              placeholder: t("emailPlaceholder"),
              required: t("emailRequiredText")
            },
            name: {
              invalid: t("nameInvalidText"),
              label: t("nameLabel"),
              placeholder: t("namePlaceholder"),
              required: t("nameRequiredText")
            },
            message: {
              invalid: t("messageInvalidText"),
              label: t("messageLabel"),
              placeholder: t("messagePlaceholder"),
              required: t("messageRequiredText")
            }
          }}
        />
      </div>
    );
  },
  args: { cardless: false },
  argTypes: { onSubmit: { action: "onSubmit" } }
};
