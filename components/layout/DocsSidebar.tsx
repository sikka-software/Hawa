import React from "react";

import { DirectionType } from "@_types/commonTypes";

import { cn } from "../util";

type DocsSidebarType = {
  pages: any[];
  currentPage?: string;
  direction?: DirectionType;
};

export const DocsSidebar: React.FC<DocsSidebarType> = ({
  currentPage: propCurrentPage,

  pages,
  direction
}) => {
  const [activePage, setActivePage] = React.useState(pages[0]);

  const handlePageClick = (page: any, event: React.MouseEvent) => {
    event.preventDefault();
    setTimeout(() => {
      setActivePage(page);
    }, 50);
    const element = document.getElementById(page);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getCurrentSection = () => {
    for (let i = pages.length - 1; i >= 0; i--) {
      const page = pages[i];
      const element = document.getElementById(page);
      const rect = element?.getBoundingClientRect();
      if (rect) {
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          return page;
        }
      }
    }
    return pages[0];
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setActivePage(getCurrentSection());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let selectedStyles = {
    rtl: "hawa-border-r-4  hawa-border-primary hawa-border-collapse hawa-bg-gray-200",
    ltr: "hawa-border-l-4  hawa-border-primary hawa-border-collapse hawa-bg-gray-200"
  };
  return (
    <div
      className="hawa-flex hawa-flex-col hawa-overflow-x-clip"
      dir={direction}
    >
      {pages.map((page, index) => (
        <div
          key={index}
          className={cn(
            "hawa-cursor-pointer hawa-whitespace-nowrap hawa-px-3  hawa-py-1 hawa-text-xs hawa-transition-all hover:hawa-bg-gray-100",
            (propCurrentPage || activePage) === page
              ? selectedStyles[direction || "rtl"]
              : ""
          )}
          onClick={(event) => handlePageClick(page, event)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
