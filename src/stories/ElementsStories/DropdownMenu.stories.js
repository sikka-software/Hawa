import * as React from "react";
import { Button, DropdownMenu, HawaRadio, Switch } from "../../elements";
import {
  FaAd,
  FaAdjust,
  FaAllergies,
  FaFolderOpen,
  FaHome
} from "react-icons/fa";
import PropsTable from "../PropsTable";

export default {
  title: "Elements/DropdownMenu",
  component: [DropdownMenu],
  argTypes: { onClick: { action: "clicked" } }
};

export const DropdownMenuStory = () => {
  const items = [
    {
      label: "Item 1",
      value: "item1",
      icon: <FaHome />,
      end: <span>shift + E</span>
    },
    {
      label: "Item 2",
      value: "item2",
      icon: <FaFolderOpen />,
      end: <Switch size="sm" />,
      presist: true,
      disabled: true
    },
    {
      label: "Item 2",
      value: "item2",
      icon: <FaFolderOpen />,
      end: <Switch size="sm" />,
      presist: true
    },
    {
      end: (
        <HawaRadio
          width="full"
          // onChangeTab={() => switchLanguage()}
          design="tabs"
          options={[
            {
              value: "ar",
              label: (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4  w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                </svg>
              )
            },
            {
              value: "en",
              label: (
                <svg
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  className="h-4  w-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
                </svg>
              )
            }
          ]}
        />
      ),
      presist: true
    },
    {
      label: "Item 2",
      value: "item2",
      icon: <FaFolderOpen />,
      end: <Switch />,
      presist: true
    },
    {
      type: "separator"
    },
    {
      label: "Label Here",
      value: "item4",
      type: "label"
    },
    {
      label: "Item 2",
      value: "item2",
      icon: <FaFolderOpen />,
      end: <Switch />,
      presist: true
    },
    {
      // label: "Item 2",
      // value: "item2",
      // icon: <FaFolderOpen />,
      presist: true,
      end: (
        <HawaRadio
          width="full"
          // onChangeTab={() => switchLanguage()}
          design="tabs"
          options={[
            { value: "ar", label: "عربي" },
            { value: "en", label: "English" }
          ]}
        />
      )
    },
    {
      label: "Item 3",
      value: "item3",
      icon: <FaAdjust />,
      subitems: [
        {
          label: "subitem 1",
          value: "subitem 1",
          icon: <FaAllergies />
        },
        {
          label: "subitem 2",
          value: "subitem 2",
          icon: <FaAd />
        }
      ]
    }
    // ... other items
  ];
  const handleItemSelect = (value) => {
    console.log("Selected item:", value);
  };

  return (
    <div className="flex  flex-1 flex-col ">
      <div className="flex flex-1 flex-col">
        <div className="flex w-full flex-row items-center justify-center gap-6 p-3">
          <DropdownMenu
            // direction={"rtl"}
            trigger={<Button>LTR Menu</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />{" "}
          <DropdownMenu
            direction={"rtl"}
            trigger={<Button>RTL Menu</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />{" "}
        </div>
        <div className="flex- row flex w-full items-center justify-center gap-6 p-3">
          <DropdownMenu
            width="parent"
            trigger={<Button>Menu Width Equal to Trigger Button</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />{" "}
        </div>
        <div className="flex- row flex w-full items-center justify-center gap-6 p-3">
          <DropdownMenu
            // width="parent"
            trigger={<Button>Default Size</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />{" "}
          <DropdownMenu
            // width="parent"
            size="sm"
            trigger={<Button>Mini Size</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />{" "}
        </div>
      </div>
      <PropsTable
        componentProps={[
          {
            name: "trigger",
            type: "React.ReactNode",
            default: "",
            description: "The trigger element for the dropdown menu."
          },
          {
            name: "items",
            type: "MenuItemType[]",
            default: "[]",
            description:
              "An array of menu items to display in the dropdown menu."
          },
          {
            name: "direction",
            type: '"rtl" | "ltr"',
            default: '"ltr"',
            description:
              "The direction of the dropdown menu (left-to-right or right-to-left)."
          },
          {
            name: "onItemSelect",
            type: "any",
            default: "",
            description: "A callback function to handle item selection."
          },
          {
            name: "sideOffset",
            type: "number",
            default: "4",
            description: "The offset from the side of the trigger element."
          },
          {
            name: "side",
            type: '"left" | "right" | "top" | "bottom"',
            default: '"bottom"',
            description:
              "The side of the trigger element where the menu will be displayed."
          },
          {
            name: "className",
            type: "string",
            default: "",
            description: "Additional CSS classes to apply to the dropdown menu."
          },
          {
            name: "triggerClassname",
            type: "string",
            default: "",
            description:
              "Additional CSS classes to apply to the trigger element."
          },
          {
            name: "align",
            type: "string",
            default: "",
            description: "Alignment options for the dropdown menu."
          },
          {
            name: "alignOffset",
            type: "string",
            default: "",
            description: "Alignment offset for the dropdown menu."
          },
          {
            name: "width",
            type: '"default" | "sm" | "lg" | "parent"',
            default: '"default"',
            description: "Width options for the dropdown menu."
          },
          {
            name: "selectCallback",
            type: "any",
            default: "",
            description: "A callback function to handle item selection."
          }
        ]}
      />
    </div>
  );
};

DropdownMenuStory.storyName = "DropdownMenu";
