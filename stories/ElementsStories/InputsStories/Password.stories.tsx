import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Story } from "@storybook/blocks";
import { Input, PasswordInput } from "../../../components/elements";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Password",
  component: Input,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Input/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div dir="rtl" className="p-4 hawa-max-w-md">
        <PasswordInput
          hidePopover
          onChange={(e) => console.log("changing to ", e.target.value)}
        />
      </div>
    );
  },
};
