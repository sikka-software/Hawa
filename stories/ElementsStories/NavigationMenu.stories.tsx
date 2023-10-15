import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  NavMenuItem,
  NavigationMenu,
  NavigationMenuLink,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { ArrowUpRightSquare, FilePlus2 } from "lucide-react";

const meta = {
  title: "Elements/Navigation Menu",
  component: NavigationMenu,
  parameters: {
    // backgrounds: {
    //   default: "offwhite",
    //   values: [{ name: "offwhite", value: "#ededed" }],
    // },
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<NavigationMenu/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>NavigationMenu story</div>;
};

export const Default: Story = {
  render: () => {
    // const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    // setLocale(locale);
    return (
      <NavigationMenu
        rootClassNames="hawa-bg-red-500"
        viewportClassNames="hawa-bg-blue-500 hawa-max-w-md"
        items={[
          {
            trigger: "item 1",
            content: (
              <div className=" hawa-p-2 hawa-bg-green-100 hawa-w-full">
                <NavMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <NavigationMenuLink asChild>
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-rounded hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold ">{t("create")}</h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>

                <div
                  // dir={locale === "ar" ? "rtl" : "ltr"}
                  className=" hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-rounded hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all hover:hawa-bg-muted"
                >
                  <ArrowUpRightSquare />
                  <div className="hawa-flex hawa-flex-col">
                    <h1 className="hawa-font-bold ">{t("share")}</h1>
                    <p className="hawa-text-sm">
                      Subtitle of this menu item here
                    </p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            trigger: "item 2",
          },
          {
            trigger: "item 3",
            content: <div className="hawa-p-4">something here</div>,
          },
        ]}
      />
    );
  },
};

// [
//   {
//     label: "item 1",
//     dropDown: [
//       {
//         itemType: "custom",
//         content: (
//           <div className="hawa-bg-red-500 hawa-p-4">
//             This is a html element
//           </div>
//         ),
//       },
//     ],
//   },
//   {
//     label: "item 2",
//     action: () => console.log("item 2 clicked"),
//   },
//   {
//     label: "item 3",
//     action: () => console.log("item 3 clicked"),
//   },
//   {
//     label: "item 4",
//     dropDown: [
//       {
//         itemType: "custom",
//         content: (
//           <div className="hawa-bg-red-500 hawa-p-4">
//             This is a html element
//           </div>
//         ),
//       },
//     ],
//   },
// ]
