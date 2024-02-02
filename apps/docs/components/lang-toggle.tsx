"use client";

import * as React from "react";

import { Button } from "@/registry/default/ui/button";
// TODO: use hawa's radiogroup https://app.clickup.com/t/86bx0mg7a
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/registry/default/ui/dropdown-menu";
import { Languages } from "lucide-react";

export function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle langauge</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* TODO:  https://app.clickup.com/t/86bx0mg4a */}
        <DropdownMenuItem onClick={() => console.log("switching to english")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("switching to arabic")}>
          عربي
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
