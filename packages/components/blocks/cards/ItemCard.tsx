import React, { useEffect, useState, FC } from "react";

import { Button } from "@/packages/components/elements/button";
import { DropdownMenu, MenuItemType } from "@/packages/components/elements/dropdownMenu";
import { StopPropagationWrapper } from "@/packages/components/elements/stopPropagationWrapper";

import { OrientationType } from "@/packages/components/types/commonTypes";

import { cn } from "../../util";

interface ItemCardTypes {
  headerActions?: MenuItemType[];
  // headerActions?: THeaderActions[]
  header?: any;
  content?: any;
  /** a URL for the image of the card */
  cardImage?: string;
  /** a function that fires when the card is clicked anywhere */
  onCardClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** a React node with HawaIconCount children to have counters at the bottom of the card */
  counts?: JSX.Element;
  /** The action buttons on the bottom right of the card */
  actions?: JSX.Element;
  /** The orientation of the card */
  orientation?: OrientationType;
  /** Enabling this blurs the image on hover and shows an action button */
  clickableImage?: boolean;
  /** The function of the action button on the image of the card */
  onImageClick?: () => void;
  /** The text of the action button on the image of the card */
  clickableImageActionText?: string;
  /** The icon of the action button on the image of the card */
  clickableImageActionIcon?: any;
  className?: string;
}

type THeaderActions = {
  icon?: JSX.Element;
  value?: string;
  label: string;
  action?: (e: any) => void;
  isButton?: boolean;
};

export const ItemCard: FC<ItemCardTypes> = ({
  actions,
  counts,
  content,
  headerActions,
  clickableImage,
  onImageClick,
  clickableImageActionText,
  clickableImageActionIcon,
  header,
  cardImage,
  orientation = "vertical",
  ...props
}) => {
  let defaultStyle =
    "hawa-block hawa-rounded hawa-border hawa-bg-card hawa-text-card-foreground hawa-shadow-sm hawa-transition-all";

  let orientationStyles = {
    vertical: "hawa-max-w-sm",
    horizontal: "hawa-flex hawa-flex-row hawa-w-full"
  };
  let imageStyles = {
    vertical:
      "hawa-h-auto hawa-max-h-56 hawa-w-full hawa-rounded-t-lg hawa-object-cover",
    horizontal:
      // "h-auto w-full rounded-l-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      // "h-full w-full rounded-l-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg",
      "hawa-h-full hawa-w-48 hawa-rounded-l hawa-object-cover"
  };
  let headerActionsButtonStyle =
    "hawa-inline-block hawa-rounded hawa-p-1 hawa-text-sm hawa-text-gray-500 hover:hawa-bg-gray-100 focus:hawa-outline-none focus:hawa-ring-4 focus:hawa-ring-gray-200 dark:hawa-text-gray-400 dark:hover:hawa-bg-gray-700 dark:focus:hawa-ring-gray-700";

  const [openActionHeader, setOpenActionHeader] = useState(false);

  function handleOpenActionHeader(e: any) {
    e.stopPropagation();
    setOpenActionHeader(!openActionHeader);
  }

  useEffect((): any => {
    window.onclick = () => {
      if (openActionHeader) {
        setOpenActionHeader(false);
      }
    };
    return () => (window.onclick = null);
  }, [openActionHeader]);

  return (
    <div
      className={cn(
        defaultStyle,
        props.onCardClick && " hawa-cursor-pointer hover:hawa-shadow-lg",
        orientationStyles[orientation],
        props.className
      )}
      onClick={(e) => {
        e.stopPropagation();
        if (props.onCardClick) {
          props.onCardClick(e);
        }
      }}
      // {...props}
    >
      {cardImage && (
        <div className="hawa-group hawa-relative hawa-overflow-clip">
          <img
            src={cardImage}
            className={cn(
              imageStyles[orientation],
              clickableImage
                ? "hawa-overflow-clip hawa-transition-all group-hover:hawa-blur-lg"
                : ""
            )}
          />
          {clickableImage && (
            <StopPropagationWrapper>
              <div className="hawa-absolute hawa-left-0 hawa-top-0 hawa-flex hawa-h-full hawa-w-full hawa-items-center hawa-justify-center hawa-opacity-0 hawa-transition-all group-hover:hawa-opacity-100 ">
                <Button
                  variant="secondary"
                  onClick={onImageClick}
                  className="hawa-flex hawa-flex-row hawa-gap-2"
                >
                  {clickableImageActionIcon}
                  {clickableImageActionText || "Click"}
                </Button>
              </div>
            </StopPropagationWrapper>
          )}
        </div>
      )}
      <div className="hawa-relative hawa-flex hawa-h-full hawa-w-full hawa-flex-col hawa-justify-between hawa-p-4 xs:hawa-p-6 xs:hawa-px-2 xs:hawa-pb-2">
        {headerActions && (
          <div className="hawa-absolute hawa-end-0 hawa-top-0 hawa-flex hawa-justify-end hawa-pe-3 hawa-pt-3">
            <StopPropagationWrapper>
              <DropdownMenu
                items={headerActions}
                trigger={
                  <Button
                    variant={"ghost"}
                    size={"smallIcon"}
                    onClick={handleOpenActionHeader}
                  >
                    <span className="hawa-sr-only">Open dropdown</span>
                    <svg
                      className="hawa-h-5 hawa-w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </Button>
                }
              />
            </StopPropagationWrapper>
          </div>
        )}

        <div className=" hawa-mx-2">
          {header && (
            <h5 className="hawa-mb-2 hawa-text-2xl hawa-font-bold hawa-tracking-tight ">
              {header}
            </h5>
          )}
          {content && (
            <span className="hawa-w-full hawa-font-normal ">{content}</span>
          )}
        </div>
        {actions || counts ? (
          <div
            className={cn(
              "hawa-mt-3 hawa-flex hawa-flex-col hawa-items-center hawa-rounded-b-lg dark:hawa-text-white xs:hawa-flex-row",
              actions || counts ? "hawa-justify-between" : "hawa-justify-end",
              !actions && counts ? "hawa-py-3" : ""
            )}
          >
            {counts}
            <StopPropagationWrapper>{actions}</StopPropagationWrapper>
          </div>
        ) : null}
      </div>
    </div>
  );
};
