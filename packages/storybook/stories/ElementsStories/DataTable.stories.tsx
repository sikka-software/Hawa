import { useEffect, useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Pencil } from "lucide-react";

import { Button } from "@sikka/hawa/elements/button";
import { Card, CardContent, CardHeader } from "@sikka/hawa/elements/card";
import { DataTable, ColumnDef } from "@sikka/hawa/elements/dataTable";
import { DropdownMenu } from "@sikka/hawa/elements/dropdownMenu";
import { SortButton } from "@sikka/hawa/elements/sortButton";
import { Toaster } from "@sikka/hawa/elements/toaster";
import { useToast } from "@sikka/hawa/hooks";

import { setLocale, t } from "../../translations/i18n";
import { generateDummyCompanies } from "../../utils/storiesUtils";

const meta = {
  title: "Elements/Tables/Data Table",
  component: DataTable,
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

let generatedData: Company[] = generateDummyCompanies(150);

type Company = {
  name: string;
  location: string;
  website: string;
  employees: number;
  share_price: number;
};

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  const companiesColumns: ColumnDef<Company>[] = [
    {
      accessorKey: "name",
      enableHiding: false,
      meta: { sortable: true },
      header: ({ column }) => (
        <SortButton
          condensed
          onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
          label={t("company")}
        />
      ),
    },
    {
      accessorKey: "location",
      header: t("location"),
      maxSize: 200,
      meta: { hidden: true },
    },
    {
      accessorKey: "website",
      meta: { sortable: true },
      header: ({ column }) => (
        <SortButton
          condensed
          onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
          label={t("website")}
        />
      ),
      cell: ({ row }) => (
        <a href={row.getValue("website")} className="clickable-link">
          {row.getValue("website")}
        </a>
      ),
    },

    {
      accessorKey: "employees",
      meta: { sortable: true, hidden: true },
      header: ({ column }) => {
        return (
          <SortButton
            condensed
            label={t("employees")}
            onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        );
      },
      cell: (d) => (
        <div className="hawa-font-medium">
          {d.row.getValue("employees")?.toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "share_price",
      meta: { sortable: true },
      header: ({ column }) => {
        return (
          <SortButton
            condensed
            label={t("share_price")}
            onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("share_price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="hawa-font-medium">{formatted}</div>;
      },
    },

    {
      id: "actions",
      header: t("actions"),
      enableHiding: false,

      cell: ({ row }) => {
        return (
          <span className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center hawa-p-2 hawa-px-0">
            <DropdownMenu
              trigger={
                <Button className="hawa-m-0 hawa-h-6" variant="ghost">
                  <span className="hawa-sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </Button>
              }
              items={[
                {
                  label: "copy",
                  value: "copy",
                  // action: () => navigator.clipboard.writeText(payment.id),
                },
              ]}
            />
          </span>
        );
      },
    },
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change isLoading to true after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts before the timeout is reached
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div dir={direction} className="hawa-w-full ">
      <DataTable<Company>
        {...args}
        translateFn={t}
        // isLoading={isLoading}
        // defaultSort="share_price"
        columns={companiesColumns}
        showCount
        // data={[]}
        // data={companiesData}
        filters={[".com", ".sa", ".ae"]}
        paginationPosition="top"
        data={generatedData}
        // itemsPerPage={[10, 50, 100, 150, 200, 500]}
        condensed
        direction={direction}
        texts={{
          columns: t("columns"),
          of: t("of"),
          item: "عناصر",
          total: t("total"),
          page: t("page"),
          noData: t("no-data"),
          goTo: t("go-to"),
          searchPlaceholder: t("search-items"),
        }}
      />
      <Toaster />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
export const WithSearch: Story = {
  render: Template.bind({}),
  args: {
    enableSearch: true,
  },
};
export const WithHideColumns: Story = {
  render: Template.bind({}),
  args: {
    enableHideColumns: true,
    enableSearch: true,
  },
};
export const WithoutHeader: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const companiesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: t("company"),
      },
      {
        accessorKey: "location",
        header: t("location"),
      },
      {
        accessorKey: "website",
        header: t("website"),
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        ),
      },

      {
        accessorKey: "employees",
        header: t("employees"),
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        ),
      },
      {
        accessorKey: "share_price",
        header: t("share_price"),
      },
      {
        id: "actions",
        header: t("actions"),
        enableHiding: false,

        cell: ({ row }) => {
          return (
            <span className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center hawa-p-2 hawa-px-0">
              <DropdownMenu
                trigger={
                  <Button className="hawa-m-0 hawa-h-6" variant="ghost">
                    <span className="hawa-sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </Button>
                }
                items={[
                  {
                    label: "copy",
                    value: "copy",
                    // action: () => navigator.clipboard.writeText(payment.id),
                  },
                ]}
              />
            </span>
          );
        },
      },
    ];

    return (
      <div
        dir={direction}
        className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-4 "
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <div className="hawa-text-2xl hawa-font-bold">Default Size</div>
          <DataTable<Company>
            {...args}
            hideHeader
            translateFn={t}
            defaultSort="share_price"
            columns={companiesColumns}
            data={generatedData.slice(0, 4)}
            condensed
            direction={direction}
            texts={{
              columns: t("columns"),
              of: t("of"),
              item: "عناصر",
              total: t("total"),
              page: t("page"),
              noData: t("no-data"),
              goTo: t("go-to"),
              searchPlaceholder: t("search-items"),
            }}
          />
        </div>
      </div>
    );
  },
  args: {
    enableHideColumns: false,
    enableSearch: false,
  },
};
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const companiesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: t("company"),
      },
      {
        accessorKey: "location",
        header: t("location"),
      },
      {
        accessorKey: "website",
        header: t("website"),
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        ),
      },

      {
        accessorKey: "employees",
        header: t("employees"),
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        ),
      },
      {
        accessorKey: "share_price",
        header: t("share_price"),
      },
      {
        id: "actions",
        header: t("actions"),
        enableHiding: false,

        cell: ({ row }) => {
          return (
            <span className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center hawa-p-2 hawa-px-0">
              <DropdownMenu
                trigger={
                  <Button className="hawa-m-0 hawa-h-6" variant="ghost">
                    <span className="hawa-sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </Button>
                }
                items={[
                  {
                    label: "copy",
                    value: "copy",
                    // action: () => navigator.clipboard.writeText(payment.id),
                  },
                ]}
              />
            </span>
          );
        },
      },
    ];
    const noPaddingCompaniesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: t("company"),
        meta: { padding: "noPadding", sortable: false },
      },

      {
        accessorKey: "location",
        header: t("location"),
        meta: { padding: "noPadding", sortable: false },
      },
      {
        accessorKey: "website",
        header: t("website"),
        meta: { padding: "noPadding", sortable: false },
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        ),
      },

      {
        accessorKey: "employees",
        header: t("employees"),
        meta: { padding: "noPadding", sortable: false },
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        ),
      },
      {
        accessorKey: "share_price",
        header: t("share_price"),
        meta: { padding: "noPadding", sortable: false },
      },
      {
        id: "actions",
        header: t("actions"),
        enableHiding: false,
        meta: { padding: "noPadding", sortable: false },
        cell: ({ row }) => {
          return (
            <span className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center hawa-px-0">
              <DropdownMenu
                trigger={
                  <Button className="hawa-m-0 hawa-h-6" variant="ghost">
                    <span className="hawa-sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </Button>
                }
                items={[
                  {
                    label: "copy",
                    value: "copy",
                    // action: () => navigator.clipboard.writeText(payment.id),
                  },
                ]}
              />
            </span>
          );
        },
      },
    ];

    return (
      <div
        dir={direction}
        className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-4 "
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <div className="hawa-text-2xl hawa-font-bold">Default Size</div>
          <DataTable<Company>
            {...args}
            translateFn={t}
            defaultSort="share_price"
            columns={companiesColumns}
            data={generatedData.slice(0, 4)}
            // condensed
            direction={direction}
            texts={{
              columns: t("columns"),
              of: t("of"),
              item: "عناصر",
              total: t("total"),
              page: t("page"),
              noData: t("no-data"),
              goTo: t("go-to"),
              searchPlaceholder: t("search-items"),
            }}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <div className="hawa-text-2xl hawa-font-bold">Condensed Size</div>
          <DataTable<Company>
            {...args}
            translateFn={t}
            defaultSort="share_price"
            columns={companiesColumns}
            data={generatedData.slice(0, 4)}
            condensed
            direction={direction}
            texts={{
              columns: t("columns"),
              of: t("of"),
              item: "عناصر",
              total: t("total"),
              page: t("page"),
              noData: t("no-data"),
              goTo: t("go-to"),
              searchPlaceholder: t("search-items"),
            }}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <div className="hawa-text-2xl hawa-font-bold">No Padding Size</div>
          <DataTable<Company>
            {...args}
            translateFn={t}
            defaultSort="share_price"
            columns={noPaddingCompaniesColumns}
            data={generatedData.slice(0, 4)}
            direction={direction}
            texts={{
              columns: t("columns"),
              of: t("of"),
              item: "عناصر",
              total: t("total"),
              page: t("page"),
              noData: t("no-data"),
              goTo: t("go-to"),
              searchPlaceholder: t("search-items"),
            }}
          />
        </div>
      </div>
    );
  },
};
export const InCard: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const companiesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        enableHiding: false,

        // header: t("company"),
        meta: { sortable: true },
        header: ({ column }) => (
          <SortButton
            condensed
            onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
            label={t("company")}
          />
        ),
      },
      {
        accessorKey: "location",
        header: t("location"),
      },
      {
        accessorKey: "website",
        meta: { sortable: true },
        header: ({ column }) => (
          <SortButton
            condensed
            onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
            label={t("website")}
          />
        ),
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        ),
      },

      {
        accessorKey: "employees",
        meta: { sortable: true },
        header: ({ column }) => {
          return (
            <SortButton
              condensed
              label={t("employees")}
              onSort={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          );
        },
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        ),
      },
      {
        accessorKey: "share_price",
        meta: { sortable: true },
        header: ({ column }) => {
          return (
            <SortButton
              condensed
              label={t("share_price")}
              onSort={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          );
        },
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("share_price"));
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);

          return <div className="hawa-font-medium">{formatted}</div>;
        },
      },

      {
        id: "actions",
        header: t("actions"),
        enableHiding: false,

        cell: ({ row }) => {
          return (
            <span className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center hawa-p-2 hawa-px-0">
              <DropdownMenu
                // width="parent"
                trigger={
                  <Button className="hawa-m-0 hawa-h-6" variant="ghost">
                    <span className="hawa-sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </Button>
                }
                items={[
                  {
                    label: "copy",
                    value: "copy",
                    // action: () => navigator.clipboard.writeText(payment.id),
                  },
                ]}
              />
            </span>
          );
        },
      },
    ];
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
      // Set a timeout to change isLoading to true after 2 seconds
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Clear the timeout if the component unmounts before the timeout is reached
      return () => {
        clearTimeout(timeoutId);
      };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
      <Card className="hawa-max-h-[400px] hawa-w-full">
        <CardHeader>
          <div
            className={" hawa-flex hawa-w-full hawa-items-center hawa-gap-2"}
          >
            <div className="hawa-flex hawa-w-full hawa-flex-row hawa-justify-between">
              <h1 className={"hawa-text-xl hawa-font-semibold"}>Title</h1>
              <div className="hawa-flex hawa-flex-row hawa-gap-2">
                <Button size="smallIcon">
                  <Pencil className="hawa-h-4 hawa-w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div dir={direction} className="hawa-w-full ">
            <DataTable<Company>
              {...args}
              translateFn={t}
              isLoading={isLoading}
              defaultSort="share_price"
              columns={companiesColumns}
              showCount
              // data={[]}
              // data={companiesData}
              data={generatedData}
              // itemsPerPage={[10, 50, 100, 150, 200, 500]}
              condensed
              direction={direction}
              texts={{
                columns: t("columns"),
                of: t("of"),
                item: "عناصر",
                total: t("total"),
                page: t("page"),
                noData: t("no-data"),
                goTo: t("go-to"),
                searchPlaceholder: t("search-items"),
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};
