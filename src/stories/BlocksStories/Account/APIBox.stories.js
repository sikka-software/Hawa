import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { HawaTable } from "../../../elements";

export default {
  title: "Blocks/Account/API Box",
  component: HawaTable
};
let dummyRowData = [
  [
    { hidden: false, value: "My First API Key" },
    { hidden: true, value: "3432042304382" },
    { hidden: false, value: "83EWhTXLSwSPwhYE" },
    {
      hidden: false,
      value: "22/11/2023"
    },
    {
      hidden: false,
      value: "30/11/2023"
    }
  ],
  [
    { hidden: false, value: "My Second API Key" },
    { hidden: true, value: "3432042304382" },
    { hidden: false, value: "5QKByF3KkjPaKGQx" },
    {
      hidden: false,
      value: "22/11/2023"
    },
    {
      hidden: false,
      value: "30/11/2023"
    }
  ]
];
let dummyColsData = [
  { hidden: false, value: "Name" },
  { hidden: true, value: "ID" },
  { hidden: false, value: "Key" },
  { hidden: false, value: "Created" },
  { hidden: false, value: "Last Used" }
];
export const APIBox = (args) => {
  return (
    <div>
      <div dir="ltr" className="">
        placeholder
        {/* <HawaTable
          headerColor="white"
          bodyColor="white"
          borders={"rows"}
          //   direction="rtl"
          actions={[
            [
              //   { label: "View", action: (e) => console.log("viewing", e) },
              {
                icon: <MdEdit />,
                label: "Edit",
                action: (e) => console.log("editing", e)
              },
              {
                icon: <BsTrash />,
                label: "Delete",
                action: (e) => console.log("deleting", e)
              }
            ]
          ]}
          onActionClicked={(row) => console.log("row is", row)}
          columns={dummyColsData}
          pagination={false}
          size={"small"}
          rows={dummyRowData}
          {...args}
        /> */}
      </div>
    </div>
  );
};
