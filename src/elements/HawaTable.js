import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const HawaTable = (props) => {
  return (
    <TableContainer>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {props.columns.map((col, i) => (
              <TableCell
                style={{ fontWeight: 700 }}
                variant={i == 0 || "bordered"}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((singleRow, j) => (
            <TableRow key={j}>
              {singleRow.map((r, i) => (
                <TableCell
                  key={i}
                  component="th"
                  scope="row"
                  variant={i == 0 || "bordered"}
                >
                  {r}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {props.end && (
          <TableRow>
            {props.end.map((e, k) => (
              <TableCell
                style={{ fontWeight: 700 ,}}
                key={k}
                component="th"
                scope="row"
                variant={k == 0 || "bordered"}
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
