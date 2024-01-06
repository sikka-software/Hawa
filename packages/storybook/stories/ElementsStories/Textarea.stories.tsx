import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@sikka/hawa/elements/avatar";
import { Button } from "@sikka/hawa/elements/button";
import { Input } from "@sikka/hawa/elements/input";
import { Textarea } from "@sikka/hawa/elements/textarea";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Textarea",
  component: Textarea
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <div className="hawa-flex hawa-w-64 hawa-flex-col hawa-gap-4">
        <Textarea
          label="Textarea component"
          helperText="Helper text here"
          textareaProps={{ placeholder: "Placeholder text here" }}
        />
      </div>
    );
  },
  parameters: { layout: "centered" }
};
export const WithCount: Story = {
  render: () => {
    const [text, setText] = useState("");

    return (
      <div className="hawa-flex hawa-w-full  hawa-flex-row hawa-gap-4">
        <Textarea
          showCount
          label="With Count (Top)"
          countPosition="top"
          textareaProps={{
            value: text,
            maxLength: 100,
            placeholder: "Placeholder text here",
            onChange: (e) => setText(e.target.value)
          }}
        />
        <Textarea
          showCount
          label="With Count (Bottom)"
          helperText="This is the helperText"
          textareaProps={{
            value: text,
            maxLength: 100,
            placeholder: "Placeholder text here",
            onChange: (e) => setText(e.target.value)
          }}
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
