import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Hawa } from "../components/Hawa/Hawa";
// import AddAlertIcon from "@material-ui/icons/AddAlert";
// import AllInbox from "@material-ui/icons/AllInbox";
// import Assignment from "@material-ui/icons/Assignment";
// import Assessment from "@material-ui/icons/Assessment";
// import Ballot from "@material-ui/icons/Ballot";
// import Class from "@material-ui/icons/Class";
// import Bolt from "@material-ui/icons/Dvr";

const stories = storiesOf("Hawa", module);

stories.add("Light", () => {
  const [currentPage, setCurrentPage] = useState("books");
  const buttons = [
    {
      name: "Users",
      // icon: <AddAlertIcon />,
      slug: "users",
      action: () => setCurrentPage("users")
    }
    // {
    //   name: "Menus",
    //   icon: <AllInbox />,
    //   slug: "menus",
    //   action: () => setCurrentPage("menus")
    // },
    // {
    //   name: "Books",
    //   icon: <Assignment />,
    //   slug: "books",
    //   action: () => setCurrentPage("books")
    // },
    // {
    //   name: "Items",
    //   icon: <Assessment />,
    //   slug: "items",
    //   action: () => setCurrentPage("items")
    // },
    // {
    //   name: "Add Alert",
    //   icon: <Ballot />,
    //   slug: "alert",
    //   action: () => setCurrentPage("alert")
    // },
    // {
    //   name: "Coins",
    //   icon: <Class />,
    //   slug: "coins",
    //   action: () => setCurrentPage("coins")
    // },

    // {
    //   name: "Tokens",
    //   slug: "tokens",
    //   icon: <Bolt />,
    //   action: () => setCurrentPage("tokens")
    // },
    // { name: "Repos" }
  ];

  return (
    <Hawa
      activeItem={currentPage}
      // expandIcon={"🔵"}
      // bgColor={"red"}
      // textColor={"yellow"}
      // showAvatar={true}
      // content={"test"}
      footer={"v2.12.11"}
      // direction={"right"}
      buttons={buttons}
    />
  );
});

// export default {
//   title: "Hawa",
//   component: Hawa,
//   argTypes: {
//     direction: {
//       options: ["top", "bottom", "right", "left"],
//       control: { type: "radio" },
//     },
//   },
// };
