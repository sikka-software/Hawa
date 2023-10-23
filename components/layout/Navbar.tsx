import React, { useState } from "react";
import { cn } from "../util";
import { Button, Logos, NavigationMenu } from "../elements";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "../elements/Collapsible";

type NavbarType = {
  logo?: any;
  buttons?: any;
  menuItems?: any;
};

export const Navbar: React.FC<NavbarType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hawa-bg-gray-800 hawa-p-4 hawa-transition-all">
      <Collapsible>
        <div className="hawa-container hawa-mx-auto hawa-flex hawa-justify-between hawa-items-center">
          <div className="hawa-flex hawa-items-center">
            <a href="/" className="hawa-text-white hawa-text-xl hawa-font-bold">
              YourLogo
            </a>
          </div>

          <div className="hawa-hidden hawa-md:hawa-flex hawa-space-x-4">
            <a href="/about" className="hawa-text-white">
              About
            </a>
            <a href="/services" className="hawa-text-white">
              Services
            </a>
            <a href="/contact" className="hawa-text-white">
              Contact
            </a>
          </div>

          <div className="hawa-md:hawa-hidden">
            <CollapsibleTrigger
              // onClick={() => setIsOpen(!isOpen)}
              className="hawa-text-white hawa-p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="hawa-w-6 hawa-h-6"
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

        {/* {isOpen && ( */}
        <CollapsibleContent className="hwa-transition-all hawa-fade-in-0   data-[state=open]:hawa-zoom-in-95 data-[state=open]:hawa-animate-in hawa-flex hawa-flex-col hawa-space-y-2 hawa-mt-4">
          <a href="/about" className="hawa-text-white hawa-px-2">
            About
          </a>
          <a href="/services" className="hawa-text-white hawa-px-2">
            Services
          </a>
          <a href="/contact" className="hawa-text-white hawa-px-2">
            Contact
          </a>
        </CollapsibleContent>
        {/* )} */}
      </Collapsible>
    </nav>
    // <div className="hawa-flex hawa-flex-row hawa-justify-between hawa-items-center hawa-bg-card hawa-p-4 hawa-rounded hawa-border">
    //   <div className="hawa-flex hawa-flex-1">{props.logo}</div>
    //   <div className="hawa-flex hawa-flex-1">
    //     {" "}
    //     <NavigationMenu
    //       direction="ltr"
    //       rootClassNames="hawa-w-fit"
    //       viewportClassNames="hawa-max-w-md"
    //       items={props.menuItems || []}
    //     />
    //   </div>
    //   <div className="hawa-flex hawa-flex-1 hawa-flex-row hawa-justify-end">
    //     {props.buttons}{" "}
    //   </div>
    // </div>
  );
};
