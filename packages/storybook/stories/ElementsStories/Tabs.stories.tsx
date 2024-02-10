import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent } from "@sikka/hawa/elements/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@sikka/hawa/elements/tabs";
import { OrientationType } from "@sikka/hawa/types/commonTypes";

import { setLocale, t } from "../../translations/i18n";

const meta = { title: "Elements/Tabs", component: Tabs } satisfies Meta<
  typeof Tabs
>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <Tabs variant={args.variant} defaultValue="account" dir={direction}>
        <TabsList className="hawa-w-full">
          <TabsTrigger value="account">{t("account")}</TabsTrigger>
          <TabsTrigger value="password">{t("password")}</TabsTrigger>
          <TabsTrigger
            value="settings"
            chipProps={{ label: "", color: "red", size: "small" }}
          >
            {t("settings")}
          </TabsTrigger>
          <TabsTrigger
            value="display"
            chipProps={{ label: t("new"), color: "red", size: "small" }}
          >
            {t("display")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardContent headless>
              Make changes to your account here.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardContent headless>Change your password here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="display">
          <Card>
            <CardContent headless>
              This is the content of the display tab
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent headless>
              Update your account settings here.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
  args: {
    variant: "default"
  }
};
export const Vertical: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <Tabs
        variant={args.variant}
        defaultValue="account"
        orientation="vertical"
        dir={direction}
      >
        <TabsList>
          <TabsTrigger value="account">{t("account")}</TabsTrigger>
          <TabsTrigger value="password">{t("password")}</TabsTrigger>
          <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
          <TabsTrigger value="display">{t("display")}</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardContent headless>
              Make changes to your account here.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardContent headless>Change your password here.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="display">
          <Card>
            <CardContent headless>
              This is the content of the display tab
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent headless>
              Update your account settings here.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
  args: {
    variant: "default"
  }
};
