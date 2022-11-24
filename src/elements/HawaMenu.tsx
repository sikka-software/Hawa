import clsx from "clsx"
import React from "react"

type MenuTypes = {
  popMenuID: any
  menuItems: any
  //
  //         icon: PropTypes.element,
  //         label: PropTypes.string,
  //        action: PropTypes.func,
  //
  withHeader: any
  withIcons: any
  headerTitle: any
  headerSubtitle: any
  open: any
  handleClose: any
  anchor: any
  children: any
  buttonPosition: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

export const HawaMenu: React.FunctionComponent<MenuTypes> = ({
  menuItems,
  withHeader,
  withIcons,
  headerTitle,
  headerSubtitle,
  open,
  handleClose,
  buttonPosition,
  children,
}) => {
  let defaultStyles =
    "absolute z-10 w-44 divide-y divide-gray-100 overflow-y-clip rounded-lg bg-white shadow transition-all dark:bg-gray-700"
  let positionStyles = {
    "top-right": "top-30 right-0",
    "top-left": "top-30 left-0",
    "bottom-right": "bottom-30 right-0",
    "bottom-left": "bottom-30 left-0",
  }
  let animationStyles = {
    opened: "max-h-72 animate-expandDown",
    closed: "max-h-0 opacity-0 animate-expandUp",
  }
  return (
    <div className="">
      <div className="relative w-fit" onClick={() => handleClose(!open)}>
        {children}

        <div
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
          {menuItems.map((group: any) => {
            return (
              <ul className="py-1  text-sm text-gray-700 dark:text-gray-200">
                {group.map((item: any) => {
                  return (
                    <li
                      onClick={item.action}
                      className={
                        item.button
                          ? "mx-1 flex cursor-pointer flex-row items-center rounded-lg bg-primary-500 py-2 px-4 text-white hover:bg-primary-600 rtl:flex-row-reverse dark:hover:bg-primary-600 dark:hover:text-white"
                          : "mx-1 flex cursor-pointer flex-row items-center rounded-lg py-2 px-4 hover:bg-gray-100 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white"
                      }
                    >
                      {withIcons && (
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
    </div>
  )
}
