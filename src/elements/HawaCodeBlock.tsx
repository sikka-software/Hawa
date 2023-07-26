import React, { FC, useState } from "react"
import clsx from "clsx"

type CodeBlockTypes = {
  color?: "dark" | "light"
  language?: string
  width?: "full" | "md" | "sm"
  tabs?: TabsTypes[]
  code?: string
}
type TabsTypes = {
  title: string
  code: string
}

export const HawaCodeBlock: FC<CodeBlockTypes> = ({
  tabs,
  language,
  code,
  width = "full",
}) => {
  const [selectedTab, setSelectedTab] = useState(0)
  let widthStyles = {
    full: "w-full",
    md: "w-full max-w-md",
    sm: "w-full max-w-sm",
    xs: "w-full max-w-xs",
  }
  return (
    <div
      className={clsx(
        widthStyles[width],
        "w-full flex-col items-center space-x-4 rounded bg-gray-800 text-left text-sm text-white sm:text-base"
      )}
    >
      {" "}
      {tabs && (
        <div className="flex flex-row gap-2 rounded-t bg-gray-700  p-2 pb-0">
          {tabs.map((tab, i) => (
            <div
              className={clsx(
                selectedTab === i
                  ? "border-buttonPrimary-400 border-b-2"
                  : "bg-transparent"
              )}
            >
              <div
                onClick={() => setSelectedTab(i)}
                className={clsx(
                  "mb-1 w-full max-w-[52px] cursor-pointer rounded-inner p-2 py-1 text-center text-[0.75rem] hover:bg-gray-500"
                )}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      )}
      <pre>
        <code
          className={clsx(
            "flex flex-row items-start justify-between rounded bg-gray-800 py-4 pr-4  text-left text-sm text-white sm:text-base",
            // `language-${language}`,
            tabs ? "" : "pl-4"
          )}
        >
          <span className="flex">{tabs ? tabs[selectedTab].code : code}</span>
          <div className=" cursor-pointer rounded p-2 hover:bg-gray-700">
            <svg
              onClick={() =>
                navigator.clipboard.writeText(
                  tabs ? tabs[selectedTab].code : code
                )
              }
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
          </div>
        </code>
      </pre>
      {/* {tabs.map((tab) => (
        <code className="inline-flex items-center space-x-4 rounded bg-gray-800 p-4 pl-6 text-left text-sm text-white sm:text-base">
          <span className="flex gap-4">npm install @sikka/hawa</span>

          <svg
            onClick={() => navigator.clipboard.writeText("test")}
            className="cursor-pointer"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
        </code>
      ))} */}
    </div>
  )
}
