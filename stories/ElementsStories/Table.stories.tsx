import type { Meta, StoryObj } from "@storybook/react";
import { SimpleTable, Table } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Tables/Simple Table",

  component: Table,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Table/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md"
      dir={direction}
    >
      <SimpleTable
        direction={direction}
        columns={[
          { header: "Project", accessorKey: "project" },
          { header: "Version", accessorKey: "version" },
          { header: "Version", accessorKey: "version" },
          { header: "Version", accessorKey: "version" },
          { header: "Version", accessorKey: "version" },
        ]}
        data={[
          { project: "Hawa", version: "0.4.8" },
          { project: "Hajar", version: "0.1.3" },
          { project: "Tayar", version: "0.5.8" },
          { project: "Silk", version: "1.0.5" },
        ]}
      />
    </div>
  );
};
export const SimpleTableStory: Story = {
  name: "Simple Table",
  render: Template.bind({}),
};
