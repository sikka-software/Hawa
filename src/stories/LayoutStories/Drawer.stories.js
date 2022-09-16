import { Typography } from "@mui/material";
import { HawaDrawer } from "../../layout/HawaDrawer";

export default {
  title: "Layout/Drawer",
  component: [HawaDrawer]
};

const Template = (args) => {
  return (
    <HawaDrawer>
      <Typography>Here goes content</Typography>
    </HawaDrawer>
  );
};

export const Drawer = Template.bind({});
