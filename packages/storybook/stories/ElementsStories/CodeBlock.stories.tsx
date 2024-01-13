import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { CodeBlock } from "@sikka/hawa/elements/codeBlock";

const meta = {
  title: "Elements/CodeBlock",
  component: CodeBlock
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  render: (args) => {
    const isDark = useDarkMode();

    return (
      <div className="hawa-flex hawa-max-w-lg hawa-flex-col">
        <CodeBlock {...args} language="bash" tabs={args.tabs} />
        <CodeBlock
          language="jsx"
          code={`<CodeBlock fileName='hawa.js'>
  Testing again
</CodeBlock>`}
        />
      </div>
    );
  },
  args: { code: "npm install @sikka/hawa" }
};

export const withTabs: Story = {
  render: (args) => {
    const isDark = useDarkMode();

    return (
      <div className="hawa-max-w-lg">
        <CodeBlock {...args} language={"rust"} tabs={args.tabs} />
      </div>
    );
  },
  args: {
    tabs: [
      { title: "npm", code: "npm install @sikka/hawa" },
      { title: "yarn", code: "yarn add @sikka/hawa" },
      { title: "pnpm", code: "pnpm add @sikka/hawa" }
    ]
  }
};
export const withFileName: Story = {
  render: (args) => {
    const isDark = useDarkMode();

    return (
      <div className="hawa-max-w-lg">
        <CodeBlock {...args} tabs={args.tabs} />
      </div>
    );
  },
  args: {
    fileName: "hawa.js",
    language: "jsx",
    code: `<CodeBlock fileName='hawa.js'>
   Testing again
</CodeBlock>`
  }
};
export const withBoth: Story = {
  render: (args) => {
    const isDark = useDarkMode();

    return (
      <div className="hawa-max-w-lg">
        <CodeBlock {...args} tabs={args.tabs} />
      </div>
    );
  },
  args: {
    fileName: "hawa.js",
    language: "jsx",
    tabs: [
      { title: "npm", code: "npm install @sikka/hawa" },
      { title: "yarn", code: "yarn add @sikka/hawa" },
      { title: "pnpm", code: "pnpm add @sikka/hawa" }
    ]
  }
};
