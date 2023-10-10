import React, { FC, useState } from "react";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";
import { cn } from "../util";
import { useClipboard } from "../hooks/useClipboard";

type CodeBlockTypes = {
  /** Specifies the programming language for syntax highlighting.*/
  language?: string;
  /** Defines the width of the code block.*/
  width?: "full" | "md" | "sm";
  /** Array of tabs each containing a title and code content.*/
  tabs?: { title: string; code: string }[];
  /** Name of the file being displayed.   */
  fileName?: string;
  /** Code content to be displayed within the code block.*/
  code?: string;
};

export const CodeBlock: FC<CodeBlockTypes> = ({
  tabs,
  code,
  fileName,
  width = "full",
}) => {
  const clipboard = useClipboard();
  const [selectedTab, setSelectedTab] = useState(0);

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
        "hawa-w-full hawa-flex-col  hawa-items-center hawa-rounded hawa-bg-background hawa-text-left hawa-text-white sm:hawa-text-base"
      )}
    >
      {tabs && (
        <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-bg-gray-200 dark:hawa-bg-muted  hawa-p-2 hawa-pb-0 hawa-text-foreground hawa-font-mono ">
          {tabs.map((tab, i) => (
            <div
              className={cn(
                selectedTab === i
                  ? " hawa-border-b-2 hawa-border-primary"
                  : "hawa-bg-transparent"
              )}
            >
              <div
                onClick={() => setSelectedTab(i)}
                className={cn(
                  "hawa-mb-1 hawa-transition-all hawa-w-full hawa-max-w-[52px] hawa-cursor-pointer hawa-rounded-inner hawa-p-2 hawa-py-1 hawa-text-center  hawa-text-[1rem] hover:hawa-bg-muted-foreground/20"
                )}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      )}
      {fileName && (
        <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-rounded-t hawa-bg-gray-200 dark:hawa-bg-muted hawa-p-2 hawa-pb-0 hawa-text-foreground hawa-font-mono">
          <div
            className={cn(
              "hawa-mb-1 hawa-w-full hawa-max-w-[52px] hawa-rounded-inner hawa-p-2 hawa-py-1 hawa-text-center hawa-text-[1rem]"
            )}
          >
            {fileName}
          </div>
        </div>
      )}
      <pre>
        <div
          className={cn(
            "hawa-relative hawa-flex hawa-w-full hawa-flex-row hawa-items-start hawa-justify-between    hawa-p-0 hawa-text-left hawa-text-sm sm:hawa-text-base hawa-bg-gray-300 ",
            tabs || fileName
              ? "hawa-rounded-b hawa-rounded-t-none"
              : "hawa-rounded"
          )}
        >
          <code className="hawa-flex hawa-min-h-[37.75px] hawa-w-full hawa-flex-row hawa-justify-start hawa-overflow-auto hawa-p-4 hawa-text-foreground hawa-bg-background/70 hawa-font-mono">
            {tabs ? tabs[selectedTab].code : code}
          </code>
          <div className="hawa-absolute hawa-right-0 hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-p-2">
            <Tooltip
              open={clipboard.copied}
              side="left"
              content={<div>Copied!</div>}
            >
              <Button
                size="icon"
                onClick={() =>
                  clipboard.copy(tabs ? tabs[selectedTab].code : code)
                }
                variant="outline"
                className="hawa-opacity-50 sm:hawa-opacity-100 hawa-text-foreground"
              >
                <svg
                  aria-label="Copy Icon"
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
      </pre>
    </div>
  );
};
