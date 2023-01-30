import clsx from "clsx"
import React, { ReactNode, useEffect, useRef } from "react"

interface TMenuTypes {
  menuItems: MenuItems[][]
  withHeader?: boolean
  withIcons?: boolean
  headerTitle?: string
  headerSubtitle?: string
  open?: boolean
  handleClose?: () => void
  handleOpen: () => void
  anchor?: any
  children?: ReactNode
  buttonPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
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
  withIcons,
  headerTitle,
  headerSubtitle,
  open,
  handleClose,
  handleOpen,
  buttonPosition = "top-right",
  children,
  onClickOutside,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // onClickOutside && onClickOutside()
        handleClose()
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [onClickOutside])
  let defaultStyles =
    "border-none ring-offset-1 absolute z-10 w-44 divide-y divide-gray-100 overflow-y-clip rounded bg-gray-50 shadow-lg transition-all dark:bg-gray-700"
  let positionStyles = {
    "top-right": "top-12 right-0",
    "top-left": "top-12 left-0",
    "bottom-right": "bottom-12 right-0",
    "bottom-left": "bottom-12 left-0",
  }
  let animationStyles = {
    opened: "max-h-fit",
    closed: "h-0 ",
  }
  return (
    <div
      className="relative w-fit "
      onClick={() => {
        if (open) handleClose()
        else handleOpen()
      }}
    >
      {children}

      <div
        ref={ref}
        className={clsx(
          defaultStyles,
          positionStyles[buttonPosition],
          open ? animationStyles.opened : animationStyles.closed
        )}
      >
        {withHeader && (
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>{headerTitle}</div>
            <div className="truncate font-medium">{headerSubtitle}</div>
          </div>
        )}
        {menuItems.map((group, o) => {
          return (
            <ul
              key={o}
              className="bg-layout-1200 py-1  text-sm text-gray-700 dark:text-gray-200"
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
                        ? "mx-1 my-1 flex cursor-pointer flex-row items-center rounded bg-buttonPrimary-500 py-2 px-4 text-white hover:bg-buttonPrimary-700 rtl:flex-row-reverse dark:hover:bg-buttonPrimary-700 dark:hover:text-white"
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
