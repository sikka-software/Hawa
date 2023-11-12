import { useState } from "react";
import { AppLayout, ToastAction, Toaster, useToast } from "../../components";
import { t } from "../translations/i18n";
import { useDarkMode } from "storybook-dark-mode";
import {
  BarChart,
  BarChart2,
  FolderArchive,
  FolderCheck,
  FolderClosed,
  FolderDot,
  FolderOpen,
  LayoutDashboard,
  Settings,
  Settings2,
  User2,
} from "lucide-react";

export const AppLayoutStory = (args: any) => {
  const dark = useDarkMode();
  const [selectedPage, setSelectedPage] = useState("/home");

  const [keepOpen, setKeepOpen] = useState(() => {
    const savedState = localStorage.getItem("keepOpen");
    return savedState ? JSON.parse(savedState) : true;
  });
  const logoLink =
    args.direction === "rtl"
      ? dark
        ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl-white.png"
        : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl.png"
      : dark
      ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr-white.png"
      : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png";

  const handleDrawerExpand = (newKeepOpenState: any) => {
    setKeepOpen(newKeepOpenState);
    localStorage.setItem("keepOpen", JSON.stringify(newKeepOpenState));
  };

  const { toast } = useToast();
  return (
    <AppLayout
      {...args}
      logoLink={logoLink}
      keepOpen={keepOpen}
      currentPage={selectedPage}
      setKeepOpen={setKeepOpen}
      onDrawerExpand={handleDrawerExpand}
      texts={{
        expandSidebar: t("expandSidebar"),
        collapseSidebar: t("collapseSidebar"),
      }}
      drawerItems={[
        {
          label: t("dashboard"),
          value: "/home",
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
      <div className=" hawa-h-full  hawa-p-4">
        <div className="hawa-m-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-row-reverse hawa-items-center hawa-justify-center hawa-overflow-auto hawa-rounded-lg hawa-border-2 hawa-border-dashed hawa-border-black hawa-bg-blue-50">
          <span className=" hawa-font-bold hawa-capitalize hawa-text-gray-400">
            App Content
            <Toaster direction={args.direction} />
            <button
              onClick={() => {
                toast({
                  title:
                    "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  severity: "warning",
                  action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                  ),
                });
              }}
            >
              open toaster
            </button>
          </span>
        </div>
      </div>
    </AppLayout>
  );
};
