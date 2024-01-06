import type { StoryObj } from "@storybook/react";
import { Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Classes",
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"Classes"}</h1>
          <p>
            These components don't need to be imported. They're simply class
            names that can be added to any existing component or a regular HTML
            component.
          </p>
          <p>Some of theses classes only work on specific HTML tags.</p>
          {/* <ArgsTable /> */}
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Link: Story = {
  render: () => <div className="clickable-link">Clickable Link</div>,
};
export const NewWindowLink: Story = {
  render: () => <div className="link">This is a link</div>,
};
export const InlineCode: Story = {
  render: () => <div className="inline-code">Inline Code</div>,
};
