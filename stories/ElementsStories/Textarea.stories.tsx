import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  Button,
  Input,
  Label,
  Textarea,
} from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale } from "../translations/i18n";

const meta = {
  title: "Elements/Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Textarea/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="hawa-w-64 hawa-flex hawa-flex-col hawa-gap-4">
      <Textarea label="Textarea component" helperText="Helper text here" />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
export const Examples: Story = {
  render: () => {
    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Avatar size="6xl" />
          <Button size="sm">Save</Button>
          <Button variant="outline" size="sm">
            Remove
          </Button>
        </div>
        <div className="hawa-flex hawa-flex-col">
          <Input />
          <Textarea forceHideHelperText 
          className="hawa-h-full" 
          />
        </div>
      </div>
    );
  },
};
