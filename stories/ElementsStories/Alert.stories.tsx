import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Alert/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <div>
      <Alert
        {...args}
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="none"
        // persistant={true}
      />
      <Alert
        {...args}
        title="Info Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="info"
        // persistant={true}
      />
      <Alert
        {...args}
        title="Success Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="success"
        // persistant={true}
      />
      <Alert
        {...args}
        title="Warning Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="warning"
        // persistant={true}
      />
      <Alert
        {...args}
        title="Error Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="error"
        // persistant={true}
      />
    </div>
  ),
  args: {
    persistant: false,
  },
};
export const Persistant: Story = {
  render: (args) => (
    <div>
      <Alert
        {...args}
        title="Persistant Alert"
        text="This is an alert that cannot be closed. It can be used to share certain information that we don't want the user to dismiss"
        severity="none"
        persistant={true}
      />
    </div>
  ),
  args: {
    persistant: false,
  },
};
