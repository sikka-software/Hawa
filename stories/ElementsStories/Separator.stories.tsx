import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Separator/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div>
      <div className="hawa-space-y-1">
        <h4 className="hawa-text-sm hawa-font-medium hawa-leading-none">
          Radix Primitives
        </h4>
        <p className="hawa-text-sm hawa-text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="hawa-my-4" />
      <div className="hawa-flex hawa-h-5 hawa-items-center hawa-space-x-4 hawa-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
