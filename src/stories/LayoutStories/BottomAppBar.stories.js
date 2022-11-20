import React from "react";
import { HawaBottomAppBar } from "../../layout/HawaBottomAppBar";
import { AiOutlineMenu, AiFillSetting, AiFillAlert } from "react-icons/ai";

export default {
  title: "Layout/BottomAppBar",
  component: [HawaBottomAppBar]
  // args: {
  //   sx: {
  //     display: {
  //       xs: "flex",
  //       sm: "none",
  //       md: "none",
  //       lg: "none",
  //       xl: "none"
  //     },
  //     width: "100%"
  //   },
  //   color: "inheret",
  //   appBarContent: [
  //     {
  //       label: "Menu",
  //       // icon : <MenuIcon />,
  //       action: () => console.log("this is menu button")
  //     },
  //     {
  //       label: "Items",
  //       // icon : <CategoryIcon />,
  //       action: () => console.log("this is items button")
  //     },
  //     {
  //       label: "Settings",
  //       // icon : <SettingsIcon />,
  //       action: () => console.log("this is settings button")
  //     }
  //   ]
  // }
};

const Template = (args) => {
  return <HawaBottomAppBar {...args} />;
};

export const BottomAppBar = Template.bind({});
BottomAppBar.args = {
  appBarContent: [
    {
      label: "Menu",
      icon: <AiOutlineMenu />,
      action: () => console.log("this is menu button")
    },
    {
      label: "Items",
      icon: <AiFillAlert />,
      action: () => console.log("this is items button")
    },
    {
      label: "Settings",
      icon: <AiFillSetting />,
      action: () => console.log("this is settings button")
    }
  ]
};
