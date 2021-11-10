import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Loah } from "../components/Loah/Loah";
// import AddAlertIcon from "@material-ui/icons/AddAlert";
// import AllInbox from "@material-ui/icons/AllInbox";
// import Assignment from "@material-ui/icons/Assignment";
// import Assessment from "@material-ui/icons/Assessment";
// import Ballot from "@material-ui/icons/Ballot";
// import Class from "@material-ui/icons/Class";
// import Bolt from "@material-ui/icons/Dvr";

const stories = storiesOf("Loah", module);

stories.add("Light", () => {
  const [currentPage, setCurrentPage] = useState("books");
  const buttons = [
    {
      name: "Users",
      // icon: <AddAlertIcon />,
      slug: "users",
      action: () => setCurrentPage("users")
    },
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
    <Loah
      activeItem={currentPage}
      // bgColor={"red"}
      // textColor={"yellow"}
      // showAvatar={true}
      // versionLabel={"v2.12.11"}
      // direction={"right"}
      buttons={buttons}
    />
  );
});

// export default {
//   title: "Loah",
//   component: Loah,
//   argTypes: {
//     direction: {
//       options: ["top", "bottom", "right", "left"],
//       control: { type: "radio" },
//     },
//   },
// };
