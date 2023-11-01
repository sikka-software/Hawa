import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

const meta = {
  title: "Elements/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Command/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  return (
    <Command className="hawa-rounded-lg hawa-border hawa-shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="hawa-mr-2 hawa-icon" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="hawa-mr-2 hawa-icon" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="hawa-mr-2 hawa-icon" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="hawa-mr-2 hawa-icon" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="hawa-mr-2 hawa-icon" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="hawa-mr-2 hawa-icon" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
