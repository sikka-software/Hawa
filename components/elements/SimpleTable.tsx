import * as React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  RowData
} from "@tanstack/react-table";

import { DirectionType } from "@_types/commonTypes";

import { cn } from "../util";
import { Skeleton } from "./skeleton/Skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./Table";

type DataProps = {};

type SimpleTableProps = {
  direction?: DirectionType;
  columns: ColumnDef<DataProps>[];
  data: DataProps[];
  condensed?: boolean;
  isLoading?: boolean;
  defaultSort?: string;
  classNames?: string;
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
    padding?: "condensed" | "default" | "noPadding";
  }
}

export const SimpleTable: React.FC<SimpleTableProps> = ({
  columns,
  data,
  classNames,
  ...props
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return (
    <div
      className={cn(
        "hawa-flex  hawa-w-full hawa-flex-col hawa-gap-4",
        classNames
      )}
    >
      {props.isLoading ? (
        <Skeleton className="h-[130px] w-full" />
      ) : (
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
                        padding={
                          props.condensed
                            ? "condensed"
                            : cell.column.columnDef.meta?.padding
                        }
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
      )}
    </div>
  );
};
