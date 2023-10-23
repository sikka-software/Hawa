import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { cn } from "../util";
import { Button } from "./Button";
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
  buttonClassName?: string;
  /** This the same value as the one with the key valueKey */
  defaultValue?: string;
  onChange?: (e: any) => void;
};

export const Combobox: React.FC<ComboboxTypes<any>> = ({
  labelKey = "label",
  valueKey = "value",
  defaultValue = "",
  popoverClassName,
  buttonClassName,
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
        "hawa-flex hawa-flex-col hawa-gap-2",
        props.width === "fit" ? "hawa-w-fit" : "hawa-w-full"
      )}
    >
      {props.label && <Label>{props.label}</Label>}

      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={props.isLoading} asChild>
          {props.isLoading ? (
            <Skeleton className="hawa-h-[40px] hawa-w-full" />
          ) : (
            <Button
              variant="combobox"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "hawa-justify-between hawa-bg-background hawa-font-normal",
                buttonClassName
              )}
            >
              {value
                ? getProperty(
                    data.find((item: any) => item[valueKey] === value) || {},
                    labelKey
                  )
                : props.placeholder || "..."}

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
            </Button>
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

      {props.helperText && (
        <p className="hawa-text-xs hawa-text-helper-color">
          {props.helperText}
        </p>
      )}
    </div>
  );
};
