import * as React from "react";
import { cn } from "../util";

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
Table.displayName = "Table";

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
TableHeader.displayName = "TableHeader";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  clickable?: boolean;
  condensed?: boolean;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "hawa-bg-muted/60 dark:hawa-bg-muted/40 hawa-text-start hawa-align-middle hawa-font-medium hawa-text-muted-foreground [&:has([role=checkbox])]:hawa-pr-0 [&:not(:last-child)&:not(:first-child)]:hawa-border-x",
        props.dir === "rtl"
          ? "[&:not(:last-child)]:hawa-border-l"
          : "[&:not(:last-child)]:hawa-border-r",
        props.condensed ? "hawa-h-8" : "hawa-h-12",
        props.clickable ? "hawa-px-1" : "hawa-px-4", //First and last columns
        props.clickable
          ? " [&:not(:last-child)&:not(:first-child)]:hawa-p-1"
          : "hawa-px-4", //Columns in between
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("hawa-border-none", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "hawa-bg-primary hawa-font-medium hawa-text-primary-foreground",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "hawa-transition-colors data-[state=selected]:hawa-bg-muted hawa-bg-background",
      "[&:not(:last-child)&:not(:first-child)]:hawa-border-y",
      "[&:not(:last-child)]:hawa-border-b",

      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  condensed?: boolean;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        // "border-x",
        props.condensed ? "hawa-p-0 hawa-px-4" : "hawa-p-4",
        "hawa-align-middle [&:has([role=checkbox])]:hawa-pr-0 ",
        "[&:not(:last-child)&:not(:first-child)]:hawa-border-x",
        // "[&:not(:last-child)]:hawa-border-r",
        props.dir === "rtl"
          ? "[&:not(:last-child)]:hawa-border-l"
          : "[&:not(:last-child)]:hawa-border-r",
        className
      )}
      {...props}
    />
  )
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "hawa-mt-4 hawa-text-sm hawa-text-muted-foreground",
      className
    )}
    {...props}
  />
));
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
