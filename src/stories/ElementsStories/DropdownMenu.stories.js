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
      end: <Switch />,
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
