import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Chip/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div>
      <h1>Small</h1>
      <Chip variant="outline" size="small" label="small" color={"green"} />
      <h1>Normal</h1>
      <Chip variant="outline" size="normal" label="normal" color={"red"} />
      <h1>Large</h1>
      <Chip
        size="normal"
        label="Available"
        dot={true}
        color={"green"}
        dotType={"available"}
      />
    </div>
  );
};
export const Default: Story = {
  render: () => (
    <div>
      <h1>Small</h1>
      <Chip variant="outline" size="small" label="small" color={"green"} />
      <h1>Normal</h1>
      <Chip variant="outline" size="normal" label="normal" color={"red"} />
      <h1>Large</h1>
      <Chip
        size="normal"
        label="Available"
        dot={true}
        color={"green"}
        dotType={"available"}
      />
    </div>
  ),
};
