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
import { Checkbox } from "../checkbox";
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
  enableSelection?: boolean;
  hideHeader?: boolean;
  data: DataProps[];
  itemsPerPage?: any[];
  showCount?: boolean;
  showSelectionCount?: boolean;
  paginationPosition?: "top" | "bottom";
  condensed?: boolean;
  isLoading?: boolean;
  defaultSort?: string;
  translateFn?: any;
  bulkActions?: any[];
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
    selectedRows?: string;
    bulkAction?: string;
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
  enableSelection,
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

  let mainColumns: ColumnDef<DataProps>[] = enableSelection
    ? [
        {
          id: "select",
          maxSize: 16,
          minSize: 16,
          size: 16,

          header: ({ table }) => (
            <Checkbox
              dir={props.direction}
              id="select_all"
              aria-label="Select all"
              className={props.direction === "rtl" ? "hawa-ms-4" : "hawa-me-0"}
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              dir={props.direction}
              id="select_row"
              className={props.direction === "rtl" ? "hawa-ms-4" : "hawa-me-4"}
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
        },
        ...columns,
      ]
    : columns;
  const table = useReactTable({
    data,
    columns: mainColumns,
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
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
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
            "hawa-flex hawa-w-full hawa-gap-4",
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
                            key={header.id}
                            dir={props.direction}
                            condensed={props.condensed}
                            clickable={Boolean(isSortable)}
                            style={{
                              maxWidth: `${header.column.columnDef.maxSize}px !important`,
                              minWidth: `${header.column.columnDef.minSize}px !important`,
                              width: `${header.column.columnDef.size}px !important`,
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
                          key={cell.id}
                          dir={props.direction}
                          style={{
                            maxWidth: `${cell.column.columnDef.maxSize}px !important`,
                            minWidth: `${cell.column.columnDef.minSize}px !important`,
                            width: `${cell.column.columnDef.size}px !important`,
                          }}
                          padding={
                            props.condensed
                              ? "condensed"
                              : cell.column.columnDef.meta?.padding
                          }
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
          <div
            className={cn(
              "hawa-flex hawa-justify-between hawa-gap-4 tablet:hawa-gap-0",
              props.showSelectionCount
                ? "hawa-flex-col tablet:hawa-flex-row"
                : "hawa-flex-col mobile:hawa-flex-row",
            )}
          >
            {!props.showCount && (
              <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm hawa-text-muted-foreground"></div>
            )}

            {props.showCount ||
            (table.getFilteredSelectedRowModel().rows.length > 0 &&
              props.showSelectionCount) ? (
              <div className="hawa-flex hawa-flex-row hawa-h-auto hawa-gap-4">
                <div className="hawa-flex hawa-flex-row hawa-h-auto hawa-items-center hawa-justify-between">
                  {/* CAPTION FOR CURRENT SELECTED ROWS */}
                  {props.showCount && (
                    <div
                      className="hawa-text-muted-foreground hawa-text-sm"
                      dir={props.direction}
                    >
                      <span>{props.texts?.total}</span>{" "}
                      <span>
                        {table
                          .getFilteredRowModel()
                          .rows.length.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {props.showCount &&
                    table.getFilteredSelectedRowModel().rows.length > 0 &&
                    props.showSelectionCount && (
                      <div className="hawa-w-[0.5px] hawa-mx-2 hawa-bg-red-500 hawa-h-full" />
                    )}
                  {table.getFilteredSelectedRowModel().rows.length > 0 &&
                    props.showSelectionCount && (
                      <div
                        className="hawa-text-muted-foreground hawa-text-sm"
                        dir={props.direction}
                      >
                        {table.getFilteredSelectedRowModel().rows.length}{" "}
                        {props.texts?.of}{" "}
                        {table.getFilteredRowModel().rows.length}{" "}
                        {props.texts?.selectedRows}
                      </div>
                    )}
                </div>
                {table.getFilteredSelectedRowModel().rows.length > 0 && (
                  <div className="">
                    <DropdownMenu
                      size="sm"
                      width="sm"
                      direction={props.direction}
                      items={(props.bulkActions || []).map((action) => ({
                        ...action,
                        action: () =>
                          action.action(
                            table.getFilteredSelectedRowModel().rows,
                          ),
                      }))}
                      trigger={
                        <Button size="xs">
                          {props.texts?.bulkAction || "Bulk Action"}
                        </Button>
                      }
                    />
                  </div>
                )}
              </div>
            ) : null}
            {/* NEXT & PREV BUTTONS */}

            <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-gap-2 hawa-bg--500 tablet:hawa-w-fit hawa-justify-between">
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
                    className="hawa-h-fit hawa-w-fit hawa-p-0 hawa-px-2 hawa-py-1 hawa-whitespace-nowrap"
                  >
                    {`${table.getState().pagination.pageSize} / ${
                      props.texts?.page
                    }`}
                  </Button>
                }
                onItemSelect={(e: any) => table.setPageSize(Number(e))}
              />
              {table.getPageCount() > 1 && (
                <div className="hawa-bg--500 hawa-flex hawa-flex-row hawa-gap-2">
                  <div className="hawa-flex hawa-bg--500 hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm">
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

                  <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-items-center hawa-bg--500">
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
                      onClick={() =>
                        table.setPageIndex(table.getPageCount() - 1)
                      }
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
