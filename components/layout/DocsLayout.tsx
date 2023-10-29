import React, { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import {
  Button,
  Logos,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../elements";
import { cn } from "../util";
import { DocsSidebar } from "./DocsSidebar";
import { DirectionType } from "../types/commonTypes";

type AppLayoutTypes = {
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
  /**
   * Specifies the width of the profile menu.
   * - 'default': Default width.
   * - 'sm': Small width.
   * - 'lg': Large width.
   * - 'parent': Inherits width from parent element.
   */
  profileMenuWidth: "default" | "sm" | "lg" | "parent";
  /** Event handler for settings button click. */
  onSettingsClick?: () => void;
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
type Item = {
  value: string;
  label: string;
  icon?: any;
  subitems?: SubItem[];
  onClick?: () => void;
};
type SubItem = {
  value: string;
  label: string;
  icon?: any;
  onClick?: () => void;
};

export const DocsLayout: React.FunctionComponent<AppLayoutTypes> = ({
  direction = "ltr",
  drawerSize = "md",
  onSettingsClick,
  DrawerFooterActions,
  currentPage,
  clickedItem,
  keepOpen,
  setKeepOpen,
  ...props
}) => {
  let closeDrawerWidth = 0;
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

  let size = useBreakpoint();
  if (typeof window == "undefined") {
    size = 1200;
  }

  const [openSideMenu, setOpenSideMenu] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target) && !openSideMenu) {
        setOpenSideMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [openSideMenu]);

  useEffect(() => {
    const handleResize = () => {
      setOpenSideMenu(window.innerWidth > 600 ? true : false);
    };

    // Set initial state based on window size
    handleResize();

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [keepOpen]);

  let drawerSizeCondition =
    drawerSizeStyle[openSideMenu ? "opened" : "closed"][drawerSize];

  return (
    <div className="hawa-fixed">
      <div
        className={cn(
          "hawa-fixed hawa-left-0 hawa-right-0 hawa-top-0 hawa-z-30 hawa-flex hawa-h-14 hawa-w-full hawa-items-center hawa-justify-between hawa-bg-primary-foreground hawa-p-2",
          isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
        )}
      >
        {/* Nav Side Of Navbar */}
        {size > 600 ? (
          <div onClick={props.onLogoClick} dir={direction}>
            <img
              className={cn(
                "hawa-h-8  hawa-opacity-0 hawa-transition-all",
                !openSideMenu
                  ? "hawa-invisible hawa-opacity-0"
                  : "hawa-visible hawa-opacity-100"
              )}
              src={props.logoLink}
            />
          </div>
        ) : (
          // Mobile Drawer Menu Button
          <div
            dir={direction}
            className="hawa-flex hawa-items-center hawa-justify-center hawa-gap-0.5"
          >
            <Sheet>
              <SheetTrigger>
                {" "}
                <div
                  // onClick={() => setOpenSideMenu(true)}
                  className="hawa-z-40 hawa-mx-1 hawa-cursor-pointer  hawa-rounded hawa-p-2  hawa-transition-all hover:hawa-bg-gray-100"
                >
                  <svg
                    aria-label="Menu Icon"
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
                </div>
              </SheetTrigger>
              <SheetContent
                side={isRTL ? "right" : "left"}
                className="hawa-pt-10"
              >
                {/* <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader> */}{" "}
                <DocsSidebar />
              </SheetContent>
            </Sheet>

            {/* Mobile Page Title */}
            {/* {props.pageTitle ? (
                <div className="hawa-text-sm">{props.pageTitle}</div>
              ) : (
                <div></div>
              )} */}
          </div>
        )}

        <div
          className={cn(
            "hawa-flex hawa-gap-2 dark:hawa-text-white",
            isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
          )}
        >
          <Button variant={"ghost"} size={"smallIcon"}>
            <Logos.github className="hawa-w-4 hawa-h-4" />
          </Button>
        </div>
      </div>

      {/*
       * ----------------------------------------------------------------------------------------------------
       * Drawer Container
       * ----------------------------------------------------------------------------------------------------
       */}
      <div
        // style={{
        //   height: "calc(100%)",
        //   width: `${openSideMenu ? openDrawerWidth : 0}px`,
        // }}

        className={cn(
          "hawa-fixed hawa-bg-primary-foreground hawa-z-40 hawa-flex  hawa-flex-col hawa-justify-between hawa-overflow-x-clip hawa-transition-all",
          isRTL
            ? "hawa-right-0 hawa-top-0 hawa-h-full"
            : "hawa-left-0 hawa-top-0 hawa-h-full",

          "hawa-fixed  hawa-p-0 hawa-py-2 hawa-overflow-x-clip hawa-transition-all",
          "hawa-top-14",
          openSideMenu ? "hawa-overflow-auto" : "hawa-overflow-hidden"
        )}
        style={{
          //   height: "calc(100%)",

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
          if (size < 600) {
            setOpenSideMenu(!openSideMenu);
          }
        }}
        ref={ref}
      >
        {/*
         * ----------------------------------------------------------------------------------------------------
         * Docs Sidebar Pages
         * ----------------------------------------------------------------------------------------------------
         */}

        <DocsSidebar />
      </div>
      {/*
       * ----------------------------------------------------------------------------------------------------
       * Children Container
       * ----------------------------------------------------------------------------------------------------
       */}

      <div>overlay sidebar</div>
      <div
        className="hawa-fixed hawa-overflow-y-auto hawa-transition-all "
        style={
          isRTL
            ? {
                height: "calc(100% - 56px)",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: "0px",
                top: "56px",
              }
            : {
                height: "calc(100% - 56px)",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                // width: `calc(100% - ${0}px)`,
                left: `${drawerSizeCondition}px`,
                right: `${drawerSizeCondition}px`,
                top: "56px",
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};
