import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout, Button } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import {
  BarChart,
  FolderArchive,
  FolderClosed,
  LayoutDashboard,
  PhoneCall,
  Users2,
} from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Layout/App Layout",
  component: AppLayout,
  parameters: {
    // layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<AppLayout/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [selectedPage, setSelectedPage] = useState("/home");

    const [keepOpen, setKeepOpen] = useState(() => {
      const savedState = localStorage.getItem("keepOpen");
      return savedState ? JSON.parse(savedState) : true;
    });

    const handleDrawerExpand = (newKeepOpenState: any) => {
      setKeepOpen(newKeepOpenState);
      localStorage.setItem("keepOpen", JSON.stringify(newKeepOpenState));
      // Additional logic if needed when drawer expansion state changes
    };

    return (
      <AppLayout
        keepOpen={keepOpen}
        setKeepOpen={setKeepOpen}
        onDrawerExpand={handleDrawerExpand}
        direction={locale === "ar" ? "rtl" : "ltr"}
        texts={{
          expandSidebar: t("expandSidebar"),
          collapseSidebar: t("collapseSidebar"),
        }}
        currentPage={selectedPage}
        {...args}
        drawerItems={[
          {
            label: "لوحة القيادة",
            value: "/home",
            onClick: () => {
              setSelectedPage("/home");
              console.log("going to /home");
            },
            // BarChart,
            // FolderArchive,
            // FolderClosed,
            // LayoutDashboard,
            // PhoneCall,
            // Users2,
            // icon: () => <LayoutDashboard className="hawa-w-4 hawa-h-4" />,
            // icon: <LayoutDashboard className="hawa-w-4 hawa-h-4" />,
          },
          {
            label: "Items",
            value: "/items",
            onClick: () => console.log("going to /items"),
            // icon: <FolderArchive className="hawa-w-4 hawa-h-4" />,
            subitems: [
              {
                label: "New Item",
                value: "/new-item",
                onClick: () => setSelectedPage("/new-item"),
                //   icon: <FaFolderOpen />,
              },
              {
                label: "New Item",
                value: "/new-item2",
                onClick: () => setSelectedPage("/new-item2"),
                //   icon: <FaFolderOpen />,
              },
              {
                label: "New Item",
                value: "/new-item3",
                onClick: () => setSelectedPage("/new-item3"),
                //   icon: <FaFolderOpen />,
              },
              {
                label: "Files Items",
                value: "/file-item",
                onClick: () => setSelectedPage("/file-item"),
                //   icon: <FaFolderOpen />,
              },
            ],
          },

          {
            label: "Analytics",
            value: "/analytics",
            onClick: () => {
              setSelectedPage("/analytics");
              console.log("going to /analytics");
            },
            // icon: <BarChart className="hawa-w-4 hawa-h-4" />,
            //   icon: <FaPoll />,
          },
          // {
          //   label: "Jobs",
          //   value: "/jobs",
          //   onClick: () => console.log("going to /jobs"),
          //   icon: <Users2 className="hawa-w-4 hawa-h-4" />,
          //   subitems: [
          //     {
          //       label: "New Job Item",
          //       value: "/new-job",
          //       onClick: () => console.log("going to /new-jobs"),
          //       icon: <FolderClosed className="hawa-w-4 hawa-h-4" />,
          //     },
          //     {
          //       label: "Files Items",
          //       value: "/files",
          //       onClick: () => console.log("going to /files"),
          //       icon: <FolderClosed className="hawa-w-4 hawa-h-4" />,
          //     },
          //   ],
          // },
          // {
          //   label: "Activity",
          //   value: "/activity",
          //   icon: <PhoneCall className="hawa-w-4 hawa-h-4" />,
          //   onClick: () => console.log("going to /activity"),
          // },
        ]}
        // clickedItem={(e) => console.log("clicked item is ", e)}
      >
        <div className=" hawa-h-full  hawa-p-4">
          <div className="hawa-m-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-row-reverse hawa-items-center hawa-justify-center hawa-overflow-auto hawa-rounded-lg hawa-border-2 hawa-border-dashed hawa-border-black hawa-bg-blue-50">
            <span className=" hawa-font-bold hawa-capitalize hawa-text-gray-400">
              App Content
            </span>
          </div>
        </div>
      </AppLayout>
    );
  },
  args: {
    onSettingsClick: () => console.log("going to settings"),
    // currentPage: "/new-item",
    profileMenuItems: [
      {
        label: "Profile",
        value: "Dashboard",
        // onClick: () => console.log("going to dashboard"),
      },
      {
        value: "Billing",
        label: "Billing",
        // onClick: () => console.log("going to Billing"),
      },
      {
        value: "عربي",
        label: "عربي",
        // onClick: () => console.log("going to عربي"),
        // element: <div className="rounded-inner bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        value: "Sign Out",
        // onClick: () => console.log("going to Sign Out"),
        highlighted: true,
      },
    ],
    // drawerItems: [
    //   {
    //     label: "لوحة القيادة",
    //     value: "/home",
    //     onClick: () => console.log("going to /home"),
    //     //   icon: <MdDashboard />,
    //     icon: <LayoutDashboard className="hawa-w-4 hawa-h-4" />,
    //   },
    //   // {
    //   //   label: "Items",
    //   //   value: "/items",
    //   //   onClick: () => console.log("going to /items"),
    //   //   icon: <FolderArchive className="hawa-w-4 hawa-h-4" />,
    //   //   subitems: [
    //   //     {
    //   //       label: "New Item",
    //   //       value: "/new-item",
    //   //       onClick: () => console.log("going to /new-item"),
    //   //       //   icon: <FaFolderOpen />,
    //   //     },
    //   //     {
    //   //       label: "New Item",
    //   //       value: "/new-item2",
    //   //       onClick: () => console.log("going to /new-item2"),
    //   //       //   icon: <FaFolderOpen />,
    //   //     },
    //   //     {
    //   //       label: "New Item",
    //   //       value: "/new-item3",
    //   //       onClick: () => console.log("going to /new-item3"),
    //   //       //   icon: <FaFolderOpen />,
    //   //     },
    //   //     {
    //   //       label: "Files Items",
    //   //       value: "/file-item",
    //   //       onClick: () => console.log("going to /file-item"),
    //   //       //   icon: <FaFolderOpen />,
    //   //     },
    //   //   ],
    //   // },

    //   {
    //     label: "Analytics",
    //     value: "/analytics",
    //     onClick: () => console.log("going to /analytics"),
    //     icon: <BarChart className="hawa-w-4 hawa-h-4" />,
    //     //   icon: <FaPoll />,
    //   },
    //   // {
    //   //   label: "Jobs",
    //   //   value: "/jobs",
    //   //   onClick: () => console.log("going to /jobs"),
    //   //   icon: <Users2 className="hawa-w-4 hawa-h-4" />,
    //   //   subitems: [
    //   //     {
    //   //       label: "New Job Item",
    //   //       value: "/new-job",
    //   //       onClick: () => console.log("going to /new-jobs"),
    //   //       icon: <FolderClosed className="hawa-w-4 hawa-h-4" />,
    //   //     },
    //   //     {
    //   //       label: "Files Items",
    //   //       value: "/files",
    //   //       onClick: () => console.log("going to /files"),
    //   //       icon: <FolderClosed className="hawa-w-4 hawa-h-4" />,
    //   //     },
    //   //   ],
    //   // },
    //   // {
    //   //   label: "Activity",
    //   //   value: "/activity",
    //   //   icon: <PhoneCall className="hawa-w-4 hawa-h-4" />,
    //   //   onClick: () => console.log("going to /activity"),
    //   // },
    // ],
    pageTitle: "Dashboard Page",
    topBar: true,
    username: "Zakher Masri",
    avatarImage: "https://source.unsplash.com/tVqQSfXQ_SI",
    email: "zakher@sikka.io",
    DrawerFooterActions: (
      <>
        <Button size="smallIcon" variant={"light"}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>{" "}
        </Button>
      </>
    ),
    logoSymbol:
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
    logoLink:
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
    // profileItems: [
    //   {
    //     text: "Dashboard",
    //     slug: "home",
    //   },
    //   {
    //     text: "Billing",
    //     slug: "home",
    //   },

    //   {
    //     text: "Analytics",
    //     slug: "home",
    //   },
    //   {
    //     text: "عربي",
    //     slug: "home",
    //   },
    // ],
  },
  argTypes: {
    onLogoClick: { action: "onLogoClick" },
  },
};
