// import * as React from "react";
// import { DateRange, DayPicker } from "react-day-picker";

// import { cn } from "@util/index";

// import { buttonVariants } from "../button";

// export type CalendarProps = React.ComponentProps<typeof DayPicker>;
// export type CalendarValueType = {
//   single: Date;
//   multiple: Date[];
//   range: DateRange;
// };

// function Calendar({
//   className,
//   classNames,
//   showOutsideDays = true,
//   ...props
// }: CalendarProps) {
//   return (
//     <DayPicker
//       showOutsideDays={showOutsideDays}
//       className={cn("hawa-p-3", className)}
//       classNames={{
//         months:
//           "hawa-flex hawa-flex-col sm:hawa-flex-row hawa-space-y-4 sm:hawa-space-x-4 sm:hawa-space-y-0",
//         month: "hawa-space-y-4",
//         caption:
//           "hawa-flex hawa-justify-center hawa-pt-1 hawa-relative hawa-items-center",
//         caption_label: "hawa-text-sm hawa-font-medium",
//         nav: "hawa-space-x-1 hawa-flex hawa-items-center",
//         nav_button: cn(
//           buttonVariants({ variant: "outline" }),
//           "hawa-h-7 hawa-w-7 hawa-bg-transparent hawa-p-0 hawa-opacity-50 hover:hawa-opacity-100",
//         ),
//         nav_button_previous:
//           "hawa-absolute hawa-start-1 !hawa-h-8 !hawa-w-8 !hawa-p-0 hawa-justify-center",
//         nav_button_next:
//           "hawa-absolute hawa-end-1 !hawa-h-8 !hawa-w-8 !hawa-p-0 hawa-justify-center",
//         table: "hawa-w-full hawa-border-collapse hawa-space-y-1 ",
//         head_row: "hawa-flex",
//         head_cell:
//           "hawa-text-muted-foreground hawa-rounded-md hawa-w-9 hawa-font-normal hawa-text-[0.8rem]",
//         row: "hawa-flex hawa-w-full hawa-mt-2",
//         cell: "hawa-h-9 hawa-w-9 hawa-text-center hawa-text-sm hawa-p-0 hawa-relative [&:has([aria-selected].day-range-end)]:hawa-rounded-r-md [&:has([aria-selected].day-outside)]:hawa-bg-accent/50 [&:has([aria-selected])]:hawa-bg-accent first:[&:has([aria-selected])]:hawa-rounded-l-md last:[&:has([aria-selected])]:hawa-rounded-r-md focus-within:hawa-relative focus-within:hawa-z-20",
//         day: cn(
//           buttonVariants({ variant: "ghost" }),
//           "hawa-h-9 hawa-w-9 hawa-justify-center !hawa-p-0 hawa-font-normal aria-selected:hawa-opacity-100",
//         ),
//         day_range_end: "day-range-end",
//         day_selected:
//           "hawa-bg-primary hawa-text-primary-foreground hover:hawa-bg-primary hover:hawa-text-primary-foreground focus:hawa-bg-primary focus:hawa-text-primary-foreground",
//         day_today: "hawa-bg-accent hawa-text-accent-foreground",
//         day_outside:
//           "day-outside hawa-text-muted-foreground hawa-opacity-50 aria-selected:hawa-bg-accent/50 aria-selected:hawa-text-muted-foreground aria-selected:hawa-opacity-30",
//         day_disabled: "hawa-text-muted-foreground hawa-opacity-50",
//         day_range_middle:
//           "aria-selected:hawa-bg-accent aria-selected:hawa-text-accent-foreground",
//         day_hidden: "hawa-invisible",
//         ...classNames,
//       }}
//       components={{
//         IconLeft: ({ ...props }) => (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             aria-label="Next Month"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//         ),
//         IconRight: ({ ...props }) => (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             aria-label="Next Month"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="hawa-rotate-180"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//         ),
//       }}
//       {...props}
//     />
//   );
// }
// Calendar.displayName = "Calendar";

// export { Calendar };
