import { ArgsTable, Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import {
  DownloadCloud,
  KeyRound,
  PanelTopClose,
  Settings2,
  Smile,
  User2,
  UserSquare
} from "lucide-react";
import { useDarkMode } from "storybook-dark-mode";

import { AppTabs } from "@/packages/components/layout/appTabs";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/App Tabs",
  component: AppTabs,
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof AppTabs>;

export default meta;
type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    const dark = useDarkMode();
    setLocale(locale);

    return (
      <div dir={direction}>
        <AppTabs {...args} />
      </div>
    );
  },
  args: {
    tabs: [
      { icon: <User2 className="hawa-icon" />, label: t("users") },
      { icon: <KeyRound className="hawa-icon" />, label: t("roles") },
      { icon: <Smile className="hawa-icon" />, label: t("customers") },
      { icon: <UserSquare className="hawa-icon" />, label: t("clients") },
      {
        icon: <DownloadCloud className="hawa-icon" />,
        label: t("invoices")
      },
      {
        icon: <PanelTopClose className="hawa-icon" />,
        label: t("community")
      },
      { icon: <Settings2 className="hawa-icon" />, label: t("settings") }
    ]
  },
  argTypes: {}
};
export const WithHeader: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    const dark = useDarkMode();
    setLocale(locale);

    return (
      <div dir={direction} className="hawa-bg-card">
        <div className="hawa-p-4 hawa-pb-0 hawa-text-4xl hawa-font-extrabold">
          Title here
        </div>
        <div className="hawa-text-md hawa-p-4 hawa-py-0 hawa-font-normal">
          Subtitle here
        </div>
        <AppTabs {...args} />
      </div>
    );
  },
  args: {
    tabs: [
      {
        icon: <User2 className="hawa-icon" />,
        path: "https://sikka.io",
        action: () => console.log("clicked on user"),
        label: t("users")
      },
      { icon: <KeyRound className="hawa-icon" />, label: t("roles") },
      { icon: <Smile className="hawa-icon" />, label: t("customers") },
      { icon: <UserSquare className="hawa-icon" />, label: t("clients") },
      {
        icon: <DownloadCloud className="hawa-icon" />,
        label: t("invoices")
      },
      {
        icon: <PanelTopClose className="hawa-icon" />,
        label: t("community")
      },
      { icon: <Settings2 className="hawa-icon" />, label: t("settings") }
    ]
  },
  argTypes: {}
};
