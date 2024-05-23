import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Plus,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  FullCommand,
  AppCommand as ACommand,
} from "@sikka/hawa/elements/command";
import { useShortcuts } from "@sikka/hawa/hooks";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Command",
  component: Command,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    return (
      <FullCommand
        texts={{
          searchPlaceholder: t("command_searchPlaceholder"),
          emptyText: t("command_emptyText"),
        }}
        direction={locale === "ar" ? "rtl" : "ltr"}
        items={[
          {
            type: "group",
            heading: t("view"),
            items: [
              {
                icon: Calendar,
                text: t("invoices"),
                action: () => console.log(""),
              },
              {
                icon: Smile,
                text: t("clients"),
                action: () => console.log(""),
              },
              {
                icon: Calculator,
                text: t("products"),
                action: () => console.log(""),
              },
            ],
          },
          {
            type: "group",
            heading: t("create"),
            items: [
              {
                icon: Plus,
                text: t("new_invoice"),
                action: () => console.log(""),
              },
              {
                icon: Plus,
                text: t("new_client"),
                action: () => console.log(""),
              },
              {
                icon: Plus,
                text: t("new_product"),
                action: () => console.log(""),
              },
            ],
          },
          { type: "separator" },
          {
            type: "group",
            heading: t("settings"),
            items: [
              {
                icon: User,
                text: t("account"),
                shortcut: "⌘P",
                action: () => console.log(""),
              },
              {
                icon: CreditCard,
                text: t("billing"),
                shortcut: "⌘B",
                action: () => console.log(""),
              },
              {
                icon: Settings,
                text: t("settings"),
                shortcut: "⌘S",
                action: () => console.log(""),
              },
            ],
          },
        ]}
      />
    );
  },
};

export const AppCommand: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const [open, setOpen] = useState(false);

    useShortcuts([["mod+k", () => setOpen(true)]]);
    return (
      <div>
        <div className="hawa-cursor-pointer" onClick={() => setOpen(true)}>
          test
        </div>
        <ACommand
          dialogProps={{
            open,
            onOpenChange: setOpen,
          }}
          commandProps={{
            texts: {
              searchPlaceholder: t("command_searchPlaceholder"),
              emptyText: t("command_emptyText"),
            },
            direction: locale === "ar" ? "rtl" : "ltr",
            items: [
              {
                type: "group",
                heading: t("view"),
                items: [
                  {
                    icon: Calendar,
                    text: t("invoices"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Smile,
                    text: t("clients"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("products"),
                    action: () => console.log(""),
                  },

                  {
                    icon: Calculator,
                    text: t("products1"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product2s"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product3s"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product4s"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product5s1"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product6s"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("produc7ts"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("produc8ts"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Calculator,
                    text: t("product9s"),
                    action: () => console.log(""),
                  },
                ],
              },
              {
                type: "group",
                heading: t("create"),
                items: [
                  {
                    icon: Plus,
                    text: t("new_invoice"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Plus,
                    text: t("new_client"),
                    action: () => console.log(""),
                  },
                  {
                    icon: Plus,
                    text: t("new_product"),
                    action: () => console.log(""),
                  },
                ],
              },
              { type: "separator" },
              {
                type: "group",
                heading: t("settings"),
                items: [
                  {
                    icon: User,
                    text: t("account"),
                    shortcut: "⌘P",
                    action: () => console.log(""),
                  },
                  {
                    icon: CreditCard,
                    text: t("billing"),
                    shortcut: "⌘B",
                    action: () => console.log(""),
                  },
                  {
                    icon: Settings,
                    text: t("settings"),
                    shortcut: "⌘S",
                    action: () => console.log(""),
                  },
                ],
              },
            ],
          }}
        />
      </div>
    );
  },
};
// export const CustomMade: Story = {
//   render: (args: any, globals: any) => {
//     const locale = globals.globals?.locale === "ar" ? "ar" : "en";
//     setLocale(locale);
//     return (
//       <Command className="hawa-rounded-lg hawa-border hawa-shadow-md">
//         <CommandInput placeholder="Type a command or search..." />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>
//           <CommandGroup heading="Suggestions">
//             <CommandItem>
//               <Calendar className="hawa-icon hawa-mr-2" />
//               <span>Calendar</span>
//             </CommandItem>
//             <CommandItem>
//               <Smile className="hawa-icon hawa-mr-2" />
//               <span>Search Emoji</span>
//             </CommandItem>
//             <CommandItem>
//               <Calculator className="hawa-icon hawa-mr-2" />
//               <span>Calculator</span>
//             </CommandItem>
//           </CommandGroup>
//           <CommandSeparator />
//           <CommandGroup heading="Settings">
//             <CommandItem>
//               <User className="hawa-icon hawa-mr-2" />
//               <span>Profile</span>
//               <CommandShortcut>⌘P</CommandShortcut>
//             </CommandItem>
//             <CommandItem>
//               <CreditCard className="hawa-icon hawa-mr-2" />
//               <span>Billing</span>
//               <CommandShortcut>⌘B</CommandShortcut>
//             </CommandItem>
//             <CommandItem>
//               <Settings className="hawa-icon hawa-mr-2" />
//               <span>Settings</span>
//               <CommandShortcut>⌘S</CommandShortcut>
//             </CommandItem>
//           </CommandGroup>
//         </CommandList>
//       </Command>
//     );
//   },
// };
