import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import useDiscloser from "../hooks/useDiscloser"
import useBreakpoint from "../hooks/useBreakpoint"
import { Button, DropdownMenu, MenuItemType, Tooltip } from "../elements"
import { SidebarGroup } from "./Sidebar"

type AppLayoutTypes = {
  design?: "default" | "bubbles" | "floating"
  /** The pages of the side drawer */
  drawerItems: Item[]
  // The direction of the layout
  direction?: "rtl" | "ltr"
  // The title of the current selected page, make sure it's the same as the drawerItem slug
  currentPage: string
  pageTitle?: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
  topBar?: boolean
  username?: string
  email?: string
  avatarImage?: any
  drawerSize?: "sm" | "md" | "large"
  profileMenuItems?: MenuItemType[]
  profileMenuWidth: "default" | "sm" | "lg" | "parent"
  onSettingsClick?: () => void
  onDrawerExpand?: (e) => void
  DrawerFooterActions?: any
  clickedItem?: any
  texts?: {
    expandSidebar?: string
    collapseSidebar?: string
  }
}
type Item = {
  value: string
  label: string
  icon?: any
  subitems?: SubItem[]
  onClick?: () => void
}
type SubItem = {
  value: string
  label: string
  icon?: any
  onClick?: () => void
}

export const AppLayout: React.FunctionComponent<AppLayoutTypes> = ({
  direction = "ltr",
  drawerSize = "md",
  onSettingsClick,
  DrawerFooterActions,
  currentPage,
  clickedItem,
  design = "default",
  ...props
}) => {
  let closeDrawerWidth = 56
  let openDrawerWidth = 200
  let drawerSizeStyle = {
    opened: {
      sm: "100",
      md: openDrawerWidth,
      lg: "250",
    },
    closed: {
      sm: closeDrawerWidth,
      md: closeDrawerWidth,
      lg: closeDrawerWidth,
    },
  }

  const ref = useRef(null)
  const isRTL = direction === "rtl"

  const [openedSidebarItem, setOpenedSidebarItem] = useState("")
  const [selectedItem, setSelectedItem] = useState(currentPage)

  let size
  if (typeof window !== "undefined") {
    size = useBreakpoint()
  } else {
    size = 1200
  }
  const [keepOpen, setKeepOpen] = useState(size > 600 ? true : false)
  const [openSideMenu, setOpenSideMenu] = useState(size > 600 ? true : false)

  let drawerSizeCondition =
    size > 600 ? drawerSizeStyle[keepOpen ? "opened" : "closed"][drawerSize] : 0

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !keepOpen) {
        setOpenSideMenu(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [keepOpen])

  return (
    <div className="fixed left-0">
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Top Bar
       * ----------------------------------------------------------------------------------------------------
       */}
      {props.topBar && (
        <div
          className={clsx(
            "fixed left-0 right-0 top-0 z-30 flex h-14 w-full items-center justify-between bg-primary-foreground p-2",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
        >
          {/* Nav Side Of Navbar */}
          {size > 600 ? (
            <div
              className={clsx(
                "dark:text-white",
                isRTL
                  ? [size > 600 ? "mr-14" : "mr-2", keepOpen ? "mr-40" : ""]
                  : [size > 600 ? "ml-14" : "ml-2", keepOpen ? "ml-40" : ""]
              )}
              style={
                isRTL
                  ? {
                      marginRight: `${
                        drawerSizeStyle[keepOpen ? "opened" : "closed"][
                          drawerSize
                        ]
                      }px`,
                    }
                  : {
                      marginLeft: `${
                        drawerSizeStyle[keepOpen ? "opened" : "closed"][
                          drawerSize
                        ]
                      }px`,
                    }
              }
            >
              {props.pageTitle}
            </div>
          ) : (
            // Mobile Drawer Menu Button
            <div
              dir={direction}
              className="flex items-center justify-center gap-0.5"
            >
              <div
                onClick={() => setOpenSideMenu(true)}
                className="z-40 mx-1 cursor-pointer  rounded p-2  transition-all hover:bg-gray-100"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  ></path>
                </svg>
              </div>
              {/* Mobile Page Title */}
              {props.pageTitle ? (
                <div className="text-sm">{props.pageTitle}</div>
              ) : (
                <div></div>
              )}
            </div>
          )}

          <div
            className={clsx(
              "flex gap-2 dark:text-white",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}
          >
            {/* User Info */}
            {size > 600 ? (
              <div
                className={isRTL ? "text-left text-xs" : "text-right text-xs"}
              >
                <div className="font-bold">{props.username}</div>{" "}
                <div>{props.email}</div>
              </div>
            ) : null}
            {/* Profile Icon & Menu */}
            <DropdownMenu
              triggerClassname="mx-2"
              align="end"
              alignOffset={8}
              side={"bottom"}
              sideOffset={5}
              width={props.profileMenuWidth}
              direction={isRTL ? "rtl" : "ltr"}
              items={props.profileMenuItems}
              onItemSelect={(e) => console.log("selecting item ", e)}
              trigger={
                <div className="relative h-8 w-8  cursor-pointer overflow-clip rounded ring-1 ring-primary/30 dark:bg-gray-600">
                  {props.avatarImage ? (
                    <img src={props.avatarImage} alt="User Avatar" />
                  ) : (
                    <svg
                      aria-label="Avatar Icon"
                      className="absolute -left-1 h-10 w-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
              }
            />
          </div>
        </div>
      )}
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Drawer Container
       * ----------------------------------------------------------------------------------------------------
       */}
      <div
        className={clsx(
          "fixed  z-40 flex  flex-col justify-between overflow-x-clip   transition-all",
          design === "floating"
            ? isRTL
              ? "right-5 top-5"
              : "bottom-5 left-5 top-5"
            : isRTL
            ? "right-0 top-0 h-full"
            : "left-0 top-0 h-full"
        )}
        style={{
          width:
            size > 600
              ? openSideMenu
                ? `${drawerSizeStyle["opened"][drawerSize]}px`
                : `${drawerSizeStyle["closed"][drawerSize]}px`
              : openSideMenu
              ? `${drawerSizeStyle["opened"][drawerSize]}px`
              : "0px",
        }}
        onMouseEnter={() => {
          setOpenSideMenu(true)
        }}
        onMouseLeave={() => {
          if (keepOpen) {
            setOpenSideMenu(true)
          } else {
            setOpenedSidebarItem("")
            setOpenSideMenu(false)
          }
          // keepOpen ? setOpenSideMenu(true) : setOpenSideMenu(false)
        }}
        ref={ref}
      >
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Header
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          dir={direction}
          className={
            "fixed z-50  mb-2 flex h-14 w-full flex-row items-center justify-center bg-primary-foreground transition-all"
          }
          style={{
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : 56}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Full Logo
           * ----------------------------------------------------------------------------------------------------
           */}
          <img
            className={clsx(
              "h-9  opacity-0 transition-all",
              !openSideMenu ? "invisible opacity-0" : "visible opacity-100"
            )}
            src={props.logoLink}
          />
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Logo Symbol
           * ----------------------------------------------------------------------------------------------------
           */}
          {size > 600 ? (
            <img
              className={clsx(
                "fixed  h-9  transition-all",
                // isRTL ? "right-2.5" : "left-2.5",

                design === "floating"
                  ? isRTL
                    ? "right-7.5 top-7"
                    : "left-7.5 top-7"
                  : isRTL
                  ? "right-2.5 top-2.5"
                  : "left-2.5 top-2.5",

                openSideMenu ? "invisible opacity-0" : "visible opacity-100"
              )}
              src={props.logoSymbol}
            />
          ) : null}
        </div>
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Content Container
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          className={clsx(
            "fixed bottom-14 bg-primary-foreground p-2 py-2 transition-all",
            design === "floating" ? "top-[76px]" : "top-14",
            openSideMenu ? "overflow-auto" : "overflow-hidden"
          )}
          style={{
            height:
              design === "floating"
                ? "calc(100% - 152px)"
                : "calc(100% - 112px)",
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : 56}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Drawer Items
           * ----------------------------------------------------------------------------------------------------
           */}
          <SidebarGroup
            direction={direction}
            onItemClick={(values) => {
              // console.log("vals ", values)
              // setSelectedItem(values)
              if (clickedItem) {
                clickedItem(values)
              }
            }}
            onSubItemClick={(values) => {
              // setSelectedItem(values)
              if (clickedItem) {
                clickedItem(values)
              }
            }}
            selectedItem={currentPage}
            openedItem={openedSidebarItem}
            setOpenedItem={(e) => setOpenedSidebarItem(e)}
            isOpen={openSideMenu}
            items={props.drawerItems}
          />
        </div>
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Footer
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          className={clsx(
            "fixed  flex h-14 w-full items-center justify-center gap-2 overflow-clip bg-primary-foreground  transition-all",
            direction === "rtl" ? "flex-row-reverse" : "flex-row",
            design === "floating" ? "bottom-5" : "bottom-0"
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : 56}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {DrawerFooterActions && openSideMenu ? (
            <>{DrawerFooterActions}</>
          ) : null}

          {/* Expand Button */}
          {size > 600 && openSideMenu ? (
            <Tooltip
              side={"left"}
              delayDuration={500}
              content={
                keepOpen
                  ? props.texts?.collapseSidebar || "Collapse Sidebar"
                  : props.texts?.expandSidebar || "Expand Sidebar"
              }
            >
              <Button
                variant="light"
                onClick={() => {
                  setKeepOpen(!keepOpen)
                  props.onDrawerExpand(keepOpen)
                }}
                size="smallIcon"
              >
                <svg
                  className={clsx(
                    "h-6 w-6 shrink-0 text-primary   transition-all  disabled:bg-gray-200 ",
                    keepOpen
                      ? isRTL
                        ? "-rotate-90"
                        : "rotate-90"
                      : isRTL
                      ? "rotate-90"
                      : "-rotate-90"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Children Container
       * ----------------------------------------------------------------------------------------------------
       */}
      <div
        className="fixed overflow-y-auto transition-all"
        style={
          design === "floating"
            ? isRTL
              ? {
                  height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                  width: `calc(100% - ${drawerSizeCondition + 20}px)`,
                  left: "0px",
                  top: props.topBar ? "56px" : "0px",
                }
              : {
                  height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                  width: `calc(100% - ${drawerSizeCondition + 20}px)`,
                  left: `${drawerSizeCondition + 20}px`,
                  top: props.topBar ? "56px" : "0px",
                }
            : isRTL
            ? {
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: "0px",
                top: props.topBar ? "56px" : "0px",
              }
            : {
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: `${drawerSizeCondition}px`,
                top: props.topBar ? "56px" : "0px",
              }
        }
      >
        {props.children}
      </div>
    </div>
  )
}
