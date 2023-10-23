import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./Command";
import { PopoverContent, PopoverTrigger } from "./Popover";
import { cn } from "../util";
import { Label } from "./Label";
import { Skeleton } from "./Skeleton";

type ComboboxTypes<T> = {
  labelKey?: keyof T;
  valueKey?: keyof T;
  data: T[];
  width?: string;
  label?: string;
  isLoading?: boolean;
  helperText?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  popoverClassName?: string;
  /** This the same value as the one with the key valueKey */
  defaultValue?: string;
  preview?: boolean;
  onChange?: (e: any) => void;
};

export const Combobox: React.FC<ComboboxTypes<any>> = ({
  labelKey = "label",
  valueKey = "value",
  defaultValue = "",
  popoverClassName,
  data,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  return (
    <div
      className={cn(
        "hawa-flex hawa-flex-col hawa-gap-2 hawa-relative",
        props.width === "fit" ? "hawa-w-fit" : "hawa-w-full"
      )}
    >
      {props.label && <Label>{props.label}</Label>}
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={props.isLoading || props.preview}>
          {props.isLoading ? (
            <Skeleton className="hawa-h-[40px] hawa-w-full" />
          ) : (
            <div>
              <div
                className={cn(
                  "hawa-absolute hawa-top-[22px] hawa-h-[0.8px] hawa-w-full hawa-bg-gray-200 hawa-transition-all dark:hawa-bg-gray-800",
                  props.preview ? "hawa-opacity-100" : "hawa-opacity-0"
                )}
              ></div>
              <button
                // variant="combobox"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  "hawa-text-primary hawa-border hawa-h-10 hawa-py-2 hawa-justify-between hawa-w-full hawa-font-normal hawa-inline-flex hawa-items-center hawa-transition-all hawa-select-none hawa-rounded-md hawa-text-sm  hawa-ring-offset-background  focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
                  props.preview
                    ? "hawa-px-0 hawa-rounded-none hawa-border-transparent hawa-cursor-default"
                    : "hawa-px-4 hawa-bg-background "
                )}
              >
                {value
                  ? getProperty(
                      data.find((item: any) => item[valueKey] === value) || {},
                      labelKey
                    )
                  : props.placeholder || "..."}
                {!props.preview && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hawa-w-4 hawa-h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent className={cn("popover-w-parent")}>
          <Command>
            <CommandInput placeholder={props.searchPlaceholder} />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="  hawa-max-h-[200px] hawa-overflow-y-auto">
              {data.map((item: any) => (
                <CommandItem
                  key={getProperty(item, valueKey)} // Updated line
                  onSelect={() => {
                    // Adjusted line
                    const newValue = getProperty(item, valueKey);
                    setValue(newValue === value ? "" : (newValue as string));
                    if (props.onChange) {
                      props.onChange(
                        newValue === value ? "" : (newValue as string)
                      );
                    }
                    setOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "hawa-mr-2 hawa-h-4 hawa-w-4",
                      value === getProperty(item, valueKey)
                        ? "hawa-opacity-100"
                        : "hawa-opacity-0"
                    )}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {getProperty(item, labelKey)}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </PopoverPrimitive.Root>
      <p
        className={cn(
          "hawa-my-0 hawa-text-xs hawa-text-helper-color hawa-transition-all",
          props.helperText && !props.isLoading
            ? "hawa-opacity-100 hawa-h-4"
            : "hawa-opacity-0 hawa-h-0"
        )}
      >
        {props.helperText}
      </p>
    </div>
  );
};
