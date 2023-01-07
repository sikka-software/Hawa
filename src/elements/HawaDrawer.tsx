import React, { FC, ReactElement, ReactNode, useEffect, useState } from "react"
import { FaDailymotion } from "react-icons/fa"
import clsx from "clsx"

type TDrawerTypes = {
  open: boolean
  setOpen: any
  position: any
  heading: any
  children?: ReactNode
}

export const HawaDrawer: React.FunctionComponent<TDrawerTypes> = ({
  open,
  setOpen,
  position,
  heading,
  children,
  ...props
}) => {
  const leftDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 left-0 border-r bg-white"
  const rightDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 right-0 border-l bg-white"

  const isFunction = (data: any): data is (...args: any[]) => any =>
    typeof data === "function"
  //   useEffect(() => {
  //     setOpenDrawer(true);
  //   }, [open]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && isFunction(child.type)) {
      switch (child.type.name) {
        case "DrawerHeader":
          return (
            <DrawerHeader setOpen={setOpen} children={child.props.children} />
          )

        case "DrawerBody":
          return <DrawerBody children={child.props.children} />

        case "DrawerFooter":
          return <DrawerFooter children={child.props.children} />
      }
      return React.cloneElement(child, {
        // setOpen: setOpen,
        // children: child.props.children,
      })
    }
  })

  // const drawerClass =
  //   open && position == "left"
  //     ? clsx("block", leftDrawer)
  //     : open && position == "right"
  //     ? clsx("block", rightDrawer)
  //     : "hidden w-0 "

  return (
    <div
      className={clsx(
        position == "left" ? leftDrawer : rightDrawer,
        "overflow-y-clip transition-all",
        open ? "w-60" : "w-0"
      )}
    >
      {childrenWithProps}
    </div>
  )
}

type TDrawerHeader = {
  setOpen: any
  children: ReactElement
}

export const DrawerHeader: FC<TDrawerHeader> = (props) => {
  return (
    <div className="  flex w-full flex-row items-center justify-between border-b py-4 px-1">
      {props.children}
      <div
        className="justify-self-end rounded border p-1 hover:cursor-pointer"
        onClick={() => {
          console.log("running")
          props.setOpen(false)
        }}
      >
        <FaDailymotion size={20} strokeWidth={2} />
      </div>
    </div>
  )
}

type TDrawerBody = {
  children: ReactElement
}

export const DrawerBody = (props: TDrawerBody) => {
  return <div className="p-1">{props.children}</div>
}

type TDrawerFooter = {
  children: ReactElement
}

export const DrawerFooter = (props: TDrawerFooter) => {
  return (
    <div className="absolute bottom-0 w-full border-t py-4 px-1">
      {props.children}
    </div>
  )
}

type DrawerItemTypes = {
  action: any
  icon?: any
  text: any
}
const HawaDrawerItem: React.FunctionComponent<DrawerItemTypes> = (props) => {
  let withIcon =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
  let withoutIcon =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"

  return (
    <li onClick={props.action}>
      <div className={props.icon ? withIcon : withoutIcon}>
        {/* <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg> */}
        <span className="ml-3">{props.text}</span>
      </div>
    </li>
  )
}
