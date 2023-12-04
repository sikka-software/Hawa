import React from "react";

import { DropdownMenu, MenuItemType } from "@elements/index";

import { DirectionType } from "@_types/commonTypes";

import { cn } from "../util";

type AppTopbarType = {
  direction?: DirectionType;
  size?: number;
  username?: string;
  email?: string;
  profileMenuItems?: MenuItemType[];
  avatarImage?: string;
};

export const AppTopbar: React.FC<AppTopbarType> = ({ ...props }) => {
  const isRTL = props.direction === "ltr";
  const size = 1200;
  return (
    <div
      className={cn(
        "hawa-fixed hawa-left-0 hawa-right-0 hawa-top-0 hawa-z-30 hawa-flex hawa-h-14 hawa-w-full hawa-items-center hawa-justify-between hawa-border-b hawa-bg-primary-foreground hawa-p-2",
        isRTL ? "hawa-flex-row-reverse" : "hawa-flex-row"
      )}
    >
      {/* Nav Side Of Navbar */}
      {size > 600 ? (
        <div
        // className={cn(
        //   "dark:hawa-text-white",
        //   isRTL
        //     ? [
        //         size > 600 ? "hawa-mr-14" : "hawa-mr-2",
        //         keepOpen ? "hawa-mr-40" : "",
        //       ]
        //     : [
        //         size > 600 ? "hawa-ml-14" : "hawa-ml-2",
        //         keepOpen ? "hawa-ml-40" : "",
        //       ]
        // )}
        // style={
        //   isRTL
        //     ? {
        //         marginRight: `${
        //           drawerSizeStyle[keepOpen ? "opened" : "closed"][
        //             drawerSize
        //           ]
        //         }px`,
        //       }
        //     : {
        //         marginLeft: `${
        //           drawerSizeStyle[keepOpen ? "opened" : "closed"][
        //             drawerSize
        //           ]
        //         }px`,
        //       }
        // }
        >
          {/* {props.pageTitle} */}
          page title
        </div>
      ) : (
        // Mobile Drawer Menu Button
        <div
          dir={props.direction}
          className="hawa-flex hawa-items-center hawa-justify-center hawa-gap-0.5"
        >
          <div
            //   onClick={() => setOpenSideMenu(true)}
            className="hawa-z-40 hawa-mx-1 hawa-cursor-pointer  hawa-rounded hawa-p-2  hawa-transition-all hover:hawa-bg-gray-100"
          >
            <svg
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
          {/* Mobile Page Title */}
          {/* {props.pageTitle ? (
              <div className="hawa-text-sm">{props.pageTitle}</div>
            ) : (
              <div></div>
            )} */}
          Mobile title
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
          // width={props.profileMenuWidth}
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
  );
};
