import React, { useEffect, useState, FC } from "react"
import clsx from "clsx"
import { HawaMenu } from "./HawaMenu"
import { HawaButton } from "./HawaButton"

interface ItemCardTypes {
  headerActions?: THeaderActions[][]
  header?: any
  content?: any
  /** a URL for the image of the card */
  cardImage?: string
  /** a function that fires when the card is clicked anywhere */
  onCardClick?: any
  /** a React node with HawaIconCount children to have counters at the bottom of the card */
  counts?: JSX.Element
  /** The action buttons on the bottom right of the card */
  actions?: JSX.Element
  /** The orientation of the card */
  orientation?: "horizontal" | "vertical"
  /** Enabling this blurs the image on hover and shows an action button */
  clickableImage?: boolean
  /** The function of the action button on the image of the card */
  clickableImageAction?: () => void
  /** The text of the action button on the image of the card */
  clickableImageActionText: string
  /** The icon of the action button on the image of the card */
  clickableImageActionIcon?: any
}

type THeaderActions = {
  icon?: JSX.Element
  label: string
  action?: (e: any) => void
  isButton?: boolean
}
export const HawaItemCard: FC<ItemCardTypes> = ({
  actions,
  counts,
  content,
  headerActions,
  clickableImage,
  clickableImageAction,
  clickableImageActionText,
  clickableImageActionIcon,
  header,
  cardImage,
  orientation = "vertical",
  ...props
}) => {
  let defaultStyle =
    "block rounded border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all dark:border-gray-700 dark:bg-gray-800 "

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
    "inline-block rounded p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"

  const [openActionHeader, setOpenActionHeader] = useState(false)

  function handleOpenActionHeader() {
    setOpenActionHeader(!openActionHeader)
  }

  useEffect((): any => {
    window.onclick = () => {
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
        <div className="group relative overflow-clip rounded-t">
          <img
            src={"https://via.placeholder.com/50"}
            className={clsx(
              imageStyles[orientation],
              clickableImage
                ? "overflow-clip transition-all group-hover:blur-lg"
                : ""
            )}
          />
          {clickableImage && (
            <div className="absolute left-0 top-0 flex h-full w-full items-center  justify-center opacity-0 transition-all group-hover:opacity-100 ">
              <HawaButton
                startIcon={clickableImageActionIcon}
                variant="outlined"
                onClick={clickableImageAction}
              >
                {clickableImageActionText}
              </HawaButton>
            </div>
          )}
        </div>
      )}
      <div className="relative w-full p-6">
        {headerActions && (
          <div className="max-h- bg-red absolute right-0 top-0 flex justify-end pr-3 pt-3">
            <HawaMenu position="top-right" menuItems={headerActions}>
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
        {actions || counts ? (
          <div
            className={clsx(
              "mt-3 flex items-center rounded-b-lg ",
              actions && counts ? "justify-between" : "justify-end"
            )}
          >
            {counts}
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  )
}
