import React, { ReactNode, useEffect, useRef, useState } from "react"
import clsx from "clsx"

// TODO: add width to decrease width

interface TMenuTypes {
  menuItems: MenuItems[][]
  withHeader?: boolean
  headerTitle?: string
  headerSubtitle?: string
  direction?: "rtl" | "ltr"
  anchor?: any
  children?: ReactNode
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
  actionedItem?: any
  size?: "small" | "normal" | "large"
}

type MenuItems = {
  icon?: JSX.Element
  label: string
  action?: (e: any) => void
  isButton?: boolean
  element?: any
}

export const HawaMenu: React.FunctionComponent<TMenuTypes> = ({
  menuItems,
  withHeader,
  direction = "ltr",
  headerTitle,
  headerSubtitle,
  size = "normal",
  children,
  onClickOutside,
  actionedItem,
  position = "top-right",
}) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const childrenRef = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState(null)
  const [childrenWidth, setChildrenWidth] = useState(null)
  const menuRef = useRef(null)
  const [menuWidth, setMenuWidth] = useState(null)
  const [menuHeight, setMenuHeight] = useState(null)

  useEffect(() => {
    setMenuHeight(menuRef.current?.getBoundingClientRect().height)
    setMenuWidth(menuRef.current?.getBoundingClientRect().width)
    setChildrenHeight(childrenRef.current?.getBoundingClientRect().height)
    setChildrenWidth(childrenRef.current?.getBoundingClientRect().width)

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [onClickOutside])

  let defaultStyles =
    "border-none absolute ring-offset-1 absolute z-10 w-44 divide-y divide-gray-100 overflow-y-clip rounded bg-gray-50 shadow-lg transition-all dark:bg-gray-700"
  let sizeStyles = {
    small: "text-[11px] p-1 px-4 m-0",
    normal: "py-2 px-4",
    large: "",
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
      menuCoordinates =
        direction === "rtl"
          ? `-${0}px, ${spacing}px`
          : `-${childrenWidth - menuWidth}px, ${spacing}px`

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
  return (
    <div
      onClick={() => {
        if (menuOpened) setMenuOpened(false)
        else setMenuOpened(true)
      }}
    >
      <div ref={childrenRef}>{children}</div>

      <div
        ref={menuRef}
        style={{
          position: "absolute",
          width: "max-content",
          transform: `translate(${menuCoordinates})`,
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
              className="bg-layout-1200 flex flex-col gap-1 p-1 text-gray-700 dark:text-gray-200"
            >
              {group?.map((item) => {
                return item.element ? (
                  <li className="cursor-pointer items-center rounded hover:bg-gray-200 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white">
                    {item.element}
                  </li>
                ) : (
                  <li
                    onClick={() => item?.action(actionedItem)}
                    className={clsx(
                      item.isButton
                        ? "flex cursor-pointer flex-row items-center rounded bg-buttonPrimary-500 py-2 px-4 text-white hover:bg-buttonPrimary-700 rtl:flex-row-reverse dark:hover:bg-buttonPrimary-700 dark:hover:text-white"
                        : " flex cursor-pointer flex-row items-center rounded  hover:bg-gray-200 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white",
                      sizeStyles[size]
                    )}
                  >
                    {item.icon && (
                      <div
                        className={
                          size === "small" ? "mr-1 rtl:ml-1" : "mr-2 rtl:ml-2"
                        }
                      >
                        {item.icon}
                      </div>
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
