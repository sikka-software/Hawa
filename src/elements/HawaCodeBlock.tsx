import React, { FC, useState } from "react"
import { Button } from "./Button"
import { Tooltip } from "./Tooltip"
import { cn } from "../util"
import { useClipboard } from "../hooks/useClipboard"

type CodeBlockTypes = {
  color?: "dark" | "light"
  language?: string
  width?: "full" | "md" | "sm"
  tabs?: TabsTypes[]
  fileName?: string
  code?: string
}
type TabsTypes = {
  title: string
  code: string
}

export const HawaCodeBlock: FC<CodeBlockTypes> = ({
  tabs,
  code,
  fileName,
  width = "full",
}) => {
  const clipboard = useClipboard()
  const [selectedTab, setSelectedTab] = useState(0)

  let widthStyles = {
    full: "w-full",
    md: "w-full max-w-md",
    sm: "w-full max-w-sm",
    xs: "w-full max-w-xs",
  }

  return (
    <div
      className={cn(
        widthStyles[width],
        "w-full flex-col items-center rounded bg-gray-200 text-left text-sm text-white dark:bg-gray-800 sm:text-base"
      )}
    >
      {tabs && (
        <div className="flex flex-row gap-2 rounded-t bg-gray-100 p-2 pb-0 text-black dark:bg-gray-700 dark:text-white">
          {tabs.map((tab, i) => (
            <div
              className={cn(
                selectedTab === i
                  ? " border-b-2 border-primary"
                  : "bg-transparent"
              )}
            >
              <div
                onClick={() => setSelectedTab(i)}
                className={cn(
                  "mb-1 w-full max-w-[52px] cursor-pointer rounded-inner p-2 py-1 text-center text-[0.75rem] hover:bg-gray-300 dark:hover:bg-gray-500"
                )}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      )}
      {fileName && (
        <div className="flex flex-row gap-2 rounded-t bg-gray-100 p-2 pb-0 text-black  dark:bg-gray-700 dark:text-white">
          <div
            className={cn(
              "mb-1 w-full max-w-[52px] rounded-inner p-2 py-1 text-center text-[0.75rem]"
            )}
          >
            {fileName}
          </div>
        </div>
      )}
      <pre>
        <code
          className={cn(
            "flex w-full flex-row items-start justify-between rounded bg-gray-200 p-0 text-left  text-sm text-black dark:bg-gray-800 dark:text-white sm:text-base"
          )}
        >
          <div className="flex min-h-[37.75px] w-full  flex-col  justify-center p-4 ">
            {tabs ? tabs[selectedTab].code : code}
          </div>
          <div className="flex w-fit flex-row items-center gap-2 p-2">
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
        </code>
      </pre>
    </div>
  )
}
