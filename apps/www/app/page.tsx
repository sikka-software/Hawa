"use client";

import { Announcement } from "@/components/announcement";
import { ExamplesNav } from "@/components/examples-nav";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from "@/components/page-header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/new-york/ui/button";
import Image from "next/image";
import Link from "next/link";

// import { Button } from "@sikka/hawa/dist/button";
import { Button } from "@sikka/hawa/elements/button";
import { CodeBlock } from "@sikka/hawa/elements/codeBlock";

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
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section> */}
    </div>
  );
}
