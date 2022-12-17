import clsx from "clsx"
import React, { useState } from "react"

type HawaAppLayoutTypes = {
  logoLink: string
  drawerItems: any
  currentPage?: string
}
export const HawaAppLayout: React.FunctionComponent<HawaAppLayoutTypes> = (
  props: any
) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <div className="fixed top-0 left-0 m-0 w-full p-0">
      <div
        onMouseEnter={() => setOpenSideMenu(true)}
        onMouseLeave={() => setOpenSideMenu(false)}
        className="absolute top-0 z-10 flex h-screen w-12 flex-col gap-0 bg-blue-300 transition-all hover:w-40"
      >
        <div className="m-1 bg-red-300 p-2">logo</div>
        {props.drawerItems.map((dItem) => (
          <div
            // onClick={() => {
            //   // dItem.action()
            // }}
            onClick={() => {
              console.log("switching pages")
            }}
            className={clsx(
              "m-1 flex cursor-pointer flex-row items-center overflow-x-clip rounded-lg p-2  pl-3 transition-all hover:bg-green-300",
              props.currentPage === dItem.slug ? "bg-primary-400" : ""
            )}
          >
            <div className="flex items-center justify-center">{dItem.icon}</div>
            <div
              className={clsx(
                "mx-2 text-sm transition-all",
                openSideMenu ? "opacity-100" : "opacity-0"
              )}
            >
              {dItem.text}
            </div>
          </div>
        ))}
      </div>

      {/* 
      <div className="relative flex flex-row bg-yellow-300">
        <div className="relative left-10 h-screen w-full bg-orange-300">
          <div className="m-0 flex flex-row justify-between bg-red-300 p-2">
            <div></div>
            <div>page title</div>
            <div className="relative mr-2 h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
              <AvatarIcon />
            </div>
          </div>

          <div>{props.children}</div>
        </div>
      </div> */}
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
