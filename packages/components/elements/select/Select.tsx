import React, { FC } from "react";
import ReactSelect, { MenuProps, OptionProps } from "react-select";
import CreatableSelect from "react-select/creatable";

import { cn } from "@util/index";
import clsx from "clsx";

import { HelperText } from "../helperText";
import { Label, LabelProps } from "../label";
import { Skeleton } from "../skeleton";

type ControlTypes = {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
  size?: "small" | "normal" | "large";
};

// The options container
type MenuTypes = MenuProps & {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
};

// The single options
type OptionTypes = OptionProps & {
  cx: any;
  children: any;
  getStyles: any;
  innerProps: any;
  innerRef: any;
  isFocused: boolean;
  isSelected: boolean;
  size?: "small" | "normal" | "large";
};

export type SelectOptionProps = {
  value: any;
  label: any;
};

type SelectTypes = {
  label?: string;
  hideHelperText?: boolean;
  options: SelectOptionProps[];
  labelKey?: string;
  valueKey?: string;
  isCreatable?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  controlClassNames?: string;
  containerClassNames?: string;
  onChange: any;
  helperText?: any;
  onInputChange?: any;
  native?: any;
  width?: "full" | "small" | "fit";
  value?: any;
  children?: any;
  getOptionLabel?: any;
  disabled?: boolean;
  defaultValue?: any;
  handleCreateOption?: () => void;
  placeholder?: string;
  hideIndicator?: boolean;
  phoneCode?: boolean;
  isLoading?: any;
  labelProps?: LabelProps;
  texts?: {
    noOptions?: string;
    createLabel?: string;
  };
};

export const Select: FC<SelectTypes> = ({
  labelProps,
  labelKey = "label",
  valueKey = "value",
  ...props
}) => {
  const NoOption = () => {
    return <div>{props.texts?.noOptions ?? "No Items Found"}</div>;
  };
  const Control: FC<ControlTypes> = ({ children, innerProps, innerRef }) => {
    return (
      <div
        ref={innerRef}
        className={clsx(
          "hawa-flex hawa-w-full hawa-rounded hawa-border hawa-bg-background hawa-p-2 hawa-text-sm hawa-text-gray-900 focus:hawa-border-blue-500 focus:hawa-ring-blue-500 dark:focus:hawa-ring-blue-500",
        )}
        {...innerProps}
      >
        {children}
      </div>
    );
  };
  const Option: FC<OptionTypes> = ({ children, innerProps, innerRef, isFocused, isSelected }) => {
    return (
      <div
        ref={innerRef}
        className={cn(
          "hawa-flex hawa-cursor-pointer hawa-select-none hawa-flex-row hawa-items-center hawa-justify-between hawa-rounded-inner hawa-p-1 hawa-px-2 hawa-transition-all",
          isFocused
            ? "hawa-bg-accent hawa-text-bg-accent-foreground"
            : "hover:hawa-bg-accent hover:hawa-text-accent-foreground",
          isSelected && "hawa-bg-primary hawa-text-primary-foreground",
        )}
        {...innerProps}
      >
        {children}
      </div>
    );
  };
  const Menu: FC<MenuTypes> = ({ cx, children, getStyles, innerProps, innerRef, ...menuProps }) => {
    const menuOpen = menuProps.selectProps.menuIsOpen;
    return (
      <div
        className={cn(
          "dark:dark-shadow hawa-absolute hawa-z-10 -hawa-mx-1 hawa-mt-1 hawa-flex hawa-flex-col hawa-justify-start hawa-rounded hawa-border hawa-bg-background hawa-shadow-md",
          props.phoneCode ? "hawa-p-1.5" : "hawa-w-full hawa-p-1.5",
          menuOpen && "hawa-animate-in hawa-fade-in-0 hawa-zoom-in-95",
        )}
        ref={innerRef}
        {...innerProps}
        // {...props}
      >
        {children}
      </div>
    );
  };

  let phoneCodeStyles =
    "hawa-min-w-[65px] hawa-text-right hawa-w-[100px]  hawa-p-0 hawa-rounded-r-none hawa-h-[40px]";
  let selectContainerStyles =
    "hawa-rounded hawa-block hawa-w-full hawa-border hawa-transition-all hawa-bg-background  hawa-p-0 hawa-px-1 hawa-text-sm";
  let selectPlaceholderStyles = "hawa-text-muted-foreground hawa-cursor-pointer hawa-px-1";
  let selectIndicatorContainerStyles =
    "hawa-cursor-pointer hawa-text-muted-foreground hawa-absolute hawa-end-0 hawa-top-[50%] hawa-bottom-[50%] ";
  return (
    <div
      className={cn(
        "hawa-flex hawa-flex-col hawa-gap-2",
        props.width === "fit" ? "hawa-w-fit" : "hawa-w-full",
      )}
    >
      {props.label && <Label {...labelProps}>{props.label}</Label>}
      {props.isLoading ? (
        <Skeleton className="hawa-h-[40px] hawa-w-full" />
      ) : !props.isCreatable ? (
        <ReactSelect
          noOptionsMessage={NoOption}
          classNames={{
            control: () => cn(props.phoneCode && "hawa-rounded-r-none", props.controlClassNames),
            container: () =>
              cn(
                selectContainerStyles,
                props.phoneCode && phoneCodeStyles,
                props.isMulti && "hawa-ps-0 ",
              ),
            placeholder: () =>
              cn(selectPlaceholderStyles, props.disabled && "hawa-text-muted-foreground"),
            valueContainer: () => "hawa-text-foreground hawa-px-1",
            singleValue: () =>
              cn(
                props.disabled
                  ? "hawa-text-muted-foreground hawa-opacity-30"
                  : "hawa-text-foreground",
              ),
            indicatorsContainer: () =>
              cn(
                selectIndicatorContainerStyles,
                props.hideIndicator ? "hawa-invisible" : "hawa-px-1",
                props.disabled && "hawa-opacity-30",
              ),
          }}
          unstyled
          autoFocus={false}
          components={
            props.hideIndicator
              ? {
                  Option: (optionProps) => (
                    <Option
                      {...optionProps}
                      // @ts-ignore
                      isSelected={optionProps.data[valueKey] === props.value[valueKey]}
                    />
                  ),
                  Menu,
                  IndicatorsContainer: () => null,
                }
              : {
                  Option,
                  Menu,
                  ValueContainer: (e) => (
                    <div
                      className={cn(
                        e.className,
                        "hawa-gap-1 hawa-flex hawa-flex-row hawa-flex-wrap hawa-p-2 hawa-w-full hawa-cursor-pointer",
                      )}
                      {...e}
                    />
                  ),
                  MultiValueContainer: (e) => (
                    <div
                      className="hawa-rounded hawa-border hawa-p-1 hawa-px-2 hawa-flex hawa-flex-row"
                      {...e}
                    />
                  ),
                }
          }
          onChange={(newValue: any, action) => props.onChange(newValue, action)}
          options={props.options}
          getOptionLabel={props.getOptionLabel}
          defaultValue={props.defaultValue}
          value={props.value}
          placeholder={props.placeholder}
          isDisabled={props.disabled}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
        />
      ) : (
        <CreatableSelect
          formatCreateLabel={(inputValue) =>
            `${props.texts?.createLabel ?? "Create"} "${inputValue}"`
          }
          classNames={{
            container: () =>
              cn(
                "hawa-rounded",
                props.disabled ? "hawa-cursor-not-allowed" : "hawa-cursor-pointer",
              ),
            placeholder: () => "hawa-px-2 hawa-text-muted-foreground",
            input: () => "hawa-text-primary hawa-px-2",
            valueContainer: () => "hawa-text-white dark:hawa-text-muted-foreground",
            singleValue: () => "hawa-text-black dark:hawa-text-white hawa-px-2",
            indicatorsContainer: () => " hawa-px-2 hawa-cursor-pointer hawa-text-muted-foreground",
          }}
          unstyled
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          placeholder={props.placeholder}
          onCreateOption={props.handleCreateOption}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          components={{ Control, Option, Menu }}
          onInputChange={(newValue, action) => props.onInputChange(newValue, action)}
        />
      )}
      {!props.hideHelperText && <HelperText helperText={props.helperText} />}
    </div>
  );
};
