import clsx from "clsx"
import React, { useState } from "react"
import useDiscloser from "../hooks/useDiscloser"
import { HawaMenu } from "../elements"

type HawaAppLayoutTypes = {
  drawerItems: { label: string; icon: any; slug: string; action: () => void }[]
  currentPage: string
  pageTitle?: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
  topBar?: boolean
  profileMenuItems?: MenuItems[][]
}
type MenuItems = {
  icon?: JSX.Element
  label: string
  action?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => void
  isButton?: boolean
}
export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = (
  props: any
) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const { isOpen, onClose, onOpen } = useDiscloser(false)

  return (
    <>
      {props.topBar && (
        <div
          className={clsx(
            "fixed top-0 z-40 flex h-14 w-1/2 flex-row items-center justify-between bg-primary-400",
            "w-[calc(100%-3rem)]",
            "translate-x-[3rem]",
            "p-2",
            "pr-5"
          )}
        >
          {props.pageTitle ? <div>{props.pageTitle}</div> : <div></div>}
          {/* <div>currentPage</div> */}
          <HawaMenu
            buttonPosition="top-right"
            menuItems={props.profileMenuItems}
            handleClose={onClose}
            handleOpen={onOpen}
            open={isOpen}
          >
            <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
              <svg
                className="absolute -left-1 h-10 w-10 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </HawaMenu>
        </div>
      )}
      <div
        onMouseEnter={() => setOpenSideMenu(true)}
        onMouseLeave={() => setOpenSideMenu(false)}
        className="fixed top-0 left-0 z-50 flex h-full w-12 flex-col bg-primary-400 transition-all hover:w-40"
      >
        <div className="flex flex-row p-2">
          {/* full logo */}
          {openSideMenu ? (
            <img
              className={clsx("h-10", !openSideMenu ? "invisible" : "visible")}
              src="https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75"
            />
          ) : (
            <img
              className={clsx("h-10", openSideMenu ? "invisible" : "visible")}
              src="https://beta-admin.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=128&q=75"
            />
          )}
        </div>
        {props.drawerItems.map((dItem, i) => (
          <div
            key={i}
            onClick={() => dItem.action(dItem.slug)}
            className={clsx(
              "m-1 flex cursor-pointer flex-row items-center overflow-x-clip rounded-lg p-2  pl-3 transition-all hover:bg-primary-500",
              props.currentPage === dItem.slug
                ? "bg-primary-600 text-white hover:bg-primary-600"
                : ""
            )}
          >
            <div className="flex items-center justify-center">{dItem.icon}</div>
            <div
              className={clsx(
                "mx-2 whitespace-nowrap text-sm transition-all",
                openSideMenu ? "opacity-100" : "opacity-0"
              )}
            >
              {dItem.label}
            </div>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          // "overflow-scroll",
          "w-[calc(100%-3rem)]",
          "translate-x-[3rem]",
          "bg-red-900 text-white",
          "m-0",
          props.topBar ? "mt-14" : ""
        )}
      >
        {props.children}
      </div>
      {/* <div className="top-0 w-[calc(100%-1rem)] -translate-y-[1rem] translate-x-8 overflow-scroll bg-yellow-300 "> */}
    </>
  )
}
