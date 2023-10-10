import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";

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

const Template = (args: any) => (
  <div className="hawa-max-w-lg">
    <CodeBlock {...args} tabs={args.tabs} />
  </div>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    code: "npm install @sikka/hawa",
  },
};

export const withTabs: Story = {
  render: (args) => <Template {...args} />,
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
  render: (args) => <Template {...args} />,
  args: {
    fileName: "hawa.js",
    language: "jsx",
    code: `<CodeBlock fileName='hawa.js'>
   Testing again
</CodeBlock>`,
  },
};
