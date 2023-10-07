import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Not Found",
  component: NotFound,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<NotFound/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof NotFound>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <NotFound />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
