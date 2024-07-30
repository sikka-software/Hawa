import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Settings, User2 } from "lucide-react";
import { useDarkMode } from "storybook-dark-mode";

import { Button } from "@sikka/hawa/elements/button";
import { AppLayout } from "@sikka/hawa/layout";

import { setLocale } from "../../translations/i18n";
import { AppLayoutStory } from "./AppLayoutStory";

const meta = {
  title: "Layout/App Layout",
  component: AppLayout,
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const dark = useDarkMode();
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    console.log("dark sis ", dark);
    return <AppLayoutStory {...args} direction={direction} isDark={dark} />;
  },
  args: {
    topBar: true,
    username: "Zakher Masri",
    avatarImage: "https://source.unsplash.com/tVqQSfXQ_SI",
    email: "zakher@sikka.io",
    logoSymbol:
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-symbol.png",
    DrawerFooterActions: (
      <Button size="smallIcon" variant={"light"}>
        <Settings className="hawa-icon" />
      </Button>
    ),
  },
  argTypes: { onLogoClick: { action: "onLogoClick" } },
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
      <div className="hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-items-center hawa-justify-center">
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
    ),
  },
  argTypes: { onLogoClick: { action: "onLogoClick" } },
};
