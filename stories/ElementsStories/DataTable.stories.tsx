import { useEffect, useState } from "react";

import { useToast } from "@/packages/components/hooks/index";
import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

import { Button } from "@elements/button";
import { Card, CardContent, CardHeader } from "@elements/card";
import { DataTable } from "@elements/dataTable";
import { DropdownMenu } from "@elements/dropdownMenu";
import { SortButton } from "@elements/sortButton";
import { Toaster } from "@elements/toaster";

import { generateDummyCompanies } from "../storiesUtils";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Tables/Data Table",
  component: DataTable
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

let companiesData: Company[] = [
  {
    name: "Microsoft",
    location: "United States",
    website: "www.microsoft.com",
    employees: 123456,
    share_price: 45.12
  },
  {
    name: "Apple Inc.",
    location: "United States",
    website: "www.apple.com",
    employees: 147000,
    share_price: 150.99
  },
  {
    name: "Amazon",
    location: "United States",
    website: "www.amazon.com",
    employees: 876000,
    share_price: 3345.67
  },
  {
    name: "Google",
    location: "United States",
    website: "www.google.com",
    employees: 150000,
    share_price: 2750.33
  },
  {
    name: "Facebook",
    location: "United States",
    website: "www.facebook.com",
    employees: 60000,
    share_price: 360.45
  },
  {
    name: "Tesla",
    location: "United States",
    website: "www.tesla.com",
    employees: 70000,
    share_price: 750.2
  },
  {
    name: "Alphabet Inc.",
    location: "United States",
    website: "www.abc.xyz",
    employees: 135000,
    share_price: 2850.75
  },
  {
    name: "Alibaba Group",
    location: "China",
    website: "www.alibaba.com",
    employees: 115000,
    share_price: 200.1
  },
  {
    name: "Samsung",
    location: "South Korea",
    website: "www.samsung.com",
    employees: 270000,
    share_price: 85.6
  },
  {
    name: "IBM",
    location: "United States",
    website: "www.ibm.com",
    employees: 34500,
    share_price: 130.25
  },
  {
    name: "Toyota",
    location: "Japan",
    website: "www.toyota-global.com",
    employees: 360000,
    share_price: 150.75
  },
  {
    name: "Walmart",
    location: "United States",
    website: "www.walmart.com",
    employees: 2200000,
    share_price: 140.99
  },
  {
    name: "General Electric",
    location: "United States",
    website: "www.ge.com",
    employees: 283000,
    share_price: 12.45
  },
  {
    name: "Coca-Cola",
    location: "United States",
    website: "www.coca-cola.com",
    employees: 72500,
    share_price: 54.3
  },
  {
    name: "Ford",
    location: "United States",
    website: "www.ford.com",
    employees: 190000,
    share_price: 25.8
  },
  {
    name: "Boeing",
    location: "United States",
    website: "www.boeing.com",
    employees: 140000,
    share_price: 220.15
  },
  {
    name: "Nestle",
    location: "Switzerland",
    website: "www.nestle.com",
    employees: 273000,
    share_price: 105.4
  },
  {
    name: "Procter & Gamble",
    location: "United States",
    website: "www.pg.com",
    employees: 99000,
    share_price: 135.8
  },
  {
    name: "Sony",
    location: "Japan",
    website: "www.sony.net",
    employees: 111700,
    share_price: 75.2
  },
  {
    name: "Volkswagen",
    location: "Germany",
    website: "www.vw.com",
    employees: 670000,
    share_price: 220.5
  },
  {
    name: "JPMorgan Chase",
    location: "United States",
    website: "www.jpmorganchase.com",
    employees: 256105,
    share_price: 120.3
  },
  {
    name: "Pfizer",
    location: "United States",
    website: "www.pfizer.com",
    employees: 78000,
    share_price: 44.1
  },
  {
    name: "ExxonMobil",
    location: "United States",
    website: "www.exxonmobil.com",
    employees: 74900,
    share_price: 62.9
  },
  {
    name: "AT&T",
    location: "United States",
    website: "www.att.com",
    employees: 230000,
    share_price: 30.25
  },
  {
    name: "Verizon",
    location: "United States",
    website: "www.verizon.com",
    employees: 135000,
    share_price: 55.75
  },
  {
    name: "Intel",
    location: "United States",
    website: "www.intel.com",
    employees: 110800,
    share_price: 60.4
  },
  {
    name: "Cisco Systems",
    location: "United States",
    website: "www.cisco.com",
    employees: 77000,
    share_price: 55.9
  },
  {
    name: "Oracle",
    location: "United States",
    website: "www.oracle.com",
    employees: 138000,
    share_price: 82.15
  },
  {
    name: "Adobe Inc.",
    location: "United States",
    website: "www.adobe.com",
    employees: 24500,
    share_price: 285.2
  },
  {
    name: "Netflix",
    location: "United States",
    website: "www.netflix.com",
    employees: 9800,
    share_price: 550.75
  },
  {
    name: "Mitsubishi",
    location: "Japan",
    website: "www.mitsubishi.com",
    employees: 87000,
    share_price: 32.4
  },
  {
    name: "Novartis",
    location: "Switzerland",
    website: "www.novartis.com",
    employees: 110000,
    share_price: 86.2
  },
  {
    name: "Siemens",
    location: "Germany",
    website: "www.siemens.com",
    employees: 300000,
    share_price: 120.1
  },
  {
    name: "Nokia",
    location: "Finland",
    website: "www.nokia.com",
    employees: 92000,
    share_price: 4.5
  },
  {
    name: "McDonald's",
    location: "United States",
    website: "www.mcdonalds.com",
    employees: 205000,
    share_price: 245.6
  }
];
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

      // header: t("company"),
      meta: { sortable: true },
      header: ({ column }) => (
        <SortButton
          condensed
          onSort={() => column.toggleSorting(column.getIsSorted() === "asc")}
          label={t("company")}
        />
      )
    },
    {
      accessorKey: "location",
      header: t("location")
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
      )
    },

    {
      accessorKey: "employees",
      meta: { sortable: true },
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
      )
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
          currency: "USD"
        }).format(amount);

        return <div className="hawa-font-medium">{formatted}</div>;
      }
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
                  value: "copy"
                  // action: () => navigator.clipboard.writeText(payment.id),
                }
              ]}
            />
          </span>
        );
      }
    }
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
    <div dir={direction} className="hawa-w-full ">
      <Button
        className="hawa-mb-4"
        onClick={() =>
          toast({
            title: "test",
            description: "Description",
            severity: "success",
            duration: 5000
          })
        }
      >
        Toast
      </Button>
      <DataTable<Company>
        {...args}
        translateFn={t}
        isLoading={isLoading}
        // defaultSort="share_price"
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
          searchPlaceholder: t("search-items")
        }}
      />
      <Toaster />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({})
};
export const WithSearch: Story = {
  render: Template.bind({}),
  args: {
    enableSearch: true
  }
};
export const WithHideColumns: Story = {
  render: Template.bind({}),
  args: {
    enableHideColumns: true,
    enableSearch: true
  }
};
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const companiesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: t("company")
      },
      {
        accessorKey: "location",
        header: t("location")
      },
      {
        accessorKey: "website",
        header: t("website"),
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        )
      },

      {
        accessorKey: "employees",
        header: t("employees"),
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        )
      },
      {
        accessorKey: "share_price",
        header: t("share_price")
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
                    value: "copy"
                    // action: () => navigator.clipboard.writeText(payment.id),
                  }
                ]}
              />
            </span>
          );
        }
      }
    ];
    const noPaddingCompaniesColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: t("company"),
        meta: { padding: "noPadding", sortable: false }
      },

      {
        accessorKey: "location",
        header: t("location"),
        meta: { padding: "noPadding", sortable: false }
      },
      {
        accessorKey: "website",
        header: t("website"),
        meta: { padding: "noPadding", sortable: false },
        cell: ({ row }) => (
          <a href={row.getValue("website")} className="clickable-link">
            {row.getValue("website")}
          </a>
        )
      },

      {
        accessorKey: "employees",
        header: t("employees"),
        meta: { padding: "noPadding", sortable: false },
        cell: (d) => (
          <div className="hawa-font-medium">
            {d.row.getValue("employees")?.toLocaleString()}
          </div>
        )
      },
      {
        accessorKey: "share_price",
        header: t("share_price"),
        meta: { padding: "noPadding", sortable: false }
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
                    value: "copy"
                    // action: () => navigator.clipboard.writeText(payment.id),
                  }
                ]}
              />
            </span>
          );
        }
      }
    ];
    const { toast } = useToast();

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
              searchPlaceholder: t("search-items")
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
              searchPlaceholder: t("search-items")
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
              searchPlaceholder: t("search-items")
            }}
          />
        </div>
      </div>
    );
  }
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
        )
      },
      {
        accessorKey: "location",
        header: t("location")
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
        )
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
        )
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
            currency: "USD"
          }).format(amount);

          return <div className="hawa-font-medium">{formatted}</div>;
        }
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
                    value: "copy"
                    // action: () => navigator.clipboard.writeText(payment.id),
                  }
                ]}
              />
            </span>
          );
        }
      }
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
                searchPlaceholder: t("search-items")
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
};
