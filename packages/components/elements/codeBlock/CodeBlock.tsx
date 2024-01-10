import React, { FC, useEffect, useState } from "react";

import { cn } from "@util/index";
import {
  Highlight,
  HighlightProps,
  Language,
  themes,
  Prism
} from "prism-react-renderer";

import { useClipboard } from "../../hooks/useClipboard";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-bash");

type CodeBlockTypes = {
  /** Specifies the programming language for syntax highlighting.*/
  language?: HighlightProps["language"];
  /** Defines the width of the code block.*/
  width?: "full" | "md" | "sm";
  /** Array of tabs each containing a title and code content.*/
  tabs?: { title: string; code: string }[];
  /** Name of the file being displayed.   */
  fileName?: string;
  /** Code content to be displayed within the code block.*/
  code?: string;
  lineNumbers?: boolean;
  forcedDarkMode?: boolean;
  className?: string;
};

export const CodeBlock: FC<CodeBlockTypes> = ({
  tabs,
  code,
  fileName,
  className,
  language = "javascript", // default to JavaScript if no language is provided
  width = "full",
  ...props
}) => {
  const clipboard = useClipboard();
  const [selectedTab, setSelectedTab] = useState(0);
  // const isDarkMode =
  //   props.forcedDarkMode ||
  //   document.body.classList.contains("dark") ||
  //   document.documentElement.classList.contains("dark");
  // const theme = isDarkMode ? themes.vsDark : themes.vsLight;
  const theme = themes.oceanicNext;

  let widthStyles = {
    full: "hawa-w-full",
    md: "hawa-w-full hawa-max-w-md",
    sm: "hawa-w-full hawa-max-w-sm",
    xs: "hawa-w-full hawa-max-w-xs"
  };

  return (
    <div
      className={cn(
        widthStyles[width],
        "hawa-w-full hawa-flex-col hawa-items-center hawa-rounded hawa-bg-background hawa-text-left hawa-text-white sm:hawa-text-base",
        className
      )}
    >
      {fileName && (
        <div
          className={cn(
            "hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-2 hawa-py-0.5 hawa-pb-0 hawa-font-mono hawa-text-foreground",
            fileName && tabs
              ? "hawa-bg-gray-100 dark:hawa-bg-gray-900"
              : "hawa-bg-gray-100 dark:hawa-bg-gray-900"
          )}
        >
          <div
            className={cn(
              "hawa-font-mono hawa-w-full hawa-max-w-[52px] hawa-rounded-inner hawa-p-1 hawa-py-0.5 hawa-text-center hawa-text-[0.75rem]"
            )}
          >
            {fileName}
          </div>
        </div>
      )}
      {tabs && (
        <div
          className={cn(
            "hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-bg-gray-300 dark:hawa-bg-gray-600 hawa-p-1  hawa-pb-0 hawa-font-mono hawa-text-foreground dark:hawa-bg-muted",
            tabs && fileName && "hawa-rounded-t-none"
          )}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={cn(
                selectedTab === i
                  ? " hawa-border-b-2 hawa-border-primary"
                  : "hawa-bg-transparent"
              )}
            >
              <div
                onClick={() => setSelectedTab(i)}
                className={cn(
                  "hawa-mb-0.5 hawa-w-full hawa-max-w-[52px] hawa-cursor-pointer hawa-rounded-inner hawa-p-2 hawa-py-0.5 hawa-text-center hawa-text-[0.7rem]  hawa-transition-all hover:hawa-bg-muted-foreground/20"
                )}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        className={cn(
          "hawa-flex hawa-w-full hawa-flex-row hawa-items-start hawa-justify-between hawa-border hawa-bg-gray-700 hawa-p-0 hawa-text-left hawa-text-sm sm:hawa-text-base ",
          tabs || fileName
            ? "hawa-rounded-b hawa-rounded-t-none"
            : "hawa-rounded"
        )}
      >
        <Highlight
          theme={theme}
          code={tabs ? tabs[selectedTab].code : code || ""}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="hawa-min-h-[37.75px] hawa-w-full hawa-overflow-auto hawa-p-4 hawa-font-mono hawa-text-foreground">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {props.lineNumbers && (
                    <span className="hawa-mr-4">{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {/* <code
            className={cn(
              "language-jsx",
              "hawa-flex hawa-min-h-[37.75px] hawa-w-full hawa-flex-row hawa-justify-start hawa-overflow-auto hawa-p-4 hawa-text-foreground hawa-bg-background/70 hawa-font-mono"
            )}
          >
            {tabs ? tabs[selectedTab].code : code}
          </code> */}

        <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-p-2">
          <Tooltip
            open={clipboard.copied}
            side="left"
            content={<div>Copied!</div>}
            triggerProps={{
              asChild: true
            }}
          >
            <Button
              size="icon"
              onClick={() =>
                clipboard.copy(tabs ? tabs[selectedTab].code : code)
              }
              variant="outline"
              className="hawa-text-gray-200 hawa-opacity-50 "
            >
              <svg
                aria-label="Copy"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
