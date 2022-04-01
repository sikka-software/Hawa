import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

export const HawaTable = (props) => {
  let isArabic = props.lang === "ar";
  return (
    <TableContainer style={{ direction: isArabic ? "rtl" : "ltr" }}>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {props.columns.map((col, i) => (
              <TableCell
                align={isArabic ? "right" : "left"}
                key={i}
                style={{ fontWeight: 700 }}
                variant={
                  i > 0 ? (isArabic ? "borderedRight" : "borderedLeft") : "body"
                }
              >
                {col}
              </TableCell>
            ))}
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
                  k > 0 ? (isArabic ? "borderedRight" : "borderedLeft") : "body"
                }
              >
                {e}
              </TableCell>
            ))}
          </TableRow>
        )}
      </Table>
    </TableContainer>
  );
};
HawaTable.propTypes = {
  noDataText: PropTypes.string,
  lang: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.array,
  end: PropTypes.array
};
