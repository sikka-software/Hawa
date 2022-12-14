import clsx from "clsx"
import React, { useState } from "react"
import { FaAddressCard } from "react-icons/fa"
type HawaAppLayoutTypes = {
  logoLink: string
  username: string
  userEmail: string
  drawerItems: any
}
export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = (
  props: any
) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <div className="fixed top-0 left-0 m-0 w-full p-0">
      {/* navbar */}
      <div className="m-0 flex flex-row justify-between bg-red-300 p-2">
        <div>logo</div>
        <div>page title</div>
        <div className="relative mr-2 h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <AvatarIcon />
        </div>
      </div>

      {/* side menu */}
      <div
        onMouseEnter={() => setOpenSideMenu(true)}
        onMouseLeave={() => setOpenSideMenu(false)}
        className="fixed top-0 flex h-full w-10 flex-col gap-2 bg-blue-300 transition-all hover:w-60"
      >
        {props.drawerItems.map((dItem) => (
          <div className="flex flex-row items-start justify-start bg-yellow-300 p-2">
            {dItem.icon}
            <div className={clsx(openSideMenu ? "visible" : "invisible")}>
              {dItem.text}
            </div>
          </div>
        ))}
      </div>
      {/* page content */}
      {props.children}
    </div>
  )
}

const AvatarIcon = () => (
  <svg
    className="absolute -left-1 h-12 w-12 text-gray-400"
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
)
