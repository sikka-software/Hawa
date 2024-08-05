import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ContactForm } from "@sikka/hawa/blocks";

import { setLocale, t } from "../../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Contact Form",
  component: ContactForm,
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
          clearOnSubmit={false}
          texts={{
            email: {
              invalid: t("emailInvalidText"),
              label: t("emailLabel"),
              placeholder: t("emailPlaceholder"),
              required: t("emailRequiredText"),
            },
            name: {
              invalid: t("nameInvalidText"),
              label: t("nameLabel"),
              placeholder: t("namePlaceholder"),
              required: t("nameRequiredText"),
            },
            message: {
              invalid: t("messageInvalidText"),
              label: t("messageLabel"),
              placeholder: t("messagePlaceholder"),
              required: t("messageRequiredText"),
            },
          }}
          customFields={[
            {
              label: "value1",
              type: "text",
              name: "value1",
            },
            {
              label: "value2",
              type: "number",
              name: "value2",
            },
            {
              label: "value3",
              type: "select",
              name: "value3",
              options: [
                { label: "option1", value: "option1" },
                { label: "option2", value: "option2" },
                { label: "option3", value: "option3" },
              ],
            },
            {
              label: "value4",
              type: "number",
              name: "value4",
              placeholder: "TYPE SOMETHING HERE",
            },
            {
              label: "value5",
              type: "select",
              name: "value5",
              options: [
                { label: "option1", value: "option1" },
                { label: "option2", value: "option2" },
                { label: "option3", value: "option3" },
              ],
            },
          ]}
        />
      </div>
    );
  },
  args: { cardless: false },
  argTypes: { onSubmit: { action: "onSubmit" } },
};
