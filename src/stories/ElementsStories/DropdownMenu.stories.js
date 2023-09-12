import * as React from "react";
import { Button, DropdownMenu, Switch } from "../../elements";
import {
  FaAd,
  FaAdjust,
  FaAllergies,
  FaFolderOpen,
  FaHome
} from "react-icons/fa";

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
    <div>
      <div className="flex- row flex w-full items-center justify-center gap-6 p-3">
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
  );
};

DropdownMenuStory.storyName = "DropdownMenu";
