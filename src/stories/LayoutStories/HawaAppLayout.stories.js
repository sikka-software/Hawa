import { useState } from "react";
import { HawaAppLayout } from "../../layout";
import { FaFolderOpen, FaPoll, FaHome } from "react-icons/fa";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  return (
    <HawaAppLayout {...args}>
      <div className="flex flex-row-reverse">
        <div className="bg-red-300">fd</div>
        <div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et
            augue sit amet ex venenatis viverra id sed massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </div>
        </div>
      </div>
    </HawaAppLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings"
      }
    ]
  ],
  currentPage: "home",
  pageTitle: "Dashboard Page",
  topBar: true,
  direction: "ltr",
  username: "Zakher Masri",
  userEmail: "zakhermasri@gmail.com",
  logoLink:
    "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  logoSymbol:
    "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
  ],
  drawerItems: [
    [
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
        // action: handleItemClick
      },
      {
        label: "Files Items",
        slug: "files",
        icon: <FaFolderOpen />,
        // action: handleItemClick,
        subItems: [
          {
            label: "New Item",
            slug: "files",
            icon: <FaFolderOpen />
            // action: handleItemClick
          },
          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />
            // action: handleItemClick
          }
        ]
      },

      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      }
    ]
  ]
};
