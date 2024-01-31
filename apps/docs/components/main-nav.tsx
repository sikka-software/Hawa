"use client";

import * as React from "react";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/new-york/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logos } from "@sikka/hawa/elements";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logos.hawa className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/elements"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/elements")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Elements
        </Link>
        <Link
          href="/docs/blocks"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link>
        <Link
          href="/docs/layout"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/layout")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Layout
        </Link>
        <Link
          href="/docs/hooks"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/hooks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Hooks
        </Link>
        {/* <Link
          href="/themes"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link> */}
        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            "text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  );
}
