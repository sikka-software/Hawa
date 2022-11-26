import clsx from "clsx"
import React, { useEffect } from "react"
import { useState } from "react"
import { HawaMenu } from "./HawaMenu"

interface ItemCardTypes {
  actions?: any
  content?: any
  headerActions?: THeaderActions[][]
  header?: any
  lang?: string
  cardImage?: string
  onCardClick?: any
  orientation?: "horizontal" | "vertical"
}

type THeaderActions = {
  icon?: JSX.Element
  label: string
  action?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => void
  isButton?: boolean
}
export const HawaItemCard: React.FunctionComponent<ItemCardTypes> = ({
  actions,
  content,
  headerActions,
  header,
  cardImage,
  orientation = "vertical",
  ...props
}) => {
  let defaultStyle =
    "block rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all dark:border-gray-700 dark:bg-gray-800 "

  let orientationStyles = {
    vertical: "max-w-sm",
    horizontal: "flex flex-row w-full",
  }
  let imageStyles = {
    vertical: "h-auto max-h-56 w-full rounded-t-lg object-cover",
    horizontal:
      "h-auto w-full rounded-l-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
  }
  let headerActionsButtonStyle =
    "inline-block rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"

  const [openActionHeader, setOpenActionHeader] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)

  function handleOpenActionHeader() {
    setOpenActionHeader(!openActionHeader)
  }

  useEffect((): any => {
    window.onclick = () => {
      console.log("clicking, state = ", openActionHeader)
      if (openActionHeader) {
        setOpenActionHeader(false)
      }
    }
    return () => (window.onclick = null)
  }, [openActionHeader])

  return (
    <div
      className={clsx(defaultStyle, orientationStyles[orientation])}
      {...props}
    >
      {cardImage && (
        <img
          src={"https://via.placeholder.com/50"}
          // className=" h-full w-full max-w-sm bg-red-500  bg-[url('https://via.placeholder.com/50')] bg-cover bg-no-repeat"
          className={clsx(imageStyles[orientation])}
          // className="h-40 w-fit rounded-tl-lg rounded-bl-lg bg-[url('https://via.placeholder.com/50')] bg-cover bg-no-repeat          "
          // className="h-auto w-full rounded-l-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />
      )}
      <div className="relative w-full  px-6 pt-6">
        {headerActions && (
          <div className="max-h- bg-red absolute right-0 top-0 flex justify-end pt-3 pr-3">
            <HawaMenu
              buttonPosition="top-right"
              menuItems={headerActions}
              handleClose={setOpenDropDown}
              open={openDropDown}
            >
              <div
                className={clsx(headerActionsButtonStyle)}
                onClick={handleOpenActionHeader}
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </div>
            </HawaMenu>
          </div>
        )}

        {header && (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {header}
          </h5>
        )}
        {content && (
          <p className="w-full font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
        )}
        {actions && (
          <div className="flex justify-end rounded-b-lg p-3">{actions}</div>
        )}
      </div>
    </div>
  )
}
