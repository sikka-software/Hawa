import React from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";
import Image from "next/image";
// import { CustomFooter } from "./components/CustomFooter";
// import { NoResult } from "./components/NoResult";
import { Button, Logos } from "@sikka/hawa";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="سكة لتقنية المعلومات" />
      <meta property="og:description" content="مركز المعلومات" />
    </>
  ),

  logo: () => {
    const { resolvedTheme } = useTheme();
    return (
      <Image
        alt="Sikka Logo"
        height={100}
        width={150}
        src={`https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/${
          resolvedTheme === "dark" ? "white" : "black"
        }-horizontal-ar.svg`}
      />
    );
  },
  navbar: {
    extraContent: (
      <div className="flex flex-row gap-2">
        <a href="https://twitter.com/sikka_sa">
          <Button variant="outline" size="smallIcon">
            <Logos.twitter className="h-4 w-4" />
          </Button>
        </a>
        <a href="https://github.com/sikka-software">
          <Button variant="outline" size="smallIcon">
            github
            {/* <Logos.gitHub className="h-4 w-4" /> */}
          </Button>
        </a>
      </div>
    ),
  },
  // search: {
  //   placeholder: "ابحث عن معلومة تقنية",
  //   emptyResult: () => <NoResult />,
  // },
  // footer: {
  //   component: <CustomFooter />,
  // },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – سكة لتقنية المعلومات",
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "الوضع الفاتح",
        dark: "الوضع الداكن",
        system: "تلقائي",
      };
    },
  },
  direction: "rtl",
  gitTimestamp: false,
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",

  toc: {
    backToTop: false,
    title: "في هذه الصفحة",
  },
  feedback: {
    content: false,
  },
  editLink: {
    component: () => null,
  },
};

export default config;
