import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { Card, CardContent } from "@sikka/hawa/elements/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
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
    const [test, setTest] = useState(false);
    return (
      <Tabs
        orientation="horizontal"
        variant={args.variant}
        defaultValue="account"
        dir={direction}
        onValueChange={() => setTest(false)}
      >
        <TabsList
          scrollable
          className="hawa-w-full"
        >
          <TabsTrigger
            value="account"
            showPopover={test}
            popoverContent={
              <div className="hawa-p-2  hawa-w-fit hawa-rounded hawa-shadow-lg">
                <p>Popover content</p>
              </div>
            }
          >
            {t("account")}
          </TabsTrigger>
          <TabsTrigger value="password">{t("password")}</TabsTrigger>
          <TabsTrigger value="password1">{t("password")}</TabsTrigger>
          <TabsTrigger value="password2">{t("password")}</TabsTrigger>
          <TabsTrigger value="password3">{t("password")}</TabsTrigger>
          <TabsTrigger value="password4">{t("password")}</TabsTrigger>
          <TabsTrigger value="password5">{t("password")}</TabsTrigger>
          <TabsTrigger value="password6">{t("password")}</TabsTrigger>
          <TabsTrigger value="password7">{t("password")}</TabsTrigger>
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
              <Button onClick={() => setTest(!test)}>Show pop</Button>
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
    variant: "default",
  },
};
export const Vertical: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";
    const [test, setTest] = useState(false);

    return (
      <Tabs
        variant={args.variant}
        defaultValue="account"
        orientation="vertical"
        dir={direction}
      >
        <TabsList>
          <TabsTrigger
            value="account"
            showPopover={test}
            popoverContent={
              <div className="hawa-p-2 hawa-w-64 hawa-bg-white hawa-rounded hawa-shadow-lg">
                <p>Popover content</p>
              </div>
            }
          >
            {t("account")}
          </TabsTrigger>
          <TabsTrigger value="password">{t("password")}</TabsTrigger>
          <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
          <TabsTrigger value="display">
            {t("display thing here as weelll")}
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
              <Button onClick={() => setTest(!test)}>Show pop</Button>
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
    variant: "default",
  },
};
