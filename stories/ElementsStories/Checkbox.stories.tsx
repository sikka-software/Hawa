import React from "react";
import { Checkbox } from "../../components/elements";
import { setLocale, t } from "../translations/i18n";
import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Story, Title } from "@storybook/blocks";

const meta = {
  title: "Elements/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Checkbox/>"}</h1>

          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2" dir={direction}>
      <div className="hawa-flex hawa-flex-col hawa-gap-6">
        <Checkbox {...args} id="checkbox_id" />
        <Checkbox {...args} disabled id="dis" />
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: { label: "Accept terms and conditions" },
};
export const withSubtitle: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy.",
  },
};
export const withHelperText: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy.",
    helperText: "You must agree to the TOS to continue",
  },
};
