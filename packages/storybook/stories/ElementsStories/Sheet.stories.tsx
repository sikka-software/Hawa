import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenuRadio } from "@sikka/hawa/elements";
import { Button } from "@sikka/hawa/elements/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@sikka/hawa/elements/sheet";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Sheet",
  component: SheetContent,
  parameters: { layout: "centered" },
} satisfies Meta<typeof SheetContent>;

export default meta;
type Story = StoryObj<typeof SheetContent>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [isOpen, setIsOpen] = useState(false);
    const [side, setSide] = useState<any>("right");
    return (
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
          <SheetTrigger
            asChild
            className="hawa-flex hawa-flex-col hawa-items-center hawa-gap-4"
          >
            <div>
              <Button onClick={() => setSide("top")}>Top Sheet</Button>
              <div className="hawa-flex hawa-flex-row hawa-gap-4">
                <Button onClick={() => setSide("left")}>Left Sheet</Button>
                <Button onClick={() => setSide("right")}>Right Sheet</Button>
              </div>
              <Button onClick={() => setSide("bottom")}>Bottom Sheet</Button>
            </div>
          </SheetTrigger>
          <SheetContent {...args} side={side}>
            <SheetHeader className="hawa-p-10">
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                ipsum saepe quaerat, voluptatem molestias hic porro sit fuga
                beatae tempora est dolore quod alias cum debitis animi maxime
                provident laboriosam!
              </div>
            </SheetHeader>
            <div className="hawa-bg-red-500 hawa-py-28">
              <DropdownMenuRadio
                contentProps={{ className: "hawa-z-[100]" }}
                side="left"
                trigger={
                  <div role="button" aria-label="languages">
                    <div>
                      <Button
                        role="button"
                        name="languages"
                        aria-label="languages"
                        variant="outline"
                        size="icon"
                      >
                        {t("language")}
                      </Button>
                    </div>
                  </div>
                }
                value={"en"}
                onValueChange={() => console.log("changing ;ang")}
                options={[
                  { label: "English", value: "en" },
                  { label: "Arabic", value: "ar" },
                ]}
              />
            </div>
            {/* <div className="hawa-flex hawa-flex-col hawa-overflow-y-auto hawa-h-96 hawa-bg-red-300 hawa-h-">
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
              <div className="hawa-bg-gray-200 hawa-p-10">Item</div>
            </div> */}
          </SheetContent>
        </Sheet>
      </div>
    );
  },
  args: { persist: false, hideCloseButton: false },
};
export const MaxWidth: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [isOpen, setIsOpen] = useState(false);
    const [side, setSide] = useState<any>("bottom");
    return (
      <div dir={direction}>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            asChild
            className="hawa-flex hawa-flex-col hawa-items-center hawa-gap-4"
          >
            <Button onClick={() => setSide("bottom")}>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="hawa-inset-x-[300px] hawa-rounded hawa-border"
          >
            <SheetHeader className="hawa-p-10">
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};
