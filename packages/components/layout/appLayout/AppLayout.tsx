import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useClickOutside } from "@hooks/useClickOutside";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@util/index";

import { Button } from "@elements/button";
import { DropdownMenu, MenuItemType } from "@elements/dropdownMenu";
import { Tooltip } from "@elements/tooltip";

import { DirectionType } from "@_types/commonTypes";

import { MenuIcon } from "../../icons";
import { AppSidebarItemProps, SidebarGroup } from "../sidebar/Sidebar";

type AppLayoutTypes = {
  /** a custom header to replace the logoLink & logoSymbol */
  header?: React.ReactNode;
  design?: "default";
  bordered?: boolean;
  /** The pages of the side drawer */
  drawerItems: AppSidebarItemProps[];
  /** The direction of the layout */
  direction?: DirectionType;
  /** The title of the current selected page, make sure it's the same as the drawerItem slug */
  currentPage: string;
  /** Specifies the title of the page. */
  pageTitle?: string | React.ReactNode;
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
  /** Specifies the position of the user information.*/
  userInfoPosition?: "next_to_avatar" | "in_dropdown" | "hidden";
  /**
   * Specifies the size of the drawer.
   * - 'sm': Small.
   * - 'md': Medium.
   * - 'large': Large.
   */
  drawerSize?: "sm" | "md" | "large";
  /** Specifies the menu items for the profile menu. */
  profileMenuItems?: MenuItemType[];
  onAvatarClick?: () => void;
  /**
   * Specifies the width of the profile menu.
   * - 'default': Default width.
   * - 'sm': Small width.
   * - 'lg': Large width.
   * - 'parent': Inherits width from parent element.
   */
  profileMenuWidth?: "default" | "sm" | "lg" | "parent";
  /** Specifies additional actions for the drawer footer. */
  DrawerFooterActions?: any;

  /** Specifies the item that was clicked. */
  clickedItem?: any;

  /** Event handler for logo button click. */
  onLogoClick?: () => void;

  /** Event handler for drawer expanded. */
  onDrawerExpanded?: (isExpanded: boolean) => void;

  /** Text labels for various UI elements. */
  texts?: {
    /** Label for expand sidebar button. */
    expandSidebar?: string;
    /** Label for collapse sidebar button. */
    collapseSidebar?: string;
  };
  classNames?: {
    fullLogoImg?: string;
    symbolLogoImg?: string;
    logoContainer?: string;
  };
  DrawerLinkComponent?: any;
  MenuLinkComponent?: any;
};

const LOCAL_STORAGE_KEY = "@sikka/hawa/keep-drawer-open";

export const AppLayout: React.FunctionComponent<AppLayoutTypes> = ({
  profileMenuWidth = "default",
  userInfoPosition = "next_to_avatar",
  DrawerFooterActions,
  profileMenuItems,
  classNames,
  bordered = true,
  design = "default",
  direction = "ltr",
  drawerSize = "md",
  currentPage,
  clickedItem,
  DrawerLinkComponent,
  MenuLinkComponent,
  onDrawerExpanded,
  onAvatarClick,
  ...props
}) => {
  useEffect(() => {
    let isDrawerOpen = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (isDrawerOpen === null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
    }
  }, []);

  let closeDrawerWidth = 56;
  let openDrawerWidth = 200;
  let drawerSizeStyle: any = {
    opened: { sm: "100", md: openDrawerWidth, lg: "250" },
    closed: {
      sm: closeDrawerWidth,
      md: closeDrawerWidth,
      lg: closeDrawerWidth,
    },
  };

  const isRTL = direction === "rtl";
  const [openedSidebarItem, setOpenedSidebarItem] = useState("");

  const [size, setSize] = useState((typeof window !== "undefined" && window.innerWidth) || 1200);
  const [openSideMenu, setOpenSideMenu] = useState(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : false;
  });
  const [container, setContainer] = React.useState<any>(null);

  const [keepDrawerOpen, setKeepDrawerOpen] = useState(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : false;
  });

  const handleClickOutside = () => {
    if (typeof window !== "undefined") {
      //   console.log("Clicked outside, closing drawer");
      //   if (keepDrawerOpen) return;
      if (window.innerWidth < 600) {
        setKeepDrawerOpen(false);
        setOpenSideMenu(false);
        onDrawerExpanded && onDrawerExpanded(false);
      }
    }
  };

  const ref = useClickOutside(handleClickOutside);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setSize(window.innerWidth);
        if (window.innerWidth > 600) {
          setKeepDrawerOpen(false);
        } else {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
        }
        onDrawerExpanded && onDrawerExpanded(keepDrawerOpen);
      };
      resize();
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  useEffect(() => {
    setKeepDrawerOpen(() => {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedState ? JSON.parse(savedState) : true;
    });
  }, [setKeepDrawerOpen]);

  useEffect(() => {
    if (size > 600) {
      setOpenSideMenu(keepDrawerOpen);
      onDrawerExpanded && onDrawerExpanded(keepDrawerOpen);
    } else {
      setKeepDrawerOpen(false);
      setOpenSideMenu(false);
      onDrawerExpanded && onDrawerExpanded(false);
    }
  }, [size, keepDrawerOpen]);

  const drawerSizeCondition =
    size > 600 ? drawerSizeStyle[keepDrawerOpen ? "opened" : "closed"][drawerSize] : 0;

  // Set the user email and username as the first item of the profile menu if userInfoPosition is in_dropdown
  let finalProfileMenuItems = profileMenuItems;
  if (userInfoPosition === "in_dropdown") {
    if (profileMenuItems && profileMenuItems.length > 0) {
      finalProfileMenuItems = [
        {
          content: (
            <div className="hawa-text-end hawa-p-2 hawa-text-xs hawa-flex hawa-flex-col hawa-justify-center hawa-items-start">
              <div className="hawa-font-bold">{props.username}</div>
              <div>{props.email}</div>
            </div>
          ),
          itemType: "custom",
        },

        ...profileMenuItems,
      ];
    }
  }

  return (
    <div className="hawa-fixed hawa-start-0">
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Top Bar
       * ----------------------------------------------------------------------------------------------------
       */}
      {props.topBar && (
        <div
          dir={direction}
          className={cn(
            "hawa-fixed hawa-end-0 hawa-start-0 hawa-top-0 hawa-z-10 hawa-flex hawa-h-14 hawa-w-full hawa-items-center hawa-justify-between hawa-bg-primary-foreground hawa-p-2",
            bordered && "hawa-border-b-[1px]",
          )}
        >
          {/* Nav Side Of Navbar */}
          {size > 600 ? (
            <div
              className={cn("dark:hawa-text-white", size > 600 ? "hawa-ms-14" : "hawa-ms-2")}
              style={{
                marginInlineStart: `${
                  drawerSizeStyle[keepDrawerOpen ? "opened" : "closed"][drawerSize] + 10
                }px`,
              }}
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
                className="hawa-z-40 hawa-mx-1 hawa-cursor-pointer hawa-rounded hawa-p-2 hawa-transition-all"
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

          <div className={cn("hawa-flex hawa-gap-2 dark:hawa-text-white")}>
            {/* User Info */}
            {size > 600 && userInfoPosition === "next_to_avatar" ? (
              <div className="hawa-text-end hawa-text-xs hawa-flex hawa-flex-col hawa-justify-center">
                <div className="hawa-font-bold">{props.username}</div>
                <div>{props.email}</div>
              </div>
            ) : null}
            {/* Profile Icon & Menu */}
            <DropdownMenu
              LinkComponent={MenuLinkComponent}
              triggerClassname="hawa-mx-2"
              align="end"
              side={"bottom"}
              sideOffset={10}
              width={profileMenuWidth}
              direction={direction}
              items={finalProfileMenuItems || []}
              // onItemSelect={(e: any) => console.log("selecting item ", e)}
              trigger={
                <div
                  onClick={onAvatarClick}
                  className="hawa-relative hawa-h-8 hawa-w-8 hawa-cursor-pointer hawa-overflow-clip hawa-rounded hawa-ring-1 hawa-ring-primary/30 dark:hawa-bg-gray-600"
                >
                  {props.avatarImage ? (
                    <img src={props.avatarImage} alt="User Avatar" />
                  ) : (
                    <svg
                      aria-label="Avatar Icon"
                      className="hawa-absolute hawa--start-1 hawa-h-10 hawa-w-10 hawa-text-gray-400"
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

      <div ref={setContainer}>
        <div
          className={cn(
            "hawa-fixed hawa-z-40 hawa-flex hawa-flex-col hawa-justify-between hawa-overflow-x-clip hawa-transition-all hawa-top-0 hawa-h-[calc(100dvh)] hawa-bg-primary-foreground",
            isRTL ? "hawa-right-0" : "hawa-left-0",
            bordered
              ? size > 600
                ? direction === "rtl"
                  ? "hawa-border-s-[1px]"
                  : "hawa-border-e-[1px]"
                : ""
              : "",
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
            onDrawerExpanded && onDrawerExpanded(true);
          }}
          onMouseLeave={() => {
            if (size > 600) {
              if (keepDrawerOpen) {
                setOpenSideMenu(true);
                onDrawerExpanded && onDrawerExpanded(true);
              } else {
                setOpenedSidebarItem("");
                setOpenSideMenu(false);
                onDrawerExpanded && onDrawerExpanded(false);
              }
            } else {
              setOpenSideMenu(false);
              onDrawerExpanded && onDrawerExpanded(false);
            }
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
              "hawa-fixed hawa-z-50 hawa-mb-2 hawa-flex hawa-h-14 hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-transition-all",
              props.onLogoClick && "hawa-cursor-pointer",
              classNames?.logoContainer,
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
                src={props.logoLink}
                className={cn(
                  "hawa-h-9 hawa-opacity-0 hawa-transition-all",
                  !openSideMenu ? "hawa-invisible hawa-opacity-0" : "hawa-visible hawa-opacity-100",
                  classNames?.fullLogoImg,
                )}
              />
            )}
            {/*
             * ----------------------------------------------------------------------------------------------------
             * Logo Symbol
             * ----------------------------------------------------------------------------------------------------
             */}
            {size > 600 ? (
              <img
                src={props.logoSymbol}
                className={cn(
                  "hawa-fixed hawa-h-9 hawa-transition-all hawa-start-2.5 hawa-top-2.5",
                  openSideMenu ? "hawa-invisible hawa-opacity-0" : "hawa-visible hawa-opacity-100",
                  classNames?.symbolLogoImg,
                )}
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
              "hawa-fixed hawa-bottom-14 hawa-top-14 hawa-p-0 hawa-py-2 hawa-transition-all",
              openSideMenu ? "hawa-overflow-auto" : "hawa-overflow-hidden",
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
              selectedItem={currentPage}
              openedItem={openedSidebarItem}
              setOpenedItem={(e: any) => setOpenedSidebarItem(e)}
              isOpen={keepDrawerOpen || openSideMenu}
              items={props.drawerItems}
              LinkComponent={DrawerLinkComponent}
              onItemClick={(values) => clickedItem && clickedItem(values)}
              onSubItemClick={(values) => clickedItem && clickedItem(values)}
            />
          </div>
          {/*
           * ----------------------------------------------------------------------------------------------------
           * Drawer Footer
           * ----------------------------------------------------------------------------------------------------
           */}
          <div
            className={cn(
              "hawa-fixed hawa-bottom-0 hawa-flex hawa-h-14 hawa-items-center hawa-justify-center hawa-gap-2 hawa-overflow-clip hawa-transition-all",
              direction === "rtl" ? "hawa-flex-row-reverse" : "hawa-flex-row",
            )}
            style={{
              width:
                size > 600
                  ? `${openSideMenu ? openDrawerWidth : 56}px`
                  : `${openSideMenu ? openDrawerWidth : 0}px`,
            }}
          >
            {DrawerFooterActions && openSideMenu ? <>{DrawerFooterActions}</> : null}

            {/* Expand Button */}
            {size > 600 && openSideMenu ? (
              <Tooltip
                side={"left"}
                delayDuration={500}
                triggerProps={{ asChild: true }}
                content={
                  keepDrawerOpen
                    ? props.texts?.collapseSidebar || "Collapse Sidebar"
                    : props.texts?.expandSidebar || "Expand Sidebar"
                }
              >
                <Button
                  variant="outline"
                  size="smallIcon"
                  onClick={() => {
                    const newKeepOpenState = !keepDrawerOpen;
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newKeepOpenState));

                    setKeepDrawerOpen(newKeepOpenState);
                  }}
                >
                  <svg
                    className={cn(
                      "hawa-h-6 hawa-w-6 hawa-shrink-0 hawa-text-primary hawa-transition-all disabled:hawa-bg-gray-200",
                      keepDrawerOpen
                        ? isRTL
                          ? "hawa--rotate-90"
                          : "hawa-rotate-90"
                        : isRTL
                          ? "hawa-rotate-90"
                          : "hawa--rotate-90",
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
      </div>
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Children Container
       * ----------------------------------------------------------------------------------------------------
       */}

      <Dialog.Root open={size < 600 && openSideMenu} onOpenChange={setOpenSideMenu}>
        <Dialog.Portal container={container}>
          <Dialog.Overlay className="hawa-fixed hawa-inset-0 hawa-bg-foreground/20 hawa-backdrop-blur-[2px] data-[state=open]:hawa-animate-in data-[state=closed]:hawa-animate-out hawa-z-10 data-[state=closed]:hawa-fade-out-0 data-[state=open]:hawa-fade-in-0" />
        </Dialog.Portal>
      </Dialog.Root>

      <div
        className="hawa-fixed hawa-overflow-y-auto hawa-transition-all hawa-z-0"
        style={
          isRTL
            ? {
                left: "0px",
                top: props.topBar ? "56px" : "0px",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
              }
            : {
                left: `${drawerSizeCondition}px`,
                top: props.topBar ? "56px" : "0px",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                height: `calc(100% - ${props.topBar ? "56" : "0"}px)`,
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};
