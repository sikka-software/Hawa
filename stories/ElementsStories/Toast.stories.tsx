import { useToast } from "@/packages/components/hooks/index";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/packages/components/elements/button";
import { DropdownMenu } from "@/packages/components/elements/dropdownMenu";
import { ToastAction } from "@/packages/components/elements/toast";
import { Toaster } from "@/packages/components/elements/toaster";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Toast",
  component: Toaster,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Toaster/>"}</h1>
          <p>
            To use this component you must wrap your app with a Toaster
            component. And use {"<ToastAction/>"}
          </p>
          <ArgsTable />
        </>
      )
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const { toast } = useToast();
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div>
        <div>
          <Toaster direction={direction} />
          <DropdownMenu
            items={[
              {
                label: "Info",
                value: "info",
                action: () => {
                  toast({
                    title:
                      "Small Toast " + Math.floor(Math.random() * 100),
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    severity: "info",
                    size: "sm",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    )
                  });
                }
              },
              {
                label: "Warning",
                value: "warning",
                action: () => {
                  toast({
                    title:
                      "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    severity: "warning",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    )
                  });
                }
              },
              {
                label: "Success",
                value: "success",
                action: () => {
                  toast({
                    title:
                      "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    severity: "success"
                    // action: (
                    //   <ToastAction altText="Try again">Try again</ToastAction>
                    // )
                  });
                }
              },
              {
                label: "Error",
                value: "error",
                action: () => {
                  toast({
                    title:
                      "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    severity: "error",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    )
                  });
                }
              }
            ]}
            trigger={<Button>Add Toaster</Button>}
          />
        </div>
      </div>
    );
  }
};
