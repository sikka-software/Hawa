import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@sikka/hawa/command";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Command",
  component: Command,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    return (
      <Command className="hawa-rounded-lg hawa-border hawa-shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="hawa-icon hawa-mr-2" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="hawa-icon hawa-mr-2" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="hawa-icon hawa-mr-2" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="hawa-icon hawa-mr-2" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="hawa-icon hawa-mr-2" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="hawa-icon hawa-mr-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
};
