import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
  RowData,
  ExpandedState,
} from "@tanstack/react-table";
import { cn } from "@util/index";

import { DirectionType } from "@_types/commonTypes";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "../dropdownMenu";
import { Input } from "../input";
import { Skeleton } from "../skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";

export type { ColumnDef } from "@tanstack/react-table";

type DataTableProps<DataProps = {}> = {
  direction?: DirectionType;
  columns: ColumnDef<DataProps>[];
  enableSearch?: boolean;
  enableHideColumns?: boolean;
  enableGoTo?: boolean;
  hideHeader?: boolean;
  data: DataProps[];
  itemsPerPage?: any[];
  showCount?: boolean;
  paginationPosition?: "top" | "bottom";
  condensed?: boolean;
  isLoading?: boolean;
  defaultSort?: string;
  translateFn?: any;
  texts?: {
    columns?: string;
    searchPlaceholder?: string;
    item?: string;
    noData?: any;
    page?: string;
    filter?: string;
    of?: string;
    total?: string;
    goTo?: string;
  };
};

declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {
    padding?: "condensed" | "default" | "noPadding";
    sortable?: boolean;
    hidden?: boolean;
    i18nKey?: string;
  }
}

const LOCAL_STORAGE_KEY = "@sikka/hawa/data-table-columns";

export const DataTable = <DataProps extends {}>({
  columns,
  data,
  paginationPosition = "bottom",
  translateFn,
  enableHideColumns,
  enableSearch,
  enableGoTo,
  ...props
}: DataTableProps<DataProps>) => {
  const [sorting, setSorting] = React.useState<SortingState>(
    props.defaultSort ? [{ id: props.defaultSort, desc: false }] : [],
  );
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(() => {
      const savedVisibility = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedVisibility ? JSON.parse(savedVisibility) : {};
    });

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
      rowSelection,
      expanded,
    },
  });
  const pageText = props.texts?.page || "page";
  const itemsPerPageOptions = props.itemsPerPage?.map((item) => ({
    label: `${item} / ${pageText}`,
    value: item,
  }));

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columnVisibility));
  }, [columnVisibility]);

  React.useEffect(() => {
    setColumnVisibility((prev) => {
      let newColumnVisibility: VisibilityState = {};
      columns.forEach((column: any) => {
        const savedVisibility = prev[column.accessorKey];
        if (savedVisibility !== undefined) {
          newColumnVisibility[column.accessorKey] = savedVisibility;
        } else {
          newColumnVisibility[column.accessorKey] = !column.meta?.hidden;
        }
      });
      return newColumnVisibility;
    });
  }, [columns]);

  return (
    <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-4">
      {(enableSearch || enableHideColumns) && (
        <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-4">
          {enableSearch && (
            <Input
              inputProps={{ title: "" }}
              forceHideHelperText
              placeholder={props.texts?.searchPlaceholder}
              value={globalFilter ?? ""}
              onChange={(event: any) => setGlobalFilter(event.target.value)}
              margin="none"
              className="hawa-w-full md:hawa-max-w-sm"
              endIconProps={{ className: "!hawa-end-2" }}
              endIcon={
                globalFilter ? (
                  <Button
                    onClick={() => setGlobalFilter("")}
                    variant={"ghost"}
                    size={"smallIcon"}
                    aria-label="Clear Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hawa-icon hawa-text-muted-foreground"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                ) : null
              }
            />
          )}
          {enableHideColumns && (
            <DropdownMenuRoot>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hawa-flex hawa-flex-row hawa-gap-2"
                >
                  {props.texts?.columns || "Columns"}
                  <svg
                    aria-label="Chevron Down Icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hawa-icon hawa-rotate-90"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={props.direction === "rtl" ? "start" : "end"}
              >
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {translateFn
                          ? translateFn(
                              column.columnDef.meta?.i18nKey
                                ? column.columnDef.meta?.i18nKey
                                : column.id,
                            )
                          : column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenuRoot>
          )}
        </div>
      )}
      {props.isLoading ? (
        <Skeleton className="hawa-h-[130px] hawa-w-full" />
      ) : (
        <div
          className={cn(
            "hawa-flex hawa-w-full  hawa-gap-4",
            paginationPosition === "top"
              ? "hawa-flex-col-reverse"
              : "hawa-flex-col",
          )}
        >
          <div className="hawa-rounded-md">
            <Table>
              {!props.hideHeader && table.getAllColumns().length > 0 && (
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        let isSortable = header.column.columnDef.meta?.sortable;
                        return (
                          <TableHead
                            dir={props.direction}
                            condensed={props.condensed}
                            clickable={Boolean(isSortable)}
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
                          style={{
                            maxWidth: cell.column.columnDef.maxSize,
                          }}
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
              </TableBody>
            </Table>
          </div>
          <div className="hawa-flex hawa-items-center hawa-justify-between">
            {!props.showCount && (
              <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm hawa-text-muted-foreground"></div>
            )}

            {/* CAPTION FOR CURRENT SELECTED ROWS */}
            {props.showCount && (
              <div
                className="text-muted-foreground text-sm"
                dir={props.direction}
              >
                <span>{props.texts?.total}</span>{" "}
                <span>
                  {table.getFilteredRowModel().rows.length.toLocaleString()}
                </span>
              </div>
            )}

            {/* NEXT & PREV BUTTONS */}

            <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 ">
              {enableGoTo && (
                <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2">
                  <span className="hawa-text-sm">{props.texts?.goTo}</span>
                  <input
                    max={table.getPageCount()}
                    min={0}
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      let page = Number(e.target.value) - 1;
                      const max = table.getPageCount();
                      if (!isNaN(page) && Number(page) > max) {
                        page = max - 1;
                      }
                      table.setPageIndex(page);
                    }}
                    className="hawa-w-16 hawa-rounded hawa-border hawa-p-1 hawa-px-2 hawa-text-sm placeholder:hawa-text-muted-foreground"
                  />
                </div>
              )}
              <DropdownMenu
                size="sm"
                width="sm"
                direction={props.direction}
                items={
                  itemsPerPageOptions || [
                    { label: `10 / ${pageText}`, value: 10 },
                    { label: `20 / ${pageText}`, value: 20 },
                    { label: `30 / ${pageText}`, value: 30 },
                    { label: `40 / ${pageText}`, value: 40 },
                    { label: `50 / ${pageText}`, value: 50 },
                  ]
                }
                trigger={
                  <Button
                    variant="outline"
                    size="icon"
                    className="hawa-h-fit hawa-w-fit hawa-p-0 hawa-px-2 hawa-py-1 "
                  >
                    {`${table.getState().pagination.pageSize} / ${
                      props.texts?.page
                    }`}
                  </Button>
                }
                onItemSelect={(e: any) => table.setPageSize(Number(e))}
              />
              {table.getPageCount() > 1 && (
                <>
                  <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm  ">
                    <span className="hawa-flex hawa-items-center hawa-gap-1">
                      <div>{props.texts?.page}</div>
                      <div className="hawa-flex hawa-flex-row hawa-gap-1">
                        <span className="hawa-font-bold">
                          {table.getState().pagination.pageIndex + 1}
                        </span>
                        <span>{props.texts?.of}</span>
                        <span className="hawa-font-bold">
                          {table.getPageCount()}
                        </span>
                      </div>
                    </span>
                  </div>

                  <Button
                    aria-label="Next Table Page"
                    variant="outline"
                    size="smallIcon"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    className={cn(
                      props.direction === "rtl" && "hawa-rotate-180",
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17-5-5 5-5" />
                      <path d="m18 17-5-5 5-5" />
                    </svg>
                  </Button>

                  <Button
                    aria-label="Previous Table Page"
                    variant="outline"
                    size="smallIcon"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={cn(
                      props.direction === "rtl" && "hawa-rotate-180",
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      aria-label="Single Chevron Icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>

                  <Button
                    aria-label="Next Table Page"
                    variant="outline"
                    size="smallIcon"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={cn(
                      props.direction === "ltr" && "hawa-rotate-180",
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      aria-label="Single Chevron Icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button
                    aria-label="Next Table Page"
                    variant="outline"
                    size="smallIcon"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    className={cn(
                      props.direction === "ltr" && "hawa-rotate-180",
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17-5-5 5-5" />
                      <path d="m18 17-5-5 5-5" />
                    </svg>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
