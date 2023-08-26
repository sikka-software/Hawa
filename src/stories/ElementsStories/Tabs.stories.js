import React, { useState } from "react";
// import { HawaTabs } from "../../elements/HawaTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../elements/Tabs";
import { Card, CardContent } from "../../elements/Card";
// import { FiSettings, FiActivity, FiAirplay, FiSave } from "react-icons/fi";
import { t, setLocale } from "../../translations/i18n";

export default {
  title: "Elements/Tabs",
  component: [Tabs]
};

export const Horizontal = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <Tabs
      defaultValue="account"
      orientation="horizontal"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="password1">Password</TabsTrigger>
        <TabsTrigger value="password2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent headless>Make changes to your account here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent headless>Change your password here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

Horizontal.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2
};

export const Vertical = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <Tabs
      defaultValue="account"
      orientation="vertical"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="password1">Password</TabsTrigger>
        <TabsTrigger value="password2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent headless>Make changes to your account here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent headless>Change your password here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

Vertical.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2,
  width: "full"
};
