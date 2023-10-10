import type { Meta, StoryObj } from "@storybook/react";
import { CodeConfirmation } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/User Auth/CodeConfirmation",
  component: CodeConfirmation,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<CodeConfirmation/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeConfirmation>;

export default meta;
type Story = StoryObj<typeof CodeConfirmation>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div className="hawa-max-w-md" dir={direction}>
      <CodeConfirmation showError={args.showError} {...args} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    texts: {
      codeLabel: "Code",
      codePlaceholder: "123456",
      codeRequiredText: "Code is required",
      codeTooShort: "Please enter the full OTP code",
      confirm: "Confirm",
    },
  },
  argTypes: {
    handleConfirm: { action: "handleConfirm" },
  },
};
