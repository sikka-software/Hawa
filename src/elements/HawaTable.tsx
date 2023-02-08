import React from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import clsx from "clsx"
import { HawaMenu } from "./HawaMenu"
// TODO: make action click return row

type TableTypes = {
  lang?: any
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
  borders?: "all" | "cols" | "rows" | "outer" | "inner"
}
type ActionItems = {
  icon?: JSX.Element
  label: string
  action?: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => void
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
  let isArabic = props.lang === "ar"

  let sizeStyles = {
    normal: "py-3 px-6",
    small: "px-3 py-1",
  }

  return (
    <div className="relative">
      <table
        className={clsx(
          "w-full rounded bg-layoutPrimary-500  text-left text-sm text-gray-500 dark:text-gray-400"
          // borders === "all" || borders === "outer"
          //   ? `border-[${bordersWidth}px] bg-red-300 p-2`
          //   : ""
          // `ring-[${bordersWidth}px] ring-blue-300`
          // `ring-[${10}px] ring-blue-300`
          // ` ring-[10px] ring-blue-300`
        )}
      >
        <thead className="  text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.columns.map((col: any, i: any) => (
              <th
                key={i}
                scope="col"
                className={clsx(
                  sizeStyles[size],
                  i !== 0 && (borders === "cols" || borders === "all")
                    ? `border-l border-l-[${bordersWidth}px]`
                    : ""
                )}
              >
                {col}
              </th>
            ))}
            {props.actions && size !== "small" ? (
              <th scope="col" className={clsx(sizeStyles[size], "text-center")}>
                {props.actionsText}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody
        // style={{
        //   borderWidth: bordersWidth,
        //   border: "1px solid black",
        // }}
        // className="bg-yellow-400"
        >
          {/* Table Rows */}
          {props.rows ? (
            props.rows.map((singleRow: any, rowIndex: any) => {
              let firstRow
              let lastRow = rowIndex == props.rows.length - 1

              return (
                <tr
                  key={rowIndex}
                  className={clsx(
                    " dark:border-gray-700 dark:bg-gray-800",
                    props.clickable ? "hover:bg-gray-100" : "",
                    "bg-" + customColor,
                    !lastRow &&
                      (borders === "all" ||
                        borders === "rows" ||
                        borders === "inner")
                      ? `border-b border-b-[${bordersWidth}px]`
                      : ""
                    // "bg-yellow-400"
                  )}
                >
                  {singleRow.map((r: any, i: any) => {
                    let firstCell = i === 0
                    let lastCell = i === singleRow.length - 1

                    return (
                      <td
                        key={i}
                        className={clsx(
                          highlightFirst && firstCell
                            ? "font-bold"
                            : "font-normal",
                          lastRow && firstCell ? "rounded-b" : "",
                          firstCell ? "rounded-br-none" : "",
                          lastCell ? "rounded-bl-none" : "",
                          sizeStyles[size],
                          !firstCell &&
                            (borders === "cols" || borders === "inner")
                            ? `border-l border-l-[${bordersWidth}px]`
                            : "",

                          // borders === "all"
                          //   ? `border border-[${bordersWidth}px]`
                          //   : "",
                          props.actions
                            ? `border-r border-r-[${bordersWidth}px]`
                            : ""
                        )}
                      >
                        {r}
                      </td>
                    )
                    // }
                  })}
                  {props.actions && size !== "small" ? (
                    <td
                      align={isArabic ? "right" : "left"}
                      className={lastRow ? "rounded-br" : ""}
                    >
                      <div className="flex items-center justify-center">
                        <HawaMenu
                          size="small"
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
            <tr>
              <td colSpan={props.columns.length}>
                <div className="w-full bg-white p-5 text-center">
                  {props.noDataText}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

// const TableActionButton = (props) => {
//   let smallAct = props.action?.toLowerCase()
//   return (
//     <HawaButton
//       tooltipSize="small"
//       buttonID={props.action + props.row}
//       tooltipPosition="top-right"
//       size="xs"
//       variant="contained"
//       tooltip={props.action}
//       onClick={() => props.handleActionClick(smallAct)}
//     >
//       {smallAct === "delete" ? (
//         <FaTrash />
//       ) : smallAct === "view" ? (
//         <FaExclamationCircle />
//       ) : smallAct === "edit" ? (
//         <FaPen />
//       ) : (
//         props.action
//       )}
//     </HawaButton>
//   )
// }
