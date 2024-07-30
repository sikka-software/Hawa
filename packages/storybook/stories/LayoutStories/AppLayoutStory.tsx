import { useState } from "react";

import {
  BarChart2,
  ChevronRight,
  FolderArchive,
  FolderCheck,
  FolderClosed,
  FolderDot,
  FolderOpen,
  LayoutDashboard,
} from "lucide-react";
import { useDarkMode } from "storybook-dark-mode";

import { AppLayout } from "@sikka/hawa/layout";

import { t } from "../../translations/i18n";

export const AppLayoutStory = (args: any) => {
  // const dark = useDarkMode();
  const [selectedPage, setSelectedPage] = useState("/home");
  const [count, updateCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const logoLink =
    args.direction === "rtl"
      ? args.isDark
        ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl-white.png"
        : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl.png"
      : args.isDark
        ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr-white.png"
        : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png";

  return (
    <AppLayout
      {...args}
      pageTitle={
        <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-4">
          <span>Dashboard Pages</span> <ChevronRight className="hawa-size-5" />
        </div>
      }
      logoLink={logoLink}
      currentPage={selectedPage}
      onDrawerExpanded={(expanded) => setIsDrawerOpen(expanded)}
      texts={{
        expandSidebar: t("expandSidebar"),
        collapseSidebar: t("collapseSidebar"),
      }}
      drawerItems={[
        {
          label: t("dashboard"),
          value: "/home",
          badge: {
            label: "Soon?",
          },
          icon: <LayoutDashboard className="hawa-icon" />,
          onMouseDown: (e) => {
            if (e.button == 1) {
              window.open("https://sikka.io", "_blank");
            }
            console.log("Mouse Down", e.button);
          },
          onClick: (e) => {
            console.log("e is ", e);
            setSelectedPage("/home");
          },
        },
        {
          label: t("items"),
          icon: <FolderOpen className="hawa-icon" />,
          value: "/items",
          badge: {
            label: "Soon?",
          },
          subitems: [
            {
              label: t("sub-item") + " 1",
              icon: <FolderArchive className="hawa-icon" />,
              value: "/new-item",
              onMouseDown: (e) => {
                console.log("Mouse Down", e);
              },
              onClick: () => setSelectedPage("/new-item"),
            },
            {
              label: t("sub-item") + " 2",
              icon: <FolderCheck className="hawa-icon" />,
              value: "/new-item2",
              onClick: () => setSelectedPage("/new-item2"),
            },
            {
              label: t("sub-item") + " 3",
              icon: <FolderClosed className="hawa-icon" />,
              value: "/new-item3",
              onClick: () => setSelectedPage("/new-item3"),
            },
            {
              badge: {
                label: "Soon?",
              },
              label: t("sub-item") + " 4",
              icon: <FolderDot className="hawa-icon" />,
              value: "/file-item",
              onClick: () => setSelectedPage("/file-item"),
            },
          ],
        },

        {
          label: t("analytics"),
          value: "/analytics",
          icon: <BarChart2 className="hawa-icon" />,
          onClick: () => setSelectedPage("/analytics"),

          badge: { color: "hyper", label: t("new") },
        },
      ]}
      profileMenuItems={[
        { label: "Profile", value: "Dashboard" },
        { value: "Billing", label: "Billing" },
        { value: "عربي", label: "عربي" },
        { label: "Sign Out", value: "Sign Out", highlighted: true },
      ]}
    >
      <div
        className="hawa-h-full hawa-p-4"
        onClick={() => updateCount(count + 1)}
      >
        <div className="hawa-m-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-items-center hawa-justify-center hawa-overflow-auto hawa-rounded-lg hawa-border-2 hawa-border-dashed hawa-border-black hawa-bg-blue-50 dark:hawa-bg-blue-950">
          <span className="hawa-font-bold hawa-capitalize hawa-text-gray-400">
            App Content
          </span>
          <span className="hawa-font-bold hawa-text-[20rem] hawa-select-none">
            {count}
          </span>
          <span> is drawer open? {String(isDrawerOpen)}</span>
        </div>
      </div>
    </AppLayout>
  );
};
