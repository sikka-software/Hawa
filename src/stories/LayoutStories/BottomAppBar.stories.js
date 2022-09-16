import React from "react";
import { HawaBottomAppBar } from "../../layout/HawaBottomAppBar";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";

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
      icon: <MenuIcon />,
      action: () => console.log("this is menu button")
    },
    {
      label: "Items",
      icon: <CategoryIcon />,
      action: () => console.log("this is items button")
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      action: () => console.log("this is settings button")
    }
  ]
};
