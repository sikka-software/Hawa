import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Settings, User2 } from "lucide-react";
import { useDarkMode } from "storybook-dark-mode";

import { Button } from "@sikka/hawa/button";
import { AppLayout } from "@sikka/hawa/layout";

import { setLocale } from "../../translations/i18n";
import { AppLayoutStory } from "./AppLayoutStory";

const meta = {
  title: "Layout/App Layout",
  component: AppLayout
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const dark = useDarkMode();
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return <AppLayoutStory {...args} direction={direction} />;
  },
  args: {
    topBar: true,
    pageTitle: "Dashboard Page",
    username: "Zakher Masri",
    avatarImage: "https://source.unsplash.com/tVqQSfXQ_SI",
    email: "zakher@sikka.io",
    logoSymbol:
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-symbol.png",
    DrawerFooterActions: (
      <Button size="smallIcon" variant={"light"}>
        <Settings className="hawa-icon" />
      </Button>
    )
  },
  argTypes: {
    onLogoClick: { action: "onLogoClick" }
  }
};
export const CustomHeader: Story = {
  render: (args: any, globals: any) => {
    const dark = useDarkMode();
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return <AppLayoutStory {...args} direction={direction} />;
  },
  args: {
    header: (
      <div className=" hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-items-center hawa-justify-center">
        <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-start hawa-gap-2">
          <div className="hawa-flex hawa-h-8 hawa-w-8 hawa-items-center hawa-justify-center hawa-rounded-full hawa-bg-gray-200">
            <User2 className="hawa-icon" />
          </div>
          <div className="hawa-flex hawa-flex-col">
            <span className="hawa-text-sm hawa-font-bold">Zakher Masri</span>
            <span className="hawa-text-sm">admin@sikka.io</span>
          </div>
        </div>
      </div>
    ),
    topBar: false,
    pageTitle: "Dashboard Page",
    username: "Zakher Masri",
    avatarImage: "https://source.unsplash.com/tVqQSfXQ_SI",
    email: "zakher@sikka.io",
    logoSymbol:
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-symbol.png",
    DrawerFooterActions: (
      <Button size="smallIcon" variant={"light"}>
        <Settings className="hawa-icon" />
      </Button>
    )
  },
  argTypes: {
    onLogoClick: { action: "onLogoClick" }
  }
};
// export const CustomHeader: Story = {
//   render: (args: any, globals: any) => {
//     const dark = useDarkMode();

//     const locale = globals.globals?.locale === "ar" ? "ar" : "en";
//     const direction = locale === "ar" ? "rtl" : "ltr";
//     setLocale(locale);
//     const [selectedPage, setSelectedPage] = useState("/home");

//     const [keepOpen, setKeepOpen] = useState(() => {
//       const savedState = localStorage.getItem("keepOpen");
//       return savedState ? JSON.parse(savedState) : true;
//     });
//     const logoLink =
//       direction === "rtl"
//         ? dark
//           ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl-white.png"
//           : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl.png"
//         : dark
//         ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr-white.png"
//         : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png";

//     const handleDrawerExpand = (newKeepOpenState: any) => {
//       setKeepOpen(newKeepOpenState);
//       localStorage.setItem("keepOpen", JSON.stringify(newKeepOpenState));
//     };

//     return (
//       <AppLayout
//         header={
//           <div className=" hawa-w-full hawa-h-full hawa-flex hawa-flex-col hawa-justify-center hawa-items-center">
//             <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-justify-start hawa-items-center">
//               <div className="hawa-h-8 hawa-w-8 hawa-rounded-full hawa-bg-gray-200 hawa-justify-center hawa-items-center hawa-flex">
//                 <User2 className="hawa-icon" />
//               </div>
//               <div className="hawa-flex hawa-flex-col">
//                 <span className="hawa-font-bold hawa-text-sm">
//                   Zakher Masri
//                 </span>
//                 <span className="hawa-text-sm">admin@sikka.io</span>
//               </div>
//             </div>
//           </div>
//         }
//         logoLink={logoLink}
//         keepOpen={keepOpen}
//         setKeepOpen={setKeepOpen}
//         onDrawerExpand={handleDrawerExpand}
//         direction={direction}
//         texts={{
//           expandSidebar: t("expandSidebar"),
//           collapseSidebar: t("collapseSidebar"),
//         }}
//         currentPage={"/new-item"}
//         {...args}
//       >
//         <div className=" hawa-h-full  hawa-p-4">
//           <div className="hawa-m-0 hawa-flex hawa-h-full hawa-w-full hawa-flex-row-reverse hawa-items-center hawa-justify-center hawa-overflow-auto hawa-rounded-lg hawa-border-2 hawa-border-dashed hawa-border-black hawa-bg-blue-50">
//             <span className=" hawa-font-bold hawa-capitalize hawa-text-gray-400">
//               App Content
//             </span>
//           </div>
//         </div>
//       </AppLayout>
//     );
//   },
//   args: {
//     pageTitle: "Dashboard Page",
//     topBar: false,
//     username: "Zakher Masri",
//     avatarImage: "https://source.unsplash.com/tVqQSfXQ_SI",
//     email: "zakher@sikka.io",
//     logoSymbol:
//       "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-symbol.png",

//     profileMenuItems: [
//       { label: "Profile", value: "Dashboard" },
//       { value: "Billing", label: "Billing" },
//       { value: "عربي", label: "عربي" },
//       { label: "Sign Out", value: "Sign Out", highlighted: true },
//     ],
//     DrawerFooterActions: (
//       <Button size="smallIcon" variant={"light"}>
//         <Settings className="hawa-icon" />
//       </Button>
//     ),
//     drawerItems: [
//       {
//         label: t("dashboard"),
//         value: "/home",
//         icon: <LayoutDashboard className="hawa-w-5 hawa-h-5" />,
//       },
//       {
//         label: t("items"),
//         icon: <FolderOpen className="hawa-w-5 hawa-h-5" />,
//         value: "/items",
//         subitems: [
//           { label: "New Item", value: "/new-item" },
//           { label: "New Item", value: "/new-item2" },
//           { label: "New Item", value: "/new-item3" },
//           { label: "Files Items", value: "/file-item" },
//         ],
//       },

//       {
//         label: t("analytics"),
//         value: "/analytics",
//         icon: <BarChart2 className="hawa-w-5 hawa-h-5" />,
//         badge: { color: "hyper", label: t("new") },
//       },
//     ],
//   },
//   argTypes: {
//     onLogoClick: { action: "onLogoClick" },
//   },
// };
