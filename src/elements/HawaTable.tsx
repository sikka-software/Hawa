import React from "react"
import { HawaButton } from "./HawaButton"
import { FaTrash, FaExclamationCircle, FaPen } from "react-icons/fa"
import clsx from "clsx"
// import { HiOutlineEye } from "react-icons/hi2"
type TableTypes = {
  lang?: any
  columns: any[string]
  actions?: any
  rows?: any[any]
  noDataText?: any
  handleActionClick?: any
  end?: any
  size?: "normal" | "small"
}

export const HawaTable: React.FunctionComponent<TableTypes> = ({
  size = "normal",
  ...props
}) => {
  let isArabic = props.lang === "ar"

  let sizeStyles = {
    normal: "py-3 px-6",
    small: "px-3 py-1",
  }
  return (
    <>
      <div>
        <div className="relative overflow-x-auto rounded-xl">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {props.columns.map((col: any, i: any) => (
                  <th key={i} scope="col" className={clsx(sizeStyles[size])}>
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
              {props.rows ? (
                props.rows.map((singleRow: any, j: any) => (
                  <tr
                    key={j}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    {singleRow.map((r: any, i: any) => {
                      if (i === 0) {
                        return (
                          <th
                            key={i}
                            scope="row"
                            className={clsx(
                              sizeStyles[size],
                              "whitespace-nowrap font-medium text-gray-900 dark:text-white"
                            )}
                          >
                            {r}{" "}
                          </th>
                        )
                      } else {
                        return (
                          <td key={i} className={clsx(sizeStyles[size])}>
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
      </div>

      {/* <TableContainer style={{ direction: isArabic ? "rtl" : "ltr" }}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              {props.columns.map((col, i) => (
                <TableCell
                  align={isArabic ? "right" : "left"}
                  key={i}
                  style={{ fontWeight: 700 }}
                  variant={
                    i > 0
                      ? isArabic
                        ? "borderedRight"
                        : "borderedLeft"
                      : "body"
                  }
                >
                  {col}
                </TableCell>
              ))}
              {props.actions && (
                <TableCell
                  align={isArabic ? "right" : "left"}
                  style={{ fontWeight: 700 }}
                  variant={isArabic ? "borderedRight" : "borderedLeft"}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.rows ? (
              props.rows.map((singleRow, j) => (
                <TableRow key={j}>
                  {singleRow.map((r, i) => (
                    <TableCell
                      align={isArabic ? "right" : "left"}
                      key={i}
                      component="th"
                      scope="row"
                      variant={
                        i > 0
                          ? isArabic
                            ? "borderedRight"
                            : "borderedLeft"
                          : "body"
                      }
                    >
                      {r}
                    </TableCell>
                  ))}
                  {props.actions && (
                    <TableCell
                      align={isArabic ? "right" : "left"}
                      style={{ fontWeight: 700 }}
                      variant={isArabic ? "borderedRight" : "borderedLeft"}
                    >
                      {props.actions.map((act) => (
                        <Button
                          style={{ margin: 2 }}
                          variant="outlined"
                          size="small"
                          onClick={() => props.handleActionClick(singleRow)}
                        >
                          {act}
                        </Button>
                      ))}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow align="center">
                <TableCell align={"center"} component="th" colSpan={6}>
                  {props.noDataText}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {props.end && (
            <TableRow>
              {props.end.map((e, k) => (
                <TableCell
                  align={isArabic ? "right" : "left"}
                  style={{ fontWeight: 700 }}
                  key={k}
                  component="th"
                  scope="row"
                  variant={
                    k > 0
                      ? isArabic
                        ? "borderedRight"
                        : "borderedLeft"
                      : "body"
                  }
                >
                  {e}
                </TableCell>
              ))}
            </TableRow>
          )}
        </Table>
      </TableContainer> */}
    </>
  )
}

const TableActionButton = (props) => {
  let smallAct = props.action.toLowerCase()
  return (
    <HawaButton
      size="noPadding"
      variant="outlined"
      tooltip={props.action}
      onClick={() => props.handleActionClick(smallAct)}
    >
      <div className="w-full rounded-lg p-1.5">
        {smallAct === "delete" ? (
          <FaTrash />
        ) : smallAct === "view" ? (
          <FaExclamationCircle />
        ) : smallAct === "edit" ? (
          <FaPen />
        ) : (
          props.action
        )}
      </div>
    </HawaButton>
  )
}
