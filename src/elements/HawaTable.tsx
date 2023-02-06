import React from "react"
import { HawaButton } from "./HawaButton"
import { FaTrash, FaExclamationCircle, FaPen } from "react-icons/fa"
import clsx from "clsx"

type TableTypes = {
  lang?: any
  columns: any[string]
  actions?: [{ type: "view" | "update" | "delete"; onClick: (e) => void }]
  rows?: any[any]
  noDataText?: any
  handleActionClick?: any
  end?: any
  size?: "normal" | "small"
  highlightFirst?: boolean
  customColor?: string
  clickable?: boolean
  bordersWidth?: string
  borders?: ["all" | "cols" | "rows" | "outer"]
}

export const HawaTable: React.FunctionComponent<TableTypes> = ({
  size = "normal",
  customColor = "white",
  borders,
  highlightFirst = false,
  bordersWidth = "0",
  ...props
}) => {
  let isArabic = props.lang === "ar"

  let sizeStyles = {
    normal: "py-3 px-6",
    small: "px-3 py-1",
  }
  return (
    <div className="relative overflow-x-clip rounded">
      <table
        className={clsx(
          "w-full  text-left text-sm text-gray-500 dark:text-gray-400",
          borders?.find((e) => e === "all") === "all" ||
            borders?.find((e) => e === "outer") === "outer"
            ? `border-[${bordersWidth}px]`
            : ""
        )}
      >
        <thead className=" bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.columns.map((col: any, i: any) => (
              <th
                key={i}
                scope="col"
                className={clsx(
                  sizeStyles[size],
                  (i !== 0 && borders?.find((e) => e === "cols") === "cols") ||
                    borders?.find((e) => e === "all") === "all"
                    ? `border-l border-l-[${bordersWidth}px]`
                    : ""
                )}
              >
                {col}
              </th>
            ))}
            {props.actions && size !== "small" ? (
              <th scope="col" className={clsx(sizeStyles[size])}>
                actions
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {/* Table Rows */}
          {props.rows ? (
            props.rows.map((singleRow: any, j: any) => (
              <tr
                key={j}
                className={clsx(
                  " dark:border-gray-700 dark:bg-gray-800",
                  props.clickable ? "hover:bg-gray-100" : "",
                  "bg-" + customColor,
                  j == props.rows.length - 1
                    ? ""
                    : borders?.find((e) => e === "all") === "all" ||
                      borders?.find((e) => e === "rows") === "rows"
                    ? `border-b border-b-[${bordersWidth}px]`
                    : ""
                )}
              >
                {singleRow.map((r: any, i: any) => {
                  if (i === 0) {
                    return (
                      <th
                        key={i}
                        scope="row"
                        className={clsx(
                          sizeStyles[size],
                          "whitespace-nowrap  dark:text-white",
                          highlightFirst ? "font-bold" : "font-normal"
                        )}
                      >
                        {r}{" "}
                      </th>
                    )
                  } else {
                    return (
                      <td
                        key={i}
                        className={clsx(
                          sizeStyles[size],

                          borders?.find((e) => e === "cols") === "cols" ||
                            borders?.find((e) => e === "all") === "all"
                            ? `border-l border-l-[${bordersWidth}px]`
                            : ""
                        )}
                      >
                        {r}
                      </td>
                    )
                  }
                })}
                {props.actions && size !== "small" ? (
                  <td
                    align={isArabic ? "right" : "left"}
                    style={{ fontWeight: 700 }}
                    className="flex flex-row gap-1"
                    // variant={isArabic ? "borderedRight" : "borderedLeft"}
                  >
                    {props.actions.map((act: any, s: any) => {
                      return (
                        <TableActionButton
                          key={s}
                          row={j}
                          action={act.type}
                          handleActionClick={act.onClick}
                        />
                      )
                    })}
                  </td>
                ) : null}
              </tr>
            ))
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

const TableActionButton = (props) => {
  let smallAct = props.action.toLowerCase()
  return (
    <HawaButton
      tooltipSize="small"
      buttonID={props.action + props.row}
      size="xs"
      variant="contained"
      // tooltip={props.action}
      tooltip={"testing tooltip"}
      onClick={() => props.handleActionClick(smallAct)}
    >
      {smallAct === "delete" ? (
        <FaTrash />
      ) : smallAct === "view" ? (
        <FaExclamationCircle />
      ) : smallAct === "edit" ? (
        <FaPen />
      ) : (
        props.action
      )}
    </HawaButton>
  )
}
