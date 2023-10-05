import type { Meta, StoryObj } from "@storybook/react";
import { Announcement } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Announcement",
  component: Announcement,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Announcement/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Announcement>;

export default meta;
type Story = StoryObj<typeof Announcement>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <Announcement
        onActionClick={() => console.log("action clicked")}
        title="Welcome to Tayar - Your Ultimate Task Management Solution"
        subtitle="Simplify Your Daily Workflow, Boost Productivity, and Reclaim Valuable Time in Your Busy Schedule Today with Tayar - The Innovative and User-Centric Task Management Software Tailored for Individuals, Teams, and Businesses!"
        actionText="Try it out"
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
