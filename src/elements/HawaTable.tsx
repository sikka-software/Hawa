import React, { useEffect, useState, FC } from "react"
import clsx from "clsx"
import { HawaMenu } from "./HawaMenu"
import useTable from "../hooks/useTable"
import { HawaTextField } from "./HawaTextField"
import { HawaButton } from "./HawaButton"
import { FaSearch } from "react-icons/fa"
import { BsChevronRight, BsFilter, BsPlus, BsThreeDots } from "react-icons/bs"

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
  columns: any[string]
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
  borders,
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
          <div className="flex flex-row items-center justify-between gap-2 px-4 py-2">
            {/* <div className="w-1/2">
            </div> */}
            <HawaTextField
              icon={<FaSearch color="gray" />}
              placeholder={"Search"}
              width="full"
              margin="none"
            />
            <div className="flex flex-row items-center justify-between gap-2">
              {/* <HawaButton startIcon={<BsPlus />}>Add Item</HawaButton> */}
              {/* <HawaButton startIcon={<BsChevronRight />}>Actions</HawaButton> */}
              <HawaButton startIcon={<BsFilter />} endIcon={<BsChevronRight />}>
                {props.texts?.filter ?? "Filter"}
              </HawaButton>
            </div>
          </div>
        )}
        <table
          className={clsx(
            borders === "outer" || borders === "all"
              ? `outline outline-[${bordersWidth}px] -outline-offset-1 outline-gray-300`
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
                              <div className="flex w-fit  items-center justify-center rounded  p-2 hover:bg-gray-200">
                                <BsThreeDots />
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
                      "w-full rounded-b bg-white p-5 text-center",
                      bodyColor ? `bg-${bodyColor}` : "bg-white"
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
                  "flex h-6 w-6 rotate-180 items-center justify-center rounded bg-gray-100 p-1  text-xs hover:bg-layoutPrimary-700 "
                )}
                onClick={() =>
                  page <= 1 ? setPage(range.length) : setPage(page - 1)
                }
              >
                <BsChevronRight />
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
                  })}
              </div>
              {/* Next Page Button */}
              <div
                onClick={() =>
                  page >= range.length ? setPage(1) : setPage(page + 1)
                }
                className={clsx(
                  "flex h-6 w-6 items-center  justify-center rounded bg-gray-100 p-1 text-xs hover:bg-layoutPrimary-700 "
                )}
              >
                <BsChevronRight />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* Pagination Settings */}
          {props.rows ? (
            <div className="flex w-fit flex-row items-center gap-2 ">
              <div className="text-xs ">
                {props.rows.length} {props.texts?.items ?? "Items"}
              </div>

              <select
                value={perPage}
                className="h-6 rounded text-xs"
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
