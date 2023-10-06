import type { Meta, StoryObj } from "@storybook/react";
import { LeadGenerator } from "../../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/LeadGenerator",
  component: LeadGenerator,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<LeadGenerator/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LeadGenerator>;

export default meta;
type Story = StoryObj<typeof LeadGenerator>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <LeadGenerator
        submitHandler={(e) => console.log("Form Submitted: ", e)}
        {...args}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
  args: {
    texts: {
      submit: "Submit",
      title: "Get a free book guide",
      subtitle: "Sign up to get free samples of our top books",
    },
  },
};
