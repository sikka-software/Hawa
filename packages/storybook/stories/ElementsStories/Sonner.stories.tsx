import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { Button } from "@sikka/hawa/elements/button";
import { DropdownMenu } from "@sikka/hawa/elements/dropdownMenu";
import { Sonner, createSonner } from "@sikka/hawa/elements/sonner";
import { ToastAction } from "@sikka/hawa/elements/toast";
import { useToast } from "@sikka/hawa/hooks";

import { setLocale, t } from "../../translations/i18n";

const meta = { title: "Elements/Sonner", component: Sonner } satisfies Meta<
  typeof Sonner
>;

export default meta;
type Story = StoryObj<typeof Sonner>;

export const Default: Story = {
  name: "Sonner",
  render: (args: any, globals: any) => {
    const { toast, toasts } = useToast();
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const isDark = useDarkMode();
    console.log("is dark is ", isDark);
    return (
      <div>
        <div>
          <Sonner
            direction={direction}
            theme={isDark ? "dark" : "light"}
            richColors
          />
          <DropdownMenu
            triggerProps={{
              asChild: true,
            }}
            trigger={<Button asChild>Add Toaster</Button>}
            items={[
              {
                label: "Info",
                value: "info",
                action: () => {
                  createSonner.error(t("are-you-sure-description"), {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    duration: 50000,
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  });
                },
              },
              {
                label: "Warning",
                value: "warning",
                action: () => {
                  createSonner.warning("Event has been created", {});
                  // toast({
                  //   title:
                  //     "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                  //   description: "Friday, February 10, 2023 at 5:57 PM",
                  //   severity: "warning",
                  //   action: (
                  //     <ToastAction altText="Try again">Try again</ToastAction>
                  //   ),
                  // });
                },
              },
              {
                label: "Custom Action",
                value: "success",
                action: () => {
                  createSonner.error("error", {
                    description: "Invoice creattion error",

                    action: <Button>Preview</Button>,
                  });
                },
              },
              {
                label: "Error With Action",
                value: "success",
                action: () => {
                  createSonner.error("error", {
                    description: "Invoice creattion error",
                    action: {
                      // label: <Button>Preview</Button>,
                      label: "Preview",
                      onClick: () => console.log("Preview"),
                      children: <Button>Preview</Button>,
                    },
                  });
                },
              },
              {
                label: "Error",
                value: "success",
                action: () => {
                  createSonner.error("error", {
                    description: "Invoice creattion error",
                  });
                },
              },
              {
                label: "Success",
                value: "success",
                action: () => {
                  createSonner.error("error", {
                    description: "Invoice creattion error",
                  });
                },
              },
              {
                label: "Error",
                value: "error",
                action: () => {
                  createSonner.error(
                    "Scheduled: Catch up " + Math.floor(Math.random() * 100),
                    {
                      description: "Friday, February 10, 2023 at 5:57 PM",
                      action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                      ),
                    },
                  );
                },
              },
              {
                label: "Test",
                value: "test",
                action: () => {
                  createSonner.success("Success", {
                    description: "Invoice created successfully",
                    action: (
                      <div>
                        <Button>Preview</Button>
                      </div>
                    ),
                  });
                },
              },
            ]}
          />
        </div>
      </div>
    );
  },
};
