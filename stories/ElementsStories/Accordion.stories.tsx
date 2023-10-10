import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Accordion/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  // Usage
  const accordionData = [
    {
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      trigger: "Another Question?",
      content: "Here's another answer.",
    },
    {
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      trigger: "Another Question?",
      content: "Here's another answer.",
    },
  ];

  return (
    <div className="hawa-w-full hawa-max-w-md" dir={direction}>
      <Accordion items={accordionData} type="single" {...args} />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
