// import { useState } from "react";
import { HawaAppLayout } from "../../layout";
import { FaFolderOpen, FaPoll, FaHome } from "react-icons/fa";
// import { useState } from "@storybook/addons";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  return (
    <HawaAppLayout
      drawerItems={[
        [
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Home",
            slug: "home",
            icon: <FaHome />
          },
          {
            label: "Items",
            slug: "files",
            icon: <FaFolderOpen />,
            // action: handleItemClick,
            subItems: [
              {
                label: "New Item",
                slug: "new-item",
                icon: <FaFolderOpen />,
                action: () => console.log("going to new item")
              },
              {
                label: "Files Items",
                slug: "file-item",
                icon: <FaFolderOpen />,
                action: () => console.log("going to new item")
                // action: handleItemClick
              }
            ]
          },

          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Jobs",
            slug: "jobs",
            icon: <FaPoll />,
            subItems: [
              {
                label: "New Job Item",
                slug: "files",
                icon: <FaFolderOpen />,
                action: () => console.log("going to new item")
              },
              {
                label: "New Item",
                slug: "files",
                icon: <FaFolderOpen />,
                action: () => console.log("going to new item")
              },
              {
                label: "Files Items",
                slug: "files",
                icon: <FaFolderOpen />,
                action: () => console.log("going to new item")
                // action: handleItemClick
              }
            ]
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics",
            icon: <FaPoll />
            // action: handleItemClick
          },
          {
            label: "Analytics",
            slug: "analytics3",
            icon: <FaPoll />
          }
        ]
      ]}
      {...args}
    >
      <div className="m-4 flex h-screen flex-row-reverse items-center justify-center overflow-auto rounded-lg border-2 border-dashed border-black bg-blue-50">
        {/* <div className="bg-red-300">fd</div> */}
        {/* <div>
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
        </div> */}
        <span className=" font-bold capitalize text-gray-400">App Content</span>
      </div>
    </HawaAppLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  currentPage: "analytics3",
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: false,
  direction: "ltr",
  username: "Zakher Masri",
  email: "zakhermasri@gmail.com",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
export const WithNavbar = Template.bind({});
WithNavbar.args = {
  currentPage: "analytics3",
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: true,
  direction: "ltr",
  username: "Zakher Masri",
  email: "zakhermasri@gmail.com",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
export const RTL = Template.bind({});
RTL.args = {
  currentPage: "analytics3",
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: true,
  direction: "rtl",
  username: "Zakher Masri",
  email: "zakhermasri@gmail.com",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
