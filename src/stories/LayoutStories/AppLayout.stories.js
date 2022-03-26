import React, { useState } from "react";
import { HawaAppLayout } from "../../layout";
import { Person, BookOnline, AccessAlarms } from "@mui/icons-material";
const Template = (args) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [pageTitle, setPageTitle] = useState("Home");
  return (
    <HawaAppLayout
      pageTitle={pageTitle}
      pageName={currentPage}
      pages={[
        {
          text: "Home",
          slug: "home",
          icon: Person,
          action: () => {
            setCurrentPage("home");
            setPageTitle("Home");
          }
        },
        {
          text: "Dashboard",
          slug: "dashboard",
          icon: BookOnline,
          action: () => {
            setCurrentPage("dashboard");
            setPageTitle("Dashboard");
          }
        },
        {
          text: "Analytics",
          slug: "analytics",
          icon: AccessAlarms,
          action: () => {
            setCurrentPage("analytics");
            setPageTitle("Analytics");
          }
        }
      ]}
      accountMenu={[
        {
          icon: Person,
          label: "test1",
          action: () => console.log("going to test1")
        },
        {
          // icon: () => <SomeIcon />,
          label: "test2",
          action: () => console.log("going to test2")
        },
        {
          // icon: () => <SomeIcon />,
          label: "test3",
          action: () => console.log("going to test3")
        }
      ]}
      logo={
        <img
          height={40}
          style={{ zIndex: 30, width: "100%" }}
          src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/sikka-logo.svg"
        />
      }
    >
      the rest of the app here
    </HawaAppLayout>
  );
};
export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout],
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

export const Normal = Template.bind({});
Normal.args = {
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
