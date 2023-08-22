import React from "react";
import { HawaTable } from "../../elements";

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
      size={args.size}
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
export const DataOnly = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <HawaTable
      bordersWidth="1"
      direction={args.direction}
      size={args.size}
      columns={[
        { hidden: false, value: "Product" },
        { hidden: true, value: "ID" },
        { hidden: false, value: "Price" },
        { hidden: false, value: "Times Bought" }
      ]}
      rows={makeDummyData(33)}
      {...args}
    />
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
          [
            { label: "View", action: (e) => console.log("viewing", e) },
            { label: "Edit", action: (e) => console.log("editing", e) },
            { label: "Delete", action: (e) => console.log("deleting", e) }
          ]
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        size={args.size}
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
          [
            { label: "View", action: (e) => console.log("viewing", e) },
            { label: "Edit", action: (e) => console.log("editing", e) },
            { label: "Delete", action: (e) => console.log("deleting", e) }
          ]
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        size={args.size}
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
        headerTools={true}
        direction="ltr"
        actions={[
          [
            { label: "View", action: (e) => console.log("viewing", e) },
            { label: "Edit", action: (e) => console.log("editing", e) },
            { label: "Delete", action: (e) => console.log("deleting", e) }
          ]
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={dummyColsData}
        // columns={dummyColsData.concat({ hidden: false, value: "Actions" })}
        size={args.size}
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
        size={args.size}
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
          [
            { label: "View", action: (e) => console.log("viewing", e) },
            { label: "Edit", action: (e) => console.log("editing", e) },
            { label: "Delete", action: (e) => console.log("deleting", e) }
          ]
        ]}
        columns={[
          { hidden: false, value: "المنتج" },
          { hidden: false, value: "السعر" },
          { hidden: false, value: "الوزن" },
          { hidden: false, value: "الكمية" }
        ]}
        size={args.size}
        rows={dummyRowData}
        {...args}
      />
    </div>
  );
};
