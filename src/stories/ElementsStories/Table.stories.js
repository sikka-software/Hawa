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

export const NoData = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <HawaTable
      size={args.size}
      direction={args.direction}
      columns={["Product", "Price", "Date", "Another", "Another", "Another"]}
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
      columns={["Product", "Price", "Date", "Another", "Another", "Another"]}
      rows={[
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32],
        [32, 32, 32, 32, 32, 32]
      ]}
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
        actionsText="Actions"
        actions={[
          [
            { label: "View", action: (e) => console.log("viewing", e) },
            { label: "Edit", action: (e) => console.log("editing", e) },
            { label: "Delete", action: (e) => console.log("deleting", e) }
          ]
        ]}
        onActionClicked={(row) => console.log("row is", row)}
        columns={["Product", "Price", "Date"]}
        noDataText={"No data"}
        size={args.size}
        rows={[
          [
            "Logo Design",
            "1,200 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Website Design",
            "1,500 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Website Development",
            "900 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Hosting",
            "200 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Social Media Management",
            "700 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ]
        ]}
        {...args}
      />
    </div>
  );
};
DataWithActions.args = {
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
        columns={["المنتج", "السعر", "التاريخ", "الوزن", "الرقم التسلسلي"]}
        rows={[
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32],
          [32, 32, 32, 32, 32]
        ]}
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
        actionsText="Actions"
        actions={[
          [
            { label: "View", onClick: () => console.log("viewing") },
            { label: "Edit", onClick: () => console.log("editing") },
            { label: "Delete", onClick: () => console.log("deleting") }
          ]
        ]}
        columns={["Product", "Price", "Date"]}
        noDataText={"No data"}
        size={args.size}
        rows={[
          [
            "Logo Design",
            "1,200 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Website Design",
            "1,500 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Website Development",
            "900 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Hosting",
            "200 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ],
          [
            "Social Media Management",
            "700 SAR",
            randomDate(new Date(2012, 0, 1), new Date()).toLocaleString()
          ]
        ]}
        {...args}
      />
    </div>
  );
};
