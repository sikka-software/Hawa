import React, { FC, useState } from "react";

import { cn } from "@util/index";
import { Highlight, HighlightProps, themes, Prism } from "prism-react-renderer";

import { useClipboard } from "../../hooks/useClipboard";
import { Button } from "../button";
import { ScrollArea } from "../scrollArea";
import { Tooltip } from "../tooltip";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-bash");

type CodeBlockTypesBase = {
  /** Specifies the programming language for syntax highlighting.*/
  language?: HighlightProps["language"];
  /** Defines the width of the code block.*/
  width?: "full" | "md" | "sm";
  /** Name of the file being displayed.   */
  fileName?: string;
  /** line numbers for code block   */
  lineNumbers?: boolean;
  /** Wrap text in code block */
  wrapText?: boolean;
  /** Custom class names for the code block */
  classNames?: {
    root?: string;
    tabs?: string;
    tab?: string;
    code?: string;
    fileName?: string;
    codeBlockContainer?: string;
  };
};

/**
 * Type for when tabs are provided. In this case, the code property is optional.
 * Do not provide the "code" prop if "tabs" exists.
 */
type CodeBlockTypesWithTabs = CodeBlockTypesBase & {
  /** Array of tabs each containing a title and code content.*/
  tabs: { title: string; code: string }[];
  /** Code content to be displayed within the code block.*/
  code?: string;
};

/**
 * Type for when tabs are not provided. In this case, the code property is required.
 * You must provide the "code" prop if "tabs" does not exist.
 */
type CodeBlockTypesWithoutTabs = CodeBlockTypesBase & {
  /** Array of tabs each containing a title and code content.*/
  tabs?: never;
  /** Code content to be displayed within the code block.*/
  code: string;
};

/**
 * Either provide "tabs" prop (in which case "code" is optional),
 * or do not provide "tabs" (in which case "code" is required).
 */
type CodeBlockTypes = CodeBlockTypesWithTabs | CodeBlockTypesWithoutTabs;

const CopyIcon = () => (
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
);
export const CodeBlock: FC<CodeBlockTypes> = ({
  tabs,
  code,
  fileName,
  classNames,
  language = "javascript", // default to JavaScript if no language is provided
  wrapText = true,
  width = "full",
  ...props
}) => {
  const clipboard = useClipboard();
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = themes.oceanicNext;

  let widthStyles = {
    full: "hawa-w-full",
    md: "hawa-w-full hawa-max-w-md",
    sm: "hawa-w-full hawa-max-w-sm",
    xs: "hawa-w-full hawa-max-w-xs",
  };

  return (
    <div
      className={cn(
        widthStyles[width],
        "hawa-w-full hawa-flex-col hawa-relative hawa-items-center hawa-rounded hawa-bg-background hawa-text-left hawa-my-2 hawa-text-white sm:hawa-text-base",
        classNames?.root,
      )}
    >
      {fileName && (
        <div
          className={cn(
            "hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-2 hawa-py-0.5 hawa-pb-0 hawa-font-mono hawa-text-foreground",
            fileName && tabs ? "hawa-bg-primary/10" : "hawa-bg-primary/15",
            classNames?.fileName,
          )}
        >
          <div
            className={cn(
              "hawa-font-mono hawa-w-full hawa-max-w-[52px] hawa-rounded-inner hawa-p-1 hawa-py-0.5 hawa-text-center hawa-text-[0.75rem]",
            )}
          >
            {fileName}
          </div>
        </div>
      )}
      {tabs && (
        <div
          className={cn(
            "hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-p-1 hawa-bg-primary/15 hawa-pb-0 hawa-font-mono hawa-text-foreground",
            tabs && fileName && "hawa-rounded-t-none",
            classNames?.tabs,
          )}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={cn(
                selectedTab === i ? "hawa-border-b-2 hawa-border-primary" : "hawa-bg-transparent",
                classNames?.tab,
              )}
            >
              <div
                onClick={() => setSelectedTab(i)}
                className={cn(
                  "hawa-mb-0.5 hawa-w-full hawa-max-w-[52px] hawa-cursor-pointer hawa-rounded-inner hawa-p-2 hawa-py-0.5 hawa-text-center hawa-text-[0.7rem] hawa-transition-all hover:hawa-bg-muted-foreground/20",
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
          "hawa-flex hawa-w-full hawa-relative hawa-flex-row hawa-items-start hawa-justify-between hawa-border hawa-bg-gray-800 hawa-p-0 hawa-text-left hawa-text-sm sm:hawa-text-base",
          tabs || fileName ? "hawa-rounded-b hawa-rounded-t-none" : "hawa-rounded",
          classNames?.codeBlockContainer,
          "hawa-overflow-y-auto",
        )}
      >
        <div
          className={cn(
            "hawa-flex hawa-absolute hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-z-50 hawa-right-3 hawa-top-3",
          )}
        >
          <Tooltip
            open={clipboard.copied}
            side="left"
            content={<div>Copied!</div>}
            triggerProps={{ asChild: true }}
          >
            <Button
              size="smallIcon"
              onClick={() => clipboard.copy(tabs ? tabs[selectedTab].code : code)}
              variant="outline"
              className="hawa-text-gray-200 hawa-opacity-50 dark:hawa-border-gray-200 dark:hover:hawa-border-gray-400"
            >
              <CopyIcon />
            </Button>
          </Tooltip>
        </div>
        <Highlight
          theme={theme}
          code={tabs ? tabs[selectedTab].code : code || ""}
          language={language}
        >
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                // !hawa-pe-12
                "hawa-min-h-[37.75px] hawa-w-full hawa-p-4 hawa-font-mono hawa-text-foreground",
                classNames?.code,
                wrapText && "hawa-text-wrap",
              )}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {props.lineNumbers && <span className="hawa-mr-4">{i + 1}</span>}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
