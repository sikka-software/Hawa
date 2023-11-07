import React from "react";
import {
  Pagination as PaginationPrimitive,
  IPaginationProps,
} from "react-headless-pagination";
import { cn } from "../util";
import { Button } from "./Button";
import { DirectionType } from "../types/commonTypes";

type PaginationProps = {
  direction?: DirectionType;
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  const [page, setPage] = React.useState<number>(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  let totalPages = 123;
  return (
    <PaginationPrimitive
      totalPages={10}
      edgePageCount={2}
      middlePagesSiblingCount={1}
      // truncableClassName={"w-10 px-0.5"}

      currentPage={page}
      setCurrentPage={handlePageChange}
      className="hawa-flex hawa-items-center hawa-w-full hawa-h-10 hawa-text-sm hawa-select-none"
      truncableText="..."
      truncableClassName="hawa-w-10 hawa-px-0.5 hawa-text-center"
    >
      <PaginationPrimitive.PrevButton
        as={
          <Button
            aria-label="Previous Table Page"
            variant="outline"
            size="smallIcon"
            className={cn(
              "hawa-bg-primary/80",
              props.direction === "ltr" && "hawa-rotate-180"
            )}
          >
            <svg
              aria-label="Chevron Right Icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </Button>
        }
        className={cn(
          "hawa-flex hawa-items-center hawa-mr-2 hawa-text-gray-500 hover:hawa-text-gray-600 dark:hover:hawa-text-gray-200",
          {
            "hawa-cursor-pointer": page !== 0,
            "hawa-opacity-50": page === 0,
          }
        )}
      >
        Previous
      </PaginationPrimitive.PrevButton>

      <nav className="hawa-flex hawa-justify-center hawa-flex-grow">
        <ul className="hawa-flex hawa-items-center hawa-gap-1">
          <PaginationPrimitive.PageButton
            activeClassName="hawa-bg-primary/80  hawa-text-primary-foreground hawa-font-extrabold"
            inactiveClassName="hawa-text-gray-500"
            className={
              "hawa-flex hawa-bg-muted hawa-rounded hawa-items-center hawa-justify-center hover:hawa-text-primary-600 focus:hawa-font-bold focus:hawa-text-primary-600 focus:hawa-outline-none hawa-h-7 hawa-w-7 hawa-cursor-pointer"
            }
          />
        </ul>
      </nav>

      <PaginationPrimitive.NextButton
        as={
          <Button
            aria-label="Next Table Page"
            variant="outline"
            size="smallIcon"
            className={cn(props.direction === "rtl" && "hawa-rotate-180")}
          >
            <svg
              aria-label="Chevron Right Icon"
              fill="currentColor"
              stroke="currentColor"
              width="1em"
              height="1em"
              strokeWidth="0"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </Button>
        }
        className={cn(
          "hawa-flex hawa-items-center hawa-mr-2 hawa-text-gray-500 hover:hawa-text-gray-600 dark:hover:hawa-text-gray-200",
          {
            "hawa-cursor-pointer": page !== totalPages - 1,
            "hawa-opacity-50": page === totalPages - 1,
          }
        )}
      >
        Next
        {/* <FiArrowRight size={20} className="ml-3" /> */}
      </PaginationPrimitive.NextButton>
    </PaginationPrimitive>
  );
};
