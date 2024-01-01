import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@sikka/hawa/elements/alert";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Alert",
  component: Alert,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div>
        <Alert
          {...args}
          title="Default Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="none"
          direction={direction}
        />
        <Alert
          {...args}
          title="Info Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="info"
          direction={direction}
        />
        <Alert
          {...args}
          title="Success Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="success"
          direction={direction}
        />
        <Alert
          {...args}
          title="Warning Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="warning"
          direction={direction}
        />
        <Alert
          {...args}
          title="Error Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="error"
          direction={direction}
        />
        <Alert
          {...args}
          title="Offer Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="hyper"
          direction={direction}
        />
        <Alert
          {...args}
          title="Offer Alert"
          text="This is an alert that can be used to share certain information without any severity."
          severity="oceanic"
          direction={direction}
        />
      </div>
    );
  },
  args: {
    persistent: false
  }
};
export const Persistent: Story = {
  render: (args) => (
    <div>
      <Alert
        {...args}
        title="Persistent Alert"
        text="This is an alert that cannot be closed. It can be used to share certain information that we don't want the user to dismiss"
        severity="none"
        persistent={true}
      />
    </div>
  ),
  args: {
    persistent: false
  }
};
