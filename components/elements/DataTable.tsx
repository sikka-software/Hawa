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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { Input } from "./Input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Skeleton } from "./Skeleton";
import { Button } from "./Button";
import { cn } from "../util";
import { DirectionType } from "../types/commonTypes";

type DataTableProps<DataProps = {}> = {
  direction?: DirectionType;
  columns: ColumnDef<DataProps>[];
  enableSearch?: boolean;
  enableHideColumns?: boolean;
  enableGoTo?: boolean;
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
    sortable: any;
  }
}

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
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: props.defaultSort || "", desc: false },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
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

  return (
    <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-4">
      {(enableSearch || enableHideColumns) && (
        <div className="hawa-flex hawa-items-center hawa-flex-row hawa-gap-4">
          {enableSearch && (
            <Input
              forceHideHelperText
              placeholder={props.texts?.searchPlaceholder}
              value={globalFilter ?? ""}
              onChange={(event: any) => setGlobalFilter(event.target.value)}
              margin="none"
              className="hawa-w-full md:hawa-max-w-sm"
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
                    aria-label="Chevron down Icon"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="hawa-h-3 hawa-w-3 hawa-rotate-90 hawa-shrink-0 hawa-transition-transform hawa-duration-200 "
                  >
                    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        // className="hawa-capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {translateFn ? translateFn(column.id) : column.id}
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
              : "hawa-flex-col"
          )}
        >
          <div className="hawa-rounded-md">
            <Table>
              {table.getAllColumns().length > 0 && (
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        let isSortable = header.column.columnDef.meta?.sortable;
                        return (
                          <TableHead
                            dir={props.direction}
                            condensed={props.condensed}
                            clickable={isSortable}
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
          <div className="hawa-flex hawa-items-center hawa-justify-between">
            {!props.showCount && (
              <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm hawa-text-muted-foreground"></div>
            )}

            {/* CAPTION FOR CURRENT SELECTED ROWS */}
            {props.showCount && (
              <div
                className="text-sm text-muted-foreground"
                dir={props.direction}
              >
                <span>{props.texts?.total}</span>{" "}
                <span>
                  {table.getFilteredRowModel().rows.length.toLocaleString()}
                </span>
              </div>
            )}

            {/* NEXT & PREV BUTTONS */}
            {table.getPageCount() !== 0 && (
              <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 ">
                {enableGoTo && (
                  <div className="hawa-flex hawa-flex-row hawa-justify-center hawa-items-center hawa-gap-2">
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
                      className="hawa-w-16 hawa-text-sm hawa-border hawa-rounded hawa-p-1 hawa-px-2"
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
                  aria-label="Previous Table Page"
                  variant="outline"
                  size="smallIcon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className={cn(props.direction === "ltr" && "hawa-rotate-180")}
                >
                  <svg
                    aria-label="Chevron Right Icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </Button>

                <Button
                  aria-label="Next Table Page"
                  variant="outline"
                  size="smallIcon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className={cn(props.direction === "rtl" && "hawa-rotate-180")}
                >
                  <svg
                    aria-label="Chevron Right Icon"
                    fill="currentColor"
                    stroke="currentColor"
                    width="1em"
                    height="1em"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
