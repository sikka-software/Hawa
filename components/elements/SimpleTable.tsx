import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  RowData,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

import { Skeleton } from "./Skeleton";

type DataProps = {};

type SimpleTableProps = {
  direction?: "rtl" | "ltr";
  columns: ColumnDef<DataProps>[];
  data: DataProps[];
  condensed?: boolean;
  isLoading?: boolean;
  defaultSort?: string;
  texts?: {
    searchPlaceholder?: string;
    noData?: any;
    page?: string;
    filter?: string;
    of?: string;
    total?: string;
  };
};

declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {
    sortable: any;
  }
}

export const SimpleTable: React.FC<SimpleTableProps> = ({
  columns,
  data,
  ...props
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="hawa-flex  hawa-w-full hawa-flex-col hawa-gap-4">
      {props.isLoading ? (
        <Skeleton className="h-[130px] w-full" />
      ) : (
        <>
          <div className="hawa-rounded">
            <Table>
              {table.getAllColumns().length > 0 && (
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead
                            condensed={props.condensed}
                            dir={props.direction}
                            // clickable={isSortable}
                            key={header.id}
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
              )}
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          dir={props.direction}
                          condensed={props.condensed}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="hawa-h-24 hawa-text-center"
                    >
                      {props.texts?.noData}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* CAPTION FOR CURRENT SELECTED ROWS */}
          {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        </>
      )}
    </div>
  );
};
