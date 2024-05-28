import React from "react";

import { Toaster as SonnerToaster, toast } from "sonner";

import { DirectionType } from "@_types/commonTypes";

type SonnerProps = React.ComponentProps<typeof SonnerToaster> & {
  direction?: DirectionType;
};

const Sonner = ({ ...props }: SonnerProps) => {
  return (
    <SonnerToaster
      dir={props.direction}
      position={props.direction === "rtl" ? "bottom-left" : "bottom-right"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:hawa-bg-background group-[.toaster]:hawa-text-foreground group-[.toaster]:hawa-border-border group-[.toaster]:hawa-shadow-lg hawa-flex hawa-flex-row hawa-justify-between",
          description: "group-[.toast]:hawa-text-muted-foreground",
          actionButton:
            "group-[.toast]:hawa-bg-primary group-[.toast]:hawa-text-primary-foreground",
          cancelButton:
            "group-[.toast]:hawa-bg-muted group-[.toast]:hawa-text-muted-foreground",
          title: "!hawa-font-bold",
        },
      }}
      style={{ fontFamily: "IBM Plex Sans Arabic" }}
      {...props}
    />
  );
};

const createSonner: typeof toast = toast;

export { Sonner, createSonner };
