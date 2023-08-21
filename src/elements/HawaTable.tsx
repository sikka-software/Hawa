import React, { useEffect, useState, FC } from "react"
import clsx from "clsx"
import { HawaMenu } from "./HawaMenu"
import useTable from "../hooks/useTable"
import { HawaTextField } from "./HawaTextField"
import { HawaButton } from "./HawaButton"

// TODO: translate header tools and make it more customizable
// TODO: pass the onSearch handler to the parent

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
  actions?: ActionItems[][]
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
  onActionClicked?: any
  headerTools?: boolean
  borders?: "all" | "cols" | "rows" | "outer" | "inner"
}
type ActionItems = {
  icon?: JSX.Element
  label: string
  action?: (e: any) => void
  isButton?: boolean
  element?: any
}

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

  const handleSort = (colIndex, sortable) => {
    if (sortable) {
      setSortColumn(colIndex)
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      )
    }
    // const newDirection =
    //   sortColumn === colIndex && sortDirection === "asc" ? "desc" : "asc"

    // const sortedData = [...sortedRows].sort((a, b) => {
    //   const aValue = a[colIndex].value
    //   const bValue = b[colIndex].value

    //   // You can enhance the sorting logic based on the data type
    //   if (newDirection === "asc") {
    //     return aValue.localeCompare(bValue)
    //   } else {
    //     return bValue.localeCompare(aValue)
    //   }
    // })

    // setSortedRows(sortedData)
    // setSortColumn(colIndex)
    // setSortDirection(newDirection)
  }

  // const { slice, range } = useTable(props.rows, page, perPage)
  // Use the custom hook to get paginated and sorted data
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
  // let sortedRows = props.rows

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
    <div className="relative flex flex-col gap-2 ">
      <div className={`overflow-x-auto rounded  bg-${headerColor}`}>
        {props.headerTools && (
          <div className="flex flex-row items-center justify-between gap-2 border bg-background px-4  py-2">
            <HawaTextField
              icon={
                <svg
                  aria-label="Search Icon"
                  stroke="currentColor"
                  fill="gray"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              }
              placeholder={"Search"}
              width="full"
              margin="none"
            />
            <div className="flex flex-row items-center justify-between gap-2">
              <HawaButton
                startIcon={
                  <svg
                    aria-label="Filter Icon"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                }
                endIcon={
                  <svg
                    aria-label="Chevron Right Icon"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                }
              >
                {props.texts?.filter ?? "Filter"}
              </HawaButton>
            </div>
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
                    {props.actions ? (
                      size !== "small" ? (
                        <td
                          align={isRTL ? "right" : "left"}
                          className={clsx(
                            isRTL && lastRow
                              ? "rounded-bl rounded-br-none"
                              : "",
                            !isRTL && lastRow
                              ? "rounded-bl-none rounded-br"
                              : ""
                            // "w-fit bg-red-400"
                          )}
                          colSpan={1}
                        >
                          <div className="flex items-center justify-center">
                            <HawaMenu
                              size="small"
                              actionedItem={[rowIndex, singleRow]}
                              menuItems={props.actions}
                              position={
                                direction === "rtl"
                                  ? "right-bottom"
                                  : "left-bottom"
                              }
                              direction={direction}
                            >
                              <div className="flex w-fit  cursor-pointer items-center justify-center rounded  p-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                                <svg
                                  aria-label="Vertical Three Dots Menu Icon"
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 16 16"
                                  height="1em"
                                  width="1em"
                                >
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                              </div>
                            </HawaMenu>
                          </div>
                        </td>
                      ) : (
                        <div className="flex flex-row  items-center justify-center gap-2 p-1">
                          {props.actions[0].map((act) => (
                            <div className=" p-1 transition-all hover:bg-gray-100">
                              {act.icon}
                            </div>
                          ))}
                        </div>
                      )
                    ) : null}
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
                className={clsx(
                  "flex h-6 w-6 rotate-180 cursor-pointer items-center justify-center rounded border bg-gray-100 p-1 text-xs hover:bg-layoutPrimary-700  dark:bg-background dark:hover:bg-gray-700 "
                )}
                onClick={() =>
                  page <= 1 ? setPage(range.length) : setPage(page - 1)
                }
              >
                <svg
                  aria-label="Chevron Right Icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
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
                              ? "bg-buttonPrimary-500 text-white hover:bg-buttonPrimary-500"
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
                              ? "bg-buttonPrimary-500 text-white hover:bg-buttonPrimary-500"
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
                          "w-10 p-1 text-xs  hover:bg-gray-200 dark:hover:bg-gray-700",
                          page === el
                            ? "bg-buttonPrimary-500 text-white hover:bg-buttonPrimary-500"
                            : "border bg-background",

                          index === 0 ? "rounded-l border-r-0" : "",
                          index === range.length - 1
                            ? "rounded-r border-l-0"
                            : ""
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
                className={clsx(
                  "flex h-6 w-6  cursor-pointer items-center justify-center rounded border bg-gray-100 p-1 text-xs hover:bg-layoutPrimary-700  dark:bg-background dark:hover:bg-gray-700 "
                )}
              >
                <svg
                  aria-label="Chevron Right Icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
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
    </div>
  )
}
