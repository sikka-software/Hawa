import React, { useEffect, FC, useRef, useState } from "react"
import clsx from "clsx"
import { HawaButton } from "../elements"

type BannerTypes = {
  showBanner?: boolean
  direction?: "rtl" | "ltr"
  logoURL?: string
  title?: string
  text?: string
  actionText?: string
  onActionClick?: () => void
  position?: "top" | "bottom"
  design: "default" | "floating"
}

export const HawaBanner: FC<BannerTypes> = ({
  design = "floating",
  ...props
}) => {
  const bannerRef = useRef(null)
  const [closed, setClosed] = useState(false)
  let bannerStyle = {
    floating:
      "left-1/2  z-50  w-[calc(100%-2rem)] -translate-x-1/2 lg:max-w-7xl p-4 rounded",
    default: "w-[calc(100%)] left-0 z-50 right-0 rounded-none p-2",
  }
  return (
    <div ref={bannerRef}>
      <div
        dir={props.direction}
        className={clsx(
          bannerStyle[design],
          "fixed flex  flex-col justify-between  border  border-gray-100 bg-white  shadow-sm transition-all dark:border-gray-600 dark:bg-gray-700 md:flex-row md:gap-4 ",
          props.position === "top"
            ? design === "floating"
              ? "top-6"
              : "top-0"
            : design === "floating"
            ? "bottom-6"
            : "bottom-0",
          closed ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="mb-3 flex w-full flex-col items-center  justify-start   md:mb-0 md:flex-row md:items-center">
          <div
            className={clsx(
              props.direction === "rtl"
                ? "md:ml-4 md:border-l  md:pl-4"
                : "md:mr-4 md:border-r  md:pr-4",
              "mb-2 flex items-center  border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4  md:pr-4"
            )}
          >
            {props.logoURL && (
              <img
                src={props.logoURL}
                className="mr-2 h-6"
                alt="Flowbite Logo"
              />
            )}
            {props.title && (
              <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
                {props.title}
              </span>
            )}
          </div>
          {props.text && (
            <p
              className={clsx(
                "m-0 flex items-center text-center text-sm  font-normal  text-gray-500 dark:text-gray-400 ",
                props.direction === "rtl" ? "md:text-right" : "md:text-left"
              )}
            >
              {props.text}
            </p>
          )}
        </div>
        {props.actionText && (
          <div
            className={clsx(
              "flex flex-shrink-0 items-center justify-center ",
              props.direction === "rtl" ? "ml-0 md:ml-10" : "mr-0 md:mr-10"
            )}
          >
            <HawaButton onClick={props.onActionClick}>
              {props.actionText}
            </HawaButton>
          </div>
        )}
        <button
          type="button"
          className={clsx(
            "absolute  top-2 inline-flex h-9 w-9 items-center justify-center rounded-inner p-1.5 text-gray-400 transition-all  hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
            props.direction === "rtl" ? "left-2" : "right-2"
          )}
          data-dismiss-target="#alert-default"
          aria-label="Close"
          onClick={() => {
            setClosed(true)
            setTimeout(() => {
              bannerRef.current.removeChild(bannerRef.current.children[0])
            }, 200)
          }}
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
