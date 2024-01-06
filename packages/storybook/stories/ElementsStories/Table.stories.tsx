import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  SimpleTable,
  Table
} from "../../../components/elements";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Tables/Simple Table",
  component: Table
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
          { header: "version", accessorKey: "version" },
          { header: "nickname", accessorKey: "nickname" },
          { header: "date", accessorKey: "date" },
          { header: "number", accessorKey: "number" }
        ]}
        data={[
          { project: "Hawa", version: "0.4.8" },
          { project: "Hajar", version: "0.1.3" },
          { project: "Tayar", version: "0.5.8" },
          { project: "Silk", version: "1.0.5" }
        ]}
      />
    </div>
  );
};
export const SimpleTableStory: Story = {
  name: "Simple Table",
  render: Template.bind({})
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
              { header: "version", accessorKey: "version" },
              { header: "nickname", accessorKey: "nickname" },
              { header: "date", accessorKey: "date" },
              { header: "number", accessorKey: "number" }
            ]}
            data={[
              { project: "Hawa", version: "0.4.8" },
              { project: "Hajar", version: "0.1.3" },
              { project: "Tayar", version: "0.5.8" },
              { project: "Silk", version: "1.0.5" }
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
              { header: "version", accessorKey: "version" },
              { header: "nickname", accessorKey: "nickname" },
              { header: "date", accessorKey: "date" },
              { header: "number", accessorKey: "number" }
            ]}
            data={[
              { project: "Hawa", version: "0.4.8" },
              { project: "Hajar", version: "0.1.3" },
              { project: "Tayar", version: "0.5.8" },
              { project: "Silk", version: "1.0.5" }
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
            columns={[
              {
                header: "Project",
                accessorKey: "project",
                meta: { sortable: false, padding: "noPadding" }
              },
              {
                header: "Version",
                accessorKey: "version",
                meta: { sortable: false, padding: "noPadding" },
                cell: () => (
                  <div className="hawa-w-full hawa-h-full hawa-p-0 hawa-bg-red-300">
                    test
                  </div>
                )
              },

              {
                header: "Test",
                meta: { sortable: false, padding: "noPadding" },
                accessorKey: "test"
              }
            ]}
            data={[
              { project: "Hawa", version: "0.4.8" },
              { project: "Hajar", version: "0.1.3" },
              { project: "Tayar", version: "0.5.8" },
              { project: "Silk", version: "1.0.5" }
            ]}
          />
        </div>
      </div>
    );
  }
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
                  { header: "version", accessorKey: "version" },
                  { header: "nickname", accessorKey: "nickname" },
                  { header: "date", accessorKey: "date" },
                  { header: "number", accessorKey: "number" }
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
                  { project: "Silk", version: "1.0.5" }
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
};
