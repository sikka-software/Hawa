import * as React from "react";

import { cn } from "@util/index";

export type FloatBoxProps = {
  className?: string;
  open?: boolean;
  children?: React.ReactNode;
  side?: "bottom" | "left" | "right" | "top";
  sideOffset?: number;
};

const FloatBox: React.FC<FloatBoxProps> = ({
  className,
  open,
  side = "bottom",
  sideOffset = 40,
  ...props
}) => {
  let widthStyles = {
    trigger: "var(--radix-popover-trigger-width)",
    default: "auto",
  };

  let sideOffsetStyles = {
    bottom: { top: sideOffset },
    top: { bottom: sideOffset },
    right: { left: sideOffset },
    left: { right: sideOffset },
  };

  return (
    <div
      className={cn(
        "data-[floatbox-state=closed]:hawa-invisible data-[floatbox-state=open]:hawa-visible hawa-absolute dark:dark-shadow hawa-z-50 hawa-rounded hawa-border hawa-bg-popover hawa-text-popover-foreground hawa-shadow-md hawa-outline-none data-[floatbox-state=open]:hawa-animate-in data-[floatbox-state=closed]:hawa-animate-out data-[floatbox-state=closed]:hawa-fade-out-0 data-[floatbox-state=open]:hawa-fade-in-0 data-[floatbox-state=closed]:hawa-zoom-out-95 data-[floatbox-state=open]:hawa-zoom-in-95 data-[side=bottom]:hawa-slide-in-from-top-2 data-[side=left]:hawa-slide-in-from-right-2 data-[side=right]:hawa-slide-in-from-left-2 data-[side=top]:hawa-slide-in-from-bottom-2",
        sideOffsetStyles[side],
        className,
      )}
      style={{ ...sideOffsetStyles[side] }}
      data-side={side}
      data-floatbox-state={open ? "open" : "closed"}
    >
      {props.children}
    </div>
  );
};

export { FloatBox };
