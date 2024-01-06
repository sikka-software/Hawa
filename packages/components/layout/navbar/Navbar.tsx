import React, { useState } from "react";

import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible
} from "@elements/collapsible";

import { cn } from "@util/index";

type NavigationMenuItem = {
  label: string;
  action: () => void;
  trigger?: any;
};

type NavbarType = {
  logo?: any;
  buttons?: any;
  menuItems?: NavigationMenuItem[];
  handleLogoClick?: () => void;
  backgroundColor?: string;
};

export const Navbar: React.FC<NavbarType> = ({
  backgroundColor,
  logo,
  handleLogoClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" hawa-sticky hawa-top-2 hawa-transition-all">
      <Collapsible
        className={"hawa-relative hawa-m-2 hawa-rounded  hawa-p-2"}
        style={{ backgroundColor: backgroundColor || "#1f2937" }}
      >
        <div className="hawa-flex hawa-items-center hawa-justify-between hawa-px-3 ">
          <div className="hawa-flex hawa-items-center">
            <div
              className="hawa-p-1.5 hawa-text-xl hawa-font-bold hawa-text-white"
              onClick={() => {
                if (handleLogoClick) {
                  handleLogoClick();
                }
              }}
            >
              {logo}
            </div>
          </div>

          <div className="hawa-hidden md:hawa-flex ">
            {props.menuItems?.map((item, i) => (
              <div
                key={i}
                onClick={item.action}
                className="hawa-cursor-pointer hawa-rounded hawa-p-1.5 hawa-px-2 hawa-text-center hawa-text-sm hawa-text-white hawa-transition-all hover:hawa-bg-gray-300 hover:hawa-text-black"
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="hawa-m-0 hawa-flex hawa-h-fit hawa-p-0 md:hawa-hidden">
            <CollapsibleTrigger
              onClick={() => setIsOpen(!isOpen)}
              className="hawa-h-full hawa-text-white selection:hawa-p-0 "
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  "hawa-fixed hawa-h-6 hawa-w-6",
                  isOpen ? "hawa-invisible" : "hawa-visible"
                )}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  "hawa-h-6 hawa-w-6",
                  !isOpen ? "hawa-invisible" : "hawa-visible"
                )}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent
          className={cn(
            "data-[state=closed]:hawa-opacity-0",
            "data-[state=open]:hawa-animate-in",
            "data-[state=open]:hawa-fade-in-90",
            "hawa-absolute hawa-left-0 hawa-top-[60px] hawa-flex hawa-flex-col  hawa-rounded hawa-border  hawa-bg-gray-200 hawa-p-1 hawa-transition-all"
            // "hawa-transition-all hawa-bg-gray-400 hawa-fixed hawa-left-0 hawa-top-[72px] hawa-w-full hawa-flex hawa-flex-col"
          )}
          style={{
            width: "calc(100%)",
            zIndex: -100
          }}
        >
          {props.menuItems?.map((item, i) => (
            <div
              key={i}
              onClick={item.action}
              className="hawa-cursor-pointer hawa-rounded hawa-p-2 hawa-px-10 hawa-text-center hawa-text-black hawa-transition-all hover:hawa-bg-gray-300"
            >
              {item.label}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
};
