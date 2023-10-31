import React, { useState } from "react";
import { cn } from "../util";
import { Logos } from "../elements";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "../elements/Collapsible";

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
    <nav className=" hawa-transition-all hawa-sticky hawa-top-2">
      <Collapsible
        className={"hawa-p-2 hawa-relative hawa-m-2  hawa-rounded"}
        style={{ backgroundColor: backgroundColor || "#1f2937" }}
      >
        <div className="hawa-flex hawa-justify-between hawa-items-center hawa-px-3 ">
          <div className="hawa-flex hawa-items-center">
            <div
              className="hawa-text-white hawa-text-xl hawa-p-1.5 hawa-font-bold"
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
            {props.menuItems?.map((item) => (
              <div
                onClick={item.action}
                className="hawa-p-1.5 hawa-px-2 hawa-text-sm hawa-text-center hawa-rounded hawa-text-white hover:hawa-text-black hover:hawa-bg-gray-300 hawa-transition-all hawa-cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="md:hawa-hidden hawa-flex hawa-h-fit hawa-p-0 hawa-m-0">
            <CollapsibleTrigger
              onClick={() => setIsOpen(!isOpen)}
              className="hawa-text-white selection:hawa-p-0 hawa-h-full "
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={cn(
                  "hawa-w-6 hawa-h-6 hawa-fixed",
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={cn(
                  "hawa-w-6 hawa-h-6",
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
            "hawa-transition-all hawa-bg-gray-200 hawa-border hawa-absolute hawa-p-1  hawa-left-0 hawa-top-[60px]  hawa-flex hawa-flex-col hawa-rounded"
            // "hawa-transition-all hawa-bg-gray-400 hawa-fixed hawa-left-0 hawa-top-[72px] hawa-w-full hawa-flex hawa-flex-col"
          )}
          style={{
            width: "calc(100%)",
            zIndex: -100,
          }}
        >
          {props.menuItems?.map((item) => (
            <div
              onClick={item.action}
              className="hawa-text-black hawa-p-2 hawa-px-10 hawa-text-center hawa-rounded hover:hawa-bg-gray-300 hawa-transition-all hawa-cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
};
