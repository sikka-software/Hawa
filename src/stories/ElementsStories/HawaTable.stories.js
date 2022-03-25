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
    }
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ECEBE4" }]
    }
  }
};

export const Table = (args) => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return (
    <HawaTable
      columns={["Product", "Price", "Date"]}
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
    />
  );
};