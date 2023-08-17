import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import useDiscloser from "../hooks/useDiscloser"
import useBreakpoint from "../hooks/useBreakpoint"

type HawaSiteLayoutTypes = {
  navItems: {
    label: string
    icon: any
    slug: string
    action: () => void
    subItems?: any
  }[]
  direction?: "rtl" | "ltr"
  currentPage: string
  pageTitle?: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
  stickyNav?: boolean
  topBar?: boolean
  navigationSize?: "sm" | "md" | "lg"
  floating?: boolean
}

export const HawaSiteLayout: React.FunctionComponent<HawaSiteLayoutTypes> = ({
  direction = "rtl",
  navigationSize = "md",
  ...props
}) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [openSubItem, setOpenSubItem] = useState(false)
  const { isOpen, onClose, onOpen } = useDiscloser(false)
  const ref = useRef(null)
  const drawerItemRef = useRef(null)

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
        // onClickOutside && onClickOutside()

        setOpenSideMenu(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [keepOpen])

  //States of the side menu
  //larger than 600
  //as a bar and expands when hover
  //less than 600
  //as nothing and expands as button is clicked
  let ltrDrawerStyle = [
    " fixed top-0 left-0 z-40 flex h-full flex-col justify-between overflow-x-clip bg-layoutPrimary-500 transition-all",
    size > 600 ? "w-14 hover:w-40" : "w-0",
    openSideMenu ? "w-40" : "w-14",
  ]
  let rtlDrawerStyle = [
    "fixed top-0 right-0 z-40 flex h-full flex-col justify-between overflow-x-clip bg-layoutPrimary-500 transition-all",
    size > 600 ? "w-14 hover:w-40" : "w-0",
    openSideMenu ? "w-40" : "w-14",
  ]

  let navigationSizeStyles = {
    sm: "h-10",
    md: "",
    lg: "h-24",
  }
  let ltrChildrenStyle = [
    // "w-full overflow-y-auto",
    // "top-14 h-[calc(100%-3.5rem)]",
  ]
  let rtlChildrenStyle = [
    // "overflow-y-auto",
    // "w-full",
    // "top-14 h-[calc(100%-3.5rem)]",
  ]
  return (
    <div className="h-full w-full">
      <div
        className={clsx(
          "z-30 flex w-auto select-none flex-row items-start justify-between bg-layoutPrimary-500  transition-all",
          navigationSizeStyles[navigationSize],
          "rounded p-3 ",
          openSideMenu ? "h-44" : "h-14",
          // props.floating ? "rounded-[30px]" : "rounded",
          props.stickyNav ? "fixed left-4 right-4 top-4" : "",
          direction === "rtl" ? "flex-row" : "flex-row-reverse"
        )}
      >
        {size > 600 ? (
          <div className="flex  flex-row h-8    items-center  gap-4 px-3">
            {props.navItems?.map(({ label }, i) => (
              <div
                onClick={() => setOpenSideMenu(!openSideMenu)}
                key={i}
                className="cursor-pointer rounded bg-none text-gray-600 transition-all hover:text-black"
              >
                {label}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div
              onClick={() => setOpenSideMenu(!openSideMenu)}
              className="cursor-pointer  rounded p-1  transition-all hover:bg-gray-100"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1.6em"
                width="1.6em"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
            </div>
            {props.pageTitle ? <div>{props.pageTitle}</div> : <div></div>}
          </div>
        )}
        <div className="h-full">
          <img
            className="h-full max-h-8 "
            src={`https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-${
              direction === "rtl" ? "ar" : "en"
            }-white.svg`}
          />
        </div>
      </div>

      <div
        className={clsx(" relative top-14")}
        // className={clsx(
        //   direction === "rtl" ? rtlChildrenStyle : ltrChildrenStyle
        // )}
      >
        {props.children}
      </div>
    </div>
  )
}
