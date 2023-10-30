import React, { useState } from "react";
import { cn } from "../util";
import { Button, Logos, NavigationMenu } from "../elements";
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
};

export const Navbar: React.FC<NavbarType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" hawa-transition-all hawa-sticky hawa-top-2">
      <Collapsible className="hawa-bg-gray-800  hawa-p-4 hawa-relative hawa-m-2  hawa-rounded">
        <div className="hawa-flex hawa-justify-between hawa-items-center">
          <div className="hawa-flex hawa-items-center">
            <div className="hawa-text-white hawa-text-xl hawa-font-bold">
              <Logos.sikka color="#ffffff" className="hawa-h-6 hawa-w-6" />
            </div>
          </div>

          {/* <div className="hawa-hidden hawa-md:hawa-flex hawa-space-x-4">
            <a href="/about" className="hawa-text-white">
              About
            </a>
            <a href="/services" className="hawa-text-white">
              Services
            </a>
            <a href="/contact" className="hawa-text-white">
              Contact
            </a>
          </div> */}

          <div className="hawa-md:hawa-hidden">
            <CollapsibleTrigger
              onClick={() => setIsOpen(!isOpen)}
              className="hawa-text-white hawa-p-2"
              aria-label="Toggle menu"
            >
              <svg
                className={cn(
                  "hawa-w-6 hawa-h-6",
                  isOpen ? "hawa-invisible" : "hawa-visible"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent
          className={cn(
            "data-[state=open]:hawa-animate-in",
            "data-[state=open]:hawa-fade-in-90",
            "hawa-transition-all hawa-bg-gray-400 hawa-absolute  hawa-top-[88px]  hawa-flex hawa-flex-col hawa-rounded"
            // "hawa-transition-all hawa-bg-gray-400 hawa-fixed hawa-left-0 hawa-top-[72px] hawa-w-full hawa-flex hawa-flex-col"
          )}
          style={{
            width: "calc(100% - 32px)",
            zIndex: -100,
          }}
        >
          {props.menuItems?.map((item) => (
            <div
              onClick={item.action}
              className="hawa-text-white hawa-p-4 hawa-px-10 hover:hawa-bg-gray-950 hawa-transition-all hawa-cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
};
