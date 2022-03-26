import React from "react";
import { HawaAppBar } from "../../layout";
import SomeIcon from "@mui/icons-material/Person";
export default {
  title: "Layout/AppBar",
  component: [HawaAppBar],
  parameters: {
    backgrounds: {
      default: "light"
      // values: [
      //   { name: "light", value: theme.lightBackground },
      //   { name: "dark", value: theme.darkBackground }
      // ]
    }
  }
};

export const AppBar = (args) => {
  return (
    <HawaAppBar
      accountMenu={[
        {
          icon: SomeIcon,
          label: "test1",
          action: () => console.log("going to test1")
        },
        {
          // icon: () => <SomeIcon />,
          icon: SomeIcon,
          label: "test2",
          action: () => console.log("going to test2")
        },
        {
          // icon: () => <SomeIcon />,
          icon: SomeIcon,
          label: "test3",
          action: () => console.log("going to test3")
        }
      ]}
    />
  );
};
