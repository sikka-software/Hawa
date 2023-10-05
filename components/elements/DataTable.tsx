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
import { DropdownMenu } from "./DropdownMenu";
import { Skeleton } from "./Skeleton";
import { Button } from "./Button";
import { cn } from "../util";

type DataProps = {};

type DataTableProps = {
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

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  ...props
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: props.defaultSort || "",
      desc: false,
    },
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
  return (
    <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-4">
      <div className="hawa-flex hawa-items-center">
        <Input
          placeholder={props.texts?.searchPlaceholder}
          value={globalFilter ?? ""}
          // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""} //For filtering sngle column
          onChange={
            (event: any) => setGlobalFilter(event.target.value)
            // table.getColumn('email')?.setFilterValue(event.target.value) //For filtering sngle column
          }
          margin="none"
          className="hawa-w-full md:hawa-max-w-sm"
        />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
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
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      {props.isLoading ? (
        <Skeleton className="hawa-h-[130px] hawa-w-full" />
      ) : (
        <>
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
                        <TableCell condensed={props.condensed} key={cell.id}>
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
            <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm hawa-text-muted-foreground">
              {/* {data.length + " " + (props.texts?.total ?? "Total")} */}
            </div>

            {/* CAPTION FOR CURRENT SELECTED ROWS */}
            {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}

            {/* NEXT & PREV BUTTONS */}

            {table.getPageCount() !== 0 && (
              <div className="hawa-flex hawa-w-fit hawa-flex-row hawa-items-center hawa-gap-2 ">
                <DropdownMenu
                  size="sm"
                  width="parent"
                  direction={props.direction}
                  items={[
                    { label: `10 / ${props.texts?.page}`, value: 10 },
                    { label: `20 / ${props.texts?.page}`, value: 20 },
                    { label: `30 / ${props.texts?.page}`, value: 30 },
                    { label: `40 / ${props.texts?.page}`, value: 40 },
                    { label: `50 / ${props.texts?.page}`, value: 50 },
                  ]}
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
                  variant="outline"
                  size="smallIcon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className={cn(props.direction === "rtl" && "hawa-rotate-180")}
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
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
