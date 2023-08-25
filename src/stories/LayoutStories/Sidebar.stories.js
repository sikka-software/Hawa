import { useState } from "react";
import { SidebarGroup, SidebarRoot } from "../../layout";
import {
  FaFolderOpen,
  FaPoll,
  FaHome,
  FaPodcast,
  FaAddressBook
} from "react-icons/fa";
import { Button } from "../../elements";

export default {
  title: "Layout/Sidebar",
  component: [SidebarRoot, SidebarGroup]
};
let items = [
  { value: "item-1", label: "item 1", icon: <FaHome /> },
  {
    value: "item-2",
    label: "item 2",
    icon: <FaFolderOpen />,

    subitems: [
      { value: "subitem-1", label: "subitem 1", icon: <FaFolderOpen /> },
      { value: "subitem-2", label: "subitem 2", icon: <FaFolderOpen /> }
    ]
  },
  { value: "item-3", label: "item 3", icon: <FaPoll /> },
  { value: "item-4", label: "item 4", icon: <FaPodcast /> },
  {
    value: "item-5",
    label: "item 5",
    icon: <FaAddressBook />,
    subitems: [
      { value: "subitem-1", label: "subitem 1", icon: <FaFolderOpen /> },
      { value: "subitem-2", label: "subitem 2", icon: <FaFolderOpen /> }
    ]
  }
];
const Template = (args) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [val, setVal] = useState(null);
  return (
    <div className="max-w-xs">
      <Button onClick={() => setVal(null)}>Collapse Them</Button>
      <SidebarGroup
        openedItem={val}
        setOpenedItem={(e) => setVal(e)}
        onItemClick={(values) => {
          console.log("Clicked main item value:", values[0]);
          setSelectedItem(values);
        }}
        onSubItemClick={(values) => {
          console.log("Parent item value:", values[0]);
          console.log("Subitem value:", values[1]);
          setSelectedItem(values);
        }}
        selectedItem={selectedItem}
        title="Group 1"
        items={items}
      />
      {/* <SidebarGroup
          title="Group 2"
          items={items}
          onItemClick={(values) => {
            console.log("Clicked main item value:", values[0]);
            setSelectedItem(values);
          }}
          onSubItemClick={(values) => {
            console.log("Parent item value:", values[0]);
            console.log("Subitem value:", values[1]);
            setSelectedItem(values);
          }}
          selectedItem={selectedItem}
        /> */}
    </div>
  );
};

export const SidebarStory = Template.bind({});

SidebarStory.storyName = "Sidebar";
