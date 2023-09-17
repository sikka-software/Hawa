import React, { useEffect, useState, FC } from "react"
import clsx from "clsx"
import useTable from "../hooks/useTable"
import { cn } from "../util"
import { DropdownMenu, MenuItemType } from "./DropdownMenu"

type RowTypes = {
  hidden: boolean
  value: any
  suffix?: any
}
type ColTypes = {
  hidden: boolean
  value: any
  sortable?: boolean
}
type TableTypes = {
  pagination?: boolean
  columns: ColTypes[]
  actions?: MenuItemType[]
  actionsWidth?: "default" | "sm" | "lg" | "parent"
  actionsSize?: "default" | "sm"
  direction?: "rtl" | "ltr"
  rows?: RowTypes[][]
  handleActionClick?: any
  end?: any
  size?: "normal" | "small"
  highlightFirst?: boolean
  bodyColor?: string
  headerColor?: string
  clickable?: boolean
  texts?: {
    actions?: string
    noData?: any
    items?: string
    page?: string
    filter?: string
  }
  bordersWidth?: string
  headerTools?: boolean
  borders?: "all" | "cols" | "rows" | "outer" | "inner"
}
const ChevronIcon = () => (
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
)
export const HawaTable: FC<TableTypes> = ({
  size = "normal",
  bodyColor = "white",
  headerColor = "gray-200",
  borders = "all",
  highlightFirst = false,
  direction = "ltr",
  bordersWidth = "1",
  pagination = true,
  ...props
}) => {
  const [perPage, setPerPage] = useState(10)
  const [enteredPage, setEnteredPage] = useState(null)
  const [page, setPage] = useState(1)
  const [sortingCol, setSortingCol] = useState(null)
  const [sortedRows, setSortedRows] = useState(props.rows)
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const { slice, range } = useTable(
    props.rows,
    page,
    perPage,
    sortColumn,
    sortDirection
  )
  let isRTL = direction === "rtl"
  let sizeStyles = {
    normal: "py-3 px-6",
    small: "px-3 py-1",
  }
  const handleSort = (colIndex, sortable) => {
    if (sortable) {
      setSortColumn(colIndex)
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      )
    }
  }
  const changePage = () => {
    if (slice?.length < 1 && page !== 1) {
      setPage(page - 1)
    }
    if (enteredPage) {
      setPage(enteredPage)
    }
  }
  useEffect(() => {
    changePage()
  }, [slice, page])

  return (
    <div className="relative flex flex-col gap-2  ">
      <div className={`overflow-x-auto rounded  bg-${headerColor}`}>
        {props.headerTools && (
          <div className="flex flex-row items-center justify-between gap-2 border bg-background px-2  py-2">
            {props.headerTools}
          </div>
        )}
        <table
          className={clsx(
            borders === "outer" || borders === "all"
              ? `outline outline-[${bordersWidth}px] -outline-offset-1 outline-gray-300 dark:outline-gray-700`
              : "",
            "w-full  rounded   text-left text-sm text-gray-500 dark:text-gray-400",
            `bg-${headerColor}`
          )}
        >
          <thead
            className={clsx(
              "text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",
              borders === "rows" || borders === "all" || borders === "inner"
                ? "border-b "
                : ""
            )}
          >
            <tr>
              {props.columns.map((col: any, i: any) => {
                if (col.hidden) {
                  return
                } else {
                  return (
                    <th
                      onClick={() =>
                        col.sortable && handleSort(i, col.sortable)
                      }
                      key={i}
                      scope="col"
                      colSpan={2}
                      className={clsx(
                        col.sortable ? "cursor-pointer hover:bg-gray-300" : "",
                        sizeStyles[size],
                        i !== 0 &&
                          (borders === "cols" ||
                            borders === "all" ||
                            borders === "inner")
                          ? `border-r border-r-[${bordersWidth}px] border-l border-l-[${bordersWidth}px]`
                          : ""
                      )}
                    >
                      {/* TODO: add arrow icon for sorting */}
                      {col.value}
                      {sortColumn === i && (
                        <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
                      )}
                    </th>
                  )
                }
              })}
              {props.actions ? (
                <th
                  scope="col"
                  className={clsx(sizeStyles[size], "w-[calc(1%)] text-center")}
                >
                  {props.texts?.actions ?? "Actions"}
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody
            className={
              bodyColor && props.rows ? `bg-${bodyColor}` : "bg-transparent"
            }
          >
            {/* Table Rows */}
            {sortedRows ? (
              slice?.map((singleRow: any, rowIndex: any) => {
                let lastRow = rowIndex == slice?.length - 1
                return (
                  <tr
                    key={rowIndex}
                    className={clsx(
                      " dark:border-gray-700 dark:bg-gray-800",
                      props.clickable ? "hover:bg-gray-100" : "",
                      !lastRow &&
                        (borders === "all" ||
                          borders === "rows" ||
                          borders === "inner")
                        ? `border-b border-b-[${bordersWidth}px]`
                        : ""
                    )}
                  >
                    {singleRow?.map((r: any, i: any) => {
                      let firstCell = i === 0
                      let lastCell = i === singleRow?.length - 1
                      let isRTLLastCell =
                        isRTL && lastRow && lastCell && !props.actions
                      let isRTLFirstCell = isRTL && lastRow && firstCell
                      let isLTRFirstCell = !isRTL && lastRow && firstCell
                      let isLTRLastCell =
                        !isRTL && lastRow && lastCell && !props.actions

                      if (r.hidden) {
                        return
                      } else {
                        return (
                          <td
                            colSpan={2}
                            key={i}
                            className={clsx(
                              // borders === "outer" ? "border" : "",
                              sizeStyles[size],
                              highlightFirst && firstCell
                                ? "font-bold"
                                : "font-normal",
                              isRTLFirstCell
                                ? "rounded-bl-none rounded-br"
                                : isRTLLastCell
                                ? "rounded-bl rounded-br-none"
                                : isLTRFirstCell
                                ? "rounded-bl rounded-br-none"
                                : isLTRLastCell
                                ? "rounded-bl-none rounded-br"
                                : "",

                              !firstCell &&
                                !lastCell &&
                                (borders === "cols" ||
                                  borders === "inner" ||
                                  borders === "all")
                                ? `border-l border-l-[${bordersWidth}px] border-r border-r-[${bordersWidth}px]`
                                : !firstCell &&
                                  props.actions &&
                                  (borders === "cols" ||
                                    borders === "inner" ||
                                    borders === "all")
                                ? `border-l border-l-[${bordersWidth}px] border-r border-r-[${bordersWidth}px]`
                                : ""
                              // bodyColor ? `bg-${bodyColor}` : "bg-white"
                            )}
                          >
                            {r.value} {r.suffix && r.suffix}
                          </td>
                        )
                      }
                    })}
                    {props.actions && (
                      <td
                        align={isRTL ? "right" : "left"}
                        className={cn(
                          isRTL && lastRow && "rounded-bl rounded-br-none",
                          !isRTL && lastRow && "rounded-bl-none rounded-br"
                        )}
                        colSpan={1}
                      >
                        <div className="flex items-center justify-center">
                          <DropdownMenu
                            width={props.actionsWidth}
                            size={props.actionsSize}
                            direction={direction}
                            side="right"
                            items={props.actions}
                            selectCallback={(e) =>
                              props.handleActionClick(e, singleRow)
                            }
                            trigger={
                              <div className="flex w-fit  cursor-pointer items-center justify-center rounded  p-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                                <svg
                                  aria-label="Vertical Three Dots Menu Icon"
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 16 16"
                                  height="1em"
                                  width="1em"
                                >
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                              </div>
                            }
                          />
                        </div>
                      </td>
                    )}
                  </tr>
                )
              })
            ) : (
              <tr className="bg-transparent">
                <td colSpan={20}>
                  <div
                    className={clsx(
                      "w-full rounded-b  border p-5 text-center",
                      // bodyColor ? `bg-${bodyColor}` : "bg-background"
                      "bg-background"
                    )}
                  >
                    {props.texts?.noData ?? "No Data"}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="flex flex-row items-center justify-between ">
          {/* Pagination Pages  */}
          {range.length > 1 ? (
            <div className="flex w-fit  flex-row items-stretch justify-center gap-2 overflow-clip rounded ">
              {/* Previous Page Button */}
              <div
                className={cn(
                  "flex h-6 w-6 rotate-180 cursor-pointer items-center justify-center rounded border bg-background p-1 text-xs hover:bg-primary/10 dark:hover:bg-primary/10",
                  direction === "rtl" && "rotate-0"
                )}
                onClick={() =>
                  page <= 1 ? setPage(range.length) : setPage(page - 1)
                }
              >
                <ChevronIcon />
              </div>
              {/* Numbered Pagination */}
              <div className="flex flex-row items-center  overflow-clip rounded  transition-all">
                {/* The first page */}
                {range.length > 6 &&
                  range.map((el, index) => {
                    if (index <= 0) {
                      return (
                        <button
                          key={index}
                          className={clsx(
                            "w-10 p-1 text-xs hover:bg-gray-200",
                            page === el
                              ? "bg-primary text-primary-foreground hover:bg-primary"
                              : "bg-gray-100"
                          )}
                          onClick={() => setPage(el)}
                        >
                          {el}
                        </button>
                      )
                    }
                  })}
                {/* The Current Page / Input  */}
                {range?.length > 6 && (
                  <input
                    type={"text"}
                    className=" w-10  bg-gray-100 p-1 text-center text-xs"
                    defaultValue={
                      page !== 0 || page !== range.length - 1 ? page : "..."
                    }
                    value={
                      page == 1 || page == range.length
                        ? "..."
                        : enteredPage
                        ? enteredPage
                        : page
                    }
                    onChange={(e) => setEnteredPage(parseInt(e.target.value))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setPage(enteredPage)
                        setEnteredPage(null)
                      }
                    }}
                  />
                )}
                {/* The last page */}
                {range?.length > 6 &&
                  range.map((el, index) => {
                    if (index >= range.length - 1) {
                      return (
                        <button
                          key={index}
                          className={clsx(
                            "w-10 p-1 text-xs hover:bg-gray-200",
                            page === el
                              ? "bg-primary text-primary-foreground hover:bg-primary"
                              : "bg-gray-100"
                          )}
                          onClick={() => setPage(el)}
                        >
                          {el}
                        </button>
                      )
                    }
                  })}

                {/* All Pages if less than 6 pages */}
                {range?.length <= 6 &&
                  range.map((el, index) => {
                    return (
                      <button
                        key={index}
                        className={clsx(
                          "w-10 p-1 text-xs",
                          page === el
                            ? "bg-primary text-primary-foreground "
                            : "border bg-background hover:bg-primary/10 dark:hover:bg-primary/10",

                          // Check if the direction is 'rtl'
                          direction === "rtl"
                            ? // If direction is 'rtl', then check for the index conditions
                              // and apply respective classes along with the 'something' class
                              index === 0
                              ? "rounded-r border-l-0" // Apply if index is 0 and direction is 'rtl'
                              : index === range.length - 1
                              ? "rounded-l border-r-0" // Apply if index is the last element and direction is 'rtl'
                              : "" // Apply if index is other than 0 or last element and direction is 'rtl'
                            : // If direction is not 'rtl', then again check for the index conditions
                            // and apply respective classes along with the 'something else' class
                            index === 0
                            ? "rounded-l border-r-0" // Apply if index is 0 and direction is not 'rtl'
                            : index === range.length - 1
                            ? "rounded-r border-l-0" // Apply if index is the last element and direction is not 'rtl'
                            : "" // Apply if index is other than 0 or last element and direction is not 'rtl'
                        )}
                        onClick={() => setPage(el)}
                      >
                        {el}
                      </button>
                    )
                  })}
              </div>
              {/* Next Page Button */}
              <div
                onClick={() =>
                  page >= range.length ? setPage(1) : setPage(page + 1)
                }
                className={cn(
                  "flex h-6 w-6  cursor-pointer items-center justify-center rounded border bg-background p-1 text-xs hover:bg-primary/10 dark:hover:bg-primary/10",
                  direction === "rtl" && "rotate-180"
                )}
              >
                <ChevronIcon />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* Pagination Settings */}
          {props.rows ? (
            <div className="flex w-fit flex-row items-center gap-2  ">
              <div className="text-xs ">
                {props.rows.length} {props.texts?.items ?? "Items"}
              </div>

              <select
                value={perPage}
                className="h-6 cursor-pointer rounded border bg-background px-2 text-xs"
                onChange={(e) => {
                  setPerPage(parseInt(e.target.value))
                }}
              >
                <option value={10} style={{ fontSize: 10 }}>
                  10 / {props.texts?.page ?? "Page"}
                </option>
                <option value={20} style={{ fontSize: 10 }}>
                  20 / {props.texts?.page ?? "Page"}
                </option>
                <option value={30} style={{ fontSize: 10 }}>
                  30 / {props.texts?.page ?? "Page"}
                </option>
                <option value={50} style={{ fontSize: 10 }}>
                  50 / {props.texts?.page ?? "Page"}
                </option>
                <option value={100} style={{ fontSize: 10 }}>
                  100 / {props.texts?.page ?? "Page"}
                </option>
              </select>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}

      {/* <Pagination
        handleNextPage={() =>
          page >= range.length ? setPage(1) : setPage(page + 1)
        }
        handlePrevPage={() =>
          page <= 1 ? setPage(range.length) : setPage(page - 1)
        }
      /> */}
    </div>
  )
}

// const Pagination = (props) => (
//   <div className="flex flex-row items-center justify-between ">
//     {/* Pagination Pages  */}
//     {range.length > 1 ? (
//       <div className="flex w-fit  flex-row items-stretch justify-center gap-2 overflow-clip rounded ">
//         {/* Previous Page Button */}
//         <div
//           className={clsx(
//             "flex h-6 w-6 rotate-180 cursor-pointer items-center justify-center rounded border bg-gray-100 p-1 text-xs hover:bg-layoutPrimary-700  dark:bg-background dark:hover:bg-gray-700 "
//           )}
//           onClick={props.handlePrevPage}
//         >
//           <svg
//             aria-label="Chevron Right Icon"
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 16 16"
//             height="1em"
//             width="1em"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//             ></path>
//           </svg>
//         </div>
//         {/* Numbered Pagination */}
//         <div className="flex flex-row items-center  overflow-clip rounded  transition-all">
//           {/* The first page */}
//           {range.length > 6 &&
//             range.map((el, index) => {
//               if (index <= 0) {
//                 return (
//                   <button
//                     key={index}
//                     className={clsx(
//                       "w-10 p-1 text-xs hover:bg-gray-200",
//                       page === el
//                         ? "bg-primary text-white hover:bg-primary"
//                         : "bg-gray-100"
//                     )}
//                     onClick={() => setPage(el)}
//                   >
//                     {el}
//                   </button>
//                 )
//               }
//             })}
//           {/* The Current Page / Input  */}
//           {range?.length > 6 && (
//             <input
//               type={"text"}
//               className=" w-10  bg-gray-100 p-1 text-center text-xs"
//               defaultValue={
//                 page !== 0 || page !== range.length - 1 ? page : "..."
//               }
//               value={
//                 page == 1 || page == range.length
//                   ? "..."
//                   : enteredPage
//                   ? enteredPage
//                   : page
//               }
//               onChange={(e) => setEnteredPage(parseInt(e.target.value))}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   setPage(enteredPage)
//                   setEnteredPage(null)
//                 }
//               }}
//             />
//           )}
//           {/* The last page */}
//           {range?.length > 6 &&
//             range.map((el, index) => {
//               if (index >= range.length - 1) {
//                 return (
//                   <button
//                     key={index}
//                     className={clsx(
//                       "w-10 p-1 text-xs hover:bg-gray-200",
//                       page === el
//                         ? "bg-primary text-white hover:bg-primary"
//                         : "bg-gray-100"
//                     )}
//                     onClick={() => setPage(el)}
//                   >
//                     {el}
//                   </button>
//                 )
//               }
//             })}

//           {/* All Pages if less than 6 pages */}
//           {range?.length <= 6 &&
//             range.map((el, index) => {
//               return (
//                 <button
//                   key={index}
//                   className={clsx(
//                     "w-10 p-1 text-xs  hover:bg-gray-200 dark:hover:bg-gray-700",
//                     page === el
//                       ? "bg-primary text-white hover:bg-primary"
//                       : "border bg-background",

//                     index === 0 ? "rounded-l border-r-0" : "",
//                     index === range.length - 1 ? "rounded-r border-l-0" : ""
//                   )}
//                   onClick={() => setPage(el)}
//                 >
//                   {el}
//                 </button>
//               )
//             })}
//         </div>
//         {/* Next Page Button */}
//         <div
//           onClick={props.handleNextPage}
//           className={clsx(
//             "flex h-6 w-6  cursor-pointer items-center justify-center rounded border bg-gray-100 p-1 text-xs hover:bg-layoutPrimary-700  dark:bg-background dark:hover:bg-gray-700 "
//           )}
//         >
//           <svg
//             aria-label="Chevron Right Icon"
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth="0"
//             viewBox="0 0 16 16"
//             height="1em"
//             width="1em"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     ) : (
//       <div></div>
//     )}
//     {/* Pagination Settings */}
//     {props.rows ? (
//       <div className="flex w-fit flex-row items-center gap-2  ">
//         <div className="text-xs ">
//           {props.rows.length} {props.texts?.items ?? "Items"}
//         </div>

//         <select
//           value={perPage}
//           className="h-6 cursor-pointer rounded border bg-background px-2 text-xs"
//           onChange={(e) => {
//             setPerPage(parseInt(e.target.value))
//           }}
//         >
//           <option value={10} style={{ fontSize: 10 }}>
//             10 / {props.texts?.page ?? "Page"}
//           </option>
//           <option value={20} style={{ fontSize: 10 }}>
//             20 / {props.texts?.page ?? "Page"}
//           </option>
//           <option value={30} style={{ fontSize: 10 }}>
//             30 / {props.texts?.page ?? "Page"}
//           </option>
//           <option value={50} style={{ fontSize: 10 }}>
//             50 / {props.texts?.page ?? "Page"}
//           </option>
//           <option value={100} style={{ fontSize: 10 }}>
//             100 / {props.texts?.page ?? "Page"}
//           </option>
//         </select>
//       </div>
//     ) : (
//       <div></div>
//     )}
//   </div>
// )
