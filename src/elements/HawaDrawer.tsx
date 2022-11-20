import React, { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import clsx from "clsx"

type DrawerTypes = {
  open: any
  setOpen: any
  position: any
  heading: any
  children: any
}

export const HawaDrawer: React.FunctionComponent<DrawerTypes> = ({
  open,
  setOpen,
  position,
  heading,
  children,
}) => {
  const leftDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 left-0 border-r bg-white"
  const rightDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 right-0 border-l bg-white"

  //   useEffect(() => {
  //     setOpenDrawer(true);
  //   }, [open]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type.name == "DrawerHeader") {
      return React.cloneElement(child, {
        setOpen: setOpen,
        children: child.props.children,
      })
    }
    if (React.isValidElement(child) && child.type.name == "DrawerBody") {
      return React.cloneElement(child, { children: child.props.children })
    }
    if (React.isValidElement(child) && child.type.name == "DrawerFooter") {
      return React.cloneElement(child, { children: child.props.children })
    }
  })

  const drawerClass =
    open && position == "left"
      ? clsx("block", leftDrawer)
      : open && position == "right"
      ? clsx("block", rightDrawer)
      : "hidden"

  return <div className={drawerClass}>{childrenWithProps}</div>
}

export const DrawerHeader = (props: any) => {
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
        <AiOutlineClose size={20} strokeWidth={2} />
      </div>
    </div>
  )
}

export const DrawerBody = (props: any) => {
  return <div className="p-1">{props.children}</div>
}

export const DrawerFooter = (props: any) => {
  return (
    <div className="absolute bottom-0 w-full border-t py-4 px-1">
      {props.children}
    </div>
  )
}
