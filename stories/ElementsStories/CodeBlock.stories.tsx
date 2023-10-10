import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { useDarkMode } from "storybook-dark-mode";

const meta = {
  title: "Elements/CodeBlock",
  component: CodeBlock,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<CodeBlock/>"}</h1>

          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  render: (args) => {
    const isDark = useDarkMode();

    return (
      <div className="hawa-max-w-lg hawa-flex hawa-flex-col hawa-gap-6">
        <CodeBlock {...args} tabs={args.tabs} />
        <CodeBlock
          language="jsx"
          code={`<CodeBlock fileName='hawa.js'>
  Testing again
</CodeBlock>`}
        />
      </div>
    );
  },
  args: {
    code: "npm install @sikka/hawa",
  },
};

export const withTabs: Story = {
  render: (args) => (
    <div className="hawa-max-w-lg">
      <CodeBlock {...args} tabs={args.tabs} />
    </div>
  ),
  args: {
    tabs: [
      {
        title: "npm",
        code: "npm install @sikka/hawa",
      },
      {
        title: "yarn",
        code: "yarn add @sikka/hawa",
      },
      {
        title: "pnpm",
        code: "pnpm add @sikka/hawa",
      },
    ],
  },
};
export const withFileName: Story = {
  render: (args) => (
    <div className="hawa-max-w-lg">
      <CodeBlock {...args} tabs={args.tabs} />
    </div>
  ),
  args: {
    fileName: "hawa.js",
    language: "jsx",
    code: `<CodeBlock fileName='hawa.js'>
   Testing again
</CodeBlock>`,
  },
};
