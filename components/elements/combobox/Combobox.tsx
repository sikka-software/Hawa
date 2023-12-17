import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@elements/command";
import { Label, LabelProps } from "@elements/label";
import { PopoverContent, PopoverTrigger } from "@elements/popover";
import { Skeleton } from "@elements/skeleton";

import { DirectionType } from "@_types/commonTypes";

import { cn } from "../../util";

type ComboboxTypes<T> = {
  labelKey?: keyof T;
  valueKey?: keyof T;
  data: T[];
  width?: string;
  texts?: {
    noItems?: string;
    placeholder?: string;
    searchPlaceholder?: string;
  };
  isLoading?: boolean;
  helperText?: string;
  popoverClassName?: string;
  /** This the same value as the one with the key valueKey */
  defaultValue?: string;
  preview?: boolean;
  hideInput?: boolean;
  direction?: DirectionType;
  id?: string;
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;
  /** If true, it will show a red asterisk next to the label*/
  isRequired?: boolean;
  onChange?: (e: any) => void;
};

export const Combobox = React.forwardRef<HTMLDivElement, ComboboxTypes<any>>(
  (
    {
      labelKey = "label",
      valueKey = "value",
      defaultValue = "",
      popoverClassName,
      direction,
      labelProps,
      data,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
      return obj[key];
    }
    const handleOpenChange = (open: boolean) => {
      if (!(props.isLoading || props.preview)) {
        setOpen(open);
      }
    };
    return (
      <div
        className={cn(
          "hawa-relative hawa-flex hawa-h-fit hawa-flex-col hawa-gap-2",
          props.width === "fit" ? "hawa-w-fit" : "hawa-w-full"
        )}
      >
        {props.label && <Label {...labelProps}>{props.label}</Label>}

        <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            {props.isLoading ? (
              <div className="hawa-pb-2">
                <Skeleton className="hawa-h-[40px] hawa-w-full" />
              </div>
            ) : (
              <div className="hawa-flex hawa-flex-col hawa-items-start hawa-gap-2 ">
                <div
                  className={cn(
                    "hawa-absolute hawa-top-[22px] hawa-h-[0.8px] hawa-w-full hawa-bg-gray-200 hawa-transition-all dark:hawa-bg-gray-800",
                    props.preview ? "hawa-opacity-100" : "hawa-opacity-0"
                  )}
                ></div>
                <button
                  role="combobox"
                  type="button"
                  aria-expanded={open}
                  className={cn(
                    "hawa-inline-flex hawa-h-10 hawa-w-full hawa-select-none hawa-items-center hawa-justify-between hawa-rounded-md hawa-border hawa-py-2 hawa-text-sm hawa-font-normal hawa-text-primary hawa-ring-offset-background  hawa-transition-all  focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
                    props.preview
                      ? "hawa-cursor-default hawa-rounded-none hawa-border-transparent hawa-px-0"
                      : "hawa-bg-background hawa-px-3 "
                  )}
                >
                  {value
                    ? getProperty(
                        data.find((item: any) => item[valueKey] === value) ||
                          {},
                        labelKey
                      )
                    : props.texts?.placeholder || ". . ."}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "hawa-icon hawa-transition-all",
                      !props.preview
                        ? "hawa-visible hawa-opacity-100"
                        : "hawa-invisible hawa-opacity-0"
                    )}
                    aria-label="Chevron down icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <p
                  className={cn(
                    "hawa-my-0 hawa-text-start hawa-text-xs hawa-text-helper-color hawa-transition-all",
                    props.helperText
                      ? "hawa-h-4 hawa-opacity-100"
                      : "hawa-h-0 hawa-opacity-0"
                  )}
                >
                  {props.helperText}
                </p>
              </div>
            )}
          </PopoverTrigger>
          <PopoverContent
            sideOffset={0}
            className={cn("popover-w-parent", props.helperText && "-hawa-mt-4")}
            dir={direction}
          >
            <Command>
              {!props.hideInput && (
                <CommandInput
                  placeholder={props.texts?.searchPlaceholder || "Search"}
                />
              )}
              <CommandEmpty>
                {props.texts?.noItems || "No items found."}
              </CommandEmpty>
              <CommandGroup className="hawa-max-h-[200px] hawa-overflow-y-auto">
                {data.map((item: any, i) => (
                  <CommandItem
                    key={i}
                    onSelect={() => {
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
                      aria-label="Check Icon"
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
                        "hawa-icon hawa-me-2",
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
      </div>
    );
  }
);
