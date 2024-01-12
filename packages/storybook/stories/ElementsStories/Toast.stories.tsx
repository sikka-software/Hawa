import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { DropdownMenu } from "@sikka/hawa/elements/dropdownMenu";
import { ToastAction } from "@sikka/hawa/elements/toast";
import { Toaster } from "@sikka/hawa/elements/toaster";
import { useToast } from "@sikka/hawa/hooks";

import { setLocale, t } from "../../translations/i18n";

const meta = { title: "Elements/Toast", component: Toaster } satisfies Meta<
  typeof Toaster
>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  name: "Toast",
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
            trigger={<Button>Add Toaster</Button>}
            items={[
              {
                label: "Info",
                value: "info",
                action: () => {
                  toast({
                    title: "Small Toast " + Math.floor(Math.random() * 100),
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
          />
        </div>
      </div>
    );
  }
};
