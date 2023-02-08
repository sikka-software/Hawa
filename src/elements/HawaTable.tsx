import React, { useEffect, useState } from "react"
import { BsChevronRight, BsThreeDotsVertical } from "react-icons/bs"
import clsx from "clsx"
import { HawaMenu } from "./HawaMenu"
import useTable from "../hooks/useTable"

type TableTypes = {
  columns: any[string]
  actions?: ActionItems[][]
  direction?: "rtl" | "ltr"
  rows?: any[any]
  noDataText?: any
  handleActionClick?: any
  end?: any
  size?: "normal" | "small"
  highlightFirst?: boolean
  customColor?: string
  clickable?: boolean
  actionsText?: string
  bordersWidth?: string
  onActionClicked?: any
  borders?: "all" | "cols" | "rows" | "outer" | "inner"
}
type ActionItems = {
  icon?: JSX.Element
  label: string
  action?: (e: any) => void
  isButton?: boolean
  element?: any
}

export const HawaTable: React.FunctionComponent<TableTypes> = ({
  size = "normal",
  customColor = "white",
  borders,
  highlightFirst = false,
  direction = "ltr",
  bordersWidth = "1",
  ...props
}) => {
  const [perPage, setPerPage] = useState(10)
  const [enteredPage, setEnteredPage] = useState(null)
  const [page, setPage] = useState(1)

  const { slice, range } = useTable(props.rows ?? [], page, perPage)
  useEffect(() => {
    if (slice?.length < 1 && page !== 1) {
      setPage(page - 1)
    }
    if (enteredPage) {
      setPage(enteredPage)
    }
  }, [slice, page])

  let isRTL = direction === "rtl"

  let sizeStyles = {
    normal: "py-3 px-6",
    small: "px-3 py-1",
  }

  return (
    <div className="relative">
      <table
        className={clsx(
          "w-full rounded bg-layoutPrimary-500 text-left text-sm text-gray-500 dark:text-gray-400"
        )}
      >
        <thead className="  text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.columns.map((col: any, i: any) => {
              if (col.hidden) {
                return
              } else {
                return (
                  <th
                    key={i}
                    scope="col"
                    colSpan={2}
                    className={clsx(
                      sizeStyles[size],
                      i !== 0 && (borders === "cols" || borders === "all")
                        ? `border-l border-l-[${bordersWidth}px]`
                        : ""
                    )}
                  >
                    {col.value}
                  </th>
                )
              }
            })}
            {props.actions && size !== "small" ? (
              <th
                scope="col"
                className={clsx(sizeStyles[size], "w-[calc(1%)] text-center")}
              >
                {props.actionsText}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody
          className={
            customColor && props.rows ? `bg-${customColor}` : "bg-transparent"
          }
        >
          {/* Table Rows */}
          {props.rows ? (
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
                            sizeStyles[size],
                            highlightFirst && firstCell
                              ? "font-bold"
                              : "font-normal",
                            isRTLFirstCell
                              ? "rounded-bl-none rounded-br"
                              : isRTLLastCell
                              ? "rounded-br-none rounded-bl"
                              : isLTRFirstCell
                              ? "rounded-br-none rounded-bl"
                              : isLTRLastCell
                              ? "rounded-bl-none rounded-br"
                              : "",

                            !firstCell &&
                              !lastCell &&
                              (borders === "cols" || borders === "inner")
                              ? `border-l border-l-[${bordersWidth}px] border-r border-r-[${bordersWidth}px]`
                              : !firstCell &&
                                props.actions &&
                                (borders === "cols" || borders === "inner")
                              ? `border-l border-l-[${bordersWidth}px] border-r border-r-[${bordersWidth}px]`
                              : ""

                            // customColor ? `bg-${customColor}` : "bg-white"
                          )}
                        >
                          {r.value}
                        </td>
                      )
                    }
                    // }
                  })}
                  {props.actions && size !== "small" ? (
                    <td
                      align={isRTL ? "right" : "left"}
                      className={clsx(
                        isRTL && lastRow ? "rounded-br-none rounded-bl" : "",
                        !isRTL && lastRow ? "rounded-bl-none rounded-br" : ""
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
                            direction === "rtl" ? "right-bottom" : "left-bottom"
                          }
                          direction={direction}
                        >
                          <div className="flex w-fit  items-center justify-center rounded  p-2 hover:bg-gray-200">
                            <BsThreeDotsVertical />
                          </div>
                        </HawaMenu>
                      </div>
                    </td>
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
                    customColor ? `bg-${customColor}` : "bg-white"
                  )}
                >
                  {props.noDataText}
                </div>
              </td>
            </tr>
          )}
        </tbody>
        <div></div>
      </table>
      <div className="mt-2 flex flex-row items-center justify-between ">
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
        <div className="w-fit ">
          <select
            value={perPage}
            className="h-6 rounded text-xs"
            onChange={(e) => {
              setPerPage(parseInt(e.target.value))
            }}
          >
            <option value={10} style={{ fontSize: 10 }}>
              10 Items
            </option>
            <option value={20} style={{ fontSize: 10 }}>
              20 Items
            </option>
            <option value={30} style={{ fontSize: 10 }}>
              30 Items
            </option>
            <option value={50} style={{ fontSize: 10 }}>
              50 Items
            </option>
            <option value={100} style={{ fontSize: 10 }}>
              100 Items
            </option>
          </select>
          {/* <HawaSelect
            // label="Per Page"
            isCreatable={false}
            isMulti={false}
            isSearchable={false}
            isClearable={false}
            options={[
              { value: 2, label: "2" },
              { value: 7, label: "7" },
              { value: 10, label: "10" },
              { value: 20, label: "20" },
            ]}
            onChange={(e: any) => {
              // field.onChange(e.value)
              console.log("changing to ", e.value)
              setPage(1)
              setPerPage(e.value)
            }}
            onInputChange={(e: any) => {
              // field.onChange(e.value)
              console.log("changing to ", e.value)
              setPage(1)
              setPerPage(e.value)
            }}
          /> */}
        </div>
      </div>
    </div>
  )
}
