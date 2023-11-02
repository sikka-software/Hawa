import React, { useEffect, useRef, useState } from "react";
import { Button, DropdownMenu, MenuItemType, Tooltip } from "../elements";
import { AppLayoutSidebarItemProps, SidebarGroup } from "./Sidebar";
import { cn } from "../util";
import { DirectionType } from "../types/commonTypes";

type AppLayoutTypes = {
  header: React.ReactNode;
  design?: "default";
  /** The pages of the side drawer */
  drawerItems: AppLayoutSidebarItemProps[];
  /** The direction of the layout */
  direction?: DirectionType;
  /** The title of the current selected page, make sure it's the same as the drawerItem slug */
  currentPage: string;
  /** Specifies the title of the page. */
  pageTitle?: string;
  /** Specifies the symbol for the logo. */
  logoSymbol?: any;
  /** Specifies the link for the logo. */
  logoLink?: string;
  /** Specifies the text for the logo. */
  logoText?: any;
  /** Specifies the content to be displayed in the layout. */
  children?: any;
  /** Specifies whether to display the top bar. */
  topBar?: boolean;
  /** Specifies the username to be displayed. */
  username?: string;
  /** Specifies the user email to be displayed. */
  email?: string;
  /** Specifies the image for the avatar. */
  avatarImage?: any;
  /**
   * Specifies the size of the drawer.
   * - 'sm': Small.
   * - 'md': Medium.
   * - 'large': Large.
   */
  drawerSize?: "sm" | "md" | "large";
  /** Specifies the menu items for the profile menu. */
  profileMenuItems?: MenuItemType[];
  /**
   * Specifies the width of the profile menu.
   * - 'default': Default width.
   * - 'sm': Small width.
   * - 'lg': Large width.
   * - 'parent': Inherits width from parent element.
   */
  profileMenuWidth: "default" | "sm" | "lg" | "parent";
  /** Event handler for drawer expansion. */
  onDrawerExpand?: (e: any) => void;
  /** Specifies whether to keep the drawer open. */
  // keepDrawerOpen?: boolean;
  keepOpen: boolean;
  setKeepOpen: (value: boolean) => void;
  /** Specifies additional actions for the drawer footer. */
  DrawerFooterActions?: any;
  /** Specifies the item that was clicked. */
  clickedItem?: any;
  /** Event handler for logo button click. */
  onLogoClick?: () => void;
  /** Text labels for various UI elements. */
  texts?: {
    /** Label for expand sidebar button. */
    expandSidebar?: string;
    /** Label for collapse sidebar button. */
    collapseSidebar?: string;
  };
};

export const AppLayout: React.FunctionComponent<AppLayoutTypes> = ({
  direction = "ltr",
  drawerSize = "md",
  DrawerFooterActions,
  currentPage,
  clickedItem,
  keepOpen,
  setKeepOpen,
  design = "default",
  ...props
}) => {
  let closeDrawerWidth = 56;
  let openDrawerWidth = 200;
  let drawerSizeStyle: any = {
    opened: {
      sm: "100",
      md: openDrawerWidth,
      lg: "250",
    },
    closed: {
      sm: closeDrawerWidth,
      md: closeDrawerWidth,
      lg: closeDrawerWidth,
    },
  };

  const ref = useRef<HTMLDivElement>(null);
  const isRTL = direction === "rtl";
  const [openedSidebarItem, setOpenedSidebarItem] = useState("");
  const [size, setSize] = useState(1200);
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const drawerSizeCondition =
    size > 600
      ? drawerSizeStyle[keepOpen ? "opened" : "closed"][drawerSize]
      : 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setSize(window.innerWidth);
      };
      resize();
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);
  useEffect(() => {
    if (size > 600) {
      setOpenSideMenu(keepOpen);
    } else {
      setOpenSideMenu(false);
    }
  }, [size]);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target) && !keepOpen) {
        setOpenSideMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [keepOpen]);

  return (
    <div className="hawa-fixed hawa-left-0">
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Top Bar
       * ----------------------------------------------------------------------------------------------------
       */}
      {props.topBar && (
        <div
          className={cn(
            "hawa-fixed hawa-left-0 hawa-right-0 hawa-top-0 hawa-z-0 hawa-flex hawa-h-14 hawa-w-full hawa-items-center hawa-justify-between hawa-bg-primary-foreground hawa-p-2",
            isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
          )}
        >
          {/* Nav Side Of Navbar */}
          {size > 600 ? (
            <div
              className={cn(
                "dark:hawa-text-white",
                isRTL
                  ? [
                      size > 600 ? "hawa-mr-14" : "hawa-mr-2",
                      keepOpen ? "hawa-mr-40" : "",
                    ]
                  : [
                      size > 600 ? "hawa-ml-14" : "hawa-ml-2",
                      keepOpen ? "hawa-ml-40" : "",
                    ]
              )}
              style={
                isRTL
                  ? {
                      marginRight: `${
                        drawerSizeStyle[keepOpen ? "opened" : "closed"][
                          drawerSize
                        ]
                      }px`,
                    }
                  : {
                      marginLeft: `${
                        drawerSizeStyle[keepOpen ? "opened" : "closed"][
                          drawerSize
                        ]
                      }px`,
                    }
              }
            >
              {props.pageTitle}
            </div>
          ) : (
            // Mobile Drawer Menu Button
            <div
              dir={direction}
              className="hawa-flex hawa-items-center hawa-justify-center hawa-gap-0.5"
            >
              <div
                onClick={() => setOpenSideMenu(true)}
                className="hawa-z-40 hawa-mx-1 hawa-cursor-pointer  hawa-rounded hawa-p-2  hawa-transition-all hover:hawa-bg-gray-100"
              >
                <MenuIcon />
              </div>
              {/* Mobile Page Title */}
              {props.pageTitle ? (
                <div className="hawa-text-sm">{props.pageTitle}</div>
              ) : (
                <div></div>
              )}
            </div>
          )}

          <div
            className={cn(
              "hawa-flex hawa-gap-2 dark:hawa-text-white",
              isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
            )}
          >
            {/* User Info */}
            {size > 600 ? (
              <div
                className={
                  isRTL
                    ? "hawa-text-left hawa-text-xs"
                    : "hawa-text-right hawa-text-xs"
                }
              >
                <div className="hawa-font-bold">{props.username}</div>{" "}
                <div>{props.email}</div>
              </div>
            ) : null}
            {/* Profile Icon & Menu */}
            <DropdownMenu
              triggerClassname="hawa-mx-2"
              align="end"
              alignOffset={8}
              side={"bottom"}
              sideOffset={5}
              width={props.profileMenuWidth}
              direction={isRTL ? "rtl" : "ltr"}
              items={props.profileMenuItems}
              onItemSelect={(e: any) => console.log("selecting item ", e)}
              trigger={
                <div className="hawa-relative hawa-h-8 hawa-w-8  hawa-cursor-pointer hawa-overflow-clip hawa-rounded hawa-ring-1 hawa-ring-primary/30 dark:hawa-bg-gray-600">
                  {props.avatarImage ? (
                    <img src={props.avatarImage} alt="User Avatar" />
                  ) : (
                    <svg
                      aria-label="Avatar Icon"
                      className="hawa-absolute hawa--left-1 hawa-h-10 hawa-w-10 hawa-text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
              }
            />
          </div>
        </div>
      )}
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Drawer Container
       * ----------------------------------------------------------------------------------------------------
       */}
      <div
        className={cn(
          "hawa-fixed hawa-z-0 hawa-flex  hawa-flex-col hawa-justify-between hawa-overflow-x-clip hawa-transition-all",
          isRTL
            ? "hawa-right-0 hawa-top-0 hawa-h-14"
            : "hawa-left-0 hawa-top-0 hawa-h-14",
          "hawa-h-[calc(100dvh)]"
        )}
        style={{
          width:
            size > 600
              ? openSideMenu
                ? `${drawerSizeStyle["opened"][drawerSize]}px`
                : `${drawerSizeStyle["closed"][drawerSize]}px`
              : openSideMenu
              ? `${drawerSizeStyle["opened"][drawerSize]}px`
              : "0px",
        }}
        onMouseEnter={() => {
          setOpenSideMenu(true);
        }}
        onMouseLeave={() => {
          if (size > 600) {
            if (keepOpen) {
              setOpenSideMenu(true);
            } else {
              setOpenedSidebarItem("");
              setOpenSideMenu(false);
            }
          } else {
            setOpenSideMenu(false);
          }
          // keepOpen ? setOpenSideMenu(true) : setOpenSideMenu(false)
        }}
        ref={ref}
      >
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Header
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          onClick={props.onLogoClick}
          dir={direction}
          className={cn(
            "hawa-fixed hawa-z-50  hawa-mb-2 hawa-flex hawa-h-14 hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-bg-primary-foreground hawa-transition-all",
            props.onLogoClick && "hawa-cursor-pointer"
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : 56}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Full Logo
           * ----------------------------------------------------------------------------------------------------
           */}
          {openSideMenu && props.header && props.header}
          {!props.header && (
            <img
              className={cn(
                "hawa-h-9  hawa-opacity-0 hawa-transition-all",
                !openSideMenu
                  ? "hawa-invisible hawa-opacity-0"
                  : "hawa-visible hawa-opacity-100"
              )}
              src={props.logoLink}
            />
          )}
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Logo Symbol
           * ----------------------------------------------------------------------------------------------------
           */}
          {size > 600 ? (
            <img
              className={cn(
                "hawa-fixed  hawa-h-9  hawa-transition-all",
                isRTL
                  ? "hawa-right-2.5 hawa-top-2.5"
                  : "hawa-left-2.5 hawa-top-2.5",
                openSideMenu
                  ? "hawa-invisible hawa-opacity-0"
                  : "hawa-visible hawa-opacity-100"
              )}
              src={props.logoSymbol}
            />
          ) : null}
        </div>
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Content Container
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          className={cn(
            "hawa-fixed hawa-bottom-14 hawa-bg-primary-foreground hawa-p-0 hawa-py-2 hawa-transition-all hawa-top-14",
            openSideMenu ? "hawa-overflow-auto" : "hawa-overflow-hidden"
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : drawerSizeCondition}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Drawer Items
           * ----------------------------------------------------------------------------------------------------
           */}
          <SidebarGroup
            direction={direction}
            onItemClick={(values) => {
              if (clickedItem) {
                clickedItem(values);
              }
            }}
            onSubItemClick={(values) => {
              if (clickedItem) {
                clickedItem(values);
              }
            }}
            selectedItem={currentPage}
            openedItem={openedSidebarItem}
            setOpenedItem={(e: any) => setOpenedSidebarItem(e)}
            isOpen={keepOpen || openSideMenu}
            items={props.drawerItems}
          />
        </div>
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Drawer Footer
         * ----------------------------------------------------------------------------------------------------
         */}
        <div
          className={cn(
            "hawa-fixed  hawa-flex hawa-h-14  hawa-items-center hawa-justify-center hawa-gap-2 hawa-overflow-clip hawa-bg-primary-foreground  hawa-transition-all",
            direction === "rtl" ? "hawa-flex-row-reverse" : "hawa-flex-row",
            "hawa-bottom-0"
          )}
          style={{
            width:
              size > 600
                ? `${openSideMenu ? openDrawerWidth : 56}px`
                : `${openSideMenu ? openDrawerWidth : 0}px`,
          }}
        >
          {DrawerFooterActions && openSideMenu ? (
            <>{DrawerFooterActions}</>
          ) : null}

          {/* Expand Button */}
          {size > 600 && openSideMenu ? (
            <Tooltip
              side={"left"}
              delayDuration={500}
              content={
                keepOpen
                  ? props.texts?.collapseSidebar || "Collapse Sidebar"
                  : props.texts?.expandSidebar || "Expand Sidebar"
              }
            >
              <Button
                variant="outline"
                onClick={() => {
                  const newKeepOpenState = !keepOpen;
                  if (props.onDrawerExpand) {
                    props.onDrawerExpand(newKeepOpenState);
                  }
                  setKeepOpen(newKeepOpenState);
                }}
                size="smallIcon"
              >
                <svg
                  className={cn(
                    "hawa-h-6 hawa-w-6 hawa-shrink-0 hawa-text-primary hawa-transition-all  disabled:hawa-bg-gray-200 ",
                    keepOpen
                      ? isRTL
                        ? "hawa--rotate-90"
                        : "hawa-rotate-90"
                      : isRTL
                      ? "hawa-rotate-90"
                      : "hawa--rotate-90"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Children Container
       * ----------------------------------------------------------------------------------------------------
       */}
      <div
        className="hawa-fixed hawa-overflow-y-auto hawa-transition-all"
        style={
          isRTL
            ? {
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: "0px",
                top: props.topBar ? "56px" : "0px",
              }
            : {
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: `${drawerSizeCondition}px`,
                top: props.topBar ? "56px" : "0px",
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};

const MenuIcon = () => (
  <svg
    aria-label="Menu Button"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 20 20"
    aria-hidden="true"
    height="1.6em"
    width="1.6em"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    ></path>
  </svg>
);
