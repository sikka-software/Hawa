import * as React from "react";
import { DropdownMenu, HawaButton } from "../../elements";
import { FaBars } from "react-icons/fa";
import { Button } from "../../elements/Button";

export default {
  title: "Elements/DropdownMenu",
  component: HawaButton,
  argTypes: { onClick: { action: "clicked" } }
};

export const DropdownMenuStory = () => {
  const items = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    {
      label: "Item 3",
      value: "item3",
      subitems: [
        {
          label: "subitem 1",
          value: "subitem 1"
        },
        {
          label: "subitem 2",
          value: "subitem 2"
        }
      ]
    }
    // ... other items
  ];
  const handleItemSelect = (value) => {
    console.log("Selected item:", value);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-3">
      <DropdownMenu
        direction={"rtl"}
        trigger={<button>Open Menu</button>}
        items={items}
        onItemSelect={handleItemSelect}
      />{" "}
    </div>
  );
};

DropdownMenuStory.storyName = "DropdownMenu";
