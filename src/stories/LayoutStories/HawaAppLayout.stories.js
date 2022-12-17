import { HawaAppLayout } from "../../layout";
import { FaAddressCard, FaAdversal, FaHome } from "react-icons/fa";
import { useState } from "react";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <HawaAppLayout
      currentPage={selectedPage}
      drawerItems={[
        {
          text: "Home",
          slug: "home",
          icon: <FaHome />,
          // action: () => setSelectedPage("home");
          action: () => {
            console.log("switching to home page");
          }
        },
        {
          text: "Menus",
          slug: "menus",
          icon: <FaAdversal />,
          // action: () => setSelectedPage("menus");
          action: () => {
            setSelectedPage("menus");
            console.log("switching to menus page");
          }
        },

        {
          text: "Analytics",
          slug: "analytics",
          icon: <FaAddressCard />,
          // action: () => setSelectedPage("analytics")
          action: () => console.log("switching to analytics page")
        }
      ]}
      {...args}
    >
      <div className="w-full text-xs">Requires a refresh sometimes</div>
    </HawaAppLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  appTitle: "قوائم",
  username: "Zakher Masri",
  userEmail: "zakhermasri@gmail.com",
  logoLink: "https://something.com/docs/images/logo.svg",
  profileItems: [
    {
      text: "Dashboard",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "Billing",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },

    {
      text: "Analytics",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "عربي",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ]
};
