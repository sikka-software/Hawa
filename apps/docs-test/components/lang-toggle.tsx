"use client";

import * as React from "react";

import { Languages } from "lucide-react";

import { Button } from "@sikka/hawa/button";
// TODO: use hawa's radiogroup https://app.clickup.com/t/86bx0mg7a
import {
  DropdownMenuRoot as DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@sikka/hawa/dropdownMenu";

export function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size='icon' className="w-9 px-0">
          <Languages className="h-4 w-4 rotate-0 scale-100 transition-all" />
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
