import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { LeadGenerator } from "@blocks/misc";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/LeadGenerator",
  component: LeadGenerator,
  parameters: { layout: "centered" }
} satisfies Meta<typeof LeadGenerator>;

export default meta;
type Story = StoryObj<typeof LeadGenerator>;

export const Default: Story = {
  render: (args: any, globals: any) => {
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
  },
  args: {
    texts: {
      submit: "Submit",
      title: "Get a free book guide",
      subtitle: "Sign up to get free samples of our top books"
    }
  }
};
