import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale } from "../translations/i18n";

const meta = {
  title: "Elements/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Popover/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <Popover side={args.side} trigger={<Button>Show Popover</Button>}>
      <div>This is the content of the popover</div>
    </Popover>
  );
};
export const Default: Story = {
  render: () => <Template />,
};
