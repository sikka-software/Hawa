import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Elements/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Sheet/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [isOpen, setIsOpen] = useState(false);
    const [side, setSide] = useState<any>("right");
    return (
      <div dir={direction}>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="hawa-flex hawa-flex-col hawa-items-center hawa-gap-4">
            <Button onClick={() => setSide("top")}>Top Sheet</Button>
            <div className="hawa-flex hawa-flex-row hawa-gap-4">
              <Button onClick={() => setSide("left")}>Left Sheet</Button>
              <Button onClick={() => setSide("right")}>Right Sheet</Button>
            </div>
            <Button onClick={() => setSide("bottom")}>Bottom Sheet</Button>
          </SheetTrigger>
          <SheetContent side={side}>
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
          <SheetTrigger className="hawa-flex hawa-flex-col hawa-items-center hawa-gap-4">
            <Button onClick={() => setSide("bottom")}>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent side={side} className="hawa-inset-x-[300px] hawa-rounded hawa-border">
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
