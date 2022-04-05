import React, { useState } from "react";
import { HawaAppLayout } from "../../layout";
import {
  Person,
  BookOnline,
  AccessAlarms,
  ExitToApp,
  Settings
} from "@mui/icons-material";

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

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [pageTitle, setPageTitle] = useState("Home");
  return (
    <HawaAppLayout
      {...args}
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
          label: "Account",
          action: () => console.log("going to test1")
        },
        {
          icon: Settings,
          label: "Settings",
          action: () => console.log("going to test2")
        },
        {
          icon: ExitToApp,
          label: "Logout",
          action: () => console.log("going to test3")
        }
      ]}
      logo={
        <img
          height={40}
          style={{ zIndex: 30, width: "100%" }}
          src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/sikka-logo-black.svg"
        />
      }
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos
        accusamus, libero id quos error laborum provident sed molestias nesciunt
        expedita tempora. Necessitatibus neque deserunt consectetur voluptate,
        et sit magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati eos accusamus, libero id quos error laborum provident sed
        molestias nesciunt expedita tempora. Necessitatibus neque deserunt
        consectetur voluptate, et sit magnam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati eos accusamus, libero id quos
        error laborum provident sed molestias nesciunt expedita tempora.
        Necessitatibus neque deserunt consectetur voluptate, et sit magnam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eos
        accusamus, libero id quos error laborum provident sed molestias nesciunt
        expedita tempora. Necessitatibus neque deserunt consectetur voluptate,
        et sit magnam.
      </div>
    </HawaAppLayout>
  );
};

export const LTR = Template.bind({});
LTR.args = {
  lang: "en",
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
export const RTL = Template.bind({});
RTL.args = {
  lang: "ar",
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
