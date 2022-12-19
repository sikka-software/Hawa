import clsx from "clsx"
import React, { useState } from "react"

type HawaAppLayoutTypes = {
  drawerItems: { label: string; icon: any; slug: string; action: () => void }[]
  currentPage: string
  logoSymbol?: any
  logoLink?: string
  logoText?: any
  children?: any
}
export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = (
  props: any
) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <div className="flex">
      <div
        onMouseEnter={() => setOpenSideMenu(true)}
        onMouseLeave={() => setOpenSideMenu(false)}
        className="top-0 z-10 flex h-screen w-12 flex-col gap-0 bg-blue-300 transition-all hover:w-40"
      >
        <div className="m-1 flex flex-row bg-red-300 p-2">
          <div>{props.logoSymbol}</div>
          <div className={openSideMenu ? "scale-100" : "scale-0"}>
            {props.logoText}
          </div>
        </div>
        {props.drawerItems.map((dItem, i) => (
          <div
            key={i}
            onClick={() => dItem.action(dItem.slug)}
            className={clsx(
              "m-1 flex cursor-pointer flex-row items-center overflow-x-clip rounded-lg p-2  pl-3 transition-all hover:bg-primary-400",
              props.currentPage === dItem.slug
                ? "bg-primary-600 text-white hover:bg-primary-600"
                : ""
            )}
          >
            <div className="flex items-center justify-center">{dItem.icon}</div>
            <div
              className={clsx(
                "mx-2 text-sm transition-all",
                openSideMenu ? "opacity-100" : "opacity-0"
              )}
            >
              {dItem.label}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">{props.children}</div>
    </div>
  )
}
