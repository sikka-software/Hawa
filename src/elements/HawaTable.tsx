import React from "react"
// import PropTypes from "prop-types"
import { HawaButton } from "./HawaButton2"

type TableTypes = {
  lang: any
  columns: any
  actions: any
  rows: any
  noDataText: any
}

export const HawaTable: React.FunctionComponent<TableTypes> = (props) => {
  let isArabic = props.lang === "ar"
  return (
    <>
      <div>
        <div className="relative overflow-x-auto rounded-xl">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {props.columns.map((col, i) => (
                  <th key={i} scope="col" className="py-3 px-6">
                    {col}
                  </th>
                ))}
                {props.actions && (
                  <th scope="col" className="py-3 px-6">
                    actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {props.rows ? (
                props.rows.map((singleRow, j) => (
                  <tr
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={j}
                  >
                    {singleRow.map((r, i) => {
                      if (i === 0) {
                        return (
                          <th
                            scope="row"
                            className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                          >
                            {r}{" "}
                          </th>
                        )
                      } else {
                        return <td className="py-4 px-6">{r}</td>
                      }
                    })}
                    {props.actions && (
                      <td
                        align={isArabic ? "right" : "left"}
                        style={{ fontWeight: 700 }}
                        variant={isArabic ? "borderedRight" : "borderedLeft"}
                      >
                        {props.actions.map((act) => (
                          <HawaButton
                            onClick={() => props.handleActionClick(singleRow)}
                          >
                            {act}
                          </HawaButton>
                        ))}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan={props.columns.length}>
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
// HawaTable.propTypes = {
//   handleActionClick: PropTypes.func,
//   noDataText: PropTypes.string,
//   lang: PropTypes.string,
//   columns: PropTypes.array,
//   rows: PropTypes.array,
//   end: PropTypes.array,
// }
