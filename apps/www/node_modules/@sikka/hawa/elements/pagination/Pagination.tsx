import React from "react";
import { Pagination as PaginationPrimitive } from "react-headless-pagination";

import { DirectionType } from "../../types/commonTypes";
import { cn } from "@util/index";

type PaginationProps = {
  direction?: DirectionType;
  totalPages: number;
  currentPage?: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  direction,
  totalPages,
  currentPage
}) => {
  const [page, setPage] = React.useState<number>(currentPage || 0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  // let totalPages = 123;
  return (
    <PaginationPrimitive
      totalPages={totalPages}
      edgePageCount={2}
      middlePagesSiblingCount={1}
      // truncableClassName={"w-10 px-0.5"}

      currentPage={page}
      setCurrentPage={handlePageChange}
      className="hawa-flex hawa-h-9 hawa-w-full hawa-select-none hawa-items-center hawa-text-sm hawa-transition-all"
      truncableText="..."
      truncableClassName="hawa-w-10 hawa-px-0.5 hawa-text-center"
    >
      <PaginationPrimitive.PrevButton
        as={
          <button
            aria-label="Previous Table Page"
            className={cn(
              "hawa-min-w-9 hawa-flex hawa-h-9 hawa-w-9 hawa-items-center hawa-justify-center hawa-rounded hawa-border hawa-bg-card",
              direction === "rtl" && "hawa-rotate-180"
            )}
            style={{ minWidth: 36 }}
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        }
        className={cn(
          "hawa-mr-2 hawa-flex hawa-items-center hawa-text-gray-500 hover:hawa-text-gray-600 dark:hover:hawa-text-gray-200",
          {
            "hawa-cursor-pointer": page !== 0,
            "hawa-opacity-50": page === 0
          }
        )}
      >
        Previous
      </PaginationPrimitive.PrevButton>

      <nav className="hawa-flex hawa-flex-grow hawa-justify-center">
        <ul className="hawa-flex hawa-items-center hawa-gap-1">
          <PaginationPrimitive.PageButton
            className={
              "hawa-tap-highlight-transparent hawa-text-default-foreground data-[focus-visible=true]:hawa-outline-focus data-[disabled=true]:hawa-text-default-300 hawa-min-w-9 hawa-text-small hawa-box-border hawa-flex hawa-h-9 hawa-w-9 hawa-cursor-pointer hawa-touch-none hawa-select-none hawa-flex-wrap hawa-items-center hawa-justify-center hawa-truncate hawa-rounded hawa-border hawa-bg-card hawa-outline-none hawa-transition-all hover:hawa-scale-[1.1] data-[disabled=true]:hawa-pointer-events-none data-[focus-visible=true]:hawa-z-10 data-[pressed=true]:hawa-scale-[0.97] data-[focus-visible=true]:hawa-outline-2 data-[focus-visible=true]:hawa-outline-offset-2"
            }
            activeClassName="hawa-bg-primary hawa-text-primary-foreground hawa-transition-all"
            // activeClassName="hawa-bg-primary/80  hawa-text-primary-foreground hawa-font-extrabold"
            // inactiveClassName="hawa-text-gray-500"
            // className={
            //   "hawa-flex hawa-bg-muted hawa-rounded hawa-items-center hawa-justify-center hover:hawa-text-primary-600 focus:hawa-font-bold focus:hawa-text-primary-600 focus:hawa-outline-none hawa-h-7 hawa-w-7 hawa-cursor-pointer"
            // }
          />
        </ul>
      </nav>

      <PaginationPrimitive.NextButton
        as={
          <button
            aria-label="Previous Table Page"
            className={cn(
              "hawa-min-w-9 hawa-flex hawa-h-9 hawa-w-9 hawa-items-center hawa-justify-center hawa-rounded hawa-border hawa-bg-card",
              direction === "ltr" && "hawa-rotate-180"
            )}
            style={{ minWidth: 36 }}
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        }
        className={cn(
          "hawa-mr-2 hawa-flex hawa-items-center hawa-text-gray-500 hover:hawa-text-gray-600 dark:hover:hawa-text-gray-200",
          {
            "hawa-cursor-pointer": page !== totalPages - 1,
            "hawa-opacity-50": page === totalPages - 1
          }
        )}
      >
        Next
        {/* <FiArrowRight size={20} className="ml-3" /> */}
      </PaginationPrimitive.NextButton>
    </PaginationPrimitive>
  );
};
