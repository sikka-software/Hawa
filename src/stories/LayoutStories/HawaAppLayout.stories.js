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
      profileMenuItems={[
        [
          {
            label: "Dashboard",
            action: () => console.log("going to dashboard")
          },
          {
            label: "Billing",
            action: () => console.log("going to billing")
          },
          {
            label: "Settings",
            action: () => console.log("going to settings")
          }
        ]
      ]}
      drawerItems={[
        [
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />,
            action: handleItemClick
          },
          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />,
            action: handleItemClick
          },

          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          }
        ],
        [
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />,
            action: handleItemClick
          }
        ]
      ]}
      {...args}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et augue
        sit amet ex venenatis viverra id sed massa. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>
    </HawaAppLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  appTitle: "قوائم",
  topBar: true,
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
