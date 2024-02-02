"use client";

import { Announcement } from "@/components/announcement";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from "@/components/page-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";

import { CodeBlock, Button } from "@sikka/hawa/elements";

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Elements, Blocks, and Layouts.</PageHeaderHeading>
        <PageHeaderDescription>
          The library to build interfaces like the wind. Opinionated & Open
          Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs">
            <Button size="sm">Get Started</Button>
          </Link>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <Button size="sm" variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </PageActions>

        <div className="w-full max-w-md">
          <CodeBlock
            tabs={[
              { title: "npm", code: "npm install @sikka/hawa" },
              { title: "yarn", code: "yarn add @sikka/hawa" },
              { title: "pnpm", code: "pnpm add @sikka/hawa" }
            ]}
          ></CodeBlock>
        </div>
      </PageHeader>
    </div>
  );
}
