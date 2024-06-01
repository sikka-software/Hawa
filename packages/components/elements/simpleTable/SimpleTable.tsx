import * as React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  RowData,
} from "@tanstack/react-table";
import { cn } from "@util/index";

import { DirectionType } from "@_types/commonTypes";

import { Skeleton } from "../skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";

type SimpleTableProps<DataProps = {}> = {
  direction?: DirectionType;
  columns: ColumnDef<DataProps>[];
  headerless?: boolean;
  data: DataProps[];
  condensed?: boolean;
  isLoading?: boolean;
  defaultSort?: string;
  classNames?: string;
  extra?: React.ReactNode;
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
    sortable?: boolean;
    hidden?: boolean;
  }
}
export const SimpleTable = <DataProps extends {}>({
  columns,
  data,
  classNames,
  headerless,
  ...props
}: SimpleTableProps<DataProps>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div
      className={cn(
        "hawa-flex hawa-w-full hawa-flex-col hawa-gap-4",
        classNames,
      )}
    >
      {props.isLoading ? (
        <Skeleton className="h-[130px] w-full" />
      ) : (
        <div className="hawa-rounded">
          <Table>
            {!headerless && table.getAllColumns().length > 0 && (
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          condensed={props.condensed}
                          dir={props.direction}
                          key={header.id}
                          style={{
                            maxWidth: header.column.columnDef.maxSize,
                          }}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
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
                        style={{
                          maxWidth: cell.column.columnDef.maxSize,
                        }}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
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
              {props.extra}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};
