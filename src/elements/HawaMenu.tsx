import clsx from "clsx"
import React, { ReactNode, useEffect, useRef, useState } from "react"
// TODO: add size to make it smaller
// TODO: add width to decrease width
interface TMenuTypes {
  menuItems: MenuItems[][]
  withHeader?: boolean
  // withIcons?: boolean
  headerTitle?: string
  headerSubtitle?: string
  direction?: "rtl" | "ltr"
  // open?: boolean
  // handleClose?: () => void
  // handleOpen: () => void
  anchor?: any
  children?: ReactNode
  // buttonPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  position?:
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
  onClickOutside?: any
}

type MenuItems = {
  icon?: JSX.Element
  label: string
  action?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => void
  isButton?: boolean
  element?: any
}

export const HawaMenu: React.FunctionComponent<TMenuTypes> = ({
  menuItems,
  withHeader,
  // withIcons,
  direction = "ltr",
  headerTitle,
  headerSubtitle,
  // open,
  // handleClose,
  // handleOpen,
  // buttonPosition = "top-right",
  children,
  onClickOutside,
  position = "top-right",
}) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const childrenRef = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState(null)
  const [childrenWidth, setChildrenWidth] = useState(null)

  const menuRef = useRef(null)
  const [menuWidth, setMenuWidth] = useState(null)
  const [menuHeight, setMenuHeight] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    setMenuHeight(menuRef.current?.getBoundingClientRect().height)
    setMenuWidth(menuRef.current?.getBoundingClientRect().width)
    setChildrenHeight(childrenRef.current?.getBoundingClientRect().height)
    setChildrenWidth(childrenRef.current?.getBoundingClientRect().width)

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // onClickOutside && onClickOutside()
        // handleClose()
        setMenuOpened(false)
      }
    }
    console.log("ref is", menuRef.current?.getBoundingClientRect())
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [onClickOutside])
  let defaultStyles =
    "border-none absolute ring-offset-1 absolute z-10 w-44 divide-y divide-gray-100 overflow-y-clip rounded bg-gray-50 shadow-lg transition-all dark:bg-gray-700"
  let positionStyles = {
    "top-right": "top-8 right-0",
    "top-left": "top-8 left-0",
    "bottom-right": "bottom-8 right-0",
    "bottom-left": "bottom-8 left-0",
  }
  let animationStyles = {
    opened: "max-h-fit h-max visible opacity-100 block",
    closed: "h-0 invisible opacity-0 hidden",
  }

  let menuCoordinates
  let spacing = 5
  switch (position) {
    case "top-right":
      menuCoordinates =
        direction === "rtl"
          ? `${menuWidth - childrenWidth}px, -${
              menuHeight + childrenHeight + spacing
            }px`
          : `0px, -${menuHeight + childrenHeight + spacing}px`
      break
    case "top-left":
      menuCoordinates =
        direction === "rtl"
          ? `${0}px, -${menuHeight + childrenHeight + spacing}px`
          : `-${menuWidth - childrenWidth}px, -${
              menuHeight + childrenHeight + spacing
            }px`
      break
    case "bottom-right":
      menuCoordinates = `${menuWidth - childrenWidth}px, ${spacing}px`
      break
    case "bottom-left":
      menuCoordinates =
        direction === "rtl"
          ? `0px, ${spacing}px`
          : `-${menuWidth - childrenWidth}px,${spacing}px`
      break
    case "right-bottom":
      menuCoordinates =
        direction === "rtl"
          ? `${menuWidth + spacing}px, -${childrenHeight}px`
          : `${childrenWidth + spacing}px, -${childrenHeight}px`
      break
    case "right-top":
      menuCoordinates =
        direction === "rtl"
          ? `${menuWidth + spacing}px, -${menuHeight}px`
          : `${childrenWidth + spacing}px, -${menuHeight}px`
      break
    case "left-bottom":
      menuCoordinates =
        direction === "rtl"
          ? `-${childrenWidth + spacing}px, -${childrenHeight}px`
          : `-${menuWidth + spacing}px, -${childrenHeight}px`
      break
    case "left-top":
      menuCoordinates =
        direction === "rtl"
          ? `-${childrenWidth + spacing}px, -${menuHeight}px`
          : `-${menuWidth + spacing}px, -${menuHeight}px`
      break

    default:
      menuCoordinates = `-${menuWidth / 2}px, -${
        childrenHeight + menuHeight / 2
      }px`

      break
  }
  // switch (position) {
  //   case "top-right":
  //     menuCoordinates = `0px, -${menuHeight + childrenHeight + spacing}px`
  //     break
  //   case "top-left":
  //     menuCoordinates = `-${menuWidth - childrenWidth}px, -${
  //       menuHeight + childrenHeight + spacing
  //     }px`
  //     break
  //   case "bottom-right":
  //     menuCoordinates = `0px, ${spacing}px`
  //     break
  //   case "bottom-left":
  //     menuCoordinates = `-${menuWidth - childrenWidth}px,${spacing}px`
  //     break
  //   case "right-bottom":
  //     menuCoordinates = `${childrenWidth + spacing}px, -${childrenHeight}px`
  //     break
  //   case "right-top":
  //     menuCoordinates = `${childrenWidth + spacing}px, -${menuHeight}px`
  //     break
  //   case "left-bottom":
  //     menuCoordinates = `-${menuWidth + spacing}px, -${childrenHeight}px`
  //     break
  //   case "left-top":
  //     menuCoordinates = `-${menuWidth + spacing}px, -${menuHeight}px`
  //     break

  //   default:
  //     menuCoordinates = `-${menuWidth / 2}px, -${
  //       childrenHeight + menuHeight / 2
  //     }px`

  //     break
  // }
  return (
    <div
      // className="relative w-fit "
      onClick={() => {
        if (menuOpened) setMenuOpened(false)
        else setMenuOpened(true)
        // if (open) handleClose()
        // else handleOpen()
      }}
    >
      <div ref={childrenRef}>{children}</div>

      <div
        ref={menuRef}
        // className={clsx(
        //   defaultStyles,
        //   positionStyles[buttonPosition],
        //   open ? animationStyles.opened : animationStyles.closed
        // )}
        style={{
          position: "absolute",
          width: "max-content",
          transform: `translate(${menuCoordinates})`,
          // opacity: open ? "1" : "0",
          maxWidth: "200px",
        }}
        className={clsx(
          defaultStyles,
          menuOpened ? "opacity-100" : "invisible opacity-0"
        )}
      >
        {withHeader && (
          <div className="py-3 px-4 text-xs text-gray-900 dark:text-white">
            <div>{headerTitle}</div>
            <div className="truncate font-medium">{headerSubtitle}</div>
          </div>
        )}
        {menuItems?.map((group, o) => {
          return (
            <ul
              key={o}
              className="bg-layout-1200 flex flex-col gap-1 py-1 text-sm text-gray-700 dark:text-gray-200"
            >
              {group?.map((item) => {
                return item.element ? (
                  <li className="mx-1 cursor-pointer items-center rounded hover:bg-gray-200 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white">
                    {item.element}
                  </li>
                ) : (
                  <li
                    onClick={(e) => item.action(e, item.label)}
                    className={
                      item.isButton
                        ? "mx-1 flex cursor-pointer flex-row items-center rounded bg-buttonPrimary-500 py-2 px-4 text-white hover:bg-buttonPrimary-700 rtl:flex-row-reverse dark:hover:bg-buttonPrimary-700 dark:hover:text-white"
                        : "mx-1 flex cursor-pointer flex-row items-center rounded py-2 px-4 hover:bg-gray-200 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white"
                    }
                  >
                    {item.icon && (
                      <div className="mr-2 rtl:ml-2">{item.icon}</div>
                    )}
                    {item.label}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  )
}
