import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Inputs/Input",
  component: Input,
  parameters: {
    // backgrounds: {
    //   default: "offwhite",
    //   values: [{ name: "offwhite", value: "#ededed" }],
    // },
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Input/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>Input story</div>;
};
export const Default: Story = {
  render: () => <Input label={"Input Field"} />,
};
