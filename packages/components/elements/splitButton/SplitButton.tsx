import * as React from "react";

import { cn } from "@util/index";

import { DirectionType } from "@_types/commonTypes";

import { Button, ButtonProps } from "../button/index";
import { DropdownMenu, MenuItemType } from "../dropdownMenu/DropdownMenu";

interface SplitButtonProps extends ButtonProps {
  direction?: DirectionType;
  menuItems?: MenuItemType[];
}

const SplitButton: React.FC<SplitButtonProps> = ({
  variant,
  direction = "ltr",
  menuItems = [],
  children,
  ...props
}) => (
  <div dir="ltr" className={cn("hawa-row hawa-flex hawa-h-fit hawa-justify-center")}>
    <Button
      variant={variant}
      onClick={props.onClick}
      className={cn("hawa-rounded-r-none", props.className)}
    >
      {children}
    </Button>
    <DropdownMenu
      size="sm"
      width="sm"
      direction={direction}
      align={direction === "rtl" ? "start" : "end"}
      items={menuItems}
      trigger={
        <Button
          asChild
          variant={variant}
          size={"icon"}
          className={cn(
            "hawa-h-10 hawa-w-fit hawa-rounded-l-none hawa-border-l-0 hawa-px-1",
            props.className,
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
      }
    />
  </div>
);
SplitButton.displayName = "SplitButton";

export { SplitButton };
