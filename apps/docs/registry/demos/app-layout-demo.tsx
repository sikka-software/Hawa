import React, { useState } from "react";

import {
  BarChart2,
  FolderArchive,
  FolderCheck,
  FolderClosed,
  FolderDot,
  FolderOpen,
  LayoutDashboard
} from "lucide-react";

import { AppLayout } from "@sikka/hawa/layout";

export default function AppLayoutDemo() {
  const [selectedPage, setSelectedPage] = useState("/home");

  const [keepOpen, setKeepOpen] = useState(false);

  const logoLink =
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png";
  const handleDrawerExpand = (newKeepOpenState: any) => {
    setKeepOpen(newKeepOpenState);
    localStorage.setItem("keepOpen", JSON.stringify(newKeepOpenState));
  };
  return (
    <div className="relative h-[500px]  w-full overflow-hidden p-20 bg-red-500">
      <AppLayout
        logoLink={logoLink}
        keepOpen={keepOpen}
        currentPage={selectedPage}
        setKeepOpen={setKeepOpen}
        onDrawerExpand={handleDrawerExpand}
        texts={{
          expandSidebar: "expandSidebar",
          collapseSidebar: "collapseSidebar"
        }}
        drawerItems={[
          {
            label: "dashboard",
            value: "/home",
            icon: <LayoutDashboard />,
            onMouseDown: (e) => {
              if (e.button == 1) {
                window.open("https://sikka.io", "_blank");
              }
              console.log("Mouse Down", e.button);
            },
            onClick: (e) => {
              console.log("e is ", e);
              setSelectedPage("/home");
            }
          },
          {
            label: "items",
            icon: <FolderOpen />,
            value: "/items",
            subitems: [
              {
                label: "sub-item" + " 1",
                icon: <FolderArchive />,
                value: "/new-item",
                onMouseDown: (e) => {
                  console.log("Mouse Down", e);
                },
                onClick: () => setSelectedPage("/new-item")
              },
              {
                label: "sub-item" + " 2",
                icon: <FolderCheck />,
                value: "/new-item2",
                onClick: () => setSelectedPage("/new-item2")
              },
              {
                label: "sub-item" + " 3",
                icon: <FolderClosed />,
                value: "/new-item3",
                onClick: () => setSelectedPage("/new-item3")
              },
              {
                label: "sub-item" + " 4",
                icon: <FolderDot />,
                value: "/file-item",
                onClick: () => setSelectedPage("/file-item")
              }
            ]
          },

          {
            label: "analytics",
            value: "/analytics",
            icon: <BarChart2 />,
            onClick: () => setSelectedPage("/analytics"),
            badge: { color: "hyper", label: "new" }
          }
        ]}
        profileMenuItems={[
          { label: "Profile", value: "Dashboard" },
          { value: "Billing", label: "Billing" },
          { value: "عربي", label: "عربي" },
          { label: "Sign Out", value: "Sign Out", highlighted: true }
        ]}
      >
        <div>Content</div>
      </AppLayout>
    </div>
  );
}
