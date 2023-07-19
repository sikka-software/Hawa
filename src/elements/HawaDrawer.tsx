import { FC, ReactElement, ReactNode } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import clsx from "clsx"
// TODO: This element should either be removed or improved
type TDrawerTypes = {
  open: boolean
  setOpen: any
  position: any
  heading: any
  children?: ReactNode
  drawerHeader?: any
  drawerBody?: any
  drawerFooter?: any
}

export const HawaDrawer: FC<TDrawerTypes> = ({
  open,
  setOpen,
  position,
  heading,
  children,
  ...props
}) => {
  const leftDrawer =
    "w-60 z-50 h-full absolute overflow-x-clip top-0 left-0 border-r bg-white"
  const rightDrawer =
    "w-60 z-50 h-full absolute overflow-x-clip top-0 right-0 border-l bg-white"

  return (
    <div
      className={clsx(
        position == "left" ? leftDrawer : rightDrawer,
        position == "left" ? "flex-row-reverse" : "flex-row",
        "overflow-x-clip transition-all",
        open ? "w-60" : "w-0"
      )}
    >
      {props.drawerHeader && (
        <DrawerHeader direction={position} setOpen={setOpen}>
          {props.drawerHeader}
        </DrawerHeader>
      )}

      {props.drawerBody && (
        <DrawerBody direction={position}>{props.drawerBody}</DrawerBody>
      )}
      {props.drawerFooter && (
        <DrawerFooter direction={position}>{props.drawerFooter}</DrawerFooter>
      )}
    </div>
  )
}

type TDrawerHeader = {
  setOpen: any
  children: ReactElement
  direction: any
}

const DrawerHeader: FC<TDrawerHeader> = (props) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-row items-center justify-between border-b p-4",
        props.direction == "left" ? "flex-row" : "flex-row-reverse"
      )}
    >
      {props.children}
      <div
        className="justify-self-end rounded border p-1 hover:cursor-pointer"
        onClick={() => props.setOpen(false)}
      >
        {props.direction == "left" ? (
          <FaChevronLeft size={20} strokeWidth={2} />
        ) : (
          <FaChevronRight size={20} strokeWidth={2} />
        )}
      </div>
    </div>
  )
}

type TDrawerBody = {
  children: ReactElement
  direction: any
}
const DrawerBody = (props: TDrawerBody) => {
  return (
    <div
      className={clsx(
        "overflow-clip whitespace-nowrap p-4",
        props.direction == "left" ? "flex-row" : "flex-row-reverse text-right"
      )}
    >
      {props.children}
    </div>
  )
}

type TDrawerFooter = {
  children: ReactElement
  direction: any
}

const DrawerFooter = (props: TDrawerFooter) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 w-full whitespace-nowrap border-t p-4",
        props.direction == "left" ? "flex-row" : "flex-row-reverse text-right"
      )}
    >
      {props.children}
    </div>
  )
}
