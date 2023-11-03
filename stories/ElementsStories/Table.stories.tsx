import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  SimpleTable,
  Table,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { Pencil } from "lucide-react";

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
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div
          className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md hawa-gap-2"
          dir={direction}
        >
          <h1>Default Size</h1>
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
        <div
          className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md hawa-gap-2"
          dir={direction}
        >
          <h1>Condensed Size</h1>
          <SimpleTable
            direction={direction}
            condensed
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
        <div
          className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md hawa-gap-2"
          dir={direction}
        >
          <h1>No Padding</h1>
          <SimpleTable
            direction={direction}
            // condensed
            columns={[
              {
                header: "Project",
                accessorKey: "project",
                meta: {
                  sortable: false,
                  padding: "noPadding",
                },
              },
              {
                header: "Version",
                accessorKey: "version",
                meta: { sortable: false, padding: "noPadding" },
                cell: () => (
                  <div className="hawa-w-full hawa-h-full hawa-p-0 hawa-bg-red-300">
                    test
                  </div>
                ),
              },
              {
                header: "Version",
                meta: { sortable: false, padding: "noPadding" },
                accessorKey: "version",
              },
              {
                header: "Version",
                meta: { sortable: false, padding: "noPadding" },
                accessorKey: "version",
              },
              {
                header: "Version",
                meta: { sortable: false, padding: "noPadding" },
                accessorKey: "version",
              },
            ]}
            data={[
              { project: "Hawa", version: "0.4.8" },
              { project: "Hajar", version: "0.1.3" },
              { project: "Tayar", version: "0.5.8" },
              { project: "Silk", version: "1.0.5" },
            ]}
          />
        </div>
      </div>
    );
  },
};

export const TableInCard: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div>
        Work in progress
        <Card className="hawa-w-full hawa-max-h-[400px] hawa-flex hawa-flex-col hawa-bg-blue-400 hawa-p-1">
          <CardContent
            headless
            className="hawa-bg-red-200 hawa-p-1 hawa-overflow-y-auto"
          >
            <div className="hawa-bg-green-200 hawa-p-1 hawa-overflow-y-auto hawa-h-full">
              <SimpleTable
                condensed
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
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                  { project: "Hawa", version: "0.4.8" },
                  { project: "Hajar", version: "0.1.3" },
                  { project: "Tayar", version: "0.5.8" },
                  { project: "Silk", version: "1.0.5" },
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};
