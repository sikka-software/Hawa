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
  // ... other props
  width?: string;
  label?: string;
  isLoading?: boolean;
  helperText?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  /** This the same value as the one with the key valueKey */
  defaultValue?: string;
};

export const Combobox: React.FC<ComboboxTypes<any>> = ({
  labelKey = "label",
  valueKey = "value",
  defaultValue = "",

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

      {props.isLoading ? (
        <Skeleton className="hawa-h-[40px] hawa-w-full" />
      ) : (
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="combobox"
              role="combobox"
              aria-expanded={open}
              className="hawa-w-[200px] hawa-justify-between hawa-bg-background"
            >
              {value
                ? getProperty(
                    data.find((item: any) => item[valueKey] === value) || {},
                    labelKey
                  )
                : props.placeholder}

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
                className="hawa-ml-2 hawa-h-4 hawa-w-4 hawa-shrink-0 hawa-opacity-50"
              >
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="hawa-w-[200px] hawa-p-0 hawa-bg-yellow-600">
            <Command>
              <CommandInput placeholder={props.searchPlaceholder} />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {data.map((item: any) => (
                  <CommandItem
                    key={getProperty(item, valueKey)} // Updated line
                    onSelect={() => {
                      // Adjusted line
                      const newValue = getProperty(item, valueKey);
                      console.log("seleelelelele", newValue);
                      setValue(newValue === value ? "" : (newValue as string));
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
      )}
      {props.helperText && <p className="helper-text">{props.helperText}</p>}
    </div>
  );
};
