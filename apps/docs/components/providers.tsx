"use client";

import * as React from "react";

import { TooltipProvider } from "@/registry/default/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children as any}</TooltipProvider>
    </NextThemesProvider>
  );
}
