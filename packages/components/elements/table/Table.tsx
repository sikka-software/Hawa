import * as React from "react";

import { cn } from "@util/index";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  clickable?: boolean;
  condensed?: boolean;
}
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  condensed?: boolean;
  enablePadding?: boolean;
  padding?: "condensed" | "default" | "noPadding";
}

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="hawa-relative hawa-w-full hawa-overflow-auto hawa-rounded hawa-border">
    <table
      ref={ref}
      className={cn("hawa-w-full hawa-caption-bottom hawa-text-sm", className)}
      {...props}
    />
  </div>
));

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("[&_tr]:hawa-border-b", "hawa-bg-muted/50", className)}
    {...props}
  />
));

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, condensed, clickable, dir, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "hawa-bg-muted/60 hawa-text-nowrap hawa-text-start hawa-align-middle hawa-font-medium hawa-text-muted-foreground dark:hawa-bg-muted/40 [&:has([role=checkbox])]:hawa-pr-0 [&:not(:last-child)&:not(:first-child)]:hawa-border-x",
        dir === "rtl"
          ? "[&:not(:last-child)]:hawa-border-l"
          : "[&:not(:last-child)]:hawa-border-r",
        condensed ? "hawa-h-8" : "hawa-h-12",
        clickable ? "hawa-px-1" : "hawa-px-4", //First and last columns
        clickable
          ? "[&:not(:last-child)&:not(:first-child)]:hawa-p-1"
          : "hawa-px-4", //Columns in between
        className,
      )}
      {...props}
    />
  ),
);

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("hawa-border-none", className)} {...props} />
));

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "hawa-bg-primary hawa-font-medium hawa-text-primary-foreground",
      className,
    )}
    {...props}
  />
));

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "hawa-bg-background hawa-transition-colors data-[state=selected]:hawa-bg-muted",
      "[&:not(:last-child)&:not(:first-child)]:hawa-border-y",
      "[&:not(:last-child)]:hawa-border-b",

      className,
    )}
    {...props}
  />
));

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, enablePadding = true, padding = "default", ...props }, ref) => {
    let paddingStyles = {
      condensed: "hawa-p-0 hawa-px-4",
      default: "hawa-p-4",
      noPadding: "hawa-p-0",
    };

    return (
      <td
        ref={ref}
        className={cn(
          paddingStyles[padding],
          // "border-x",
          // enablePadding ? "hawa-p-4" : "hawa-p-0",
          // props.disablePadding ? "hawa-p-0" : "hawa-p-4",
          // props.condensed ? "hawa-p-0 hawa-px-4" : "hawa-p-4",
          "hawa-align-middle [&:has([role=checkbox])]:hawa-pr-0",
          "[&:not(:last-child)&:not(:first-child)]:hawa-border-x",
          // "[&:not(:last-child)]:hawa-border-r",
          props.dir === "rtl"
            ? "[&:not(:last-child)]:hawa-border-l"
            : "[&:not(:last-child)]:hawa-border-r",
          className,
        )}
        {...props}
      />
    );
  },
);

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "hawa-mt-4 hawa-text-sm hawa-text-muted-foreground",
      className,
    )}
    {...props}
  />
));

Table.displayName = "Table";
TableRow.displayName = "TableRow";
TableBody.displayName = "TableBody";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";
TableFooter.displayName = "TableFooter";
TableHeader.displayName = "TableHeader";
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableCaption,
};
