import React from "react";
import {
  Button,
  DropdownMenu,
  Toast,
  ToastAction,
  Toaster
} from "../../elements";
import { useToast } from "../../hooks/useToast";
import { t, setLocale } from "../../translations/i18n";

export default {
  title: "Elements/Toast",
  component: [Toaster, Toast]
};

const Template = (args, globals) => {
  const { toast } = useToast();
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div>
      <Toaster direction={locale === "ar" ? "rtl" : "ltr"} />
      <DropdownMenu
        items={[
          {
            label: "Info",
            value: "info",
            action: () => {
              toast({
                title: "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                description: "Friday, February 10, 2023 at 5:57 PM",
                severity: "info",
                action: <ToastAction altText="Try again">Try again</ToastAction>
              });
            }
          },
          {
            label: "Warning",
            value: "warning",
            action: () => {
              toast({
                title: "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                description: "Friday, February 10, 2023 at 5:57 PM",
                severity: "warning",
                action: <ToastAction altText="Try again">Try again</ToastAction>
              });
            }
          },
          {
            label: "Success",
            value: "success",
            action: () => {
              toast({
                title: "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                description: "Friday, February 10, 2023 at 5:57 PM",
                severity: "success",
                action: <ToastAction altText="Try again">Try again</ToastAction>
              });
            }
          },
          {
            label: "Error",
            value: "error",
            action: () => {
              toast({
                title: "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                description: "Friday, February 10, 2023 at 5:57 PM",
                severity: "error",
                action: <ToastAction altText="Try again">Try again</ToastAction>
              });
            }
          }
        ]}
        trigger={<Button>Add Toaster</Button>}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Alert",
  text: "This is an alert that can be used to share certain information without any severity.",
  severity: "none",
  persistant: true
};

Default.storyName = "Toast";
