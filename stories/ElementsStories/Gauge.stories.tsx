import type { Meta, StoryObj } from "@storybook/react";
import { Gauge } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { GaugeCircle } from "lucide-react";

const meta = {
  title: "Elements/Gauge",
  component: Gauge,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Gauge/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Gauge>;

export default meta;
type Story = StoryObj<typeof Gauge>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction} className="hawa-w-full hawa-h-52 ">
      <Gauge {...args} design="half-circle" />
      <Gauge {...args} design="full-circle" />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
