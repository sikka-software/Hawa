import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Tabs",
  component: Tabs,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Tabs/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <Tabs defaultValue="account" dir={locale === "ar" ? "rtl" : "ltr"}>
        <TabsList className="hawa-w-full">
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
};
export const Vertical: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    return (
      <Tabs
        defaultValue="account"
        orientation="vertical"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <TabsList >
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
};
