import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@sikka/hawa/elements/label";
import { Slider } from "@sikka/hawa/elements/slider";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Slider/>"}</h1>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div className="hawa-flex hawa-w-64 hawa-flex-col hawa-gap-4">
        <Label>Slider Component</Label>
        <Slider {...args} />
      </div>
    );
  }
};
