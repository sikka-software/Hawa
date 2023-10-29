import * as React from "react";
import { cn } from "../util";
import { Button, ButtonProps } from "./Button";
import { DropdownMenu, MenuItemType } from "./DropdownMenu";
import { DirectionType } from "../types/commonTypes";

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
  <div
    className={cn(
      "hawa-h-fit hawa-flex  hawa-justify-center",
      direction === "rtl" ? "hawa-flex-row-reverse" : "hawa-flex-row"
    )}
  >
    <Button
      variant={variant}
      onClick={() => console.log("btn clicked")}
      className={cn(
        direction === "rtl" ? "hawa-rounded-r-none" : "hawa-rounded-l-none",
        props.className
      )}
    >
      {children}
    </Button>
    <DropdownMenu
      size="sm"
      width="sm"
      direction={direction}
      items={menuItems}
      trigger={
        <Button
          asChild
          variant={variant}
          size={"icon"}
          className={cn(
            "hawa-h-10 hawa-w-fit hawa-px-1",
            direction === "rtl"
              ? "hawa-rounded-l-none hawa-border-rl0"
              : "hawa-border-r-0 hawa-rounded-r-none",
            props.className
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
