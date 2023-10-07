import type { Meta, StoryObj } from "@storybook/react";
import { NoPermission } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/No Permission",
  component: NoPermission,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<NoPermission/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NoPermission>;

export default meta;
type Story = StoryObj<typeof NoPermission>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <NoPermission />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
