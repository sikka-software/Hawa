import React from "react";
import { cn } from "../util";

type DocsSidebarType = {
  test?: any;
};

export const DocsSidebar: React.FC<DocsSidebarType> = ({ test, ...props }) => {
  const pages = [
    "Introduction",
    "Installation",
    "Usage",
    "API Reference",
    "FAQ",
  ];
  const [currentPage, setCurrentPage] = React.useState(pages[0]);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="hawa-flex hawa-flex-col">
      {pages.map((page, index) => (
        <a
          // href={`#${page.replace(" ", "-").toLowerCase()}`}
          key={index}
          className={cn(
            "hawa-py-1 hawa-text-xs hawa-cursor-pointer hawa-px-3 hover:hawa-bg-gray-100 hawa-transition-all",
            currentPage === page
              ? "hawa-border-l-2 hawa-border-red-500 hawa-border-collapse"
              : ""
          )}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </a>
      ))}
    </div>
  );
};
