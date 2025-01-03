import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@util/index";

import { DirectionType } from "@_types/commonTypes";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandInputProps,
  CommandItem,
  CommandList,
} from "../command";
import { HelperText } from "../helperText";
import { Label, LabelProps } from "../label";
import { PopoverContent, PopoverTrigger } from "../popover";
import { Skeleton } from "../skeleton";

type ComboboxTypes<T> = {
  labelKey?: keyof T | any;
  valueKey?: keyof T | any;
  data: T[];
  width?: string;
  texts?: {
    noItems?: string;
    placeholder?: string;
    searchPlaceholder?: string;
  };
  isLoading?: boolean;
  helperText?: any;
  popoverClassName?: string;
  /** This the same value as the one with the key valueKey */
  defaultValue?: string;
  preview?: boolean;
  hideInput?: boolean;
  direction?: DirectionType;
  inputProps?: CommandInputProps;
  id?: string;
  /** The label of the input field   */
  label?: any;
  labelProps?: LabelProps;
  /** If true, it will show a red asterisk next to the label*/
  isRequired?: boolean;
  onChange?: (e: any) => void;
  renderOption?: (item: T) => React.ReactNode;
  renderSelected?: (item: T) => React.ReactNode;
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
      inputProps,
      data,
      renderOption,
      renderSelected,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);
    const containerRef = React.useRef<HTMLDivElement>(null);
    // function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    //   return key.split(".").reduce((o, k) => (o || {})[k], obj);
    // }

    function getProperty<T>(obj: T, key: string): any {
      return key.split(".").reduce((o: any, k: string) => (o || {})[k], obj);
    }

    const handleOpenChange = (open: boolean) => {
      if (!(props.isLoading || props.preview)) {
        setOpen(open);
      }
    };
    const selectedItem = data.find((item) => getProperty(item, valueKey) === value);

    return (
      <div
        className={cn(
          "hawa-relative hawa-flex hawa-h-fit hawa-flex-col hawa-gap-2",
          props.width === "fit" ? "hawa-w-fit" : "hawa-w-full",
        )}
        ref={containerRef}
      >
        {props.label && <Label {...labelProps}>{props.label}</Label>}

        <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            {props.isLoading ? (
              <div className="hawa-pb-2">
                <Skeleton className="hawa-h-[40px] hawa-w-full" />
              </div>
            ) : (
              <div className="hawa-flex hawa-flex-col hawa-items-start hawa-gap-2">
                <div
                  className={cn(
                    "hawa-absolute hawa-top-[22px] hawa-h-[0.8px] hawa-w-full hawa-bg-gray-200 hawa-transition-all dark:hawa-bg-gray-800",
                    props.preview ? "hawa-opacity-100" : "hawa-opacity-0",
                  )}
                ></div>
                <button
                  role="combobox"
                  type="button"
                  aria-expanded={open}
                  className={cn(
                    "hawa-inline-flex hawa-h-10 hawa-w-full hawa-select-none hawa-items-center hawa-justify-between hawa-rounded-md hawa-border hawa-py-2 hawa-text-sm hawa-font-normal hawa-ring-offset-background hawa-transition-all focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
                    props.preview
                      ? "hawa-cursor-default hawa-rounded-none hawa-border-transparent hawa-px-0"
                      : "hawa-bg-background hawa-px-3",
                  )}
                >
                  {selectedItem
                    ? renderSelected
                      ? renderSelected(selectedItem)
                      : getProperty(selectedItem, labelKey)
                    : props.texts?.placeholder || ". . ."}
                  {/* {value
                    ? getProperty(
                        data.find((item: any) => item[valueKey] === value) ||
                          {},
                        labelKey,
                      )
                    : props.texts?.placeholder || ". . ."} */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "hawa-icon hawa-transition-all",
                      !props.preview
                        ? "hawa-visible hawa-opacity-100"
                        : "hawa-invisible hawa-opacity-0",
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
                <HelperText helperText={props.helperText} />
              </div>
            )}
          </PopoverTrigger>
          <PopoverContent
            sideOffset={0}
            className={cn("popover-w-parent", props.helperText && "-hawa-mt-4")}
            dir={direction}
            container={containerRef.current}
          >
            <Command
              filter={(value, search) => {
                if (value.toLowerCase().includes(search.toLowerCase())) return 1;
                return 0;
              }}
            >
              {!props.hideInput && (
                <CommandInput
                  {...inputProps}
                  dir={direction}
                  placeholder={props.texts?.searchPlaceholder || "Search"}
                />
              )}
              <CommandEmpty>{props.texts?.noItems || "No items found."}</CommandEmpty>
              <CommandList>
                <CommandGroup
                  className={cn("hawa-max-h-[200px]", data.length > 0 && "hawa-overflow-y-auto")}
                >
                  {data.map((item: any, i) => (
                    <CommandItem
                      key={i}
                      onSelect={() => {
                        const newValue = getProperty(item, valueKey);
                        setValue(newValue === value ? "" : (newValue as string));
                        if (props.onChange) {
                          props.onChange(newValue === value ? "" : (newValue as string));
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
                          "hawa-icon",
                          value === getProperty(item, valueKey)
                            ? "hawa-opacity-100"
                            : "hawa-opacity-0",
                        )}
                        style={{ marginInlineEnd: "0.5rem" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {renderOption ? renderOption(item) : getProperty(item, labelKey)}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </PopoverPrimitive.Root>
      </div>
    );
  },
);
