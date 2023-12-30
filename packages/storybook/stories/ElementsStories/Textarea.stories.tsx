import { useState } from "react";

import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Avatar,
  Button,
  Input,
  Label,
  Textarea
} from "../../../components/elements";
import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Textarea",
  component: Textarea,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Textarea/>"}</h1>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div className="hawa-flex hawa-w-64 hawa-flex-col hawa-gap-4">
      <Textarea
        textareaProps={{ placeholder: "Placeholder text here" }}
        label="Textarea component"
        helperText="Helper text here"
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  parameters: {
    layout: "centered"
  }
};
export const WithCount: Story = {
  render: () => {
    const [text, setText] = useState("");

    return (
      <div className="hawa-flex hawa-w-full  hawa-flex-row hawa-gap-4">
        <Textarea
          showCount
          textareaProps={{
            placeholder: "Placeholder text here",
            value: text,
            onChange: (e) => setText(e.target.value),
            maxLength: 100
          }}
          label="With Count (Top)"
          countPosition="top"
        />

        <Textarea
          showCount
          textareaProps={{
            placeholder: "Placeholder text here",
            value: text,
            onChange: (e) => setText(e.target.value),
            maxLength: 100
          }}
          label="With Count (Bottom)"
          helperText="This is the helperText"
        />
      </div>
    );
  }
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
          <Textarea
            forceHideHelperText
            classNames={{ textarea: "hawa-h-full" }}
          />
        </div>
      </div>
    );
  }
};
