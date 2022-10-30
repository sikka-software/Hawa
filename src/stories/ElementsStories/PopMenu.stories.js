import React, { useState } from "react";
import { HawaPopMenu } from "../../elements/HawaPopMenu";
import {BsFillPersonFill} from "react-icons/bs"
import {MdBookOnline, MdAccessAlarm} from "react-icons/md"

export default {
  title: "Elements/PopMenu",
  component: [HawaPopMenu],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog"
    },
    children: {
      control: "object",
      description:
        "The children element that will be contained by the dialog component"
    },
    actions: {
      control: "object",
      description:
        "HTML elements that will act as the dialog actions. Preferebly use buttons"
    },
    hideClose: {
      control: "boolean",
      description: "A boolean to hide the X icon",
      table: {
        defaultValue: { summary: true }
      }
    }
  }
};

export const PopMenu = (args) => {
  return (
    <>
      <div className="text-xs w-full">Requires a refresh sometimes</div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="test"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <HawaPopMenu
        popMenuID={"test"}
        // anchor={anchorElUser}
        handleClose={(e) => setAnchorElUser(null)}
        menuItems={[
          {
            icon: BsFillPersonFill,
            label: "test1",
            action: () => console.log("going to test1")
          },
          {
            icon: MdBookOnline,
            label: "test2",
            action: () => console.log("going to test2")
          },
          {
            icon: MdAccessAlarm,
            label: "test3",
            action: () => console.log("going to test3")
          }
        ]}
      />
    </>
  );
};
