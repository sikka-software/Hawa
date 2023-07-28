import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { HiMenu } from "react-icons/hi"
import { FaChevronRight } from "react-icons/fa"
import useDiscloser from "../hooks/useDiscloser"
import useBreakpoint from "../hooks/useBreakpoint"
import { HawaButton, HawaMenu } from "../elements"

// TODO: when no pagetitle, navbar gets messy

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
  onSettingsClick?: () => void
}

type MenuItems = {
  icon?: JSX.Element
  label: string
  action?: (e: any) => void
  isButton?: boolean
}
export const HawaAppLayoutSimplified: React.FunctionComponent<
  HawaAppLayoutTypes
> = ({ direction = "rtl", drawerSize = "md", onSettingsClick, ...props }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [openSubItem, setOpenSubitem] = useState("")
  const { isOpen, onClose, onOpen } = useDiscloser(false)
  const [keepOpen, setKeepOpen] = useState(false)
  const ref = useRef(null)
  const isRTL = direction === "rtl"
  let size
  if (typeof window !== "undefined") {
    size = useBreakpoint()
  } else {
    size = 1200
  }
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
    <div className="fixed left-0">
      {props.topBar && (
        <div
          className={clsx(
            "fixed left-0 right-0 top-0 z-30 flex h-14 w-full items-center justify-between bg-layoutPrimary-500 p-2",
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
            ) : null
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
                <HiMenu size={25} />
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
              "flex gap-2",
              isRTL ? "flex-row-reverse" : "flex-row"
            )}
            // dir={direction}
          >
            {/* User Info */}
            {size > 600 ? (
              <div
                className={clsx(
                  isRTL ? "text-left text-xs" : "text-right text-xs"
                )}
              >
                <div className="font-bold">{props.username}</div>{" "}
                <div>{props.email}</div>
              </div>
            ) : null}

            {/* Profile Icon & Menu */}
            <HawaMenu
              direction={direction}
              // buttonPosition={isRTL ? "top-left" : "top-right"}
              withHeader={size > 600 ? false : true}
              headerTitle={size > 600 ? "" : props.username}
              headerSubtitle={size > 600 ? "" : props.email}
              menuItems={props.profileMenuItems}
              // handleClose={onClose}
              // handleOpen={onOpen}
              // open={isOpen}
              position={"bottom-left"}
              // position={isRTL ? "bottom-left" : "bottom-left"}
              // position={isRTL ? "right-bottom" : "bottom-left"}
            >
              <div className="relative h-8 w-8  cursor-pointer overflow-hidden rounded-full ring-1 ring-buttonPrimary-500 dark:bg-gray-600">
                <AvatarIcon />
              </div>
            </HawaMenu>
          </div>
        </div>
      )}
      {/* Drawer Container */}
      <div
        className={clsx(
          "fixed top-0 z-40 flex h-full flex-col justify-between overflow-x-clip  transition-all",
          // drawerDefaultStyle,
          // "bg-green-400",
          // drawerSizeStyle[drawerSize],
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
        onMouseEnter={() => {
          setOpenSideMenu(true)
        }}
        onMouseLeave={() =>
          keepOpen ? setOpenSideMenu(true) : setOpenSideMenu(false)
        }
        ref={ref}
      >
        {/* Drawer Header  */}
        <div
          dir={direction}
          className={clsx(
            "fixed z-50  mb-2 flex h-14 w-full flex-row items-center justify-center  bg-layoutPrimary-500 transition-all"
            // "bg-blue-400",
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? 160 : 56}px`
                : `${openSideMenu ? 160 : 0}px`,
          }}
        >
          {/* Full Logo */}
          <img
            className={clsx(
              "h-9  opacity-0 transition-all",
              // isRTL ? "right-2.5" : "left-2.5",
              !openSideMenu ? "invisible opacity-0" : "visible opacity-100"
              // size > 600 ? "" : "right-4"
            )}
            // className={clsx(
            //   "fixed top-2.5 h-9 transition-all",
            //   isRTL ? "right-2.5" : "left-2.5",
            //   !openSideMenu ? "invisible opacity-0" : "visible opacity-100"
            // )}
            src={props.logoLink}
          />

          {/* Logo Symbol */}
          {size > 600 ? (
            <img
              className={clsx(
                "fixed top-2.5 h-9  transition-all",
                isRTL ? "right-2.5" : "left-2.5",
                openSideMenu ? "invisible opacity-0" : "visible opacity-100"
              )}
              src={props.logoSymbol}
            />
          ) : null}
        </div>
        {/* Drawer Content Container */}
        <div
          className={clsx(
            // "no-scrollbar", TODO: make this optional to hide scrollbar or not
            "fixed bottom-14 top-14 bg-layoutPrimary-500 py-2 transition-all",
            // bg-yellow-400
            openSideMenu ? "overflow-auto" : "overflow-hidden"
          )}
          style={{
            height: "calc(100% - 112px)",
            width:
              size > 600
                ? `${openSideMenu ? 160 : 56}px`
                : `${openSideMenu ? 160 : 0}px`,
          }}
        >
          {/* Drawer Items */}
          {props.drawerItems?.map((dSection, dIndex) => (
            <div
              key={dIndex}
              className={clsx(
                "flex select-none flex-col items-stretch justify-center transition-all"
              )}
            >
              {dSection?.map((dItem, i) => {
                return (
                  <div key={i} id={"test"} className="flex flex-col">
                    <div
                      onClick={() => {
                        dItem.subItems
                          ? openSubItem === dItem.slug
                            ? // ||
                              // dItem.subItems.find(
                              //   (e) => e.slug === props.currentPage
                              // )
                              setOpenSubitem("")
                            : setOpenSubitem(dItem.slug)
                          : dItem.action()
                      }}
                      className={clsx(
                        props.currentPage === dItem.slug ||
                          dItem.subItems?.find(
                            (e) => e.slug === props.currentPage
                          )
                          ? "bg-buttonPrimary-500 text-white"
                          : "hover:bg-layoutPrimary-300",
                        "m-1 my-1  flex cursor-pointer flex-row items-center justify-between overflow-x-clip rounded p-2  pl-3 transition-all ",
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
                        <ArrowIcon
                          pointing={
                            openSubItem && dItem.slug === openSubItem
                              ? "up"
                              : "down"
                          }
                        />
                      )}
                    </div>

                    {dItem.subItems && (
                      <div
                        className={clsx(
                          "m-1 flex cursor-pointer flex-col gap-0 overflow-clip whitespace-nowrap rounded bg-layoutPrimary-300 p-1 transition-all",
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
                        {dItem.subItems?.map((subIt, s) => (
                          <div
                            key={s}
                            className={clsx(
                              "flex flex-row gap-2 overflow-x-clip  rounded-inner p-2 px-2 text-xs",
                              isRTL ? "text-right" : "text-left",
                              props.currentPage === subIt.slug
                                ? "bg-buttonPrimary-500 text-white hover:bg-buttonPrimary-500"
                                : "hover:bg-layoutPrimary-500"
                            )}
                            dir={direction}
                            onClick={() => {
                              subIt.action()
                              // setOpenSubitem(dItem.slug)
                            }}
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
              {dIndex !== props.drawerItems.length - 1 && (
                <div className="my-2 h-[1px] w-10/12 self-center bg-buttonPrimary-500 text-center "></div>
              )}
            </div>
          ))}
        </div>
        {/* Drawer Footer */}
        <div
          className={clsx(
            "fixed bottom-0 flex h-14 w-full items-center justify-center gap-2 bg-layoutPrimary-500  transition-all",

            direction === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? 160 : 56}px`
                : `${openSideMenu ? 160 : 0}px`,
          }}
        >
          {size > 600 && onSettingsClick ? (
            <div
              className=" cursor-pointer rounded bg-gray-300 p-2 transition-all hover:bg-layoutPrimary-700"
              onClick={() => onSettingsClick()}
            >
              <SettingsIcon />
            </div>
          ) : null}
          {/* Expand Button */}
          {size > 600 && openSideMenu ? (
            <div
              className={clsx("w-fit transition-all")}
              // style={isRTL ? {} : {left: }}
              style={
                isRTL
                  ? {
                      right: `${
                        drawerSizeStyle[openSideMenu ? "opened" : "closed"][
                          drawerSize
                        ] - 35
                      }px`,
                    }
                  : {
                      left: `${
                        drawerSizeStyle[openSideMenu ? "opened" : "closed"][
                          drawerSize
                        ] - 35
                      }px`,
                    }
              }
            >
              <div
                dir={direction}
                className={clsx(
                  "relative left-0 top-0 transition-all",
                  openSideMenu ? " opacity-100" : " opacity-0"
                )}
              >
                <div
                  onClick={() => setKeepOpen(!keepOpen)}
                  className={
                    "w-fit cursor-pointer rounded bg-gray-300 p-1 transition-all hover:bg-gray-400"
                  }
                >
                  <ArrowIcon
                    pointing={
                      keepOpen
                        ? isRTL
                          ? "right"
                          : "left"
                        : isRTL
                        ? "left"
                        : "right"
                    }
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {/* 
    
      {/* Children Container */}
      <div
        className="fixed overflow-y-auto"
        style={
          isRTL
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

const AvatarIcon = () => (
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
)

const ArrowIcon = ({ pointing }) => {
  let directionStyle
  switch (pointing) {
    case "right":
      directionStyle = "-rotate-90"
      break
    case "left":
      directionStyle = "rotate-90"
      break
    case "up":
      directionStyle = "-rotate-180"
      break
    case "down":
      directionStyle = "rotate-0"
      break

    default:
      break
  }
  return (
    <svg
      className={clsx(
        "h-6 w-6 shrink-0  transition-all  disabled:bg-gray-200",
        directionStyle
      )}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const SettingsIcon = () => (
  <svg
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
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)
