import type { Meta, StoryObj } from "@storybook/react";
import { DocsSidebar } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/DocsSidebar",
  component: DocsSidebar,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<DocsSidebar/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DocsSidebar>;

export default meta;
type Story = StoryObj<typeof DocsSidebar>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction} className="hawa-flex hawa-flex-row">
      <div className="hawa-w-36 hawa-absolute hawa-top-0 hawa-left-0">
        <DocsSidebar />
      </div>
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div
          id="section-1"
          style={{ minHeight: "90vh", backgroundColor: "green" }}
        >
          Section 1 Content
        </div>
        <div
          id="section-2"
          style={{ minHeight: "90vh", backgroundColor: "green" }}
        >
          Section 2 Content
        </div>
        <div
          id="section-3"
          style={{ minHeight: "90vh", backgroundColor: "green" }}
        >
          Section 3 Content
        </div>
      </div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
