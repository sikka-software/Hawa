import React from "react";
import PropTypes from "prop-types";
import { HawaButton } from "./HawaButton";

export const HawaTable = (props) => {
  let isArabic = props.lang === "ar";
  return (
    <>
      <div>
        <div class="overflow-x-auto relative rounded-xl">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {props.columns.map((col, i) => (
                  <th key={i} scope="col" class="py-3 px-6">
                    {col}
                  </th>
                ))}
                {props.actions && (
                  <th scope="col" class="py-3 px-6">
                    actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {props.rows ? (
                props.rows.map((singleRow, j) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={j}
                  >
                    {singleRow.map((r, i) => {
                      if (i === 0) {
                        return (
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {r}{" "}
                          </th>
                        );
                      } else {
                        return <td class="py-4 px-6">{r}</td>;
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
                            style={{ margin: 2 }}
                            variant="outlined"
                            size="small"
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
                    <div className="w-full p-5 text-center bg-white">
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
  );
};
HawaTable.propTypes = {
  handleActionClick: PropTypes.func,
  noDataText: PropTypes.string,
  lang: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.array,
  end: PropTypes.array
};
