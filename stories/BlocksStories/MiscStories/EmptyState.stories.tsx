import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<EmptyState/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof EmptyState>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <EmptyState onActionClick={() => console.log("going home")} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
