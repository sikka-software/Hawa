import type { Meta, StoryObj } from "@storybook/react";
import {
  NavMenuItem,
  NavigationMenu,
  NavigationMenuLink,
} from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { t } from "../translations/i18n";
import { ArrowUpRightSquare, FilePlus2 } from "lucide-react";

const meta = {
  title: "Elements/Navigation Menu",
  component: NavigationMenu,
  parameters: {
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

export const Default: Story = {
  render: () => {
    return (
      <NavigationMenu
        direction="ltr"
        rootClassNames="hawa-w-fit "
        viewportClassNames="hawa-max-w-md "
        items={[
          {
            trigger: "item 1",
            content: (
              <div className="hawa-w-full hawa-p-2">
                <NavMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <NavMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <NavMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                {/* <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold hawa-text-xl ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold hawa-text-xl ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold hawa-text-xl ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold hawa-text-xl ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold hawa-text-xl ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink> */}

                {/* <div className=" hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-rounded hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all hover:hawa-bg-muted">
                  <ArrowUpRightSquare />
                  <div className="hawa-flex hawa-flex-col">
                    <h1 className="hawa-font-bold hawa-text-xl">
                      {t("share")}
                    </h1>
                    <p className="hawa-text-sm">
                      Subtitle of this menu item here
                    </p>
                  </div>
                </div> */}
              </div>
            ),
          },
          {
            trigger: "item 2",
            action: () => console.log("clicked on item"),
          },
          {
            trigger: "item 3",
            content: <div className="hawa-p-4 hawa-bg-blue-500">something here</div>,
          },
        ]}
      />
    );
  },
};
export const RTL: Story = {
  render: () => {
    return (
      <NavigationMenu
        direction="rtl"
        rootClassNames="hawa-w-fit"
        viewportClassNames="hawa-max-w-md"
        items={[
          {
            trigger: "item 1",
            content: (
              <div className=" hawa-p-2  hawa-w-full">
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

                <div className=" hawa-cursor-pointer hawa-p-4 hawa-py-2 hawa-rounded hawa-flex hawa-flex-row hawa-gap-4 hawa-items-center hawa-transition-all hover:hawa-bg-muted">
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
