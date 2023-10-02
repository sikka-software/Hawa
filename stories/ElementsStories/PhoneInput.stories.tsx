import type { Meta, StoryObj } from "@storybook/react";
import { PhoneInput } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/PhoneInput",
  component: PhoneInput,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<PhoneInput/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof PhoneInput>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <PhoneInput />;
};
export const Default: Story = {
  render: Template.bind({}),
};
