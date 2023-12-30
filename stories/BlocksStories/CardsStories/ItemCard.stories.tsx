import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightCircle, CopyIcon, Edit2, Heart, Trash2 } from "lucide-react";

import { ItemCard } from "@/packages/components/blocks/cards";

import { Button } from "@elements/button";
import { Count } from "@elements/count";
import { Tooltip } from "@elements/tooltip";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Blocks/Cards/Item Card",
  component: ItemCard
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div
        className="hawa-flex hawa-h-64 hawa-flex-col hawa-gap-2"
        dir={direction}
      >
        <ItemCard
          // className="hawa-h-full hawa-min-h-[400px]"
          headerActions={[
            { label: "QR Code", action: () => console.log("clicking on QR") },
            {
              label: "Menu Settings",
              value: "Menu Settings",
              action: () => console.log("clicking on Settings")
            },
            {
              label: "Menu Styles",
              value: "Menu Styles",
              action: () => console.log("clicking on Styles")
            },
            {
              label: "Analytics",
              value: "Analytics",
              action: () => console.log("clicking on Analytics")
            }
          ]}
          header={
            <div>
              <h1>Menu</h1>
            </div>
          }
          content={
            <div>
              <p>
                All the icons and buttons of this card are customizable, yet all
                the props are optional.
              </p>
            </div>
          }
          actions={
            <div className="hawa-flex hawa-flex-row hawa-gap-2 ">
              <Tooltip
                triggerProps={{ asChild: true }}
                delayDuration={200}
                content={"Duplicate"}
              >
                <Button size="icon" variant="ghost">
                  <CopyIcon className="hawa-h-5 hawa-w-5" />
                </Button>
              </Tooltip>

              <Tooltip
                triggerProps={{ asChild: true }}
                delayDuration={200}
                content={"Delete"}
              >
                <Button size="icon" variant="ghost">
                  <Trash2 className="hawa-h-5 hawa-w-5" />
                </Button>
              </Tooltip>

              <Tooltip
                triggerProps={{ asChild: true }}
                delayDuration={200}
                content={"Edit"}
              >
                <Button size="icon" variant="ghost">
                  <Edit2 className="hawa-h-5 hawa-w-5" />
                </Button>
              </Tooltip>
            </div>
          }
          counts={
            <div className="hawa-flex hawa-flex-row ">
              <Tooltip delayDuration={200} content={"Counts"}>
                <div>
                  <Count
                    icon={<ArrowRightCircle className="hawa-icon" />}
                    count="30"
                  />
                </div>
              </Tooltip>
              <Tooltip delayDuration={200} content={"Likes"}>
                <div>
                  <Count icon={<Heart className="hawa-icon" />} count="20" />
                </div>
              </Tooltip>
            </div>
          }
          {...args}
        />
      </div>
    );
  },
  args: {},
  argTypes: {
    onCardClick: { action: "onCardClick" }
  }
};
