// import * as React from "react";
// import { DateRange, DayPicker, type DayPickerProps } from "react-day-picker";

// import { cn } from "@util/index";

// import { Button, buttonVariants } from "../button";

// export type CalendarProps = DayPickerProps;
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
//       className={cn("hawa-p-0", className)}
//       classNames={{
//         root: "hawa-w-fit hawa-relative hawa-p-3 ",
//         months: "hawa-flex hawa-flex-col sm:hawa-flex-row sm:hawa-space-y-0",
//         month: "hawa-space-y-4",
//         month_caption:
//           "hawa-flex hawa-justify-center hawa-py-1 hawa-relative hawa-items-center",
//         caption_label: "hawa-text-sm hawa-font-medium",
//         nav: "hawa-z-50 hawa-flex hawa-items-start",

//         button_previous: buttonVariants({
//           variant: "outline",
//           className:
//             "hawa-absolute hawa-start-3 hawa-flex hawa-items-center !hawa-size-7 !hawa-p-0 hawa-justify-center",
//         }),

//         button_next: buttonVariants({
//           variant: "outline",
//           className:
//             "hawa-absolute hawa-end-3 !hawa-size-7 !hawa-p-0 hawa-justify-center hawa-flex hawa-items-center",
//         }),

//         month_grid: "hawa-w-full hawa-border-collapse hawa-space-y-1 ",
//         weekdays: "hawa-flex",
//         weekday:
//           "hawa-text-muted-foreground hawa-rounded-md hawa-w-9 hawa-font-normal hawa-text-[0.8rem]",
//         week: "hawa-flex hawa-w-full hawa-mt-2",

//         range_end: "day-range-end",

//         today: "hawa-bg-accent hawa-text-accent-foreground hawa-rounded",
//         outside:
//           "day-outside hawa-text-muted-foreground hawa-opacity-50 aria-selected:hawa-bg-accent/50 aria-selected:hawa-text-muted-foreground aria-selected:hawa-opacity-30",
//         disabled: "hawa-text-muted-foreground hawa-opacity-50",
//         range_middle:
//           "aria-selected:hawa-bg-accent aria-selected:hawa-text-accent-foreground",
//         hidden: "hawa-invisible",
//         ...classNames,
//       }}
//       components={{
//         DayButton: (props) => (
//           <Button
//             {...props}
//             variant={props.modifiers.selected ? "default" : "ghost"}
//             className="hawa-h-9 hawa-w-9 hawa-text-center hawa-text-sm hawa-p-0 hawa-relative [&:has([aria-selected].range-end)]:hawa-rounded-r-md [&:has([aria-selected].outside)]:hawa-bg-accent/50 [&:has([aria-selected])]:hawa-bg-accent first:[&:has([aria-selected])]:hawa-rounded-l-md last:[&:has([aria-selected])]:hawa-rounded-r-md focus-within:hawa-relative focus-within:hawa-z-20"
//           >
//             {props.children}
//           </Button>
//         ),

//         Chevron: (props) => (
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
//             className={
//               props.orientation === "right"
//                 ? "hawa-rotate-180 hawa-opacity-80"
//                 : "hawa-opacity-80"
//             }
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
