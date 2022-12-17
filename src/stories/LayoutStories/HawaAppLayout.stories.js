import { useState } from "react";
import { HawaAppLayout } from "../../layout";
import { FaFolderOpen, FaPoll, FaHome } from "react-icons/fa";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const handleItemClick = (e) => {
    console.log("switching page to");
    console.log("switching to", e);
    // setSelectedPage(e); //this is the line that breaks chrome for some reason
  };
  return (
    <HawaAppLayout
      currentPage={selectedPage}
      drawerItems={[
        {
          label: "Home",
          slug: "home",
          icon: <FaHome />,
          action: handleItemClick
        },
        {
          label: "Files",
          slug: "files",
          icon: <FaFolderOpen />,
          action: handleItemClick
        },

        {
          label: "Analytics",
          slug: "analytics",
          icon: <FaPoll />,
          action: handleItemClick
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
