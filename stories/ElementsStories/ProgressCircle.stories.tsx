import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
// import { GaugeCircle } from "lucide-react";

const meta = {
  title: "Elements/Progress Circle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<ProgressCircle/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction} className="hawa-w-full hawa-h-52 ">
      <ProgressCircle {...args}>
        
        {args.value}%
      </ProgressCircle>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
