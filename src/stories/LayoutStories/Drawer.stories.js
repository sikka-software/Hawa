import { Typography } from "@mui/material";
import { HawaDrawer } from "../../layout/HawaDrawer";
import CategoryIcon from "@mui/icons-material/Category";
import StyleIcon from "@mui/icons-material/Style";
import SettingsIcon from "@mui/icons-material/Settings";

export default {
  title: "Layout/Drawer",
  component: [HawaDrawer]
};

const Template = (args) => {
  return (
    <HawaDrawer {...args}>
      <Typography>Here goes content</Typography>
    </HawaDrawer>
  );
};

export const Drawer = Template.bind({});
Drawer.args = {
  drawerContent: [
    {
      label: "Menu Item",
      icon: <CategoryIcon />,
      action: () => console.log("this is menu item")
    },
    {
      label: "Style",
      icon: <StyleIcon />,
      action: () => console.log("this is Style")
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      action: () => console.log("this is Settings")
    }
  ],
  handleDrawerToggle: () => console.log("called when drawer toggled"),
  drawerMaxWidth: 240
};
