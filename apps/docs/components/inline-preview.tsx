"use client";

import * as React from "react";

import { Icons } from "@/components/icons";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { cn } from "@/lib/utils";

interface InlinePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "start" | "end";
}

export function InlinePreview({
  children,
  className,
  align = "center",
  ...props
}: InlinePreviewProps) {
  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <div className="relative rounded-md border">
        <ThemeWrapper defaultTheme="zinc">
          <div
            className={cn("preview flex flex-row w-full justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end"
            })}
          >
            <React.Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {children}
            </React.Suspense>
          </div>
        </ThemeWrapper>
      </div>
    </div>
  );
}
