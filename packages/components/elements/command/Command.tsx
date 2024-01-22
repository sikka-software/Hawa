import * as React from "react";

import { DialogProps } from "@radix-ui/react-dialog";
import { cn } from "@util/index";
import { Command as CommandPrimitive } from "cmdk";

import { Dialog, DialogContent } from "../dialog";

type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
interface CommandDialogProps extends DialogProps {}
interface CommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {}
interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}
interface CommandEmptyProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {}
interface CommandGroupProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {}
interface CommandSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {}
interface CommandItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}
interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Command: React.ForwardRefExoticComponent<
  CommandProps & React.RefAttributes<React.ElementRef<typeof CommandPrimitive>>
> = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-overflow-hidden hawa-rounded-md hawa-bg-popover hawa-text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="hawa-overflow-hidden hawa-p-0 hawa-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:hawa-px-2 [&_[cmdk-group-heading]]:hawa-font-medium [&_[cmdk-group-heading]]:hawa-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:hawa-pt-0 [&_[cmdk-group]]:hawa-px-2 [&_[cmdk-input-wrapper]_svg]:hawa-h-5 [&_[cmdk-input-wrapper]_svg]:hawa-w-5 [&_[cmdk-input]]:hawa-h-12 [&_[cmdk-item]]:hawa-px-2 [&_[cmdk-item]]:hawa-py-3 [&_[cmdk-item]_svg]:hawa-h-5 [&_[cmdk-item]_svg]:hawa-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => (
  <div
    className="hawa-flex hawa-items-center hawa-border-b hawa-px-3"
    cmdk-input-wrapper=""
  >
    <svg
      aria-label="Search Icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hawa-icon hawa-me-2 hawa-shrink-0 hawa-opacity-50"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "hawa-flex hawa-h-11 hawa-w-full hawa-rounded-md hawa-bg-transparent hawa-py-3 hawa-text-sm hawa-outline-none placeholder:hawa-text-muted-foreground disabled:hawa-cursor-not-allowed disabled:hawa-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "hawa-max-h-[300px] hawa-overflow-y-auto hawa-overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="hawa-py-6 hawa-text-center hawa-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "hawa-overflow-hidden hawa-p-1 hawa-text-foreground [&_[cmdk-group-heading]]:hawa-px-2 [&_[cmdk-group-heading]]:hawa-py-1.5 [&_[cmdk-group-heading]]:hawa-text-xs [&_[cmdk-group-heading]]:hawa-font-medium [&_[cmdk-group-heading]]:hawa-text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("hawa--mx-1 hawa-h-px hawa-bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "hawa-relative hawa-flex hawa-cursor-default hawa-select-none hawa-items-center hawa-rounded-sm hawa-px-2 hawa-py-1.5 hawa-text-sm hawa-outline-none aria-selected:hawa-bg-accent aria-selected:hawa-text-accent-foreground data-[disabled]:hawa-pointer-events-none data-[disabled]:hawa-opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & CommandShortcutProps) => {
  return (
    <span
      className={cn(
        "hawa-ml-auto hawa-text-xs hawa-tracking-widest hawa-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
};
