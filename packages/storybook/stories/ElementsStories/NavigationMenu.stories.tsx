import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUpRightSquare, FilePlus2 } from "lucide-react";

import {
  StandardNavigationMenuItem,
  NavigationMenu,
  NavigationMenuLink
} from "@sikka/hawa/elements/navigationMenu";

import { t } from "../../translations/i18n";

const meta = {
  title: "Elements/Navigation Menu",
  component: NavigationMenu
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
            path: "https://xakher.com",
            content: (
              <div className="hawa-w-full hawa-p-2">
                <StandardNavigationMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <StandardNavigationMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <StandardNavigationMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
              </div>
            )
          },
          { trigger: "item 2", path: "https://xakher.com" },
          {
            trigger: "item 3",
            content: (
              <div className="hawa-bg-blue-500 hawa-p-4">something here</div>
            )
          },
          {
            trigger: "item 4",
            content: (
              <>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <a href="">
                    <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                      <FilePlus2 />
                      <div className="hawa-flex hawa-flex-col">
                        <h1 className="hawa-text-xl hawa-font-bold ">
                          {t("create")}
                        </h1>
                        <p className="hawa-text-sm">
                          Subtitle of this menu item here
                        </p>
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-text-xl hawa-font-bold ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-text-xl hawa-font-bold ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-text-xl hawa-font-bold ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="hawa-rounded-inner">
                  <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-text-xl hawa-font-bold ">
                        {t("create")}
                      </h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
              </>
            )
          }
        ]}
      />
    );
  }
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
              <div className=" hawa-w-full  hawa-p-2">
                <StandardNavigationMenuItem
                  icon={<FilePlus2 />}
                  title={t("create")}
                  subtitle="Subtitle of this menu item here"
                />
                <NavigationMenuLink asChild>
                  <div className="hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-rounded hawa-p-4 hawa-py-2 hawa-transition-all  hover:hawa-bg-muted">
                    <FilePlus2 />
                    <div className="hawa-flex hawa-flex-col">
                      <h1 className="hawa-font-bold ">{t("create")}</h1>
                      <p className="hawa-text-sm">
                        Subtitle of this menu item here
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>

                <div className=" hawa-flex hawa-cursor-pointer hawa-flex-row hawa-items-center hawa-gap-4 hawa-rounded hawa-p-4 hawa-py-2 hawa-transition-all hover:hawa-bg-muted">
                  <ArrowUpRightSquare />
                  <div className="hawa-flex hawa-flex-col">
                    <h1 className="hawa-font-bold ">{t("share")}</h1>
                    <p className="hawa-text-sm">
                      Subtitle of this menu item here
                    </p>
                  </div>
                </div>
              </div>
            )
          },
          { trigger: "item 2" },
          {
            trigger: "item 3",
            content: <div className="hawa-p-4">something here</div>
          }
        ]}
      />
    );
  }
};
