import clsx from "clsx";
import React, { FC } from "react";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";
import { Label } from "./Label";
import { cn } from "../util";
import { Skeleton } from "./Skeleton";

type ControlTypes = {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
  size?: "small" | "normal" | "large";
};
// The options container
type MenuTypes = {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
};
const Menu: FC<MenuTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      className="hawa-absolute hawa-z-10 hawa-mt-2 hawa-flex hawa-w-full  hawa-flex-col hawa-justify-start  hawa-rounded  hawa-border  hawa-bg-background  hawa-p-1.5"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  );
};
// The single options
type OptionTypes = {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
  size?: "small" | "normal" | "large";
};
const Option: FC<OptionTypes> = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  size = "normal",
  ...props
}) => (
  <div
    ref={innerRef}
    className="hawa-flex hawa-cursor-pointer hawa-select-none hawa-flex-row hawa-items-center hawa-justify-between hawa-rounded-inner hawa-p-1 hawa-px-2 hover:hawa-bg-primary hover:hawa-text-primary-foreground"
    {...innerProps}
  >
    {children}
  </div>
);

type SelectTypes = {
  label?: string;
  options?: {
    value: any;
    label: any;
  }[];
  isCreatable?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  controlClassNames?: string;
  containerClassNames?: string;
  onChange?: any;
  helperText?: any;
  onInputChange?: any;
  native?: any;
  width?: "full" | "small" | "fit";
  value?: any;
  children?: any;
  getOptionLabel?: any;
  disabled?: boolean;
  defaultValue?: any;
  isLoading?: any;
  texts?: {
    noOptions?: string;
    createLabel?: string;
  };
};
export const Select: FC<SelectTypes> = (props) => {
  const Control: FC<ControlTypes> = ({
    // cx,
    children,
    // getStyles,
    innerProps,
    innerRef,
    // size = "normal",
    // ...props
  }) => {
    // let sizeStyles = {
    //   small: "hawa-h-7 hawa-text-xs",
    //   normal: "hawa-h-[36px]  hawa-text-sm",
    //   large: "",
    // };
    return (
      <div
        ref={innerRef}
        className={clsx(
          // sizeStyles[size],
          " hawa-text-sm hawa-flex hawa-p-2 hawa-w-full hawa-rounded hawa-border hawa-bg-background hawa-text-gray-900 focus:hawa-border-blue-500 focus:hawa-ring-blue-500 dark:focus:hawa-ring-blue-500"
          // props.className
        )}
        {...innerProps}
        //   style={{
        //     height: "10px",
        //   }}
      >
        {children}
      </div>
    );
  };

  const NoOption = () => {
    return <div>{props.texts?.noOptions ?? "No Items Found"}</div>;
  };

  return (
    <div
      className={cn(
        "hawa-flex hawa-flex-col hawa-gap-2",
        props.width === "fit" ? "hawa-w-fit" : "hawa-w-full"
      )}
    >
      {props.label && <Label>{props.label}</Label>}

      {props.isLoading ? (
        <Skeleton className="hawa-h-[38px] hawa-w-full" />
      ) : !props.isCreatable ? (
        <ReactSelect
          noOptionsMessage={NoOption}
          classNames={{
            control: () =>
              cn(
                " hawa-text-sm hawa-flex hawa-p-2 hawa-w-full  hawa-rounded hawa-border hawa-bg-background hawa-text-gray-900 focus:hawa-border-blue-500 focus:hawa-ring-blue-500 dark:focus:hawa-ring-blue-500",
                props.controlClassNames
              ),
            container: () =>
              cn(
                "hawa-rounded",
                props.containerClassNames,
                props.disabled
                  ? "hawa-cursor-not-allowed"
                  : "hawa-cursor-pointer"
              ),
            //   TODO: enable keyboard to go to the next item in the list
            placeholder: () => "hawa-px-2 hawa-text-muted-foreground",
            input: () => "hawa-text-primary hawa-px-2",
            valueContainer: () =>
              "hawa-text-white dark:hawa-text-muted-foreground",
            singleValue: () => "hawa-text-black dark:hawa-text-white hawa-px-2",
            indicatorsContainer: () =>
              " hawa-px-0 hawa-cursor-pointer hawa-text-muted-foreground",
          }}
          unstyled
          isDisabled={props.disabled}
          options={props.options}
          defaultValue={props.defaultValue}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          autoFocus
          onChange={(newValue: any, action) =>
            // props.onChange(newValue.label, action)
            props.onChange(newValue, action)
          }
          components={{
            // Control,
            Option,
            Menu,
          }}
          getOptionLabel={props.getOptionLabel}
        />
      ) : (
        <CreatableSelect
          formatCreateLabel={(inputValue) =>
            `${props.texts?.createLabel ?? "Create"} "${inputValue}"`
          }
          classNames={{
            container: () =>
              cn(
                "hawa-rounded ",
                props.disabled
                  ? "hawa-cursor-not-allowed"
                  : "hawa-cursor-pointer"
              ),
            placeholder: () => "hawa-px-2 hawa-text-muted-foreground",
            input: () => "hawa-text-primary hawa-px-2",
            valueContainer: () =>
              "hawa-text-white dark:hawa-text-muted-foreground",
            singleValue: () => "hawa-text-black dark:hawa-text-white hawa-px-2",
            indicatorsContainer: () =>
              " hawa-px-2 hawa-cursor-pointer hawa-text-muted-foreground",
          }}
          unstyled
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onCreateOption={() => console.log("im changing")}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          onInputChange={(newValue, action) =>
            props.onInputChange(newValue, action)
          }
          components={{
            Control,
            Option,
            Menu,
          }}
        />
      )}
      {props.helperText && (
        <p className="hawa-mt-2 hawa-text-sm hawa-text-red-600 dark:hawa-text-red-500">
          {props.helperText}
        </p>
      )}
    </div>
  );
};
