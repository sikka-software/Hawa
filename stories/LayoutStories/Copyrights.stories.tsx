import type { Meta, StoryObj } from "@storybook/react";
import { Copyrights } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/Copyrights",
  component: Copyrights,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<Copyrights/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Copyrights>;

export default meta;
type Story = StoryObj<typeof Copyrights>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div
      dir={direction}
      className="hawa-w-full hawa-h-screen  hawa-flex hawa-flex-col hawa-justify-end hawa-items-center"
    >
      <Copyrights {...args} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    version: "v1.2.3",
    credits: "Developed by Sikka Software",
  },
};
