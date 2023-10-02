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

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div>
      <Alert
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="info"
        persistant={true}
      />
    </div>
  );
};
export const Default: Story = {
  render: () => (
    <div>
      <Alert
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="info"
        persistant={true}
      />
      <Alert
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="success"
        persistant={true}
      />
      <Alert
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="warning"
        persistant={true}
      />
      <Alert
        title="Default Alert"
        text="This is an alert that can be used to share certain information without any severity."
        severity="error"
        persistant={true}
      />
    </div>
  ),
};
