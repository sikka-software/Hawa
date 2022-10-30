import React from "react";
import { HawaBottomAppBar } from "../../layout/HawaBottomAppBar";
import {AiOutlineMenu, AiFillSetting} from "react-icons/ai"
import {BiCategoryAlt} from "react-icons/bi"

export default {
  title: "Layout/BottomAppBar",
  component: [HawaBottomAppBar]
  // args: {
  //     sx : {
  //         display: {
  //             xs: "flex",
  //             sm: "none",
  //             md: "none",
  //             lg: "none",
  //             xl: "none"
  //           },
  //           width: "100%"
  //     },
  //     color : "inheret",
  //     appBarContent : [
  //         {
  //             label : "Menu",
  //             icon : <MenuIcon />,
  //             action : () => console.log("this is menu button")
  //         },
  //         {
  //             label : "Items",
  //             icon : <CategoryIcon />,
  //             action : () => console.log("this is items button")
  //         },
  //         {
  //             label : "Settings",
  //             icon : <SettingsIcon />,
  //             action : () => console.log("this is settings button")
  //         }
  //     ]
  // }
};

const Template = (args) => {
  return <HawaBottomAppBar args={args} />;
};

export const BottomAppBar = Template.bind({});
BottomAppBar.args = {
  sx: {
    display: {
      xs: "flex",
      sm: "none",
      md: "none",
      lg: "none",
      xl: "none"
    },
    width: "100%"
  },
  color: "inherit",
  appBarContent: [
    {
      label: "Menu",
      icon: <AiOutlineMenu />,
      action: () => console.log("this is menu button")
    },
    {
      label: "Items",
      icon: <BiCategoryAlt />,
      action: () => console.log("this is items button")
    },
    {
      label: "Settings",
      icon: <AiFillSetting />,
      action: () => console.log("this is settings button")
    }
  ]
};
