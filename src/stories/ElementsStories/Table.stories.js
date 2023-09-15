import React from "react";
import { Button, HawaTable, HawaTextField } from "../../elements";
import { setLocale, t } from "../../translations/i18n";

export default {
  title: "Elements/Table",
  component: HawaTable,
  argTypes: {
    columns: {
      control: "array",
      description: "An array of column names"
    },

    rows: {
      control: "array",
      description:
        "A array of arrays. Each array inside the main array is a single row"
    },
    direction: {
      control: "select",
      options: ["ar", "en"],
      description:
        "A array of arrays. Each array inside the main array is a single row"
    },
    direction: {
      control: "select",
      options: ["normal", "small"],
      description:
        "A array of arrays. Each array inside the main array is a single row"
    }
  },
  parameters: {
    // backgrounds: {
    //   default: "light",
    //   values: [{ name: "light", value: "#ECEBE4" }]
    // }
  }
};

const makeDummyData = (len) => {
  let products = [];
  for (let i = 0; i < len; i++) {
    products.push({
      name: "Product " + (i + 1),
      price: "$" + (i + 1) + ".00",
      id: "P" + ("000" + (i + 1)).slice(-4)
    });
  }

  let arrays = [];

  for (let i = 0; i < products.length; i += 4) {
    let subArray = products.slice(i, i + 4).map((product) => {
      let randomNumber = Math.floor(Math.random() * 100);
      return [
        { hidden: false, value: product.name },
        {
          hidden: false,
          value: "Product " + i
          // value: (
          //   <div className="mt-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
          //     <div
          //       className="h-2.5 rounded bg-primary"
          //       style={{
          //         width: `${randomNumber ?? 0}%`
          //       }}
          //     ></div>
          //   </div>
          // )
        },

        // { hidden: false, value: product.price },
        { hidden: true, value: product.id },
        { hidden: false, value: randomNumber }
      ];
    });
    arrays = arrays.concat(subArray);
  }

  console.log(arrays);
  return arrays;
};
let dummyRowData = [
  [
    { hidden: false, value: "Logo Design" },
    { hidden: true, value: "230423847239838" },
    { hidden: false, value: 1200, suffix: "SAR" },
    { hidden: false, value: 1200, suffix: "SAR" },
    {
      hidden: false,
      value: 544
    }
  ],
  [
    { hidden: false, value: "Website Design" },
    { hidden: true, value: "2340238402374" },
    { hidden: false, value: 2200, suffix: "SAR" },
    { hidden: false, value: 2200, suffix: "SAR" },
    {
      hidden: false,
      value: 55
    }
  ],
  [
    { hidden: false, value: "Hosting" },
    { hidden: true, value: "2309487209483274" },
    { hidden: false, value: 200, suffix: "SAR" },
    { hidden: false, value: 200, suffix: "SAR" },
    {
      hidden: false,
      value: 12
    }
  ],
  [
    { hidden: false, value: "Social Media Management" },
    { hidden: true, value: "3432042304382" },
    { hidden: false, value: 1800, suffix: "SAR" },
    { hidden: false, value: 1800, suffix: "SAR" },
    {
      hidden: false,
      value: 4564
    }
  ]
];
let dummyColsData = [
  { hidden: false, value: "Product", sortable: false },
  { hidden: true, value: "ID", sortable: false },
  { hidden: false, value: "Price", sortable: true },
  { hidden: false, value: "Date", sortable: false },
  { hidden: false, value: "Gate", sortable: false }
];

export const NoData = (args) => {
  return (
    <HawaTable
      direction={args.direction}
      columns={[
        { hidden: false, value: "Product" },
        { hidden: false, value: "Price" },
        { hidden: false, value: "Date" },
        { hidden: false, value: "Another" },
        { hidden: false, value: "Price" },
        { hidden: false, value: "Date" },
        { hidden: false, value: "Another" }
      ]}
      noDataText={"No data"}
    />
  );
};
export const DataOnly = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir={globals.globals.locale === "ar" ? "rtl" : "ltr"}>
      <HawaTable
        direction={globals.globals.locale === "ar" ? "rtl" : "ltr"}
        bordersWidth="1"
        // direction={args.direction}
        columns={[
          { hidden: false, value: "Product" },
          { hidden: true, value: "ID" },
          { hidden: false, value: "Price" },
          { hidden: false, value: "Times Bought" }
        ]}
        rows={makeDummyData(33)}
        {...args}
      />
    </div>
  );
};

DataOnly.args = {
  borders: "all"
};
export const DataWithActions = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir="ltr" className="">
      <HawaTable
        direction="ltr"
        actions={[
          {
            value: "view",
            label: "View"
          },
          {
            value: "edit",
            label: "Edit"
          },
          {
            value: "delete",
            label: "Delete"
          }
        ]}
        handleActionClick={(action, row) =>
          console.log("doing " + action + " to " + row)
        }
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
DataWithActions.args = {
  borders: ["all"],
  bordersWidth: 1
};
export const SortableData = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir="ltr" className="">
      <HawaTable
        direction="ltr"
        actions={[
          { label: "View", action: (e) => console.log("viewing", e) },
          { label: "Edit", action: (e) => console.log("editing", e) },
          { label: "Delete", action: (e) => console.log("deleting", e) }
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
SortableData.args = {
  borders: ["all"],
  bordersWidth: 1
};
export const WithHeader = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir="ltr" className="">
      <HawaTable
        headerTools={
          <>
            <HawaTextField
              icon={
                <svg
                  aria-label="Search Icon"
                  stroke="currentColor"
                  fill="gray"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              }
              placeholder={"Search"}
              width="full"
              margin="none"
            />{" "}
            <div className="flex flex-row items-center justify-between gap-2">
              <Button className="flex flex-row gap-2">
                <svg
                  aria-label="Filter Icon"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
                {"Filter"}
                <svg
                  aria-label="Chevron Right Icon"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </Button>
            </div>
          </>
        }
        direction="ltr"
        actions={[
          { label: "View", action: (e) => console.log("viewing", e) },
          { label: "Edit", action: (e) => console.log("editing", e) },
          { label: "Delete", action: (e) => console.log("deleting", e) }
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
WithHeader.args = {
  borders: ["all"],
  bordersWidth: 1
};

export const RTL = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir="rtl">
      <HawaTable
        direction={"rtl"}
        columns={[
          { hidden: false, value: "المنتج" },
          { hidden: false, value: "السعر" },
          { hidden: false, value: "الوزن" },
          { hidden: false, value: "الكمية" }
        ]}
        texts={{
          actions: "الإحرائات",
          items: "عناصر",
          noData: "لا توجد عناصر",
          page: "صفحة"
        }}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
RTL.args = {
  borders: "inner"
};

export const RTLWithActions = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <div dir="rtl" className="">
      <HawaTable
        direction="rtl"
        texts={{
          actions: "الإحرائات",
          items: "عناصر",
          noData: "لا توجد عناصر",
          page: "صفحة"
        }}
        actions={[
          { label: "View", action: (e) => console.log("viewing", e) },
          { label: "Edit", action: (e) => console.log("editing", e) },
          { label: "Delete", action: (e) => console.log("deleting", e) }
        ]}
        columns={[
          { hidden: false, value: "المنتج" },
          { hidden: false, value: "السعر" },
          { hidden: false, value: "الوزن" },
          { hidden: false, value: "الكمية" }
        ]}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
