import React, { useEffect, useRef, useState } from "react";

import { Button } from "@elements/button";
import { Logos } from "@elements/logos";
import { Sheet, SheetContent, SheetTrigger } from "@elements/sheet";

import { DirectionType } from "@_types/commonTypes";

import { useBreakpoint } from "../hooks/useBreakpoint";
import { cn } from "../util";
import { DocsSidebar } from "./DocsSidebar";

type AppLayoutTypes = {
  pages?: any[];
  /** The direction of the layout */
  direction?: DirectionType;
  /** Specifies the title of the page. */
  pageTitle?: string;
  /** Specifies the symbol for the logo. */
  logoSymbol?: any;
  /** Specifies the link for the logo. */
  logoLink?: string;
  /** Specifies the content to be displayed in the layout. */
  children?: any;
  /** Specifies the image for the avatar. */
  avatarImage?: any;
  /**
   * Specifies the size of the drawer.
   * - 'sm': Small.
   * - 'md': Medium.
   * - 'large': Large.
   */
  drawerSize?: "sm" | "md" | "large";

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
};

export const DocsLayout: React.FunctionComponent<AppLayoutTypes> = ({
  direction = "ltr",
  drawerSize = "md",
  DrawerFooterActions,
  clickedItem,
  keepOpen,
  pages,
  setKeepOpen,
  ...props
}) => {
  let closeDrawerWidth = 0;
  let openDrawerWidth = 200;
  let drawerSizeStyle: any = {
    opened: {
      sm: "100",
      md: openDrawerWidth,
      lg: "250"
    },
    closed: {
      sm: closeDrawerWidth,
      md: closeDrawerWidth,
      lg: closeDrawerWidth
    }
  };

  const ref = useRef<HTMLDivElement>(null);
  const isRTL = direction === "rtl";

  let size = useBreakpoint();
  if (typeof window == "undefined") {
    size = 1200;
  }
  const [currentPage, setCurrentPage] = useState<string>("Introduction");

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

  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries.find((entry) => entry.isIntersecting);
    if (entry) {
      setCurrentPage(entry.target.id);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 // Adjust threshold as needed to determine when a section is in view
    });
    // Assuming each child corresponds to a page and has an id attribute
    React.Children.forEach(props.children, (child: React.ReactElement) => {
      if (child && child.props.id) {
        const element = document.getElementById(child.props.id);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      }
    });
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [props.children]);

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
                <DocsSidebar direction={direction} pages={pages || []} />
              </SheetContent>
            </Sheet>
          </div>
        )}

        <div
          className={cn(
            "hawa-flex hawa-gap-2 dark:hawa-text-white",
            isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
          )}
        >
          <Button variant={"ghost"} size={"smallIcon"}>
            <Logos.github className="hawa-icon" />
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "hawa-fixed hawa-z-40 hawa-flex hawa-flex-col  hawa-justify-between hawa-overflow-x-clip hawa-bg-primary-foreground hawa-transition-all",
          isRTL
            ? "hawa-right-0 hawa-top-0 hawa-h-full"
            : "hawa-left-0 hawa-top-0 hawa-h-full",

          "hawa-fixed  hawa-overflow-x-clip hawa-p-0 hawa-py-2 hawa-transition-all",
          "hawa-top-14",
          openSideMenu ? "hawa-overflow-auto" : "hawa-overflow-hidden"
        )}
        style={{
          width:
            size > 600
              ? openSideMenu
                ? `${drawerSizeStyle["opened"][drawerSize]}px`
                : `${drawerSizeStyle["closed"][drawerSize]}px`
              : openSideMenu
                ? `${drawerSizeStyle["opened"][drawerSize]}px`
                : "0px"
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
        <DocsSidebar
          direction={direction}
          pages={pages || []}
          currentPage={currentPage}
        />
      </div>
      <div
        className="hawa-fixed hawa-overflow-y-auto hawa-transition-all "
        style={
          isRTL
            ? {
                height: "calc(100% - 56px)",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: "0px",
                top: "56px"
              }
            : {
                height: "calc(100% - 56px)",
                width: `calc(100% - ${drawerSizeCondition}px)`,
                left: `${drawerSizeCondition}px`,
                right: `${drawerSizeCondition}px`,
                top: "56px"
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};
