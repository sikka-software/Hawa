import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import useDiscloser from "../hooks/useDiscloser"
import { HawaMenu } from "../elements"
import { HiMenu } from "react-icons/hi"
import useBreakpoint from "../hooks/useBreakpoint"
import { FaChevronRight } from "react-icons/fa"
// TODO: add ability to control the width of the drawer
// TODO: when no navbar, the drawer can't be opened
type HawaAppLayoutTypes = {
  drawerItems: {
    label: string
    icon: any
    slug: string
    action: () => void
    subItems?: any
  }[][]
  direction?: "rtl" | "ltr"
  currentPage: string
  pageTitle?: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
  topBar?: boolean
  username?: string
  email?: string
  drawerSize?: "sm" | "md" | "large"
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
export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = ({
  direction = "rtl",
  drawerSize = "lg",
  ...props
}) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [openSubItem, setOpenSubitem] = useState("")
  const { isOpen, onClose, onOpen } = useDiscloser(false)
  const ref = useRef(null)
  const isRTL = direction === "rtl"
  let size
  if (typeof window !== "undefined") {
    size = useBreakpoint()
  } else {
    size = 1200
  }
  const [keepOpen, setKeepOpen] = useState(false)
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

  let drawerDefaultStyle =
    "fixed top-0 z-40 flex h-full flex-col justify-between overflow-x-clip bg-layoutPrimary-500 transition-all"

  let drawerSizeStyle = {
    opened: {
      sm: "100",
      md: "160",
      lg: "250",
    },
    closed: {
      sm: "56",
      md: "56",
      lg: "56",
    },
  }
  let drawerSizeCondition =
    size > 600 ? drawerSizeStyle[keepOpen ? "opened" : "closed"][drawerSize] : 0
  return (
    <div className="absolute left-0 right-0 h-full w-full">
      {/* Top Bar Component */}
      {props.topBar && (
        <div
          className={clsx(
            "fixed top-0 z-30 flex h-14 w-full items-center justify-between bg-layoutPrimary-500 p-2",
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
        >
          {/* Nav Side Of Navbar */}
          {size > 600 ? (
            props.pageTitle ? (
              // Title of the page
              <div
                className={clsx(
                  isRTL
                    ? [size > 600 ? "mr-14" : "mr-2", keepOpen ? "mr-40" : ""]
                    : [size > 600 ? "ml-14" : "ml-2", keepOpen ? "ml-40" : ""]
                )}
              >
                {props.pageTitle}
              </div>
            ) : null
          ) : (
            // Mobile Drawer Menu Button
            <div
              dir={direction}
              className="flex items-center justify-center gap-2 "
            >
              <div
                onClick={() => setOpenSideMenu(true)}
                className="mr-2 cursor-pointer rounded p-2  transition-all hover:bg-gray-100"
              >
                <HiMenu size={25} />
              </div>
              {/* Mobile Page Title */}
              {props.pageTitle ? <div>{props.pageTitle}</div> : <div></div>}
            </div>
          )}

          <div className="flex flex-row gap-2" dir={direction}>
            {/* User Info */}
            <div
              className={clsx(
                isRTL ? "text-left text-xs" : "text-right text-xs"
              )}
            >
              <div className="font-bold">{props.username}</div>{" "}
              <div>{props.email}</div>
            </div>

            {/* Profile Icon & Menu */}
            <HawaMenu
              buttonPosition={isRTL ? "top-left" : "top-right"}
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
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </HawaMenu>
          </div>
        </div>
      )}

      {/* Drawer Container */}
      <div
        onMouseEnter={() => {
          setOpenSideMenu(true)
        }}
        onMouseLeave={() =>
          keepOpen ? setOpenSideMenu(true) : setOpenSideMenu(false)
        }
        ref={ref}
        className={clsx(
          drawerDefaultStyle,
          drawerSizeStyle[drawerSize],
          isRTL ? "right-0" : "left-0"
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
      >
        {/* Drawer Content Container */}
        <div
          className={clsx(
            props.topBar ? "" : "mt-2",
            openSideMenu ? "overflow-auto" : "overflow-hidden"
          )}
        >
          {/* Logo Container */}
          <div
            className={clsx(
              "fixed z-50 mb-2 flex h-14 items-center justify-center bg-transparent p-2 transition-all",
              openSideMenu ? "w-40" : "w-14"
            )}
          >
            {/* Full Logo */}
            <img
              className={clsx(
                "fixed top-2.5 h-9 transition-all",
                isRTL ? "right-2.5" : "left-2.5",
                !openSideMenu ? "invisible opacity-0" : "visible opacity-100"
              )}
              src={props.logoLink}
            />

            {/* Logo Symbol */}
            {size > 600 ? (
              <img
                className={clsx(
                  "fixed top-2.5 h-9 transition-all",
                  isRTL ? "right-2.5" : "left-2.5",
                  openSideMenu ? "invisible opacity-0" : "visible opacity-100"
                )}
                src={props.logoSymbol}
              />
            ) : null}
          </div>
          {/* Drawer Items */}
          <div className="mt-14 mb-8">
            {props.drawerItems.map((dSection, j) => (
              <div
                key={j}
                className={clsx("flex flex-col items-stretch justify-center")}
              >
                {dSection.map((dItem, i) => {
                  return (
                    <div key={i} id={"test"} className="flex flex-col">
                      <div
                        onClick={() => {
                          dItem.subItems
                            ? openSubItem === dItem.slug
                              ? setOpenSubitem("")
                              : setOpenSubitem(dItem.slug)
                            : dItem.action()
                        }}
                        className={clsx(
                          props.currentPage === dItem.slug
                            ? "bg-buttonPrimary-500 text-white"
                            : "hover:bg-layoutPrimary-300",
                          "m-2 my-1  flex cursor-pointer flex-row items-center justify-between overflow-x-clip rounded p-2  pl-3 transition-all ",
                          isRTL ? "flex-row-reverse pr-3" : ""
                        )}
                      >
                        <div className="flex flex-row" dir={direction}>
                          <div className="flex items-center justify-center">
                            {dItem.icon}
                          </div>
                          <div
                            className={clsx(
                              "mx-2 whitespace-nowrap text-sm transition-all",
                              openSideMenu ? "opacity-100" : "opacity-0"
                            )}
                          >
                            {dItem.label}
                          </div>
                        </div>
                        {dItem.subItems && (
                          <div
                            className={clsx(
                              openSubItem && dItem.slug === openSubItem
                                ? "-rotate-90"
                                : "rotate-90"
                            )}
                          >
                            <FaChevronRight fontSize={11} />
                          </div>
                        )}
                      </div>

                      {dItem.subItems && (
                        <div
                          className={clsx(
                            "flex flex-col gap-0 whitespace-nowrap bg-layoutPrimary-300",
                            "m-1 cursor-pointer rounded p-1",
                            "overflow-clip transition-all",
                            openSubItem == dItem.slug && openSideMenu
                              ? ""
                              : "my-0 py-0",
                            isRTL ? "text-right" : "text-left"
                          )}
                          style={{
                            height:
                              openSubItem == dItem.slug && openSideMenu
                                ? 6 + 33 * dItem.subItems?.length
                                : 0,
                          }}
                        >
                          {dItem.subItems?.map((subIt) => (
                            <div
                              className={clsx(
                                "flex flex-row gap-2 overflow-x-clip  rounded p-2 px-4 text-xs hover:bg-layoutPrimary-500",
                                isRTL ? "text-right" : "text-left"
                              )}
                              dir={direction}
                              onClick={() => subIt.action()}
                            >
                              <div className="flex items-center justify-center">
                                {subIt.icon}
                              </div>
                              <div className="flex flex-row justify-between">
                                {subIt.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
                {j !== props.drawerItems.length - 1 && (
                  <div className="my-2 h-[1px] w-10/12 self-center bg-buttonPrimary-500 text-center "></div>
                )}{" "}
              </div>
            ))}
          </div>
        </div>

        {/* Expand Button */}
        {openSideMenu && size > 600 ? (
          <div
            dir={direction}
            className={clsx(
              "fixed top-4   z-50 flex w-fit items-center",
              isRTL ? "right-0 justify-start" : "left-32 justify-start",
              "transition-all duration-700",
              openSideMenu && size > 600 ? " opacity-100" : " opacity-0"
            )}
          >
            <div
              onClick={() => setKeepOpen(!keepOpen)}
              className={
                "w-fit cursor-pointer rounded bg-gray-300 p-1 transition-all"
              }
            >
              <FaChevronRight
                fontSize={11}
                className={clsx(
                  isRTL
                    ? keepOpen
                      ? "rotate-0"
                      : "rotate-180"
                    : keepOpen
                    ? "rotate-180"
                    : "rotate-0"
                )}
              />
            </div>
          </div>
        ) : null}
      </div>
      {/* 
    
      {/* Children Container */}
      <div
        className="fixed overflow-y-auto"
        style={
          isRTL
            ? {
                width: `calc(100% - ${drawerSizeCondition}px)`,
                top: props.topBar ? "56px" : "0px",
              }
            : {
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: `${drawerSizeCondition}px`,
                top: props.topBar ? "56px" : "0px",
              }
        }
        // className={clsx(isRTL ? rtlChildrenStyle : ltrChildrenStyle)}
      >
        <div className="rounded">{props.children}</div>{" "}
      </div>
    </div>
  )
}
