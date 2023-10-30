import type { Meta, StoryObj } from "@storybook/react";
import { DocsLayout, Button } from "../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Layout/Docs Layout",
  component: DocsLayout,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<DocsLayout/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DocsLayout>;

export default meta;
type Story = StoryObj<typeof DocsLayout>;

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
      <DocsLayout
        keepOpen={keepOpen}
        setKeepOpen={setKeepOpen}
        onDrawerExpand={handleDrawerExpand}
        direction={direction}
        texts={{
          expandSidebar: t("expandSidebar"),
          collapseSidebar: t("collapseSidebar"),
        }}
        currentPage={selectedPage}
        {...args}

        // clickedItem={(e) => console.log("clicked item is ", e)}
      >
        <div className=" hawa-h-full  hawa-p-4">
          <div className="hawa-m-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-row-reverse hawa-items-center hawa-justify-center hawa-overflow-auto hawa-rounded-lg hawa-border-2 hawa-border-dashed hawa-border-black hawa-bg-blue-50">
            <span className=" hawa-font-bold hawa-capitalize hawa-text-gray-400">
              App Content
            </span>
          </div>
        </div>
      </DocsLayout>
    );
  },
  args: {
    onSettingsClick: () => console.log("going to settings"),
    pageTitle: "Dashboard Page",
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
  },
  argTypes: {
    onLogoClick: { action: "onLogoClick" },
  },
};
